import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	envPrefix: ['VITE', 'AUTH0', 'APP', 'GOOG'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
