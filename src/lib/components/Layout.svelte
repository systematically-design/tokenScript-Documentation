<script lang="ts">
	import { onMount } from 'svelte';
	import Sidebar from './Sidebar.svelte';
	import TableOfContents from './TableOfContents.svelte';
	import { extractTableOfContents } from '$lib/utils/toc';
	import { base } from '$app/paths';
	import type { NavigationItem, TOCHeading } from '$lib/types';

	export const title = 'Systematically Documentation';
	export let navigation: NavigationItem[] = [];
	
	let tableOfContents: TOCHeading[] = [];
	let contentElement: HTMLElement;
	
	function extractTOC() {
		if (contentElement && contentElement.innerHTML.trim()) {
			// Wait a bit longer for mdsvex to process headings and add IDs
			setTimeout(() => {
				tableOfContents = extractTableOfContents(contentElement.innerHTML);
				console.log('Extracted TOC:', tableOfContents);
				console.log('Content innerHTML:', contentElement.innerHTML.substring(0, 500));
			}, 200);
		}
	}
	
	// Reactive statement to extract TOC when content element is available
	$: if (contentElement) {
		setTimeout(() => {
			extractTOC();
		}, 100);
	}
	
	onMount(() => {
		// Extract TOC immediately on mount
		setTimeout(() => {
			extractTOC();
		}, 100);
		
		// Set up a mutation observer to watch for content changes
		const observer = new MutationObserver(() => {
			setTimeout(() => {
				extractTOC();
			}, 50);
		});
		
		if (contentElement) {
			observer.observe(contentElement, {
				childList: true,
				subtree: true
			});
		}
		
		return () => observer.disconnect();
	});
</script>

<div class="layout">
	<header class="header">
		<div class="header-content">
			<a href="{base}/" class="site-title">Systematically Documentation</a>
		</div>
	</header>
	
	<div class="main-content">
		<aside class="sidebar-left" aria-label="Main navigation">
			<Sidebar {navigation} />
		</aside>
		
		<main class="content" id="main-content" bind:this={contentElement}>
			<article class="article">
				<slot />
			</article>
		</main>
		
		<aside class="sidebar-right" aria-label="Table of contents">
			<TableOfContents headings={tableOfContents} />
		</aside>
	</div>
</div>

<style>
	.layout {
		min-height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr;
		background-color: var(--bg-primary);
		color: var(--text-color);
	}
	
	.header {
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--bg-primary);
		border-bottom: 1px solid var(--border-color);
	}
	
	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		max-width: 1400px;
		margin: 0 auto;
	}
	
	.site-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--text-color);
		text-decoration: none;
		transition: color 0.2s ease;
	}
	
	.site-title:hover {
		color: var(--accent-color);
	}
	
	.site-title:focus {
		outline: 2px solid var(--accent-color);
		outline-offset: 2px;
		border-radius: 4px;
	}
	
	.main-content {
		display: grid;
		grid-template-columns: 250px 1fr 200px;
		min-height: 0;
		max-width: 1400px;
		margin: 0 auto;
		width: 100%;
	}
	
	.sidebar-left {
		position: sticky;
		top: 80px;
		height: calc(100vh - 80px);
		overflow-y: auto;
	}
	
	.sidebar-right {
		position: sticky;
		top: 80px;
		height: calc(100vh - 80px);
		overflow-y: auto;
		border-left: 1px solid var(--border-color);
	}
	
	.content {
		min-width: 0;
		overflow-x: auto;
		padding: 2rem;
	}
	
	.article {
		max-width: 800px;
		margin: 0 auto;
	}
	
	/* Responsive design */
	@media (max-width: 1024px) {
		.main-content {
			grid-template-columns: 220px 1fr 180px;
		}
	}
	
	@media (max-width: 768px) {
		.main-content {
			grid-template-columns: 200px 1fr;
		}
		
		.sidebar-right {
			display: none;
		}
	}
	
	@media (max-width: 640px) {
		.main-content {
			grid-template-columns: 1fr;
		}
		
		.sidebar-left {
			position: static;
			height: auto;
			border-bottom: 1px solid var(--border-color);
		}
		
		.content {
			padding: 1rem;
		}
	}
</style>