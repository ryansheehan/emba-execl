import {login} from '$lib/auth';
    
export const prerender=false;
export const ssr=false;
export const csr=false;

login();
