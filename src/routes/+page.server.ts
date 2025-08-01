import { readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Function to generate ID from text
function generateId(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-')
		.trim();
}

// Configure marked with custom renderer for headings
const renderer = new marked.Renderer();
renderer.heading = function({ tokens, depth }: { tokens: any[], depth: number }) {
	const text = this.parser.parseInline(tokens);
	const id = generateId(text);
	return `<h${depth} id="${id}">${text}</h${depth}>`;
};

// Add code renderer for consistency
renderer.code = function({ text, lang }: { text: string; lang?: string }) {
	return `<pre><code class="language-${lang || 'text'}">${text}</code></pre>`;
};

marked.setOptions({
	gfm: true,
	breaks: false,
	async: true,
	renderer: renderer
});

export const load: PageServerLoad = async () => {
	const filePath = join('src/docs', 'index.md');
	
	try {
		const content = await readFile(filePath, 'utf-8');
		const { data, content: markdownContent } = matter(content);
		
		// Parse markdown to HTML (await the Promise!)
		const htmlContent = await marked(markdownContent);
		
		return {
			title: data.title || 'DocsSite',
			content: htmlContent,
			frontmatter: data,
			slug: ''
		};
	} catch (err) {
		console.error(`Failed to load index.md:`, err);
		throw error(404, 'Index page not found');
	}
};