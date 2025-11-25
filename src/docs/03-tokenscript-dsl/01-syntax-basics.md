# Syntax Basics

Learn the fundamental TokenScript DSL syntax for creating simple tokens—the foundation of your design system.

## Quick Start

### Basic Assignment

The simplest form: `name = value`

**DSL Input:**
```tokenscript
spacing = 8
color = #ff0000
label = "Hello World"
enabled = true
```

**JSON Output:**
```json
{
  "spacing": 8,
  "color": "#ff0000",
  "label": "Hello World",
  "enabled": true
}
```

### Comments

Use `//` for comments:

```tokenscript
// This is a comment
spacing = 8  // Inline comment
```

### Nested Groups

Use indentation (spaces or tabs) to create nested groups:

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6
  secondary = #8B5CF6
  neutral
    light = #F3F4F6
    dark = #111827
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6",
  "colors.neutral.light": "#F3F4F6",
  "colors.neutral.dark": "#111827"
}
```

This creates tokens: `colors.primary`, `colors.secondary`, `colors.neutral.light`, `colors.neutral.dark`

## Value Types

### Numbers

**DSL Input:**
```tokenscript
spacing = 8
fontSize = 16.5
ratio = 1.25
```

**JSON Output:**
```json
{
  "spacing": 8,
  "fontSize": 16.5,
  "ratio": 1.25
}
```

### Strings

**DSL Input:**
```tokenscript
fontFamily = "Inter"
label = "Primary Button"
// Unquoted strings work too
fontFamily = Inter
```

**JSON Output:**
```json
{
  "fontFamily": "Inter",
  "label": "Primary Button"
}
```

### Colors

Multiple color formats supported:

```tokenscript
// Hex colors
primary = #3B82F6
shortHex = #f00
withAlpha = #3B82F680

// RGB/RGBA
rgbColor = rgb(59, 130, 246)
rgbaColor = rgba(59, 130, 246, 0.5)

// HSL/HSLA
hslColor = hsl(217, 91%, 60%)
hslaColor = hsla(217, 91%, 60%, 0.5)

// OKLCH
oklchColor = oklch(0.65, 0.2, 250)

// Named colors
namedColor = blue
```

### Booleans

**DSL Input:**
```tokenscript
enabled = true
disabled = false
```

**JSON Output:**
```json
{
  "enabled": true,
  "disabled": false
}
```

## Creating Simple Tokens

### Color Tokens

```tokenscript
// Brand Colors
primaryColor = #007acc
secondaryColor = #00a86b
accentColor = #ff6b35

// Semantic Colors
successColor = #00a86b
errorColor = #ff3333
warningColor = #ffaa00
infoColor = #007acc
```

### Spacing Tokens

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

### Typography Tokens

```tokenscript
// Font Families
primaryFont = "Inter"
secondaryFont = "Georgia"

// Font Weights
fontWeightNormal = "400"
fontWeightBold = "700"

// Font Sizes
fontSizeSmall = 12px
fontSizeBase = 16px
fontSizeLarge = 24px

// Line Heights
lineHeightNormal = 1.5
lineHeightRelaxed = 1.8
```

### Other Simple Tokens

```tokenscript
// Border Radius
borderRadiusSmall = 4px
borderRadiusMedium = 8px

// Opacity
opacityDisabled = 0.5
opacityHover = 0.8

// Shadows
shadowSmall = "0 1px 2px rgba(0,0,0,0.1)"

// Z-Index
zIndexDropdown = 1000
zIndexModal = 2000

// Durations
durationFast = 150ms
durationNormal = 300ms
```

## References

Reference other tokens using `$`:

**DSL Input:**
```tokenscript
baseSpacing = 8
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

**Nested References:**

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6

button
  backgroundColor = $colors.primary
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "button.backgroundColor": "#3B82F6"
}
```

## Type Annotations

Specify token types using `:type`:

**DSL Input:**
```tokenscript
// Color type
primary:color = #3B82F6

// Spacing type
padding:spacing = 16

// Multiple tokens with same type
colors : colors
  primary = #3B82F6
  secondary = #8B5CF6
```

**JSON Output:**
```json
{
  "primary": "#3B82F6",
  "padding": 16,
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6"
}
```

## Best Practices

### Naming Conventions

✅ **Good Names:**
- Descriptive: `primaryColor`, `baseSpacing`
- Consistent: Use the same pattern (`color`, `spacing`, etc.)
- Clear purpose: `errorColor` not `red`

❌ **Avoid:**
- Generic: `color1`, `spacing1`
- Unclear: `blue`, `big`
- Inconsistent: Mixing `color` and `Color`

### Organization

**Group Related Tokens:**

```tokenscript
// Colors
primaryColor = #007acc
secondaryColor = #00a86b

// Spacing
baseSpacing = 16px
largeSpacing = 32px
```

**Use Comments:**

```tokenscript
// Brand Colors
primaryColor = #007acc
secondaryColor = #00a86b

// Semantic Colors
successColor = #00a86b
errorColor = #ff3333
```

### Use References

Instead of duplicating values, use references:

❌ **Don't:**
```tokenscript
buttonColor = #007acc
linkColor = #007acc  // Same value duplicated
```

✅ **Do:**
```tokenscript
primaryColor = #007acc
buttonColor = $primaryColor
linkColor = $primaryColor
```

## Next Steps

- Learn about [Scales](02-scales.md) - Generate sequences automatically
- Explore [Colors](03-colors.md) - Color scales and harmonies
- Check [References](07-references.md) - Advanced referencing
