# Typography

Complete guide to typography tokens and scales in TokenScript DSL.

## Quick Start

### Basic Typography Tokens

**DSL Input:**
```tokenscript
// Font Families
fonts
  sans = "Inter, system-ui, sans-serif"
  serif = "Georgia, serif"
  mono = "Menlo, monospace"

// Font Sizes
fontSize
  xs = 12
  sm = 14
  md = 16
  lg = 18
  xl = 20

// Font Weights
fontWeight
  light = 300
  normal = 400
  medium = 500
  semibold = 600
  bold = 700

// Line Heights
lineHeight
  tight = 1.2
  normal = 1.5
  relaxed = 1.8
```

**JSON Output:**
```json
{
  "fonts.sans": "Inter, system-ui, sans-serif",
  "fonts.serif": "Georgia, serif",
  "fonts.mono": "Menlo, monospace",
  "fontSize.xs": 12,
  "fontSize.sm": 14,
  "fontSize.md": 16,
  "fontSize.lg": 18,
  "fontSize.xl": 20,
  "fontWeight.light": 300,
  "fontWeight.normal": 400,
  "fontWeight.medium": 500,
  "fontWeight.semibold": 600,
  "fontWeight.bold": 700,
  "lineHeight.tight": 1.2,
  "lineHeight.normal": 1.5,
  "lineHeight.relaxed": 1.8
}
```

### Typography Scales

Create systematic typography systems:

```tokenscript
typography
  /typographyScale
    sizes:params = [xs, sm, md, lg, xl]
    :fontSizes
      /numberScale : modular
        base = 12
        ratio = 1.25
        steps = $...sizes
```

This creates font sizes: `[12, 15, 18.75, 23.4, 29.3]`

## Complete Syntax Reference

### Basic Typography Tokens

**Font Families:**

**DSL Input:**
```tokenscript
fonts
  sans = "Inter, system-ui, sans-serif"
  serif = "Georgia, serif"
  mono = "Menlo, monospace"
```

**JSON Output:**
```json
{
  "fonts.sans": "Inter, system-ui, sans-serif",
  "fonts.serif": "Georgia, serif",
  "fonts.mono": "Menlo, monospace"
}
```

**Font Sizes:**

**DSL Input:**
```tokenscript
fontSize
  xs = 12
  sm = 14
  md = 16
  lg = 18
  xl = 20
```

**JSON Output:**
```json
{
  "fontSize.xs": 12,
  "fontSize.sm": 14,
  "fontSize.md": 16,
  "fontSize.lg": 18,
  "fontSize.xl": 20
}
```

**Font Weights:**

**DSL Input:**
```tokenscript
fontWeight
  light = 300
  normal = 400
  medium = 500
  semibold = 600
  bold = 700
```

**JSON Output:**
```json
{
  "fontWeight.light": 300,
  "fontWeight.normal": 400,
  "fontWeight.medium": 500,
  "fontWeight.semibold": 600,
  "fontWeight.bold": 700
}
```

**Common Weights:**
- `100` - Thin
- `300` - Light
- `400` - Regular/Normal
- `500` - Medium
- `600` - Semi-bold
- `700` - Bold
- `800` - Extra-bold
- `900` - Black

**Line Heights:**

```tokenscript
lineHeight
  tight = 1.2
  normal = 1.5
  relaxed = 1.8
```

**Letter Spacing:**

```tokenscript
letterSpacing
  tight = -0.5
  normal = 0
  wide = 1
```

### Typography Scales

Typography scales generate systematic typography values that work together harmoniously.

**Basic Syntax:**

```tokenscript
groupName
  /typographyScale
    sizes:params = [stepNames]
    :fontSizes
      /numberScale : scaleType
        base = number
        steps = $...sizes
```

**Complete Typography Scale:**

```tokenscript
typography
  /typographyScale
    sizes:params = [xs, sm, md, lg, xl]
    :fontSizes
      /numberScale : modular
        base = 12
        ratio = 1.25
        steps = $...sizes
    :lineHeights
      /transform(*range(1.2, 1.6))
      /roundTo(0.1)
    :letterSpacing
      /transform(* 0.01)
      /roundTo(0.01)
```

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

## Examples

### Simple Typography System

```tokenscript
// Font Families
primaryFont = "Inter"
secondaryFont = "Georgia"

// Font Weights
fontWeightNormal = "400"
fontWeightBold = "700"

// Font Sizes
fontSizeSmall = 12
fontSizeBase = 16
fontSizeLarge = 24

// Line Heights
lineHeightNormal = 1.5
lineHeightRelaxed = 1.8
```

### Typography Scale with Modular Ratio

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
  /roundTo(1)
```

**Generated values:**
- `typography.xs` = 16
- `typography.sm` = 20
- `typography.md` = 25
- `typography.lg` = 31.25
- `typography.xl` = 39.06
- `typography.2xl` = 48.83

### Complete Typography System

```tokenscript
typography
  /typographyScale
    sizes:params = [xs, sm, md, lg, xl]
    :fontSizes
      /numberScale : modular
        base = 12
        ratio = 1.25
        steps = $...sizes
    :lineHeights
      /transform(*range(1.2, 1.6))
      /roundTo(0.1)
    :letterSpacing
      /transform(* 0.01)
      /roundTo(0.01)
```

## Best Practices

### Use Modular Scales for Typography

Modular scales create harmonious size relationships perfect for typography:

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]
```

### Round Typography Values

Rounding makes values cleaner:

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg"]
  /roundTo(1)
```

### Match Line Heights to Font Sizes

Use proportional line heights:

```tokenscript
typography
  /typographyScale
    sizes:params = [xs, sm, md, lg, xl]
    :fontSizes
      /numberScale : modular
        base = 12
        ratio = 1.25
        steps = $...sizes
    :lineHeights
      /transform(*range(1.2, 1.6))
      /roundTo(0.1)
```

### Organize Typography Tokens

```tokenscript
// Font Families
fonts
  sans = "Inter"
  serif = "Georgia"

// Font Weights
fontWeight
  normal = 400
  bold = 700

// Font Sizes
fontSize
  small = 12
  base = 16
  large = 24

// Line Heights
lineHeight
  normal = 1.5
  relaxed = 1.8
```

## Next Steps

- Learn about [Scales](02-scales.md) - Number scales
- Explore [Composite Tokens](06-composite-tokens.md) - Typography composite tokens
- Check [References](07-references.md) - Referencing typography values

