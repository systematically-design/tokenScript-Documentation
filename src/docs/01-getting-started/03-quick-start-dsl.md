# Quick Start: TokenScript DSL

Welcome to TokenScript DSL! This guide will help you create your first design tokens and understand the basics of the TokenScript language.

## What is TokenScript DSL?

TokenScript DSL is a simple, human-readable language for defining design tokens. It lets you:
- Create consistent design scales (spacing, typography, colors)
- Define relationships between tokens
- Generate tokens automatically from scales

## Your First Tokens

Let's start with the simplest possible tokens - direct values:

**DSL Input:**
```tokenscript
// Simple value tokens
primaryColor = #3B82F6
baseSpacing = 8
fontSize = 16
```

**JSON Output:**
```json
{
  "primaryColor": "#3B82F6",
  "baseSpacing": 8,
  "fontSize": 16
}
```

That's it! You've created three tokens:
- `primaryColor` - a blue color
- `baseSpacing` - a spacing value of 8
- `fontSize` - a font size of 16

## Using References

Instead of repeating values, you can reference other tokens:

**DSL Input:**
```tokenscript
baseSpacing = 8

// Reference the base spacing
cardPadding = $baseSpacing
buttonPadding = $baseSpacing * 2
```

**JSON Output:**
```json
{
  "baseSpacing": 8,
  "cardPadding": 8,
  "buttonPadding": 16
}
```

Now `cardPadding` is 8 and `buttonPadding` is 16, automatically calculated from `baseSpacing`.

## Creating Scales

Scales automatically generate multiple tokens from a pattern. Here's a spacing scale:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 16,
  "spacing.lg": 20,
  "spacing.xl": 24
}
```

This creates:
- `spacing.xs` = 8
- `spacing.sm` = 12
- `spacing.md` = 16
- `spacing.lg` = 20
- `spacing.xl` = 24

## Nested Tokens

Use indentation to create nested token groups:

**DSL Input:**
```tokenscript
colors
  primary
    main = #3B82F6
    light = #60A5FA
    dark = #2563EB
  secondary
    main = #8B5CF6
    light = #A78BFA
    dark = #7C3AED
```

**JSON Output:**
```json
{
  "colors.primary.main": "#3B82F6",
  "colors.primary.light": "#60A5FA",
  "colors.primary.dark": "#2563EB",
  "colors.secondary.main": "#8B5CF6",
  "colors.secondary.light": "#A78BFA",
  "colors.secondary.dark": "#7C3AED"
}
```

This creates tokens like `colors.primary.main`, `colors.primary.light`, etc.

## Complete Example

Here's a complete example combining everything:

**DSL Input:**
```tokenscript
// Base values
baseUnit = 8
primaryColor = #3B82F6

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
  secondary = #8B5CF6
  neutral
    light = #F3F4F6
    medium = #9CA3AF
    dark = #111827
```

**JSON Output:**
```json
{
  "baseUnit": 8,
  "primaryColor": "#3B82F6",
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 16,
  "spacing.lg": 20,
  "spacing.xl": 24,
  "typography.sm": 16,
  "typography.md": 20,
  "typography.lg": 25,
  "typography.xl": 31.25,
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6",
  "colors.neutral.light": "#F3F4F6",
  "colors.neutral.medium": "#9CA3AF",
  "colors.neutral.dark": "#111827"
}
```

This creates:
- A linear spacing scale from 8px to 24px
- A modular typography scale from 16px to 31.25px
- Color tokens for primary, secondary, and neutral colors

## Using Your Tokens

Once you've defined your tokens, you can:

1. **Use in Systematically** - Open Systematically and paste your DSL code
2. **Use in code** - Copy token values into your CSS, JavaScript, or design tools

## Next Steps

- **[Syntax Reference](../04-language-reference/01-syntax-reference.md)** - Complete guide to TokenScript syntax
- **[Creating Tokens](../03-creating-tokens/README.md)** - Learn to create different types of tokens
- **[Scales](../04-language-reference/02-scales.md)** - Deep dive on creating scales
- **[Best Practices](../06-best-practices/01-best-practices.md)** - Guidelines for maintainable token systems

## Key Concepts

### Assignments
The simplest form: `name = value`

### References
Use `$tokenName` to reference other tokens

### Scales
Use `/numberScale : linear` or `/numberScale : modular` to generate sequences

### Indentation
Use indentation (spaces or tabs) to create nested groups

### Comments
Use `//` for comments

## Getting Help

- Check the [Troubleshooting Guide](../07-help/01-troubleshooting.md) for common issues
- See the [FAQ](../07-help/02-faq.md) for answers to common questions
- Review the [Syntax Reference](../04-language-reference/01-syntax-reference.md) for complete syntax details

---

**Ready to learn more?** Continue to the [Syntax Reference](../04-language-reference/01-syntax-reference.md) or start [Creating Tokens](../03-creating-tokens/README.md)!

