import type { PageServerLoadEvent } from './$types';

interface ResponseData {
    user?: {
        email: string;
		name: string;
		picture: string;
		given_name: string;
		family_name: string;
    }
}

export const load = async ({locals}: PageServerLoadEvent) => {
    const {user} = locals;
    const {id = '', ...userData} = user ?? {};

    const data:ResponseData = {        
        user: userData.email ? userData : undefined
    };
    
    return data;
 };