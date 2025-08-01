export function generateNavigation() {
	// Navigation based on our docs structure
	return [
		{
			title: 'Welcome to DocsSite',
			path: '',
			order: 1
		},
		{
			title: 'Getting Started',
			path: 'getting-started',
			order: 2,
			children: [
				{
					title: 'Introduction to TokenScript DSL',
					path: 'getting-started/01-introduction',
					order: 1
				},
				{
					title: 'Quick Start Guide',
					path: 'getting-started/02-quick-start',
					order: 2
				},
				{
					title: 'Installation',
					path: 'getting-started/installation',
					order: 3
				}
			]
		},
		{
			title: 'Guides',
			path: 'guides',
			order: 3,
			children: [
				{
					title: 'Basic Syntax',
					path: 'guides/03-basic-syntax',
					order: 3
				},
				{
					title: 'Variables & Values',
					path: 'guides/04-variables-values',
					order: 4
				},
				{
					title: 'Mathematical Expressions',
					path: 'guides/05-mathematical-expressions',
					order: 5
				},
				{
					title: 'References',
					path: 'guides/06-references',
					order: 6
				},
				{
					title: 'Introduction to Scales',
					path: 'guides/07-scales-intro',
					order: 7
				},
				{
					title: 'Self-References',
					path: 'guides/13-self-references',
					order: 13
				},
				{
					title: 'Design Systems',
					path: 'guides/15-design-systems',
					order: 15
				},
				{
					title: 'Configuration',
					path: 'guides/configuration',
					order: 16
				}
			]
		},
		{
			title: 'DSL User Guide',
			path: 'dsl-user-guide',
			order: 4,
			children: [
				{
					title: 'Quick Syntax Reference',
					path: 'dsl-user-guide/DSL_QUICK_REFERENCE',
					order: 1
				}
			]
		}
	];
}
