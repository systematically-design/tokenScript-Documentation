<script>
	import Sidebar from './Sidebar.svelte';
	import TableOfContents from './TableOfContents.svelte';
	
	export const title = 'DocsSite';
	export let navigation = [];
	export let tableOfContents = [];
</script>

<div class="layout">
	<header class="header">
		<div class="header-content">
			<a href="/" class="site-title">DocsSitez</a>
		</div>
	</header>
	
	<div class="main-content">
		<aside class="sidebar-left" aria-label="Main navigation">
			<Sidebar {navigation} />
		</aside>
		
		<main class="content" id="main-content">
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