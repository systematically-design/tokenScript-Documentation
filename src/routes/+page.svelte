<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.frontmatter?.description || `${data.title} - DocsSite`} />
</svelte:head>

<div>
	{@html data.content}
</div>
