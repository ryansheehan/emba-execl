import type {PageServerLoad, Actions, Action} from './$types';
import {requireAuth as requireLoadAuth} from '$lib/server/auth/server-load';
import {requireAuth as requireActionAuth} from '$lib/server/auth/action';
import {prisma} from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = requireLoadAuth(async ({locals}) => {
    const {userId} = locals.user;

    // get the last journal entry
    const lastJournal = await prisma.execLog.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' }
    });

    // check to see if there is an open journal entry already
    // if so, redirect back to the journal page
    if(!lastJournal?.closed) {
        throw redirect(303, '/journal');
    }

    const {showUp, speakUp, syncUp} = lastJournal ?? {};

    return {
        lastJournal: { showUp, speakUp, syncUp}
    };
});

const createEntry: Action = requireActionAuth(async ({locals, request}) => {
    const {userId} = locals.user;
    const data = await request.formData();

    const showUp = data.get('showUp') as string | null;    
    const speakUp = data.get('speakUp') as string | null;
    const syncUp = data.get('syncUp') as string | null;

    if ((!showUp || showUp.length === 0) ||
        (!speakUp || speakUp.length === 0) ||
        (!syncUp || syncUp.length === 0)) {
            throw error(400, 'Show Up, Speak Up, and Sync Up values must be defined');
    }

    const journal = await prisma.execLog.create({
        data: { showUp, speakUp, syncUp, userId }
    });

    return journal;
});

export const actions: Actions = {
    createEntry,
}

