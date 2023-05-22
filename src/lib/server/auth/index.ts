import { error, type Action } from "@sveltejs/kit";

export function auth(action: Action) {
    const authenticatedAction: Action = async (event)=> {        
        const userId = event.locals?.user?.userId;
        if(!userId) {
            throw error(401);
        }
        return action(event);
    }
    return authenticatedAction;
}