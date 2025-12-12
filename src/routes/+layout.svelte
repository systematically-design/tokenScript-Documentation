<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import { onMount } from 'svelte';
	import { generateNavigation } from '$lib/utils/navigation';
	import type { NavigationItem } from '$lib/types';
	import { page } from '$app/stores';
	import '../css/app.css';
	
	let { children } = $props();
	
	let navigation = $state<NavigationItem[]>([]);
	
	onMount(() => {
		try {
			navigation = generateNavigation();
		} catch (error) {
			console.warn('Failed to generate navigation:', error);
		}
	});
</script>

{#key $page.url.pathname}
	<Layout {navigation}>
		{@render children?.()}
	</Layout>
{/key}
