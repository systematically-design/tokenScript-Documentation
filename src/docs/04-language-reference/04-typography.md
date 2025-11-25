# 2.4 Working with Typography

Typography tokens define font families, sizes, weights, and other text properties. TokenScript makes it easy to create consistent typography systems.

## 2.4.1 Basic Typography Tokens

### Font Families

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

### Font Sizes

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

### Font Weights

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

## 2.4.2 Typography Scales

Use modular scales for typography - they create harmonious size relationships.

### Basic Typography Scale

**DSL Input:**
```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
```

**JSON Output:**
```json
{
  "typography.xs": 12.8,
  "typography.sm": 16,
  "typography.md": 20,
  "typography.lg": 25,
  "typography.xl": 31.25,
  "typography.2xl": 39.06
}
```

**Generated values:**
- `typography.xs` = 12.8
- `typography.sm` = 16
- `typography.md` = 20
- `typography.lg` = 25
- `typography.xl` = 31.25
- `typography.2xl` = 39.06

### Rounding Typography Values

Round to whole numbers for cleaner values:

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
  /roundTo(1)
```

**Rounded values:**
- `typography.xs` = 13
- `typography.sm` = 16
- `typography.md` = 20
- `typography.lg` = 25
- `typography.xl` = 31
- `typography.2xl` = 39

## 2.4.3 Common Typography Ratios

### Minor Third (1.2) - Subtle

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.2
    steps = ["sm", "md", "lg", "xl"]
```

Good for: Body text, subtle hierarchies

### Major Third (1.25) - Balanced

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]
```

Good for: General purpose, most common choice

### Perfect Fourth (1.333) - More Dramatic

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.333
    steps = ["sm", "md", "lg", "xl"]
```

Good for: Headings, strong hierarchies

### Golden Ratio (1.618) - Classic

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.618
    steps = ["sm", "md", "lg", "xl"]
```

Good for: Elegant, harmonious designs

## 2.4.4 Complete Typography System

### Font Families

```tokenscript
fonts
  sans = "Inter, system-ui, -apple-system, sans-serif"
  serif = "Georgia, serif"
  mono = "Menlo, Monaco, 'Courier New', monospace"
```

### Font Sizes

```tokenscript
// Base font size
baseFontSize = 16

// Typography scale
fontSize
  /numberScale : modular
    base = $baseFontSize
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]
  /roundTo(1)
```

### Line Heights

```tokenscript
lineHeight
  tight = 1.25
  normal = 1.5
  relaxed = 1.75
  loose = 2
```

### Font Weights

```tokenscript
fontWeight
  light = 300
  normal = 400
  medium = 500
  semibold = 600
  bold = 700
  extrabold = 800
```

### Letter Spacing

```tokenscript
letterSpacing
  tighter = -0.05em
  tight = -0.025em
  normal = 0
  wide = 0.025em
  wider = 0.05em
  widest = 0.1em
```

## 2.4.5 Composite Typography Tokens

Group related typography properties together:

```tokenscript
// Heading styles
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter, sans-serif"
  letterSpacing = -0.025em

// Body text
body:typography
  fontSize = 16
  lineHeight = 1.5
  fontWeight = 400
  fontFamily = "Inter, sans-serif"
```

## 2.4.6 Typography Scale Examples

### Material Design Style

```tokenscript
typography
  /numberScale : modular
    base = 12
    ratio = 1.167
    steps = ["caption", "body2", "body1", "subtitle2", "subtitle1", "h6", "h5", "h4", "h3", "h2", "h1"]
  /roundTo(1)
```

### Tailwind Style

```tokenscript
fontSize
  /numberScale : modular
    base = 12
    ratio = 1.25
    steps = ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"]
  /roundTo(1)
```

## 2.4.7 Responsive Typography

Define typography for different breakpoints:

```tokenscript
// Base typography
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]

// Mobile adjustments
typographyMobile
  /numberScale : modular
    base = 14
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]
```

## 2.4.8 Best Practices

1. **Start with base size** - Define your base font size first
2. **Use modular scales** - They create harmonious relationships
3. **Round values** - Use `/roundTo(1)` for cleaner numbers
4. **Define line heights** - Ensure good readability
5. **Consider font loading** - Use fallback fonts
6. **Test readability** - Ensure text is readable at all sizes

## 2.4.9 Common Patterns

### Complete Typography System

```tokenscript
// Base values
baseFontSize = 16
baseFontFamily = "Inter, system-ui, sans-serif"

// Font sizes
fontSize
  /numberScale : modular
    base = $baseFontSize
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
  /roundTo(1)

// Line heights
lineHeight
  tight = 1.25
  normal = 1.5
  relaxed = 1.75

// Font weights
fontWeight
  normal = 400
  medium = 500
  semibold = 600
  bold = 700
```

## 2.4.10 Next Steps

- Learn about [Working with Scales](./2.2-scales.md)
- Check [Best Practices](./3.2-best-practices.md) for guidelines

