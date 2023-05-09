import type  { Actions } from '@sveltejs/kit';
import {googleLogin} from '$lib/server/auth/google/login';

export const actions: Actions = {
    default: googleLogin
};
