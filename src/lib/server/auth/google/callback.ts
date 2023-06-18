import type { Cookies } from '@sveltejs/kit';
import { getClient, parseToken } from '$lib/server/auth/google/client';
import {dev} from '$app/environment';
import {tryCreateUser} from '$lib/server/prisma/create-user';
import { getProfile } from '$lib/server/prisma/get-profile';


export interface CallbackParams {
    url: URL,
    cookies: Cookies
}

export async function handleCallback({url, cookies}: CallbackParams) {
    
    const authCode = url.searchParams.get('code');
    if(authCode) {
        const google = getClient();
        const {tokens} = await google.getToken(authCode);
        const {id_token, expiry_date} = tokens;

        cookies.set('token', id_token!, {httpOnly: true, sameSite: 'lax', secure: !dev, path: '/', expires: new Date(expiry_date!)});

        const userInfo = await parseToken(id_token!);
        await tryCreateUser({
            ...userInfo,
            provider: 'google'
        });

        const profile = await getProfile(userInfo);
        return profile;
    } else {
        const responseError = url.searchParams.get('error');
        throw responseError; // todo: go somewhere on error
    }
}
