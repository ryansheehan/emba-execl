import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isProduction = process.env.NODE_ENV==='production';

const baseCsp = [
	'self',
	'https://www.gstatic.com/recaptcha/', // recaptcha
	'https://accounts.google.com/gsi/', // sign-in w/google
	'https://www.google.com/recaptcha/', // recapatcha
	'https://fonts.gstatic.com/' // recaptcha fonts
]

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			runtime: 'nodejs18.x',
		}),

		csrf: {checkOrigin: false},

		// csp: {
		// 	mode: 'auto',
		// 	directives: {
		// 		'default-src': [...baseCsp],
		// 		'script-src': ['unsafe-inline', ...baseCsp],
		// 		'img-src': ['data:', 'blob:', ...baseCsp],
		// 		'style-src': ['unsafe-inline', ...baseCsp],
		// 		'object-src': ['none'],
		// 		'base-uri': ['self']
		// 	}
		// },
	}
};

export default config;
