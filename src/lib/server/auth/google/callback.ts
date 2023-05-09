import type { Cookies } from '@sveltejs/kit';
import { getClient } from '$lib/server/auth/google/client';
import {dev} from '$app/environment';

export interface CallbackParams {
    url: URL,
    cookies: Cookies
}

export async function handleCallback({url, cookies}: CallbackParams) {
    const authCode = url.searchParams.get('code');
    if(authCode) {
        const google = getClient();
        const {tokens} = await google.getToken(authCode);
        
        const {id_token, access_token} = tokens;
        console.log(access_token);

        cookies.set('token', id_token!, {httpOnly: true, sameSite: 'lax', secure: !dev, path: '/'});
    } else {
        const responseError = url.searchParams.get('error');
        throw responseError; // todo: go somewhere on error
    }
}