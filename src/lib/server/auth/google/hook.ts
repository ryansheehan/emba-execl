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
            const {sub: id, email = '', name = '', picture = '', given_name = '', family_name = ''} = ticket.getPayload() ?? {};
            if (id) {
                const user = {id, email, name, picture, given_name, family_name};
                locals.user = user;
            }
        } catch (error) {                                    
            handleLogout(event);
        }
    }

    return await resolve(event);
}
