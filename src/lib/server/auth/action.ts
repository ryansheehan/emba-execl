import { error, type Action } from '@sveltejs/kit';

export function requireAuth(action: Action) {
    return (async (event) => {
        const userId = event.locals?.user?.userId;
        if(!userId) {
            throw error(401);
        }
        return action(event);
    }) as Action
}
