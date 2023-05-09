import type { Cookies } from '@sveltejs/kit';

export interface LogoutParams {
    cookies: Cookies
}

export function handleLogout({cookies}: LogoutParams) {
    console.log('handle logout');

    if(cookies.get('token')) {
        console.log('token found');
        console.log('deleting token');
        cookies.delete('token', {path: '/'});
    } else {
        console.log('token not found');
    }
}
