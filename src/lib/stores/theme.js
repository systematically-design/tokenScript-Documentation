import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const { subscribe, set, update } = writable('system');

	return {
		subscribe,
		set: (theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				applyTheme(theme);
			}
			set(theme);
		},
		toggle: () => {
			update(current => {
				const newTheme = current === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', newTheme);
					applyTheme(newTheme);
				}
				return newTheme;
			});
		},
		init: () => {
			if (browser) {
				const stored = localStorage.getItem('theme');
				const theme = stored || 'system';
				applyTheme(theme);
				set(theme);
			}
		}
	};
}

function applyTheme(theme) {
	if (!browser) return;

	const root = document.documentElement;
	
	if (theme === 'system') {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		root.classList.toggle('dark', prefersDark);
	} else {
		root.classList.toggle('dark', theme === 'dark');
	}
}

export const theme = createThemeStore();

if (browser) {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		theme.subscribe(current => {
			if (current === 'system') {
				applyTheme('system');
			}
		})();
	});
}