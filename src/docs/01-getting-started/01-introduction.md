# Introduction to Systematically

Systematically is a platform for creating and managing design tokens—the building blocks of your design system. Whether you're a designer who prefers visual tools or a developer who loves code, Systematically has you covered.

## What Are Design Tokens?

Design tokens are named values that represent design decisions. Instead of hardcoding colors, spacing, and typography throughout your codebase, you define them once as tokens and reference them everywhere.

**Example**:
```tokenscript
// Define once
primaryColor = #007acc
baseSpacing = 16px

// Use everywhere
buttonBackground = $primaryColor
cardPadding = $baseSpacing
```

## Systematically Platform

Systematically consists of two main components:

### 1. Systematically (Visual Editor)

A web-based visual editor that makes creating tokens intuitive:
- **Monaco-powered code editor** - The same editor used in VS Code
- **Live preview** - See your tokens compile in real-time
- **Visualizations** - Interactive displays of your scales
- **Cloud sync** - Automatic saving and cross-device access
- **Multi-page workspace** - Organize tokens into sets or groups

**Best for**: Designers, visual learners, quick prototyping

### 2. TokenScript DSL (Language)

A simple, human-readable language for defining tokens:
- **Indentation-based syntax** - Clean and readable
- **Powerful scales** - Generate sequences automatically
- **References** - Create relationships between tokens
- **Mathematical expressions** - Calculate derived values
- **Multiple export formats** - W3C, Tokens Studio, and more

**Best for**: Developers, version control, programmatic generation

## Why Use Systematically?

### Consistency
Create systematic design systems with scales that ensure consistency across your entire product.

### Efficiency
Generate dozens of tokens from a single scale definition. Change one value, update everything.

### Flexibility
Use the visual editor for quick iteration or write DSL code for version control and automation.

### Integration
Export to standard formats (W3C Design Tokens, Tokens Studio) that work with your existing tools.

## Key Features

### Scales
Automatically generate sequences of values:
- **Linear scales**: Perfect for spacing (`8, 12, 16, 20, 24`)
- **Modular scales**: Perfect for typography (`12, 15, 18.75, 23.4, 29.3`)
- **Color scales**: Generate harmonious color palettes
- **Typography scales**: Complete typography systems

### References
Create relationships between tokens:
```tokenscript
baseSpacing = 8px
cardPadding = $baseSpacing * 2  // 16px
buttonPadding = $baseSpacing * 1.5  // 12px
```

### Visualizations
See your scales come to life with interactive visualizations that help you understand relationships and make decisions.

### Multiple Formats
Export to:
- W3C Design Tokens format
- Tokens Studio format
- Simple flat JSON
- Raw IR (Intermediate Representation)

## Getting Started

### New to Design Tokens?

Start with the **visual editor**:
1. [Quick Start: App](02-quick-start-app.md) - Learn the interface
2. [Creating Tokens](../03-creating-tokens/README.md) - Start creating tokens visually
3. [Language Reference](../04-language-reference/README.md) - Learn DSL syntax when ready

### Familiar with Design Tokens?

Start with the **DSL**:
1. [Quick Start: DSL](03-quick-start-dsl.md) - Write your first tokens
2. [Language Reference](../04-language-reference/README.md) - Complete syntax guide
3. [Creating Tokens](../03-creating-tokens/README.md) - Token creation patterns

### Need API Access?

Jump straight to:
- [API Reference](../05-integration/01-api-reference.md) - REST API endpoints
- [Export Formats](../05-integration/02-export-formats.md) - Output formats

## Example: Your First Design System

Here's a complete example showing what you can build:

```tokenscript
// Base values
baseUnit = 8
primaryColor = #007acc

// Spacing scale
spacing
  /numberScale : linear
    base = $baseUnit
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]

// Typography scale
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]

// Colors
colors
  primary = $primaryColor
  secondary = #00a86b
  neutral
    light = #f5f5f5
    dark = #1a1a1a
```

This creates:
- A spacing system from 8px to 24px
- A typography scale from 16px to 31.25px
- A color palette with primary, secondary, and neutral colors

## Next Steps

- **Visual learners**: [Quick Start: App](02-quick-start-app.md)
- **Code-first**: [Quick Start: DSL](03-quick-start-dsl.md)
- **Explore features**: [Creating Tokens](../03-creating-tokens/README.md)

---

Ready to dive in? Choose your path above!

