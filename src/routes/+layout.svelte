<script lang="ts">
	import Layout from '$lib/components/Layout.svelte';
	import { onMount } from 'svelte';
	import { generateNavigation } from '$lib/utils/navigation.js';
	import '../css/app.css';
	
	let { children } = $props();
	
	let navigation = $state<any[]>([]);
	
	onMount(() => {
		try {
			navigation = generateNavigation();
		} catch (error) {
			console.warn('Failed to generate navigation:', error);
		}
	});
</script>

<Layout {navigation}>
	{@render children?.()}
</Layout>
