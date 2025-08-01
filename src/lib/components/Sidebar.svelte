<script>
	import { page } from '$app/stores';
	
	export let navigation = [];
	
	$: currentPath = $page.url.pathname;
	
	function isActive(path) {
		if (path === '' && currentPath === '/') return true;
		if (path && currentPath.startsWith('/' + path)) return true;
		return false;
	}
	
	function formatPath(path) {
		return path === '' ? '/' : '/' + path;
	}
</script>

<nav class="sidebar" aria-label="Documentation navigation">
	<div class="nav-content">
		{#each navigation as item}
			<div class="nav-item">
				{#if item.children && item.children.length > 0}
					<!-- Section header (non-clickable) -->
					<div class="nav-section-header">
						{item.title}
					</div>
					<div class="nav-children">
						{#each item.children as child}
							<a 
								href={formatPath(child.path)} 
								class="nav-link nav-child"
								class:active={isActive(child.path)}
								aria-current={isActive(child.path) ? 'page' : undefined}
							>
								{child.title}
							</a>
						{/each}
					</div>
				{:else}
					<!-- Single page item (clickable) -->
					<a 
						href={formatPath(item.path)} 
						class="nav-link"
						class:active={isActive(item.path)}
						aria-current={isActive(item.path) ? 'page' : undefined}
					>
						{item.title}
					</a>
				{/if}
			</div>
		{/each}
	</div>
</nav>

<style>
	/* Navigation Section Headers */
	.nav-section-header {
		display: block;
		padding: 0.75rem 0.75rem 0.5rem 0.75rem;
		font-weight: 600;
		font-size: 0.875rem;
		color: var(--text-color);
		text-transform: uppercase;
		letter-spacing: 0.025em;
		/* border-bottom: 1px solid var(--border-color); */
		margin-bottom: 0.5rem;
		cursor: default;
	}


	.sidebar {
		width: 100%;
		height: 100%;
		overflow-y: auto;
		border-right: 1px solid var(--border-color);
		background-color: var(--bg-primary);
	}
	
	.nav-content {
		padding: 1rem;
	}
	
	.nav-item {
		margin-bottom: 0.5rem;
	}
	
	.nav-link {
		display: block;
		padding: 0.5rem 0.75rem;
		text-decoration: none;
		color: var(--text-secondary);
		border-radius: 4px;
		transition: all 0.2s ease;
		font-size: 0.875rem;
		line-height: 1.4;
	}
	
	.nav-link:hover {
		background-color: var(--bg-secondary);
		color: var(--text-color);
	}
	
	.nav-link:focus {
		outline: 2px solid var(--accent-color);
		outline-offset: 2px;
	}
	
	.nav-link.active {
		background-color: var(--accent-color);
		color: var(--accent-text);
		font-weight: 500;
	}
	
	.nav-children {
		margin-left: 1rem;
		margin-top: 0.25rem;
	}
	
	.nav-child {
		font-size: 0.8125rem;
		padding-left: 1rem;
		/* border-left: 2px solid var(--border-color); */
	}
	
	.nav-child.active {
		border-left-color: var(--accent-color);
	}
</style>