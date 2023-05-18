import { OAuth2Client } from 'google-auth-library';
import {GOOG_CLIENT_SECRET} from '$env/static/private';

export const redirectUri = `${import.meta.env.APP_BASE_URI}/auth/login/callback`;
export const clientId = import.meta.env.GOOG_CLIENT_ID;

export const getClient = (function() {
    let client: OAuth2Client;
    return () => {
        if (!client) {
            client = new OAuth2Client({
                clientId, 
                clientSecret: GOOG_CLIENT_SECRET,  
                redirectUri
            });
        }

        return client;
    }
})();

export async function parseToken(idToken: string) {
    const google = getClient();
    const ticket = await google.verifyIdToken({idToken, audience: [clientId]});
    const {sub, email = '', name = '', picture = '', given_name = '', family_name = ''} = ticket.getPayload() ?? {};
    return { sub: sub!, email, name, picture, givenName: given_name, familyName: family_name};
}
