---
title: Configuration
order: 2
---

# Configuration

Learn how to configure your DocsSite for your specific needs.

## Basic Configuration

DocsSite requires minimal configuration to get started. Most settings are handled automatically.

### Site Settings

You can customize basic site settings in your `package.json`:

```json
{
  "name": "your-docs-site",
  "description": "Your documentation site",
  "version": "1.0.0"
}
```

## Documentation Structure

### File Organization

Organize your documentation files in the `src/docs/` directory:

```
src/docs/
├── index.md              # Home page
├── getting-started/
│   ├── installation.md
│   └── quick-start.md
└── guides/
    ├── configuration.md
    └── deployment.md
```

### Frontmatter Options

Each markdown file can include frontmatter to control its behavior:

```yaml
---
title: Page Title        # Display title (optional)
order: 1                # Sort order in navigation (optional)
---
```

## Navigation

Navigation is automatically generated from your file structure:

- Files and folders are sorted by the `order` field in frontmatter
- If no order is specified, items are sorted alphabetically
- Folder names are automatically formatted (e.g., `getting-started` becomes "Getting Started")

## Styling

The default theme provides a clean, minimal design. You can customize:

- Colors through CSS custom properties
- Typography and spacing
- Light and dark mode themes

## Build Configuration

For production builds, ensure your `svelte.config.js` is properly configured:

```javascript
import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build'
    })
  }
};
```