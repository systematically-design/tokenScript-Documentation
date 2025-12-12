<script lang="ts">
	import { onMount } from 'svelte';
	import { smoothScrollToElement } from '$lib/utils/toc';
	import type { TOCHeading } from '$lib/types';
	
	export let headings: TOCHeading[] = [];
	
	let activeId = '';
	let generatedHeadings: TOCHeading[] = [];
	
	// Use generated headings if provided headings are empty
	$: displayHeadings = headings.length > 0 ? headings : generatedHeadings;
	
	onMount(() => {
		// Wait for content to be rendered, then observe headings
		setTimeout(() => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							activeId = entry.target.id;
						}
					});
				},
				{
					rootMargin: '-20% 0% -80% 0%'
				}
			);
			
			const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
			headingElements.forEach((el) => {
				// Ensure heading has an ID for linking
				if (!el.id) {
					el.id = generateId(el.textContent || '');
				}
				observer.observe(el);
			});
			
			return () => observer.disconnect();
		}, 100);
	});
	
	function generateId(text: string): string {
		return text
			.toLowerCase()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.trim();
	}
	
	function handleClick(id: string): void {
		console.log('TOC click:', id);
		smoothScrollToElement(id);
	}
</script>

{#if headings && headings.length > 0}
	<nav class="toc" aria-label="Table of contents">
		<h3 class="toc-title">On this page</h3>
		<ul class="toc-list">
			{#each headings as heading}
				<li class="toc-item level-{heading.level}">
					<button
						class="toc-link"
						class:active={activeId === heading.id}
						on:click={() => handleClick(heading.id)}
						type="button"
					>
						{heading.title}
					</button>
					{#if heading.children && heading.children.length > 0}
						<ul class="toc-sublist">
							{#each heading.children as child}
								<li class="toc-item level-{child.level}">
									<button
										class="toc-link"
										class:active={activeId === child.id}
										on:click={() => handleClick(child.id)}
										type="button"
									>
										{child.title}
									</button>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	.toc {
		width: 100%;
		height: 100%;
		overflow-y: auto;
		padding: 1rem;
		background-color: var(--bg-primary);
	}
	
	.toc-title {
		margin: 0 0 1rem 0;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--text-color);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.toc-list,
	.toc-sublist {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	
	.toc-sublist {
		margin-left: 1rem;
		margin-top: 0.25rem;
	}
	
	.toc-item {
		margin-bottom: 0.25rem;
	}
	
	.toc-link {
		display: block;
		width: 100%;
		padding: 0.25rem 0.5rem;
		text-align: left;
		background: none;
		border: none;
		border-radius: 4px;
		font-size: 0.8125rem;
		line-height: 1.4;
		color: var(--text-secondary);
		cursor: pointer;
		transition: all 0.2s ease;
		text-decoration: none;
	}
	
	.toc-link:hover {
		background-color: var(--bg-secondary);
		color: var(--text-color);
	}
	
	.toc-link:focus {
		outline: 2px solid var(--accent-color);
		outline-offset: 2px;
	}
	
	.toc-link.active {
		background-color: var(--accent-light);
		color: var(--accent-color);
		font-weight: 500;
	}
	
	.level-1 .toc-link {
		font-weight: 500;
	}
	
	.level-2 .toc-link {
		font-size: 0.8125rem;
	}
	
	.level-3 .toc-link,
	.level-4 .toc-link,
	.level-5 .toc-link,
	.level-6 .toc-link {
		font-size: 0.75rem;
		padding-left: 1rem;
	}
</style>