# Spacing

Complete guide to spacing tokens and systems in TokenScript DSL.

## Quick Start

### Basic Spacing Tokens

**DSL Input:**
```tokenscript
spacing
  xs = 4
  sm = 8
  md = 16
  lg = 24
  xl = 32
```

**JSON Output:**
```json
{
  "spacing.xs": 4,
  "spacing.sm": 8,
  "spacing.md": 16,
  "spacing.lg": 24,
  "spacing.xl": 32
}
```

### Spacing Scales

Create systematic spacing systems:

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

**Generated values:**
- `spacing.xs` = 8
- `spacing.sm` = 12
- `spacing.md` = 16
- `spacing.lg` = 20
- `spacing.xl` = 24

## Complete Syntax Reference

### Basic Spacing Tokens

**Simple Values:**

**DSL Input:**
```tokenscript
spacing
  xs = 4
  sm = 8
  md = 16
  lg = 24
  xl = 32
```

**JSON Output:**
```json
{
  "spacing.xs": 4,
  "spacing.sm": 8,
  "spacing.md": 16,
  "spacing.lg": 24,
  "spacing.xl": 32
}
```

**With Units:**

**DSL Input:**
```tokenscript
baseSpacing = 16
smallSpacing = 8
largeSpacing = 32
```

**JSON Output:**
```json
{
  "baseSpacing": 16,
  "smallSpacing": 8,
  "largeSpacing": 32
}
```

### Spacing Scales

Use linear scales for spacing—they create evenly-spaced values.

**Basic Syntax:**

```tokenscript
groupName
  /numberScale : linear
    base = startingValue
    increment = amountToAdd
    steps = numberOfSteps or ["name1", "name2", ...]
```

**Using Base Unit:**

```tokenscript
// Base unit
baseUnit = 8

// Spacing scale
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
```

**Rounding Values:**

```tokenscript
spacing
  /numberScale : linear
    base = 7
    increment = 3
    steps = ["xs", "sm", "md"]
  /roundTo(4)
```

**Before rounding:** 7, 10, 13  
**After rounding:** 8, 12, 12

## Examples

### Standard Spacing Scale

```tokenscript
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl", "xxl"]
```

**Generated values:**
- `spacing.xs` = 4
- `spacing.sm` = 8
- `spacing.md` = 12
- `spacing.lg` = 16
- `spacing.xl` = 20
- `spacing.xxl` = 24

### Spacing System with Base Unit

```tokenscript
// Base unit
baseUnit = 8

// Spacing scale
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
  /roundTo(1)
```

### Common Spacing Values

```tokenscript
// Base spacing unit
baseSpacing = 16

// Common spacing values
xsSpacing = 4
smSpacing = 8
mdSpacing = 16
lgSpacing = 24
xlSpacing = 32
xxlSpacing = 48
```

## Best Practices

### Use Linear Scales for Spacing

Linear scales create evenly-spaced values perfect for spacing:

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

### Match Your Base Unit

Use a base that makes sense for your system:
- **8 base**: Common for spacing (divisible by 8)
- **4 base**: Tighter spacing system
- **16 base**: Larger spacing system

### Reference Base Values

Use references instead of repeating numbers:

```tokenscript
// Base unit
baseUnit = 8

// Spacing scale
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md"]
```

### Use Meaningful Step Names

✅ **Good:**
```tokenscript
steps = ["xs", "sm", "md", "lg", "xl"]
steps = ["tight", "normal", "relaxed"]
```

❌ **Avoid:**
```tokenscript
steps = [1, 2, 3, 4, 5]
steps = ["a", "b", "c", "d", "e"]
```

### Document Your Choices

Add comments explaining your spacing system:

```tokenscript
// Spacing scale - 8 base with 4 increments
// Provides consistent spacing from 8 to 32
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = 5
```

## Next Steps

- Learn about [Scales](02-scales.md) - Complete scales reference
- Explore [References](07-references.md) - Referencing spacing values
- Check [Syntax Basics](01-syntax-basics.md) - Basic syntax

