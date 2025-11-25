---
title: TokenScript Documentation
---

# TokenScript Documentation

Welcome to the unified TokenScript documentation! This documentation combines guides for both Systematically (the visual editor platform) and the TokenScript DSL (language reference) into a single, progressive learning path.

## What is Systematically?

Systematically is a platform for creating and managing design tokens—the building blocks of your design system. It consists of:

- **Systematically**: A visual editor (SvelteKit-based) with Monaco editor, live preview, and visualizations
- **TokenScript DSL**: A simple, human-readable language for defining design tokens programmatically

## Learning Paths

Choose the path that fits your needs:

### 🎨 For Visual Designers (App-First Path)

Start with the visual editor and learn the DSL as you go:

1. **[Introduction](01-getting-started/01-introduction)** - What is Systematically?
2. **[Quick Start: App](01-getting-started/02-quick-start-app)** - Get started with the visual editor
3. **[Using the App](02-using-the-app/01-interface-overview)** - Master the interface
4. **[Creating Tokens](03-creating-tokens/README)** - Learn to create tokens visually
5. **[Language Reference](04-language-reference/README)** - Deep dive into DSL syntax (when ready)

### 💻 For Developers (DSL-First Path)

Start with the language and use the app as needed:

1. **[Introduction](01-getting-started/01-introduction)** - What is Systematically?
2. **[Quick Start: DSL](01-getting-started/03-quick-start-dsl)** - Write your first tokens
3. **[Language Reference](04-language-reference/README)** - Complete syntax reference
4. **[Creating Tokens](03-creating-tokens/README)** - Token creation patterns
5. **[Integration](05-integration/01-api-reference)** - API and export formats

### 🚀 Quick Start (Either Path)

- **New to design tokens?** → Start with [App Quick Start](01-getting-started/02-quick-start-app)
- **Familiar with design tokens?** → Start with [DSL Quick Start](01-getting-started/03-quick-start-dsl)
- **Need API docs?** → Jump to [API Reference](05-integration/01-api-reference)

## Documentation Structure

### 01. Getting Started
- [Introduction](01-getting-started/01-introduction) - Overview of Systematically
- [Quick Start: App](01-getting-started/02-quick-start-app) - Visual editor introduction
- [Quick Start: DSL](01-getting-started/03-quick-start-dsl) - Language introduction

### 02. Using the App
- [Interface Overview](02-using-the-app/01-interface-overview) - Understanding the UI
- [Pages & Workspace](02-using-the-app/02-pages-and-workspace) - Organizing your tokens
- [Editor Features](02-using-the-app/03-editor-features) - Autocomplete, syntax highlighting, shortcuts
- [Visualizations](02-using-the-app/04-visualizations) - Interactive token visualizations
- [Cloud Sync](02-using-the-app/05-cloud-sync) - Saving and syncing your work

### 03. Creating Tokens
- [Simple Tokens](03-creating-tokens/01-simple-tokens) - Basic colors, spacing, typography
- [Number Scales](03-creating-tokens/02-number-scales) - Linear and modular scales
- [Color Scales](03-creating-tokens/03-color-scales) - Color palettes and ramps
- [Color Harmonies](03-creating-tokens/04-color-harmonies) - Harmonious color relationships
- [Typography Scales](03-creating-tokens/05-typography-scales) - Typography systems
- [Spacing Systems](03-creating-tokens/06-spacing-systems) - Spacing scales and layouts
- [Advanced Tokens](03-creating-tokens/07-advanced-tokens) - Matrices, streams, forEach

### 04. Language Reference
- [Syntax Reference](04-language-reference/01-syntax-reference) - Complete DSL syntax
- [Scales](04-language-reference/02-scales) - Deep dive on scales
- [Colors](04-language-reference/03-colors) - Color formats and systems
- [Typography](04-language-reference/04-typography) - Typography tokens
- [Spacing](04-language-reference/05-spacing) - Spacing tokens
- [Composite Tokens](04-language-reference/06-composite-tokens) - Grouped properties
- [References](04-language-reference/07-references) - Advanced referencing
- [Expressions](04-language-reference/08-expressions) - Mathematical expressions

### 05. Integration
- [API Reference](05-integration/01-api-reference) - REST API endpoints
- [Export Formats](05-integration/02-export-formats) - W3C, Tokens Studio, and more
- [Workflows](05-integration/03-workflows) - Real-world examples and patterns

### 06. Best Practices
- [Best Practices](06-best-practices/01-best-practices) - Guidelines for maintainable token systems

### 07. Help
- [Troubleshooting](07-help/01-troubleshooting) - Common issues and solutions
- [FAQ](07-help/02-faq) - Frequently asked questions

## Key Concepts

### Design Tokens
Design tokens are named values that represent design decisions—colors, spacing, typography, and more. They're the foundation of design systems.

### Scales
Scales automatically generate sequences of values from patterns:
- **Linear scales**: Add a fixed amount each step (great for spacing)
- **Modular scales**: Multiply by a ratio each step (great for typography)

### References
Tokens can reference other tokens, creating relationships and eliminating duplication.

### Visualizations
Systematically automatically creates visualizations of your scales, helping you see how tokens work together.

## Cross-References

Throughout this documentation, you'll find:
- **App perspective**: How to use features in the visual editor
- **DSL perspective**: How to write the same tokens in code
- **Cross-links**: Links between app and DSL sections

---

**Ready to start?** Choose your path above or jump to [Introduction](01-getting-started/01-introduction)!

