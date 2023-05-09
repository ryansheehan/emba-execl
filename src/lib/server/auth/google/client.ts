import { OAuth2Client } from 'google-auth-library';
import {GOOG_CLIENT_SECRET} from '$env/static/private';

export const clientId = import.meta.env.GOOG_CLIENT_ID;
export function getClient() {    
    const google = new OAuth2Client({
        clientId, 
        clientSecret: GOOG_CLIENT_SECRET,  
        redirectUri: `${import.meta.env.APP_BASE_URI}/auth/login/callback`              
    });
    return google;
}
