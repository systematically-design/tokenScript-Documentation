<script>
	import { theme } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';
	
	let currentTheme = 'system';
	
	onMount(() => {
		theme.init();
		const unsubscribe = theme.subscribe(value => {
			currentTheme = value;
		});
		
		return unsubscribe;
	});
	
	function toggleTheme() {
		if (currentTheme === 'light') {
			theme.set('dark');
		} else if (currentTheme === 'dark') {
			theme.set('system');
		} else {
			theme.set('light');
		}
	}
	
	function getThemeIcon(theme) {
		switch (theme) {
			case 'light': return '☀️';
			case 'dark': return '🌙';
			default: return '🔄';
		}
	}
	
	function getThemeLabel(theme) {
		switch (theme) {
			case 'light': return 'Light mode';
			case 'dark': return 'Dark mode';
			default: return 'System mode';
		}
	}
</script>

<button
	class="theme-toggle"
	on:click={toggleTheme}
	aria-label="Toggle theme: {getThemeLabel(currentTheme)}"
	title={getThemeLabel(currentTheme)}
>
	<span class="theme-icon">{getThemeIcon(currentTheme)}</span>
</button>

<style>
	.theme-toggle {
		background: none;
		border: 1px solid var(--border-color);
		border-radius: 4px;
		padding: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		color: var(--text-color);
	}
	
	.theme-toggle:hover {
		background-color: var(--bg-secondary);
		border-color: var(--border-hover);
	}
	
	.theme-toggle:focus {
		outline: 2px solid var(--accent-color);
		outline-offset: 2px;
	}
	
	.theme-icon {
		font-size: 16px;
		line-height: 1;
	}
</style>