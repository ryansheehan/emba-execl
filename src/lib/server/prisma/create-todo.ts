import {prisma } from './client';
import type { NewTodo } from '$lib/models';

export async function tryCreateTodo(newTodo: NewTodo) {
    const addedTodo = await prisma.todo.create({
        data: newTodo
    });

    return addedTodo;
}