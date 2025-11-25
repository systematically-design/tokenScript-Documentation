# Spacing

Complete guide to spacing tokens and systems in TokenScript DSL.

## Quick Start

### Basic Spacing Tokens

```tokenscript
spacing
  xs = 4
  sm = 8
  md = 16
  lg = 24
  xl = 32
```

### Spacing Scales

Create systematic spacing systems:

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
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

```tokenscript
spacing
  xs = 4
  sm = 8
  md = 16
  lg = 24
  xl = 32
```

**With Units:**

```tokenscript
baseSpacing = 16px
smallSpacing = 8px
largeSpacing = 32px
```

**Spacing Units:**
- `px` - Pixels (fixed size)
- `rem` - Relative to root font size
- `em` - Relative to parent font size
- `%` - Percentage

**Example:**
```tokenscript
baseSpacing = 16px        // Fixed
relativeSpacing = 1rem     // Relative to root
parentSpacing = 1em        // Relative to parent
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
baseSpacing = 16px

// Common spacing values
xsSpacing = 4px
smSpacing = 8px
mdSpacing = 16px
lgSpacing = 24px
xlSpacing = 32px
xxlSpacing = 48px
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
- **8px base**: Common for spacing (divisible by 8)
- **4px base**: Tighter spacing system
- **16px base**: Larger spacing system

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
// Spacing scale - 8px base with 4px increments
// Provides consistent spacing from 8px to 32px
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

