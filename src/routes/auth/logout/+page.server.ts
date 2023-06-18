import type {PageServerLoadEvent} from './$types';

import {handleLogout} from '$lib/server/auth/logout';

export const ssr=false;

export async function load({cookies}:PageServerLoadEvent) {
    handleLogout({cookies});
    return {}   
}
