import type {PageServerLoadEvent} from './$types';

import {handleLogout} from '$lib/server/auth/logout';
import { redirect } from '@sveltejs/kit';

export async function load({parent, cookies}:PageServerLoadEvent) {
    handleLogout({cookies});
    const site = await parent();
    const data = {
        ...site,        
    }
    throw redirect(302, '/');    
}
