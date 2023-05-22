import type {Actions}  from '@sveltejs/kit';
import {addTodo} from './add-todo';

export * from './add-todo';

export const todoActions: Actions = {
    addTodo
};

