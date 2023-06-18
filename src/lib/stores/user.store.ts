import {writable, get} from 'svelte/store';
import type {Profile} from '$lib/models';

const foo = writable(0);
const {subscribe, set} = writable<Profile|null>(null);

export const user = {
    subscribe,
    login(u: Profile) { 
        // console.log('login set', u?.email);
        set(u); 
    },
    logout() { 
        // console.log('logging out', get({subscribe})?.email)
        set(null); 
    }
};
