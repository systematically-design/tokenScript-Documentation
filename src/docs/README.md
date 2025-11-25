# TokenScript Documentation

Welcome to the Systematically documentation! Systematically is an app powered by TokenScript DSL where you write DSL code to generate design tokens.

## What is Systematically?

Systematically is an app for creating and managing design tokens—the building blocks of your design system. You write TokenScript DSL code in Systematically to create tokens, and the app provides:

- **Monaco-powered code editor** - The same editor used in VS Code, with syntax highlighting and autocomplete
- **Live preview** - See your tokens compile in real-time as you type
- **Visualizations** - Interactive displays of your scales and tokens
- **Cloud sync** - Automatic saving and cross-device access
- **Multi-page workspace** - Organize tokens into sets or groups

## Getting Started

Follow this learning path to master Systematically:

1. **Introduction** - What is Systematically and how it works
2. **Quick Start** - Write your first TokenScript DSL code
3. **Using Systematically** - Master the interface and features
4. **Creating Tokens** - Learn to create different types of tokens
5. **Language Reference** - Complete TokenScript DSL syntax guide

## Documentation Structure

### 01. Getting Started
- [Introduction](01-getting-started/01-introduction.md) - Overview of Systematically
- [Quick Start](01-getting-started/02-quick-start.md) - Write your first TokenScript DSL code

### 02. Using Systematically
- [Interface Overview](02-using-the-app/01-interface-overview.md) - Understanding the UI
- [Pages & Workspace](02-using-the-app/02-pages-and-workspace.md) - Organizing your tokens
- [Editor Features](02-using-the-app/03-editor-features.md) - Autocomplete, syntax highlighting, shortcuts
- [Visualizations](02-using-the-app/04-visualizations.md) - Interactive token visualizations
- [Cloud Sync](02-using-the-app/05-cloud-sync.md) - Saving and syncing your work

### 03. Creating Tokens
- [Simple Tokens](03-creating-tokens/01-simple-tokens.md) - Basic colors, spacing, typography
- [Number Scales](03-creating-tokens/02-number-scales.md) - Linear and modular scales
- [Color Scales](03-creating-tokens/03-color-scales.md) - Color palettes and ramps
- [Color Harmonies](03-creating-tokens/04-color-harmonies.md) - Harmonious color relationships
- [Typography Scales](03-creating-tokens/05-typography-scales.md) - Typography systems
- [Spacing Systems](03-creating-tokens/06-spacing-systems.md) - Spacing scales and layouts
- [Advanced Tokens](03-creating-tokens/07-advanced-tokens.md) - Matrices, streams, forEach

### 04. Language Reference
- [Syntax Reference](04-language-reference/01-syntax-reference.md) - Complete DSL syntax
- [Scales](04-language-reference/02-scales.md) - Deep dive on scales
- [Colors](04-language-reference/03-colors.md) - Color formats and systems
- [Typography](04-language-reference/04-typography.md) - Typography tokens
- [Spacing](04-language-reference/05-spacing.md) - Spacing tokens
- [Composite Tokens](04-language-reference/06-composite-tokens.md) - Grouped properties
- [References](04-language-reference/07-references.md) - Advanced referencing
- [Expressions](04-language-reference/08-expressions.md) - Mathematical expressions

### 05. Integration
- [API Reference](05-integration/01-api-reference.md) - REST API endpoints
- [Export Formats](05-integration/02-export-formats.md) - W3C, Tokens Studio, and more
- [Workflows](05-integration/03-workflows.md) - Real-world examples and patterns

### 06. Best Practices
- [Best Practices](06-best-practices/01-best-practices.md) - Guidelines for maintainable token systems

### 07. Help
- [Troubleshooting](07-help/01-troubleshooting.md) - Common issues and solutions
- [FAQ](07-help/02-faq.md) - Frequently asked questions

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

Throughout this documentation, you'll learn how to write TokenScript DSL code in Systematically to create design tokens. The app provides powerful tools to help you write, preview, and visualize your tokens.

## Contributing

This documentation is maintained at the root level of the Systematically workspace. For questions or improvements, see the main [README](../README.md).

---

**Ready to start?** Choose your path above or jump to [Introduction](01-getting-started/01-introduction.md)!

