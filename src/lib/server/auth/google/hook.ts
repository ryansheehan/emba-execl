import type {  Handle } from '@sveltejs/kit';
import {handleLogout} from '$lib/server/auth/logout';
import {getClient, clientId} from './client';

export const auth: Handle = async ({event, resolve}) => {
    const {cookies, locals} = event;
    const idToken = cookies.get('token');
    if (idToken) {
        try {
            const google = getClient();
            const ticket = await google.verifyIdToken({idToken, audience: [clientId]});
            const {sub: userId} = ticket.getPayload() ?? {};
            if (userId) {
                locals.userId = userId;
            }
        } catch (error) {
            console.error('uh oh', error);       
        }
    }

    return await resolve(event);
}
