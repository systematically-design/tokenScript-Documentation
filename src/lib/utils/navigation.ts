import type { NavigationItem } from '$lib/types';

export function generateNavigation(): NavigationItem[] {
	// Navigation based on our docs structure
	return [
		{
			title: 'Welcome',
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
			title: 'TokenScript DSL',
			path: '03-tokenscript-dsl',
			order: 4,
			children: [
				{
					title: 'Syntax Basics',
					path: '03-tokenscript-dsl/01-syntax-basics',
					order: 1
				},
				{
					title: 'Scales',
					path: '03-tokenscript-dsl/02-scales',
					order: 2
				},
				{
					title: 'Colors',
					path: '03-tokenscript-dsl/03-colors',
					order: 3
				},
				{
					title: 'Typography',
					path: '03-tokenscript-dsl/04-typography',
					order: 4
				},
				{
					title: 'Spacing',
					path: '03-tokenscript-dsl/05-spacing',
					order: 5
				},
				{
					title: 'Composite Tokens',
					path: '03-tokenscript-dsl/06-composite-tokens',
					order: 6
				},
				{
					title: 'References',
					path: '03-tokenscript-dsl/07-references',
					order: 7
				},
				{
					title: 'Expressions',
					path: '03-tokenscript-dsl/08-expressions',
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
