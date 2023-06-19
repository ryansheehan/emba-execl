import {requireAuth} from '$lib/server/auth/action';
import {error} from '@sveltejs/kit';

export const addTodo = requireAuth(async ({request, locals}) => {
    const {userId} = locals.user;

    const data = await request.formData();
    const title = data.get('title') as string;

    // validation
    if (!title) {
        throw error(400, {message: 'title required'}); 
    }

    const position = -1;

    const todo = {userId, position, title};    

    return {todo: todo};
});
