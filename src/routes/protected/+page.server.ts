import type {PageServerLoadEvent} from './$types'
import {redirect} from '@sveltejs/kit';

export async function load({locals}: PageServerLoadEvent) {
    const {id} = locals.user ?? {};
    if (!id) {
        throw redirect(302, `/auth/login?redirect=/protected`);
    }
}