# Scales

Scales automatically generate multiple tokens from a mathematical pattern. They're perfect for creating consistent spacing, typography, and sizing systems.

## Quick Start

### Why Use Scales?

Instead of manually defining each value:

```tokenscript
// Don't do this
spacing
  xs = 4
  sm = 8
  md = 12
  lg = 16
  xl = 20
```

Use a scale to generate them automatically:

**DSL Input:**
```tokenscript
// Do this instead
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

**JSON Output:**
```json
{
  "spacing.xs": 4,
  "spacing.sm": 8,
  "spacing.md": 12,
  "spacing.lg": 16,
  "spacing.xl": 20
}
```

### Creating Your First Scale

**Linear Scale** (adds the same amount each step):

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

**Modular Scale** (multiplies by a ratio each step):

**DSL Input:**
```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]
```

**JSON Output:**
```json
{
  "typography.sm": 16,
  "typography.md": 20,
  "typography.lg": 25,
  "typography.xl": 31.25
}
```

**Generated values:**
- `typography.sm` = 16
- `typography.md` = 20 (16 × 1.25)
- `typography.lg` = 25 (20 × 1.25)
- `typography.xl` = 31.25 (25 × 1.25)

## Complete Syntax Reference

### Linear Scales

Linear scales add a fixed amount each step. Perfect for spacing and sizing.

**Basic Syntax:**

```tokenscript
groupName
  /numberScale : linear
    base = startingValue
    increment = amountToAdd
    steps = numberOfSteps or ["name1", "name2", ...]
```

**Parameters:**
- `base` (required) - Starting value
- `increment` - Amount to add each step
- `peak` - Maximum value (alternative to increment, evenly distributes)
- `steps` - Number of steps or array of step names

**Example with named steps:**

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

**Example with peak:**

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    peak = 32
    steps = ["xs", "sm", "md", "lg"]
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 14.67,
  "spacing.md": 21.33,
  "spacing.lg": 32
}
```

This evenly distributes values from 8 to 32.

### Modular Scales

Modular scales multiply by a ratio each step. Perfect for typography and proportional sizing.

**Basic Syntax:**

```tokenscript
groupName
  /numberScale : modular
    base = startingValue
    ratio = multiplier
    steps = numberOfSteps or ["name1", "name2", ...]
```

**Parameters:**
- `base` (required) - Starting value
- `ratio` - Multiplier for each step
- `peak` - Maximum value (alternative to ratio, calculates ratio automatically)
- `steps` - Number of steps or array of step names

**Common Typography Ratios:**

```tokenscript
// Minor third (1.2) - subtle, readable
typography
  /numberScale : modular
    base = 16
    ratio = 1.2
    steps = ["sm", "md", "lg", "xl"]

// Major third (1.25) - balanced, common
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]

// Perfect fourth (1.333) - more dramatic
typography
  /numberScale : modular
    base = 16
    ratio = 1.333
    steps = ["sm", "md", "lg", "xl"]

// Golden ratio (1.618) - classic, harmonious
typography
  /numberScale : modular
    base = 16
    ratio = 1.618
    steps = ["sm", "md", "lg", "xl"]
```

### Step Definitions

Steps can be defined in multiple ways:

**Array of names:**

```tokenscript
steps = ["xs", "sm", "md", "lg", "xl"]
```

**Number (auto-named):**

```tokenscript
steps = 5  // Creates "1", "2", "3", "4", "5"
```

**Comma-separated string:**

```tokenscript
steps = "xs, sm, md, lg"
```

### Pipelines

Apply transformations to scales:

**Round Values:**

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 7
    increment = 3
    steps = ["xs", "sm", "md"]
  /roundTo(4)
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 12
}
```

**Before rounding:** 7, 10, 13  
**After rounding:** 8, 12, 12

**Transform Values:**

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  /transform(each * 1.5)
```

**JSON Output:**
```json
{
  "spacing.xs": 12,
  "spacing.sm": 18,
  "spacing.md": 24
}
```

**Before transform:** 8, 12, 16  
**After transform:** 12, 18, 24

Available variables in transform:
- `each` or `value` - Current value
- `index` - Current index (0-based)
- `size` - Total number of values

**Multiple Pipelines:**

```tokenscript
spacing
  /numberScale : linear
    base = 7
    increment = 3
    steps = ["xs", "sm", "md"]
  /transform(each * 1.5)
  /roundTo(4)
```

### Using Scale Values

**Accessing Individual Steps:**

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]

// Use individual steps
buttonPadding = $spacing.md
cardMargin = $spacing.lg
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 16,
  "spacing.lg": 20,
  "spacing.xl": 24,
  "buttonPadding": 16,
  "cardMargin": 20
}
```

**Referencing the Entire Scale:**

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = 5

// Reference all spacing values
componentSpacings = $...spacing
```

## Examples

### Spacing System

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

### Typography Scale

```tokenscript
// Base font size
baseFontSize = 16

// Typography scale
typography
  /numberScale : modular
    base = $baseFontSize
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
  /roundTo(1)
```

### Border Radius Scale

```tokenscript
borderRadius
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["sm", "md", "lg", "xl"]
```

### Z-Index Scale

```tokenscript
zIndex
  /numberScale : linear
    base = 0
    increment = 10
    steps = ["base", "dropdown", "sticky", "modal", "popover", "tooltip"]
```

## Best Practices

### Choose the Right Scale Type

**Use Linear For:**
- Spacing systems
- Border radius
- Z-index layers
- Any evenly-spaced values

**Use Modular For:**
- Typography scales
- Icon sizes
- Any proportional relationships

### Start Small

Begin with fewer steps and add more as needed:

```tokenscript
// Start with 5 steps
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = 5

// Add more later if needed
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

### Document Your Choices

Add comments explaining your scale:

```tokenscript
// Spacing scale - 8px base with 4px increments
// Provides consistent spacing from 8px to 32px
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = 5
```

## Troubleshooting

### Values Not Generating

- Check `steps` parameter: Must be a number or array
- Verify `base` and `increment`/`ratio` are numbers
- Ensure proper indentation

### Wrong Values

- **Linear**: Check `increment` is correct
- **Modular**: Verify `ratio` or `peak` makes sense
- **Steps**: Ensure you have enough steps

### Can't Reference Steps

- Use correct syntax: `$scaleName.stepName`
- Check step names match exactly
- Verify scale was created successfully

## Next Steps

- Learn about [Colors](03-colors.md) - Color scales and harmonies
- Explore [Typography](04-typography.md) - Typography scales
- Check [References](07-references.md) - Referencing scale values

