import { error } from '@sveltejs/kit';
import type {PageServerLoad, PageData} from './$types';

export const load: PageServerLoad = async ({locals}) => {
    const jwt = locals.jwt || '<no jwt>';
    const data: PageData = {
        jwt
    }

    return data;

    throw error(500, 'unhandled exception');
};