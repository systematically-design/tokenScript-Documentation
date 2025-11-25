# Creating Color Harmonies

Color harmonies create relationships between colors based on color theory principles. They're perfect for creating palettes that work well together, like complementary colors or analogous color schemes.

## Table of Contents

1. [What Are Color Harmonies?](#what-are-color-harmonies)
2. [Harmony Types](#harmony-types)
3. [Creating Color Harmonies](#creating-color-harmonies)
4. [Harmony Parameters](#harmony-parameters)
5. [Using Color Harmonies](#using-color-harmonies)
6. [Best Practices](#best-practices)

## What Are Color Harmonies?

Color harmonies generate colors that have specific relationships on the color wheel. Instead of manually picking colors that "go together," you define a harmony type and TokenScript generates colors that follow color theory principles.

**Example**: Instead of manually picking:
```
color1 = #ff6b6b  // Red
color2 = #4ecdc4  // Teal
color3 = #ffe66d  // Yellow
```

You create:
```
palette
    /colorHarmony : balanced
        base = 30
        steps = 3
        lightness = 70
        chroma = 0.25
```

## Harmony Types

TokenScript supports three harmony types:

### Analogous

Colors that are next to each other on the color wheel. They create harmonious, cohesive palettes.

**Best for**: Creating cohesive color schemes, brand palettes, subtle variations

**Example**:
```
warmPalette
    /colorHarmony : analogous
        base = 30  // Starting hue (orange)
        steps = 5
        lightness = 70
        chroma = 0.25
```

Creates colors around orange (red-orange, orange, yellow-orange).

### Complementary

Colors that are opposite on the color wheel. They create high contrast and visual interest.

**Best for**: Accent colors, call-to-action buttons, high-contrast designs

**Example**:
```
contrastPalette
    /colorHarmony : complementary
        base = 200  // Starting hue (blue)
        steps = 2
        lightness = 70
        chroma = 0.25
```

Creates blue and its complement (orange).

### Balanced

Colors evenly distributed around the color wheel. They create vibrant, diverse palettes.

**Best for**: Data visualization, status colors, diverse color needs

**Example**:
```
vibrantPalette
    /colorHarmony : balanced
        base = 0  // Starting hue (red)
        steps = 6
        lightness = 70
        chroma = 0.3
```

Creates 6 colors evenly spaced around the color wheel.

## Creating Color Harmonies

### Basic Syntax

```
groupName
    /colorHarmony : harmonyType
        base = hueValue
        steps = number or array
        lightness = number
        chroma = number
```

### Analogous Harmony

**Example**:
```
warmColors
    /colorHarmony : analogous
        base = 30  // Orange
        steps = 5
        lightness = 70
        chroma = 0.25
```

**Result**: Creates 5 colors close together on the color wheel (red-orange, orange, yellow-orange, etc.)

### Complementary Harmony

**Example**:
```
brandColors
    /colorHarmony : complementary
        base = 200  // Blue
        steps = 2
        lightness = 70
        chroma = 0.25
```

**Result**: Creates blue and orange (opposites on the color wheel)

### Balanced Harmony

**Example**:
```
statusColors
    /colorHarmony : balanced
        base = 0  // Red
        steps = 4
        lightness = 70
        chroma = 0.3
```

**Result**: Creates 4 colors evenly spaced (red, yellow, cyan, magenta)

## Harmony Parameters

### Base

The starting hue (0-360 degrees). This determines where on the color wheel your harmony starts.

**Examples**:
```
base = 0    // Red
base = 60   // Yellow
base = 120  // Green
base = 200  // Blue
base = 300  // Magenta
```

### Steps

How many colors to generate, or names for each color.

**Number**:
```
steps = 3  // Creates 3 colors
```

**Named Steps**:
```
steps = [primary, secondary, accent]
steps = [red, orange, yellow]
```

### Lightness

How light or dark the colors are (0-100%).

**Common Values**:
- `50-60` - Darker, more saturated
- `70-75` - Medium-light (good default)
- `80-90` - Very light, pastel

**Example**:
```
palette
    /colorHarmony : analogous
        base = 200
        steps = 5
        lightness = 70  // Medium-light
        chroma = 0.25
```

### Chroma

Saturation/intensity (0-0.4).

**Common Values**:
- `0.1` - Muted, subtle
- `0.2-0.25` - Medium saturation (good default)
- `0.3+` - Vibrant, intense

**Example**:
```
palette
    /colorHarmony : balanced
        base = 0
        steps = 6
        lightness = 70
        chroma = 0.3  // Vibrant
```

## Using Color Harmonies

### Accessing Individual Colors

```
brandColors
    /colorHarmony : complementary
        base = 200
        steps = [primary, accent]
        lightness = 70
        chroma = 0.25

// Use individual colors
buttonBackground = $brandColors.primary
linkColor = $brandColors.accent
```

### Referencing the Entire Harmony

```
palette
    /colorHarmony : balanced
        base = 0
        steps = 6
        lightness = 70
        chroma = 0.3

// Reference all colors
allColors = $...palette
```

## Best Practices

### Choose the Right Harmony Type

**Analogous**: For cohesive, harmonious palettes
- Brand colors
- Theme colors
- Subtle variations

**Complementary**: For high contrast
- Accent colors
- Call-to-action buttons
- Visual interest

**Balanced**: For diverse palettes
- Status colors
- Data visualization
- Multiple distinct colors

### Consistent Lightness and Chroma

Keep lightness and chroma consistent for cohesive palettes:

```
// Good - consistent parameters
warmPalette
    /colorHarmony : analogous
        base = 30
        steps = 5
        lightness = 70  // Same lightness
        chroma = 0.25    // Same chroma

coolPalette
    /colorHarmony : analogous
        base = 200
        steps = 5
        lightness = 70  // Same lightness
        chroma = 0.25    // Same chroma
```

### Use Meaningful Step Names

✅ **Good**:
```
steps = [primary, secondary, accent]
steps = [red, orange, yellow]
steps = [warm, neutral, cool]
```

❌ **Avoid**:
```
steps = [1, 2, 3]
steps = [a, b, c]
```

### Start with Your Brand Color

Use your primary brand color as the base:

```
brandColors
    /colorHarmony : complementary
        base = 200  // Your brand hue
        steps = [primary, accent]
        lightness = 70
        chroma = 0.25
```

### Document Your Choices

```
// Brand color harmony
// Complementary colors based on primary blue (200°)
// Medium-light (70%) with medium saturation (0.25)
brandColors
    /colorHarmony : complementary
        base = 200
        steps = [primary, accent]
        lightness = 70
        chroma = 0.25
```

## Common Patterns

### Pattern 1: Brand Palette (Complementary)

```
brand
    /colorHarmony : complementary
        base = 200  // Your brand hue
        steps = [primary, accent]
        lightness = 70
        chroma = 0.25
```

### Pattern 2: Warm Palette (Analogous)

```
warm
    /colorHarmony : analogous
        base = 30  // Orange
        steps = [red, orange, yellow]
        lightness = 70
        chroma = 0.25
```

### Pattern 3: Status Colors (Balanced)

```
status
    /colorHarmony : balanced
        base = 0  // Red
        steps = [error, warning, success, info]
        lightness = 70
        chroma = 0.3
```

### Pattern 4: Theme Colors (Analogous)

```
theme
    /colorHarmony : analogous
        base = 200  // Blue
        steps = [primary, secondary, accent]
        lightness = 70
        chroma = 0.2
```

## Troubleshooting

### Colors Too Similar

- Use `balanced` harmony for more variety
- Increase chroma for more saturation
- Use more steps for more colors

### Colors Don't Work Together

- Try `analogous` for harmonious colors
- Adjust lightness to similar values
- Keep chroma consistent

### Colors Too Vibrant

- Lower chroma (try 0.15-0.2)
- Adjust lightness to middle range (60-75)
- Use fewer steps

### Can't Reference Colors

- Check step names match exactly
- Verify harmony was created successfully
- Use correct syntax: `$harmonyName.stepName`

## Next Steps

Now that you understand color harmonies:

1. **[Typography Scales](5.5-typography-scales.md)** - Build typography systems
2. **[Advanced Tokens](5.6-advanced-tokens.md)** - Learn complex structures
3. **[Visualizations](../6.0-visualizations.md)** - See your harmonies visualized

---

**Tip**: Color harmonies are great for creating cohesive color systems! Start with complementary harmonies for brand colors, then explore analogous and balanced harmonies for different use cases. The visualizations will show you how colors work together.

