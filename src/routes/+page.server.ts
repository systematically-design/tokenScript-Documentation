import { readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// Configure marked options
marked.setOptions({
	gfm: true,
	breaks: false
});

export const load: PageServerLoad = async () => {
	const filePath = join('src/docs', 'index.md');
	
	try {
		const content = await readFile(filePath, 'utf-8');
		const { data, content: markdownContent } = matter(content);
		
		// Parse markdown to HTML
		const htmlContent = marked(markdownContent);
		
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