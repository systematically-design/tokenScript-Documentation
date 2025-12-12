import type { NavigationItem } from '$lib/types';

export function generateNavigation(): NavigationItem[] {
	return [
		{
			title: 'Welcome',
			path: '',
			order: 1
		},
		{
			title: 'Tokens & Values',
			path: '2.1-tokens-and-values',
			order: 2
		},
		{
			title: 'References',
			path: '2.2-references',
			order: 3
		},
		{
			title: 'Expressions',
			path: '2.3-expressions',
			order: 4
		},
		{
			title: 'Composite Tokens',
			path: '2.4-composite-tokens',
			order: 5
		},
		{
			title: 'Number Scales',
			path: '3.1-number-scales',
			order: 6
		},
		{
			title: 'Color Generators',
			path: '3.2-color-generators',
			order: 7
		},
		{
			title: 'Pipelines',
			path: '4.1-pipelines',
			order: 8
		},
		{
			title: 'Iteration',
			path: '5.1-iteration',
			order: 9
		},
		{
			title: 'Conditionals',
			path: '5.2-conditionals',
			order: 10
		},
		{
			title: 'Typography Systems',
			path: '6.1-typography-systems',
			order: 11
		},
		{
			title: 'Spacing Systems',
			path: '6.2-spacing-systems',
			order: 12
		},
		{
			title: 'DSL Patterns',
			path: '7.1-dsl-patterns',
			order: 13
		},
		{
			title: 'Troubleshooting',
			path: '7.2-troubleshooting',
			order: 14
		},
		{
			title: 'FAQ',
			path: '7.3-faq',
			order: 15
		}
	];
}
