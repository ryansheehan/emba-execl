import type { Cookies } from '@sveltejs/kit';

export interface LogoutParams {
    cookies: Cookies
}

export function handleLogout({cookies}: LogoutParams) {
   if(cookies.get('token')) {
        cookies.delete('token', {path: '/'});
    }
}
