// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		
		interface Locals {
			user: {
				id: string;
				email: string;
				name: string;
				picture: string;
				given_name: string;
				family_name: string;
			}
		}

		interface PageData {
			
		}

		// interface Platform {}
	}
}

export {};
