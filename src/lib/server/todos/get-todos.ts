import {prisma, type Todo} from '$lib/server/prisma/client';

export async function getTodos(userId: string)  {
    return await prisma.todo.findMany({        
        include: {
            
        },
        where: { 
            userId,
         },
        orderBy: {
            priority: 'asc'
        },
    })
}