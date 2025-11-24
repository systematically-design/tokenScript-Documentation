import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';
import tokenscriptGrammar from './src/lib/syntax/tokenscript.tmLanguage.json' with { type: 'json' };
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Create a singleton highlighter instance
let highlighterPromise;

function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: ['github-light', 'github-dark'],
			langs: [
				'javascript',
				'typescript',
				'html',
				'css',
				'json',
				'bash',
				'shell',
				{
					...tokenscriptGrammar,
					name: 'tokenscript'
				}
			]
		});
	}
	return highlighterPromise;
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: 'wrap' }]
			],
			highlight: {
				highlighter: async (code, lang) => {
					try {
						const highlighter = await getHighlighter();
						return highlighter.codeToHtml(code, { 
							lang: lang || 'text',
							theme: 'github-dark'
						});
					} catch (error) {
						console.error('Highlighting error:', error);
						// Fallback to basic code block
						return `<pre><code class="language-${lang || 'text'}">${code}</code></pre>`;
					}
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
