---
title: Installation
order: 1
---

# Installation

Get started with DocsSite in just a few steps.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm, yarn, or pnpm

## Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/docs-site.git
   cd docs-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to see your documentation site.

## Project Structure

Your documentation site follows this structure:

```
docs-site/
├── src/
│   ├── docs/           # Your markdown documentation
│   ├── lib/
│   │   ├── components/ # Svelte components
│   │   ├── utils/      # Utility functions
│   │   └── stores/     # Svelte stores
│   └── routes/         # SvelteKit routes
├── static/             # Static assets
└── package.json
```

## Next Steps

- Learn about [configuration options](/guides/configuration)
- Explore the [markdown features](/guides/markdown-features)
- Customize the [theme and styling](/guides/theming)