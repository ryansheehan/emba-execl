import {prisma} from '$lib/server/prisma/client';
import { error } from '@sveltejs/kit';
import {auth} from '$lib/server/auth';

function asString(entry: FormDataEntryValue | null) {
    return typeof entry === 'string' ? entry : '';
}

export const addPeriod = auth(async ({locals, request}) => {
    const {userId} = locals.user;

    // validate form data
    const formData = await request.formData();
    const showUp = asString(formData.get('showUp'));
    const speakUp = asString(formData.get('speakUp'));
    const syncUp = asString(formData.get('syncUp'));

    if (showUp.length === 0 || speakUp.length === 0 || syncUp.length === 0) {
        throw error(400, `missing data: ${showUp.length === 0 ? 'showup' : ''} ${speakUp.length === 0 ? 'speakUp' : ''} ${syncUp.length === 0 ? 'syncUp' : ''}`);
    }

    // check to see if the last period is closed
    const {period = 1, endDate} = await prisma.execLog.findFirst({
        where: { userId },
        select: { period: true, endDate: true },
        orderBy: { period: 'desc' }
    }) ?? {};

    // if an end date does not exist, then there is already an open
    if (!endDate) {
        throw error(409, 'the current log must be closed');
    }    

    // add data validated let's start a new period!
    const newExecLog = await prisma.execLog.create({
        data: {
            userId, period, showUp, syncUp, speakUp,
            startDate: new Date(),            
        }
    })

    return newExecLog;
})
