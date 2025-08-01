<script lang="ts">
	import { onMount } from 'svelte';
	import { extractTableOfContents } from '$lib/utils/toc.js';
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
	
	let tableOfContents: any[] = [];
	let contentElement: HTMLElement;
	
	onMount(() => {
		if (contentElement) {
			tableOfContents = extractTableOfContents(contentElement.innerHTML);
		}
	});
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.frontmatter?.description || `${data.title} - DocsSite`} />
</svelte:head>

<div bind:this={contentElement}>
	{@html data.content}
</div>
