import { type Action, redirect } from '@sveltejs/kit';
import {getClient, clientId, redirectUri} from './client';

export const googleLogin: Action = async ({request, cookies, url}) => {
    const data = await request.formData();
    // const clientId = data.get('client_id')! as string;
    const credential = data.get('credential')! as string;
    const gCsrfToken = data.get('g_csrf_token')! as string;

    // validate csrf
    if(gCsrfToken !== cookies.get('g_csrf_token')) {
        console.error('csrf tokens do not match');
        throw redirect(303, '/'); // fix me, this is not a 300 error, this should be a different error
    }

    // validate ID token        
    const google = getClient();
    const ticket = await google.verifyIdToken({
        idToken: credential,
        audience: [clientId],
    });

    const {sub} = ticket.getPayload() ?? {}; 
    if(sub) {                  
        const redirectQuery = url.searchParams.get('redirect');
        const state = redirectQuery ? Buffer.from(redirectQuery, 'utf8').toString('base64') : undefined;
        const scopes = ['openid', 'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'];
        const authorizationUrl = google.generateAuthUrl({
            access_type: 'offline',
            scope: scopes,
            include_granted_scopes: true,     
            state,
        });                  
        throw redirect(303, authorizationUrl);
    }
    
    throw redirect(303, '/');
}