# Introduction to Systematically

Systematically is an app powered by TokenScript DSL for creating and managing design tokens—the building blocks of your design system. You write TokenScript DSL code in Systematically to create tokens, and the app provides powerful tools to help you work with your code.

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

## What is Systematically?

Systematically is an app where you write TokenScript DSL code to generate design tokens. TokenScript DSL is a simple, human-readable language with:

- **Indentation-based syntax** - Clean and readable
- **Powerful scales** - Generate sequences automatically
- **References** - Create relationships between tokens
- **Mathematical expressions** - Calculate derived values

When you write TokenScript DSL in Systematically, you get:

- **Monaco-powered code editor** - The same editor used in VS Code, with syntax highlighting and autocomplete
- **Live preview** - See your tokens compile in real-time as you type
- **Visualizations** - Interactive displays of your scales and tokens
- **Cloud sync** - Automatic saving and cross-device access
- **Multi-page workspace** - Organize tokens into sets or groups

## Why Use Systematically?

### Consistency
Create systematic design systems with scales that ensure consistency across your entire product.

### Efficiency
Generate dozens of tokens from a single scale definition. Change one value, update everything.

### Powerful Tools
Write DSL code with the help of a Monaco editor, live preview, and visualizations that make working with tokens intuitive and efficient.


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

## Next Steps

Ready to start using Systematically?

- **Quick Start** - Write your first TokenScript DSL code and see it compile
- **Using Systematically** - Learn the interface and features
- **Creating Tokens** - Learn to create different types of tokens
- **Language Reference** - Complete TokenScript DSL syntax guide

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

---

Ready to start writing code? Use the navigation to go to Quick Start!

