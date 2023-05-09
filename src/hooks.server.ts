import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$lib/server/auth/google/hook';

export const handle = sequence(
    auth,
)
