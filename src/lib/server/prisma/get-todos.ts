import {prisma} from './client';

export async function getActiveTodos(userId: string) {
    try {
        const todos = await prisma.todo.findMany({
            where: {
                AND: {
                    userId,
                    deleted: false,
                    completedInId: null,
                }
            },
            orderBy: {
                position: 'desc'
            }
        });

        return todos;
    } catch (error) {
        console.error(error);
    }
}