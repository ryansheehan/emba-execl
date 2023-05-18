import type {  Handle } from '@sveltejs/kit';
import {handleLogout} from '$lib/server/auth/logout';
import {parseToken} from './client';
import { getProfile } from '$lib/server/prisma/get-profile';

export const auth: Handle = async ({event, resolve}) => {
    const {cookies, locals} = event;
    const idToken = cookies.get('token');
    if (idToken) {
        try {
            const {sub} = await parseToken(idToken);
            if (sub) {
                const user = await getProfile({sub});
                if (!user) {
                    throw new Error('User profile not found.')
                } else {
                    locals.user = user;
                }
                
            }
        } catch (error) {                                    
            handleLogout(event);
        }
    }

    return await resolve(event);
}
