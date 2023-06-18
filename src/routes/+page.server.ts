import type { PageServerLoadEvent } from './$types';
// import type { Actions } from '@sveltejs/kit';
import { requireAuth } from '$lib/server/auth/server-load';


export const load = requireAuth(async ({locals}: PageServerLoadEvent) => {
    const {user: userProfile} = locals;

    const {email, givenName, picture} = userProfile;
   
    return {        
        user: {email, name: givenName, picture},   
    };
 });

//  export const actions: Actions = {
//     ...todoActions,
//  }