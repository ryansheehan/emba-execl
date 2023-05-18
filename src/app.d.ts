// See https://kit.svelte.dev/docs/types#app

import type { Profile } from "@prisma/client";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		
		interface Locals {
			user: Profile
		}

		interface PageData {
			
		}

		// interface Platform {}
	}
}

export {};
