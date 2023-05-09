import type {PageServerLoad} from './$types';
import {redirect} from '@sveltejs/kit';
import {handleCallback} from '$lib/server/auth/google/callback';


export const load: PageServerLoad = async (params) => {
    try {
        await handleCallback(params);
    } catch (error) {
        console.error(error);
    }

    throw redirect(303, '/');
}