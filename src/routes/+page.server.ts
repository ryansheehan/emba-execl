import type { PageServerLoadEvent } from './$types';
import {redirect, type Actions } from '@sveltejs/kit';
import {todoActions} from '$lib/server/todos';

interface ResponseData {
    user?: {
        email: string;
		name: string;
		picture?: string | null;				
    }
}

export const load = async ({locals}: PageServerLoadEvent): Promise<ResponseData> => {
    const {user: userProfile} = locals;

    if (userProfile) {
        const {email, givenName, picture} = userProfile;
    
        return {        
            user: {email, name: givenName, picture}
        };
    } else {
        // return {
        //     user: undefined
        // }

        throw redirect(303, 'auth/login');
    }
 };

 export const actions: Actions = {
    ...todoActions,
 }