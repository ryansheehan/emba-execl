import { browser } from '$app/environment';
import {writable, readonly, get} from 'svelte/store';
import {createAuth0Client, type Auth0Client, type User} from '@auth0/auth0-spa-js';
import { goto } from '$app/navigation';
export { type User } from '@auth0/auth0-spa-js';

const user_internal = writable<User | undefined>(undefined);
export const user = readonly(user_internal);
const isAuthenticated_internal = writable(false);
export const isAuthenticated = readonly(isAuthenticated_internal);

const emptyFn = () => Promise.resolve();

let login = emptyFn; 
let logout = emptyFn;
let handleCallback = emptyFn;

if(browser) {
    (async function(){
        const auth0:Auth0Client = await createAuth0Client({
            domain: import.meta.env.AUTH0_DOMAIN,
            clientId: import.meta.env.AUTH0_CLIENT_ID,
            authorizationParams: {
                redirect_uri: import.meta.env.AUTH0_REDIRECT_URI,        
            },
        }); 
    
        login = () => {
            console.log('login called');
            return auth0.loginWithRedirect();
        };
    
        logout = async () => {
            console.log('logout called');emptyFn
            await auth0.logout({
                logoutParams: {
                    returnTo: import.meta.env.AUTH0_LOGOUT_URI,
                }
            });
            user_internal.set(await auth0.getUser());
            isAuthenticated_internal.set(await auth0.isAuthenticated());
        }
    
        handleCallback = async () => {
            console.log('handleCallback called');
            const res = await auth0.handleRedirectCallback();  
            console.log(res);
            user_internal.set(await auth0.getUser());
            isAuthenticated_internal.set(await auth0.isAuthenticated());   
            goto('/');
            console.log('finished callback', get(user));
        }
    })(); 
}

export {
    login,
    logout,
    handleCallback,    
};