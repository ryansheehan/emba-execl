import type {PageServerLoad} from './$types';
import type {Actions} from '@sveltejs/kit';
import {requireAuth} from '$lib/server/auth/server-load';
import {prisma} from '$lib/server/prisma';
import {addTodo} from '$lib/server/actions/add-todo';

export const load: PageServerLoad = requireAuth(async ({locals}) => {
    const {userId} = locals.user;
    
    // get latest log if it exists
    const journal = await prisma.execLog.findFirst({
        where: {
            userId,
            closed: null,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return {
        journal
    }
});

export const actions: Actions = {
    addTodo,
};
