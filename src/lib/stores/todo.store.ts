import {writable, derived, get} from 'svelte/store';
import type { NewTodo, Todos } from '$lib/models';
import { tryCreateTodo } from '$lib/server/prisma/create-todo';
import {userId as userIdStore} from './user.store';

const {subscribe, set, update} = writable<Todos>([]);

export const todoCount = derived({subscribe}, $a => $a.length);

export const todos = {
    subscribe,

    async addTodo(newTodo: NewTodo) {
        const todo = await tryCreateTodo(newTodo);

        update(todos => {        
            const lastIndex = todos.findLastIndex(t => t.position < todo.position);
            const insertedTodos =[...todos.slice(0, lastIndex), todo, ...todos.splice(lastIndex+1, todos.length)];
            return insertedTodos;
        });
    },

    async refresh() {        
        const userId = get(userIdStore);
        if (userId) {
            
        }
    },
}