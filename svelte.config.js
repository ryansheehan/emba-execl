import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const isProduction = process.env.NODE_ENV==='production';

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

		csrf: {checkOrigin: isProduction},

		// csp: {			
		// 	reportOnly: {
		// 		'report-to': [],
		// 		'connect-src': [
		// 			'https://accounts.google.com/gsi/',					
		// 		],
		// 		'frame-src': [
		// 			'https://accounts.google.com/gsi/',
		// 		],
		// 		'script-src': [
		// 			'https://accounts.google.com/gsi/client',
		// 		],
		// 		'style-src': [
		// 			'https://accounts.google.com/gsi/style'
		// 		],
		// 	}
		// }
	}
};

export default config;
