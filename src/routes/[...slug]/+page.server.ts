import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

// Configure marked with simple code highlighting - NO SHIKI
const renderer = new marked.Renderer();
renderer.code = function({ text, lang }: { text: string; lang?: string }) {
	// Just return basic code blocks for everything - no fancy highlighting
	return `<pre><code class="language-${lang || 'text'}">${text}</code></pre>`;
};

marked.setOptions({
	gfm: true,
	breaks: false,
	async: true,
	renderer: renderer
});

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.slug || '';
	let filePath: string;
	
	if (slug === '') {
		filePath = path.join('src/docs', 'index.md');
	} else {
		filePath = path.join('src/docs', `${slug}.md`);
	}
	
	try {
		const content = fs.readFileSync(filePath, 'utf-8');
		const { data, content: markdownContent } = matter(content);
		
		// Convert markdown to HTML using marked (await the Promise!)
		const htmlContent = await marked(markdownContent);
		
		return {
			title: data.title || 'DocsSite',
			content: htmlContent,
			frontmatter: data,
			slug: slug
		};
	} catch (err) {
		console.error(`Failed to load ${filePath}:`, err);
		throw error(404, `Page not found: ${slug || 'index'}`);
	}
};