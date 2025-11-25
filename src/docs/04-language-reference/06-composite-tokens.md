# 3.3 Composite Tokens

Composite tokens group related design properties into structured tokens. Perfect for typography, borders, shadows, and transitions.

## 3.3.1 What are Composite Tokens?

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

## 3.3.2 Typography Composite

Groups font-related properties:

**DSL Input:**
```tokenscript
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter, sans-serif"
  letterSpacing = -0.025em

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
      "letterSpacing": "-0.025em"
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

### Required Properties

- `fontSize` - Font size in pixels
- `lineHeight` - Line height (number or unit)
- `fontWeight` - Font weight (number or keyword)
- `fontFamily` - Font family stack
- `letterSpacing` - Letter spacing

### Optional Properties

- `textTransform` - uppercase, lowercase, capitalize
- `textDecoration` - underline, line-through
- `fontStyle` - italic, normal
- `fontVariant` - small-caps, normal
- `fontStretch` - condensed, normal, expanded

## 3.3.3 Border Composite

Groups border properties:

```tokenscript
borderDefault:border
  width = 1
  style = solid
  color = #E5E7EB

borderPrimary:border
  width = 2
  style = solid
  color = #3B82F6
```

### Required Properties

- `width` - Border width
- `style` - solid, dashed, dotted, etc.
- `color` - Border color

## 3.3.4 Shadow Composite

Groups shadow properties:

**DSL Input:**
```tokenscript
shadowSm:shadow
  offsetX = 0
  offsetY = 1
  blur = 2
  spread = 0
  color = rgba(0, 0, 0, 0.05)

shadowMd:shadow
  offsetX = 0
  offsetY = 4
  blur = 6
  spread = -1
  color = rgba(0, 0, 0, 0.1)
```

**JSON Output (W3C Format):**
```json
{
  "shadowSm": {
    "$type": "shadow",
    "$value": {
      "offsetX": { "value": 0, "unit": "px" },
      "offsetY": { "value": 1, "unit": "px" },
      "blur": { "value": 2, "unit": "px" },
      "spread": { "value": 0, "unit": "px" },
      "color": "rgba(0, 0, 0, 0.05)"
    }
  },
  "shadowMd": {
    "$type": "shadow",
    "$value": {
      "offsetX": { "value": 0, "unit": "px" },
      "offsetY": { "value": 4, "unit": "px" },
      "blur": { "value": 6, "unit": "px" },
      "spread": { "value": -1, "unit": "px" },
      "color": "rgba(0, 0, 0, 0.1)"
    }
  }
}
```

### Required Properties

- `offsetX` - Horizontal offset
- `offsetY` - Vertical offset
- `blur` - Blur radius
- `spread` - Spread radius
- `color` - Shadow color

### Optional Properties

- `inset` - true for inset shadows

## 3.3.5 Transition Composite

Groups transition properties:

```tokenscript
transitionFast:transition
  duration = 150ms
  delay = 0ms
  timingFunction = cubic-bezier(0.4, 0, 0.2, 1)

transitionNormal:transition
  duration = 300ms
  delay = 0ms
  timingFunction = cubic-bezier(0.4, 0, 0.2, 1)
```

### Required Properties

- `duration` - Transition duration
- `delay` - Transition delay
- `timingFunction` - Easing function

## 3.3.6 Using References

Reference other tokens in composite properties:

```tokenscript
// Base values
baseFontSize = 16
primaryColor = #3B82F6

// Typography with references
heading:typography
  fontSize = $baseFontSize * 1.5
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter"

// Border with color reference
borderPrimary:border
  width = 1
  style = solid
  color = $primaryColor
```

## 3.3.7 Complete Examples

### Typography System

```tokenscript
// Typography tokens
heading1:typography
  fontSize = 32
  lineHeight = 1.2
  fontWeight = 700
  fontFamily = "Inter, sans-serif"
  letterSpacing = -0.025em

heading2:typography
  fontSize = 24
  lineHeight = 1.3
  fontWeight = 600
  fontFamily = "Inter, sans-serif"
  letterSpacing = -0.02em

body:typography
  fontSize = 16
  lineHeight = 1.5
  fontWeight = 400
  fontFamily = "Inter, sans-serif"

caption:typography
  fontSize = 12
  lineHeight = 1.4
  fontWeight = 400
  fontFamily = "Inter, sans-serif"
```

### Shadow System

```tokenscript
shadowSm:shadow
  offsetX = 0
  offsetY = 1
  blur = 2
  spread = 0
  color = rgba(0, 0, 0, 0.05)

shadowMd:shadow
  offsetX = 0
  offsetY = 4
  blur = 6
  spread = -1
  color = rgba(0, 0, 0, 0.1)

shadowLg:shadow
  offsetX = 0
  offsetY = 10
  blur = 15
  spread = -3
  color = rgba(0, 0, 0, 0.1)

shadowXl:shadow
  offsetX = 0
  offsetY = 20
  blur = 25
  spread = -5
  color = rgba(0, 0, 0, 0.1)
```

### Border System

```tokenscript
borderDefault:border
  width = 1
  style = solid
  color = #E5E7EB

borderPrimary:border
  width = 1
  style = solid
  color = #3B82F6

borderError:border
  width = 2
  style = solid
  color = #EF4444
```

## 3.3.8 Best Practices

1. **Use for related properties** - Group properties that belong together
2. **Reference base values** - Use `$baseFontSize` instead of hardcoding
3. **Be consistent** - Use the same structure across similar tokens
4. **Document required properties** - Add comments explaining what's needed
5. **Test in context** - Verify composite tokens work in your designs

## 3.3.9 Export Format

Composite tokens export as structured objects:

```json
{
  "heading": {
    "$type": "typography"
    "$value": {
      "fontSize": { "value": 24, "unit": "px" }
      "lineHeight": 1.5
      "fontWeight": 700
      "fontFamily": "Inter, sans-serif"
    }
  }
}
```

## 3.3.10 Next Steps

- Learn about Working with Typography
- Check Best Practices for guidelines

