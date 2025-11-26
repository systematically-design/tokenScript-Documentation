# Composite Tokens

Composite tokens group related design properties into structured tokens. Perfect for typography, borders, shadows, and transitions.

## Quick Start

### What are Composite Tokens?

Instead of separate tokens:

**DSL Input:**
```tokenscript
headingFontSize = 24
headingLineHeight = 1.5
headingFontWeight = 700
headingFontFamily = "Inter"
```

**JSON Output:**
```json
{
  "headingFontSize": 24,
  "headingLineHeight": 1.5,
  "headingFontWeight": 700,
  "headingFontFamily": "Inter"
}
```

Use a composite token:

**DSL Input:**
```tokenscript
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter"
```

**JSON Output (W3C Format):**
```json
{
  "heading": {
    "$type": "typography",
    "$value": {
      "fontSize": { "value": 24, "unit": "px" },
      "lineHeight": 1.5,
      "fontWeight": 700,
      "fontFamily": "Inter"
    }
  }
}
```

This creates a structured token that groups all typography properties together.

## Complete Syntax Reference

### Typography Composite

Groups font-related properties:

**DSL Input:**
```tokenscript
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter, sans-serif"
  letterSpacing = -0.025

body:typography
  fontSize = 16
  lineHeight = 1.5
  fontWeight = 400
  fontFamily = "Inter, sans-serif"
```

**JSON Output (W3C Format):**
```json
{
  "heading": {
    "$type": "typography",
    "$value": {
      "fontSize": { "value": 24, "unit": "px" },
      "lineHeight": 1.5,
      "fontWeight": 700,
      "fontFamily": "Inter, sans-serif",
      "letterSpacing": -0.025
    }
  },
  "body": {
    "$type": "typography",
    "$value": {
      "fontSize": { "value": 16, "unit": "px" },
      "lineHeight": 1.5,
      "fontWeight": 400,
      "fontFamily": "Inter, sans-serif"
    }
  }
}
```

**Required Properties:**
- `fontSize` - Font size in pixels
- `lineHeight` - Line height (unitless number)
- `fontWeight` - Font weight (number or string)
- `fontFamily` - Font family (string)

**Optional Properties:**
- `letterSpacing` - Letter spacing (with unit)

### Border Composite

Groups border properties:

**DSL Input:**
```tokenscript
border:border
  width = 1
  style = solid
  color = #000000
```

**JSON Output (W3C Format):**
```json
{
  "border": {
    "$type": "border",
    "$value": {
      "width": { "value": 1, "unit": "px" },
      "style": "solid",
      "color": "#000000"
    }
  }
}
```

**Properties:**
- `width` - Border width
- `style` - Border style (solid, dashed, dotted, etc.)
- `color` - Border color

### Shadow Composite

Groups shadow properties:

**DSL Input:**
```tokenscript
shadow:shadow
  offsetX = 0
  offsetY = 4
  blur = 8
  spread = 0
  color = rgba(0, 0, 0, 0.1)
```

**JSON Output (W3C Format):**
```json
{
  "shadow": {
    "$type": "shadow",
    "$value": {
      "offsetX": { "value": 0, "unit": "px" },
      "offsetY": { "value": 4, "unit": "px" },
      "blur": { "value": 8, "unit": "px" },
      "spread": { "value": 0, "unit": "px" },
      "color": "rgba(0, 0, 0, 0.1)"
    }
  }
}
```

**Properties:**
- `offsetX` - Horizontal offset
- `offsetY` - Vertical offset
- `blur` - Blur radius
- `spread` - Spread radius
- `color` - Shadow color

## Advanced Structures

### Typography Streams

Typography streams create complete typography systems with scales, styles, and matrices:

```tokenscript
typography
  /typographyStream
    scales
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
    styles
      fontWeight:params = [normal, bold]
      fontFamily = "Inter"
    /matrix
      [$...fontWeight] as weight
        [$...sizes] as size
          fontSize = $...fontSizes.{size}
          lineHeight = $...lineHeights.{size}
          fontFamily = $...fontFamily
          fontWeight = $...fontWeight.{weight}
```

### Matrices

Matrices create multi-dimensional combinations of values:

```tokenscript
buttonSizes
  /matrix
    [small, medium, large] as size
      [primary, secondary] as variant
        padding = [12 16, 16 24, 20 32]
        fontSize = [14, 16, 18]
```

Creates combinations:
- `small.primary.padding`, `small.primary.fontSize`
- `small.secondary.padding`, `small.secondary.fontSize`
- `medium.primary.padding`, `medium.primary.fontSize`
- etc.

### ForEach Loops

Generate tokens from a list:

```tokenscript
/forEach [xs, sm, md] as size
  margin = 8
  padding = 16
```

Creates: `xs.margin`, `xs.padding`, `sm.margin`, `sm.padding`, etc.

## Examples

### Typography System

```tokenscript
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter"

body:typography
  fontSize = 16
  lineHeight = 1.5
  fontWeight = 400
  fontFamily = "Inter"

caption:typography
  fontSize = 12
  lineHeight = 1.4
  fontWeight = 400
  fontFamily = "Inter"
```

### Border System

```tokenscript
border
  default:border
    width = 1
    style = solid
    color = #E5E7EB
  
  thick:border
    width = 2
    style = solid
    color = #D1D5DB
```

### Shadow System

```tokenscript
shadow
  small:shadow
    offsetX = 0
    offsetY = 1
    blur = 2
    spread = 0
    color = rgba(0, 0, 0, 0.1)
  
  medium:shadow
    offsetX = 0
    offsetY = 4
    blur = 6
    spread = 0
    color = rgba(0, 0, 0, 0.1)
  
  large:shadow
    offsetX = 0
    offsetY = 10
    blur = 20
    spread = 0
    color = rgba(0, 0, 0, 0.15)
```

## Best Practices

### Use Composite Tokens for Related Properties

Group properties that belong together:

```tokenscript
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter"
```

### Reference Values in Composites

You can reference other tokens in composite properties:

```tokenscript
baseFontSize = 16

heading:typography
  fontSize = $baseFontSize * 1.5
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter"
```

### Use Matrices for Combinations

When you need all combinations of properties:

```tokenscript
buttonSizes
  /matrix
    [small, medium, large] as size
      [primary, secondary] as variant
        padding = [12 16, 16 24, 20 32]
        fontSize = [14, 16, 18]
```

### Document Complex Structures

Add comments for complex structures:

```tokenscript
// Typography stream
// Creates complete typography system with:
// - Modular font size scale (1.25 ratio)
// - Proportional line heights (1.2-1.6×)
// - Matrix of all weight × size combinations
typography
  /typographyStream
    // ... structure
```

## Next Steps

- Learn about [Typography](04-typography.md) - Typography tokens
- Explore [References](07-references.md) - Referencing composite tokens
- Check [Expressions](08-expressions.md) - Using expressions in composites

