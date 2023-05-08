import type { Handle } from '@sveltejs/kit';
import { verify } from 'jsonwebtoken';
import {AUTH0_CLIENT_SECRET} from '$env/static/private';

export const auth: Handle = async ({event, resolve}) => {
    console.log('auth hook');
    const access_token = event.cookies.get('access_token');
    console.log('access_token', access_token);

    if (access_token) {
        const jwt = verify(access_token, AUTH0_CLIENT_SECRET);
        console.log(jwt);
        event.locals.jwt = jwt;
    }

    return await resolve(event);
}