import { readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { compile } from 'mdsvex';
import { createHighlighter } from 'shiki';
import tokenscriptGrammar from '../lib/syntax/tokenscript.tmLanguage.json' with { type: 'json' };
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Create a singleton highlighter instance
let highlighterPromise: Promise<any> | null = null;

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

export const load: PageServerLoad = async () => {
	const filePath = join('src/docs', 'index.md');
	
	try {
		const content = await readFile(filePath, 'utf-8');
		const { data, content: markdownContent } = matter(content);
		
		// Use mdsvex to compile markdown with syntax highlighting
		const result = await compile(markdownContent, {
			highlight: {
				highlighter: async (code: string, lang?: string | null) => {
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
		});
		
		return {
			title: data.title || 'DocsSite',
			content: result?.code || '',
			frontmatter: data,
			slug: ''
		};
	} catch (err) {
		console.error(`Failed to load index.md:`, err);
		throw error(404, 'Index page not found');
	}
};