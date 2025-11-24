export interface NavigationItem {
	title: string;
	path: string;
	order: number;
	children?: NavigationItem[];
}

export interface TOCHeading {
	id: string;
	title: string;
	level: number;
	children?: TOCHeading[];
}
