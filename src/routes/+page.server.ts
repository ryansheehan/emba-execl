import type { PageServerLoadEvent } from './$types';
// import type { Actions } from '@sveltejs/kit';
import { requireAuth } from '$lib/server/auth/server-load';


    if(user) {
        throw redirect(303, '/journal');
    }

    return {
        profile: user,
    }
}