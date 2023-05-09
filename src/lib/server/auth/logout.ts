import type { Cookies } from '@sveltejs/kit';

export interface LogoutParams {
    cookies: Cookies
}

export function handleLogout({cookies}: LogoutParams) {
    cookies.delete('token', {path: '/'});
}
