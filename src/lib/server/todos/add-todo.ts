import type {Action} from '@sveltejs/kit';

export const addTodo: Action = async ({request}) => {
    const formData = await request.formData();
    console.log(formData.get('title'));
}
