import type { Todo } from '@prisma/client';
export type { User, Profile, Todo, ExecLog, MotivationalQuote } from '@prisma/client';

export type NewTodo = Pick<Todo, 'userId' | 'title' | 'position'>;
export type Todos = Todo[];