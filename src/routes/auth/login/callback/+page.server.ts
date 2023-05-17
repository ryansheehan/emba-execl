import type {PageServerLoadEvent} from './$types';
import {redirect} from '@sveltejs/kit';
import {handleCallback} from '$lib/server/auth/google/callback';


export const load = async (event: PageServerLoadEvent) => {
    try {
        await handleCallback(event);
    } catch (error) {
        console.error(error);
    }

    const {url} = event;
    const redirectTo64 = url.searchParams.get('state');    
    if (redirectTo64) {
        const redirectTo = Buffer.from(redirectTo64, 'base64').toString('utf8');        
        if (redirectTo) {
            throw redirect(303, redirectTo);
        }
    }
    
    throw redirect(303, '/');
}