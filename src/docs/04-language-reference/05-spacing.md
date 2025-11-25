# 2.5 Working with Spacing

Spacing tokens create consistent spacing systems for padding, margins, gaps, and layouts.

## 2.5.1 Basic Spacing Tokens

### Simple Values

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

## 2.5.2 Spacing Scales

Use linear scales for spacing - they create evenly-spaced values.

### Basic Spacing Scale

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

### Using Base Unit

Reference a base unit for consistency:

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

### Rounding Values

Round to whole numbers:

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

## 2.5.3 Common Spacing Systems

### 4px Base System

```tokenscript
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]
```

**Values:** 4, 8, 12, 16, 20, 24, 28

### 8px Base System

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
```

**Values:** 8, 16, 24, 32, 40, 48

### Mixed Increment System

```tokenscript
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

Then add larger values manually:

```tokenscript
spacing
  2xl = 48
  3xl = 64
  4xl = 96
```

## 2.5.4 Semantic Spacing Tokens

Define spacing by purpose, not just size:

```tokenscript
spacing
  // Component spacing
  component
    xs = 4
    sm = 8
    md = 16
    lg = 24
  
  // Layout spacing
  layout
    xs = 16
    sm = 24
    md = 32
    lg = 48
    xl = 64
```

## 2.5.5 Using Spacing in Components

### Padding

**DSL Input:**
```tokenscript
button
  padding
    x = $spacing.md
    y = $spacing.sm
```

**JSON Output:**
```json
{
  "button.padding.x": 16,
  "button.padding.y": 8
}
```

### Margin

**DSL Input:**
```tokenscript
card
  margin
    top = $spacing.lg
    bottom = $spacing.lg
    x = $spacing.md
```

**JSON Output:**
```json
{
  "card.margin.top": 24,
  "card.margin.bottom": 24,
  "card.margin.x": 16
}
```

### Gap

```tokenscript
grid
  gap = $spacing.md
```

## 2.5.6 Complete Spacing System

```tokenscript
// Base unit
baseUnit = 8

// Spacing scale
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]
  /roundTo(1)

// Additional large values
spacing
  4xl = 128
  5xl = 192
```

## 2.5.7 Spacing for Different Contexts

### Component Spacing

```tokenscript
spacing
  component
    tight = 4
    normal = 8
    comfortable = 16
    spacious = 24
```

### Layout Spacing

```tokenscript
spacing
  layout
    section = 64
    container = 32
    element = 16
```

### Content Spacing

```tokenscript
spacing
  content
    paragraph = 16
    heading = 24
    section = 48
```

## 2.5.8 Best Practices

1. **Use a base unit** - Start with 4px or 8px
2. **Create a scale** - Generate consistent values automatically
3. **Round values** - Use `/roundTo()` for cleaner numbers
4. **Use semantic names** - `spacing.md` not `spacing.16`
5. **Reference base unit** - Use `$baseUnit` for consistency
6. **Test in context** - Ensure spacing works in your designs

## 2.5.9 Common Patterns

### Material Design Spacing

```tokenscript
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

### Tailwind Spacing

```tokenscript
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["0", "px", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "9", "10", "11", "12", "14", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "72", "80", "96"]
```

Note: Tailwind uses fractional values. You may need to define some manually.

## 2.5.10 Next Steps

- Learn about Working with Scales
- Check Best Practices for guidelines

