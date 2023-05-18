import { PrismaClient } from '@prisma/client';
export type { User, Profile, Todo, ExecLog, MotivationalQuote } from '@prisma/client';

export const prisma = new PrismaClient();
