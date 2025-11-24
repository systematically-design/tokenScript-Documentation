import type { TOCHeading } from '$lib/types';

interface HeadingData {
	level: number;
	id: string;
	title: string;
}

export function extractTableOfContents(html: string): TOCHeading[] {
	if (typeof document === 'undefined') {
		return extractTocFromHtml(html);
	}
	
	const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
	return buildTocFromElements(headings);
}

function extractTocFromHtml(html: string): TOCHeading[] {
	const headingRegex = /<h([1-6])[^>]*(?:id="([^"]*)")?[^>]*>(.*?)<\/h[1-6]>/gi;
	const headings: HeadingData[] = [];
	let match;
	
	while ((match = headingRegex.exec(html)) !== null) {
		const level = parseInt(match[1]);
		const id = match[2] || generateId(match[3].replace(/<[^>]*>/g, '').trim());
		const title = match[3].replace(/<[^>]*>/g, '').trim();
		
		headings.push({ level, id, title });
	}
	
	return buildTocHierarchy(headings);
}

function buildTocFromElements(headings: NodeListOf<Element>): TOCHeading[] {
	const items: HeadingData[] = Array.from(headings).map(heading => ({
		level: parseInt(heading.tagName.charAt(1)),
		id: heading.id || generateId(heading.textContent || ''),
		title: (heading.textContent || '').trim()
	}));
	
	return buildTocHierarchy(items);
}

function buildTocHierarchy(headings: HeadingData[]): TOCHeading[] {
	const toc: TOCHeading[] = [];
	const stack: TOCHeading[] = [];
	
	for (const heading of headings) {
		const item: TOCHeading = {
			id: heading.id,
			title: heading.title,
			level: heading.level,
			children: []
		};
		
		while (stack.length > 0 && stack[stack.length - 1].level >= heading.level) {
			stack.pop();
		}
		
		if (stack.length === 0) {
			toc.push(item);
		} else {
			const parent = stack[stack.length - 1];
			if (parent.children) {
				parent.children.push(item);
			}
		}
		
		stack.push(item);
	}
	
	return toc;
}

function generateId(text: string): string {
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '')
		.replace(/\s+/g, '-')
		.trim();
}

export function smoothScrollToElement(id: string): void {
	const element = document.getElementById(id);
	if (element) {
		// Calculate offset to account for fixed header
		const header = document.querySelector('.header');
		const headerHeight = header ? header.getBoundingClientRect().height + 20 : 100;
		
		const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
		const offsetPosition = elementPosition - headerHeight;
		
		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
}