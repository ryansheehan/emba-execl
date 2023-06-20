import {writable, derived, } from 'svelte/store';
import type { Todo, Todos } from '$lib/models';

const {subscribe, set, update} = writable<Todos>([]);

export const todoCount = derived({subscribe}, $a => $a.length);

export const todos = {
    subscribe,

    async addTodo(newTodo: Todo) {
        update(todos => {        
            const lastIndex = todos.findLastIndex(t => t.position < newTodo.position);
            const insertedTodos = lastIndex === -1 ? [newTodo, ...todos] : [...todos.slice(0, lastIndex), newTodo, ...todos.splice(lastIndex+1, todos.length)];
            return insertedTodos;
        });
    },

    async refreshActive(todos: Todos) { 
        set(todos);
    },
}