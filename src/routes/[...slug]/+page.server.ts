import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import type { PageServerLoad } from './$types';

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
		
		// Convert markdown to HTML using marked
		const htmlContent = marked(markdownContent);
		
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