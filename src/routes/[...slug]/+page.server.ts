import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { error } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import { createHighlighter } from 'shiki';
import tokenscriptGrammar from '../../lib/syntax/tokenscript.tmLanguage.json' with { type: 'json' };
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

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug || '';
	let filePath: string;
	
	if (slug === '') {
		filePath = path.join('src/docs', 'index.md');
	} else {
		// Handle nested directories: convert slug like "01-getting-started/01-introduction" 
		// to file path "src/docs/01-getting-started/01-introduction.md"
		filePath = path.join('src/docs', `${slug}.md`);
	}
	
	try {
		const content = fs.readFileSync(filePath, 'utf-8');
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
			title: data.title || 'Systematically Documentation',
			content: result?.code || '',
			frontmatter: data,
			slug: slug
		};
	} catch (err) {
		console.error(`Failed to load ${filePath}:`, err);
		throw error(404, `Page not found: ${slug || 'index'}`);
	}
};