import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';
import tokenscriptGrammar from './src/lib/syntax/tokenscript.tmLanguage.json' with { type: 'json' };
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

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

// Generate prerender entries from markdown files
function getPrerenderEntries() {
	const entries = ['/']; // Always include root
	const docsDir = 'src/docs';
	
	function scanDirectory(dir, basePath = '') {
		try {
			const items = readdirSync(dir);
			for (const item of items) {
				const fullPath = join(dir, item);
				const stat = statSync(fullPath);
				
				if (stat.isDirectory()) {
					// Recursively scan subdirectories
					scanDirectory(fullPath, basePath ? `${basePath}/${item}` : item);
				} else if (item.endsWith('.md') && item !== 'README.md') {
					// Convert file path to route path
					const routePath = basePath 
						? `/${basePath}/${item.replace('.md', '')}`
						: `/${item.replace('.md', '')}`;
					
					// Special case: index.md becomes /
					if (item === 'index.md' && !basePath) {
						continue; // Already added
					} else {
						entries.push(routePath);
					}
				}
			}
		} catch (err) {
			console.warn(`Could not scan directory ${dir}:`, err);
		}
	}
	
	scanDirectory(docsDir);
	return entries;
}

const dev = process.argv.includes('dev');

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
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : '/tokenScript-Documentation'
		},
		prerender: {
			handleHttpError: 'warn',
			entries: getPrerenderEntries()
		}
	}
};

export default config;
