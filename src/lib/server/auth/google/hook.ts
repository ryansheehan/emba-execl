import type {  Handle } from '@sveltejs/kit';
import {getClient, clientId} from './client';

export const auth: Handle = async ({event, resolve}) => {
    const {cookies, locals} = event;
    const idToken = cookies.get('token');
    if (idToken) {
        const google = getClient();
        const ticket = await google.verifyIdToken({idToken, audience: [clientId]});
        const {sub: userId} = ticket.getPayload() ?? {};
        if (userId) {
            locals.userId = userId;
        }
    }

    return await resolve(event);
}
