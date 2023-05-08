import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$lib/auth/server';

export const handle = sequence(
    auth,
)
