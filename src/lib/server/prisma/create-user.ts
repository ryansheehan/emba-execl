import { prisma, type User, type Profile } from './client';

export type NewUser = Pick<Profile, 'email' | 'givenName' | 'picture'> & { sub: string, provider: 'google' };

export async function tryCreateUser({sub, email, givenName, picture}: NewUser) {
    // check to see if the user already exists
    const existingUser = await prisma.user.findFirst({
        where: {
            googleSub: sub
        }
    });

    if(!existingUser) {
        try {
            const user = await prisma.user.create({
                data: {
                    googleSub: sub
                },
            });

            const profile = await prisma.profile.create({
                data: {
                    userId: user.id,
                    email,
                    givenName,
                    picture,
                }
            });

            console.log(`Created user ${user.id} for ${profile.givenName}`);
            return { success: true };
        } catch (error) {
            console.error(`Error creating new user for ${givenName}`);
            return { success: false, error };
        }
    }
}