import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const { codeToHtml } = await import('shiki');
					const html = await codeToHtml(code, {
						lang,
						theme: 'github-dark'
					});
					return html;
				}
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: 'warn',
			entries: [
				'/',
				'/getting-started/installation',
				'/guides/configuration'
			]
		}
	}
};

export default config;
