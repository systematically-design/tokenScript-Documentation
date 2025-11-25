import type { NavigationItem } from '$lib/types';

export function generateNavigation(): NavigationItem[] {
	// Navigation based on our docs structure
	return [
		{
			title: 'Systematically Documentation',
			path: '',
			order: 1
		},
		{
			title: 'Getting Started',
			path: '01-getting-started',
			order: 2,
			children: [
				{
					title: 'Introduction',
					path: '01-getting-started/01-introduction',
					order: 1
				},
				{
					title: 'Quick Start',
					path: '01-getting-started/02-quick-start',
					order: 2
				}
			]
		},
		{
			title: 'Using Systematically',
			path: '02-using-the-app',
			order: 3,
			children: [
				{
					title: 'Interface Overview',
					path: '02-using-the-app/01-interface-overview',
					order: 1
				},
				{
					title: 'Pages & Workspace',
					path: '02-using-the-app/02-pages-and-workspace',
					order: 2
				},
				{
					title: 'Editor Features',
					path: '02-using-the-app/03-editor-features',
					order: 3
				},
				{
					title: 'Visualizations',
					path: '02-using-the-app/04-visualizations',
					order: 4
				},
				{
					title: 'Cloud Sync',
					path: '02-using-the-app/05-cloud-sync',
					order: 5
				}
			]
		},
		{
			title: 'Creating Tokens',
			path: '03-creating-tokens',
			order: 4,
			children: [
				{
					title: 'Simple Tokens',
					path: '03-creating-tokens/01-simple-tokens',
					order: 1
				},
				{
					title: 'Number Scales',
					path: '03-creating-tokens/02-number-scales',
					order: 2
				},
				{
					title: 'Color Scales',
					path: '03-creating-tokens/03-color-scales',
					order: 3
				},
				{
					title: 'Color Harmonies',
					path: '03-creating-tokens/04-color-harmonies',
					order: 4
				},
				{
					title: 'Typography Scales',
					path: '03-creating-tokens/05-typography-scales',
					order: 5
				},
				{
					title: 'Spacing Systems',
					path: '03-creating-tokens/06-spacing-systems',
					order: 6
				},
				{
					title: 'Advanced Tokens',
					path: '03-creating-tokens/07-advanced-tokens',
					order: 7
				}
			]
		},
		{
			title: 'Language Reference',
			path: '04-language-reference',
			order: 5,
			children: [
				{
					title: 'Syntax Reference',
					path: '04-language-reference/01-syntax-reference',
					order: 1
				},
				{
					title: 'Scales',
					path: '04-language-reference/02-scales',
					order: 2
				},
				{
					title: 'Colors',
					path: '04-language-reference/03-colors',
					order: 3
				},
				{
					title: 'Typography',
					path: '04-language-reference/04-typography',
					order: 4
				},
				{
					title: 'Spacing',
					path: '04-language-reference/05-spacing',
					order: 5
				},
				{
					title: 'Composite Tokens',
					path: '04-language-reference/06-composite-tokens',
					order: 6
				},
				{
					title: 'References',
					path: '04-language-reference/07-references',
					order: 7
				},
				{
					title: 'Expressions',
					path: '04-language-reference/08-expressions',
					order: 8
				}
			]
		},
		{
			title: 'Best Practices',
			path: '06-best-practices',
			order: 6,
			children: [
				{
					title: 'Best Practices',
					path: '06-best-practices/01-best-practices',
					order: 1
				}
			]
		},
		{
			title: 'Help',
			path: '07-help',
			order: 7,
			children: [
				{
					title: 'Troubleshooting',
					path: '07-help/01-troubleshooting',
					order: 1
				},
				{
					title: 'FAQ',
					path: '07-help/02-faq',
					order: 2
				}
			]
		}
	];
}
