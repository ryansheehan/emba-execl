import { prisma } from './client';

export async function getProfile({sub}: {sub: string}) {
    try {
        const user = await prisma.user.findFirstOrThrow({
            where: {
                googleSub: sub
            },
            include: {
                profile: true
            }
        });
    
        const profile = user!.profile!;
        return profile;        
    } catch (error) {
        return null;
    }
}
