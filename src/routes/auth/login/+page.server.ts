import { type Actions, redirect } from '@sveltejs/kit';
import {googleLogin} from '$lib/server/auth/google/login';
import type { PageServerLoadEvent } from './$types';

export async function load({locals}: PageServerLoadEvent) {    
    if (locals?.user?.id) {        
        throw redirect (303, '/');
    }

    return { };
}

export const actions: Actions = {
    default: googleLogin
};
