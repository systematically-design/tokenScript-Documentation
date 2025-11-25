# 2.2 Working with Scales

Scales automatically generate multiple tokens from a mathematical pattern. They're perfect for creating consistent spacing, typography, and sizing systems.

## 2.2.1 Why Use Scales?

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

```tokenscript
// Do this instead
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

## 2.2.2 Linear Scales

Linear scales add a fixed amount each step. Perfect for spacing and sizing.

### Basic Linear Scale

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

### Using Peak Instead of Increment

Define the maximum value instead:

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

**Generated values:**
- `spacing.xs` = 8
- `spacing.sm` = 14.67 (evenly distributed)
- `spacing.md` = 21.33
- `spacing.lg` = 32

### Real-World Example: Spacing System

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

## 2.2.3 Modular Scales

Modular scales multiply by a ratio each step. Perfect for typography and proportional sizing.

### Basic Modular Scale

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

### Common Typography Ratios

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

### Using Peak Instead of Ratio

```tokenscript
typography
  /numberScale : modular
    base = 16
    peak = 48
    steps = ["sm", "md", "lg", "xl"]
```

The ratio is automatically calculated to reach the peak value.

## 2.2.4 Step Definitions

### Array of Names

```tokenscript
steps = ["xs", "sm", "md", "lg", "xl"]
```

### Number (Auto-named)

```tokenscript
steps = 5  // Creates "1", "2", "3", "4", "5"
```

### Comma-Separated String

```tokenscript
steps = "xs, sm, md, lg"
```

## 2.2.5 Applying Pipelines

### Round Values

Round to nearest unit:

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

### Transform Values

Apply calculations:

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  /transform(each * 1.5)
```

**Before transform:** 8, 12, 16  
**After transform:** 12, 18, 24

### Multiple Pipelines

Apply multiple transformations:

```tokenscript
spacing
  /numberScale : linear
    base = 7
    increment = 3
    steps = ["xs", "sm", "md"]
  /transform(each * 1.5)
  /roundTo(4)
```

## 2.2.6 Complete Examples

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

## 2.2.7 Tips

1. **Start with base values** - Define your base unit first
2. **Use meaningful step names** - `xs`, `sm`, `md` are better than `1`, `2`, `3`
3. **Round when needed** - Use `/roundTo()` for cleaner values
4. **Reference base values** - Use `$baseUnit` instead of repeating numbers
5. **Test your scales** - Make sure the generated values work in your design

## 2.2.8 Choosing Between Linear and Modular

**Use Linear for:**
- Spacing systems
- Border radius
- Z-index layers
- Any evenly-spaced values

**Use Modular for:**
- Typography scales
- Icon sizes
- Any proportional relationships

## 2.2.9 Next Steps

- Learn about Working with Typography
- Check Best Practices for guidelines

