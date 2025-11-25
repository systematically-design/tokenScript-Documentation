# Colors

Complete guide to working with colors in TokenScript DSL—from basic color tokens to color scales and harmonies.

## Quick Start

### Basic Color Tokens

**DSL Input:**
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

**JSON Output:**
```json
{
  "primaryColor": "#007acc",
  "secondaryColor": "#00a86b",
  "accentColor": "#ff6b35",
  "successColor": "#00a86b",
  "errorColor": "#ff3333",
  "warningColor": "#ffaa00",
  "infoColor": "#007acc"
}
```

### Color Formats

TokenScript supports multiple color formats:

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

// OKLCH (perceptually uniform)
oklchColor = oklch(0.65, 0.2, 250)

// Named colors
namedColor = blue
```

### Color Scales

Create systematic color palettes:

```tokenscript
blue
  /colorScale
    hue = 200
    lightness = stops(20, 80)
    chroma = 0.2
    steps = 5
```

This creates 5 shades of blue, from dark (20% lightness) to light (80% lightness).

### Color Harmonies

Create harmonious color relationships:

```tokenscript
palette
  /colorHarmony : balanced
    base = 0
    steps = 6
    lightness = 70
    chroma = 0.3
```

Creates 6 colors evenly spaced around the color wheel.

## Complete Syntax Reference

### Color Formats

**Hex Colors:**

**DSL Input:**
```tokenscript
primary = #3B82F6        // Standard hex
accent = #f00            // Short hex (3 digits)
overlay = #3B82F680      // With alpha channel (8 digits)
```

**JSON Output:**
```json
{
  "primary": "#3B82F6",
  "accent": "#f00",
  "overlay": "#3B82F680"
}
```

**RGB/RGBA:**

**DSL Input:**
```tokenscript
primary = rgb(59, 130, 246)
overlay = rgba(59, 130, 246, 0.5)
```

**JSON Output:**
```json
{
  "primary": "rgb(59, 130, 246)",
  "overlay": "rgba(59, 130, 246, 0.5)"
}
```

**HSL/HSLA:**

**DSL Input:**
```tokenscript
primary = hsl(217, 91%, 60%)
overlay = hsla(217, 91%, 60%, 0.5)
```

**JSON Output:**
```json
{
  "primary": "hsl(217, 91%, 60%)",
  "overlay": "hsla(217, 91%, 60%, 0.5)"
}
```

**OKLCH:**

**DSL Input:**
```tokenscript
primary = oklch(0.65, 0.2, 250)
```

**JSON Output:**
```json
{
  "primary": "oklch(0.65, 0.2, 250)"
}
```

**Named Colors:**

**DSL Input:**
```tokenscript
primary = blue
background = white
text = black
```

**JSON Output:**
```json
{
  "primary": "blue",
  "background": "white",
  "text": "black"
}
```

### Color Scales

Color scales generate a series of colors based on OKLCH parameters.

**Basic Syntax:**

```tokenscript
groupName
  /colorScale
    hue = number or stops(...)
    lightness = number or stops(...)
    chroma = number or stops(...)
    steps = number or array
```

**Parameters:**
- `hue` - Color itself (0-360 degrees)
- `lightness` - How light or dark (0-100%)
- `chroma` - Saturation/intensity (0-0.4)
- `steps` - Number of colors or array of names

**Understanding OKLCH:**
- **L** (Lightness): 0-100% - How light or dark
- **C** (Chroma): 0-0.4 - How saturated (intensity)
- **H** (Hue): 0-360° - The color itself (red, blue, etc.)

**Sequential Scales (Ramps):**

```tokenscript
// Light-to-dark ramp
blue
  /colorScale
    hue = 200
    lightness = stops(90, 20)  // Light to dark
    chroma = 0.2
    steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

// Dark-to-light ramp
gray
  /colorScale
    hue = 0  // Neutral (no hue)
    lightness = stops(10, 95)  // Dark to light
    chroma = 0.05  // Low saturation for grays
    steps = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50]
```

**Categorical Scales:**

```tokenscript
categories
  /colorScale
    hue = stops(0, 120, 240, 300)  // Red, green, blue, magenta
    lightness = 65
    chroma = 0.25
    steps = [red, green, blue, purple]
