export function getSystemTheme() {
	if (typeof window === 'undefined') return 'light';
	
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyThemeClass(theme) {
	if (typeof document === 'undefined') return;
	
	const root = document.documentElement;
	
	if (theme === 'system') {
		const systemTheme = getSystemTheme();
		root.classList.toggle('dark', systemTheme === 'dark');
	} else {
		root.classList.toggle('dark', theme === 'dark');
	}
}

export function watchSystemTheme(callback) {
	if (typeof window === 'undefined') return () => {};
	
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	
	const handler = (e) => {
		callback(e.matches ? 'dark' : 'light');
	};
	
	mediaQuery.addEventListener('change', handler);
	
	return () => mediaQuery.removeEventListener('change', handler);
}