import type {PageServerLoadEvent} from './$types';
import {handleCallback} from '$lib/server/auth/google/callback';
import {getActiveTodos} from '$lib/server/prisma/get-todos';
import type {Profile, Todos} from '$lib/models';

export const ssr=false;

export const load = async (event: PageServerLoadEvent) => {
    let profile: Profile | null = null;
    let todos: Todos = [];
    try {
        profile = await handleCallback(event);
        if (profile) {
            todos = await getActiveTodos(profile.userId) ?? [];
        }
    } catch (error) {
        console.error(error);
    }    

    const {url} = event;
    const redirectTo64 = url.searchParams.get('state');    
    let redirectTo = '/journal';
    if (redirectTo64) {
        redirectTo = Buffer.from(redirectTo64, 'base64').toString('utf8');        
    }

    return {redirectTo, profile, todos};
}