```

**Diverging Scales:**

```tokenscript
temperature
  /colorScale
    hue = stops(210, 10)  // Blue to red
    lightness = stops(50, 95, 50)  // Dark → light → dark
    chroma = stops(0.2, 0.05, 0.2)  // High → low → high
    steps = [cold, cool, neutral, warm, hot]
```

### Color Harmonies

Color harmonies generate colors with specific relationships on the color wheel.

**Basic Syntax:**

```tokenscript
groupName
  /colorHarmony : harmonyType
    base = hueValue
    steps = number or array
    lightness = number
    chroma = number
```

**Harmony Types:**

**Analogous** - Colors next to each other on the color wheel:
```tokenscript
warmPalette
  /colorHarmony : analogous
    base = 30  // Starting hue (orange)
    steps = 5
    lightness = 70
    chroma = 0.25
```

**Complementary** - Colors opposite on the color wheel:
```tokenscript
contrastPalette
  /colorHarmony : complementary
    base = 200  // Starting hue (blue)
    steps = 2
    lightness = 70
    chroma = 0.25
```

**Balanced** - Colors evenly distributed around the color wheel:
```tokenscript
vibrantPalette
  /colorHarmony : balanced
    base = 0  // Starting hue (red)
    steps = 6
    lightness = 70
    chroma = 0.3
```

## Examples

### Simple Color System

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6
  secondary = #8B5CF6
  success = #10B981
  warning = #F59E0B
  error = #EF4444
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6",
  "colors.success": "#10B981",
  "colors.warning": "#F59E0B",
  "colors.error": "#EF4444"
}
```

### Nested Color System

**DSL Input:**
```tokenscript
colors
  primary
    main = #3B82F6
    light = #60A5FA
    dark = #2563EB
  secondary
    main = #8B5CF6
    light = #A78BFA
    dark = #7C3AED
  neutral
    light = #F3F4F6
    medium = #9CA3AF
    dark = #111827
```

**JSON Output:**
```json
{
  "colors.primary.main": "#3B82F6",
  "colors.primary.light": "#60A5FA",
  "colors.primary.dark": "#2563EB",
  "colors.secondary.main": "#8B5CF6",
  "colors.secondary.light": "#A78BFA",
  "colors.secondary.dark": "#7C3AED",
  "colors.neutral.light": "#F3F4F6",
  "colors.neutral.medium": "#9CA3AF",
  "colors.neutral.dark": "#111827"
}
```

### Material Design Style Color Scale

```tokenscript
colors
  primary
    50 = #EFF6FF
    100 = #DBEAFE
    200 = #BFDBFE
    300 = #93C5FD
    400 = #60A5FA
    500 = #3B82F6
    600 = #2563EB
    700 = #1D4ED8
    800 = #1E40AF
    900 = #1E3A8A
```

## Best Practices

### Use Semantic Names

✅ **Good:**
```tokenscript
colors
  semantic
    success = #10B981
    error = #EF4444
    warning = #F59E0B
```

❌ **Avoid:**
```tokenscript
colors
  green = #10B981
  red = #EF4444
  yellow = #F59E0B
```

### Organize by Purpose

```tokenscript
colors
  // Brand colors
  brand
    primary = #3B82F6
    secondary = #8B5CF6
  
  // Semantic colors
  semantic
    success = #10B981
    warning = #F59E0B
    error = #EF4444
  
  // UI colors
  ui
    background = #FFFFFF
    surface = #F9FAFB
    border = #E5E7EB
```

### Use Color Scales for Consistency

Instead of manually picking colors, use scales:

```tokenscript
blue
  /colorScale
    hue = 200
    lightness = stops(20, 80)
    chroma = 0.2
    steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

### Reference Base Colors

```tokenscript
// Base color
primaryBase = #3B82F6

// Variations
colors
  primary = $primaryBase
  primaryLight = #60A5FA
  primaryDark = #2563EB
```

## Next Steps

- Learn about [Typography](04-typography.md) - Typography tokens
- Explore [Scales](02-scales.md) - Number scales
- Check [References](07-references.md) - Referencing colors

