import type {PageServerLoadEvent} from './$types';

import {handleLogout} from '$lib/server/auth/logout';

export async function load({parent, cookies}:PageServerLoadEvent) {
    handleLogout({cookies});
    const site = await parent();
    const data = {
        ...site,        
    }
    return data;
}
