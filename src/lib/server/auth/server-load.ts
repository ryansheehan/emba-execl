import { type ServerLoad, type ServerLoadEvent, redirect } from '@sveltejs/kit';

export function requireAuth<
Params extends Partial<Record<string, string>> = Partial<Record<string, string>>,
ParentData extends Record<string, any> = Record<string, any>,
OutputData extends Record<string, any> | void = Record<string, any> | void,
RouteId extends string | null = string | null
>(load: ServerLoad<Params, ParentData, OutputData, RouteId>) {
    const loadFn: ServerLoad<Params, ParentData, OutputData, RouteId> = async (event)  => {
        const user = event.locals?.user;
        const userId = user?.userId;
        
        if(!userId) {
            throw redirect(303, '/auth/login');
        }
        return load(event);
    }
    return loadFn;
}
