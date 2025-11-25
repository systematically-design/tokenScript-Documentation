# Creating Color Scales

Color scales create systematic color palettes, from simple ramps to complex color systems. They're essential for building consistent color systems in your design tokens.

## Table of Contents

1. [What Are Color Scales?](#what-are-color-scales)
2. [Basic Color Scale](#basic-color-scale)
3. [Sequential Scales (Ramps)](#sequential-scales-ramps)
4. [Categorical Scales](#categorical-scales)
5. [Diverging Scales](#diverging-scales)
6. [Scale Parameters](#scale-parameters)
7. [Using Color Scales](#using-color-scales)
8. [Best Practices](#best-practices)

## What Are Color Scales?

Color scales generate a series of colors based on rules you define. Instead of manually picking individual colors, you define parameters (hue, lightness, chroma) and TokenScript generates harmonious color sequences.

**Example**: Instead of manually creating:
```
blue100 = #e3f2fd
blue200 = #bbdefb
blue300 = #90caf9
blue400 = #64b5f6
blue500 = #42a5f5
```

You create:
```
blue
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2
        steps = 5
```

## Basic Color Scale

### Simple Color Scale

**Syntax**:
```
groupName
    /colorScale
        hue = number
        lightness = number or stops(...)
        chroma = number or stops(...)
        steps = number or array
```

**Example**:
```
blue
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2
        steps = 5
```

This creates 5 shades of blue, from dark (20% lightness) to light (80% lightness).

### Understanding OKLCH

Color scales use OKLCH color space, which provides better color manipulation:
- **L** (Lightness): 0-100% - How light or dark
- **C** (Chroma): 0-0.4 - How saturated (intensity)
- **H** (Hue): 0-360° - The color itself (red, blue, etc.)

## Sequential Scales (Ramps)

Sequential scales progress from one value to another, perfect for creating light-to-dark or dark-to-light ramps.

### Light-to-Dark Ramp

**Example**:
```
blue
    /colorScale
        hue = 200
        lightness = stops(90, 20)  // Light to dark
        chroma = 0.2
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

Creates a blue scale from very light (50) to very dark (900).

### Dark-to-Light Ramp

**Example**:
```
gray
    /colorScale
        hue = 0  // Neutral (no hue)
        lightness = stops(10, 95)  // Dark to light
        chroma = 0.05  // Low saturation for grays
        steps = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50]
```

### Hue Progression

You can also progress through hues:

**Example**:
```
rainbow
    /colorScale
        hue = range(0, 360)  // Full color wheel
        lightness = 70
        chroma = 0.25
        steps = 12
```

Creates colors around the color wheel.

## Categorical Scales

Categorical scales create distinct, unrelated colors. Perfect for categories, tags, or groups that don't have an order.

### Basic Categorical Scale

**Example**:
```
categories
    /colorScale
        hue = stops(0, 120, 240, 300)  // Red, green, blue, magenta
        lightness = 65
        chroma = 0.25
        steps = [red, green, blue, purple]
```

### Spreading Colors Around the Wheel

**Example**:
```
statusColors
    /colorScale
        hue = stops(0, 120, 60, 300)  // Spread around wheel
        lightness = 70
        chroma = 0.3
        steps = [error, success, warning, info]
```

**Result**: Distinct colors for each status type.

## Diverging Scales

Diverging scales go from one extreme, through a neutral center, to another extreme. Perfect for data visualization or positive/negative values.

### Basic Diverging Scale

**Example**:
```
temperature
    /colorScale
        hue = stops(210, 10)  // Blue to red
        lightness = stops(50, 95, 50)  // Dark → light → dark
        chroma = stops(0.2, 0.05, 0.2)  // High → low → high
        steps = [cold, cool, neutral, warm, hot]
```

Creates a scale from blue (cold) through white (neutral) to red (hot).

### Positive/Negative Scale

**Example**:
```
sentiment
    /colorScale
        hue = stops(120, 0)  // Green to red
        lightness = stops(60, 90, 60)  // Medium → light → medium
        chroma = stops(0.25, 0.1, 0.25)
        steps = [negative, neutral, positive]
```

## Scale Parameters

### Hue

The color itself (0-360 degrees):
- `0` = Red
- `60` = Yellow
- `120` = Green
- `180` = Cyan
- `240` = Blue
- `300` = Magenta
- `360` = Back to red

**Single Hue**:
```
hue = 200  // Blue
```

**Hue Range**:
```
hue = range(200, 250)  // Blue to cyan progression
```

**Hue Stops**:
```
hue = stops(0, 120, 240)  // Red, green, blue
```

### Lightness

How light or dark (0-100%):
- `0` = Black
- `50` = Medium
- `100` = White

**Single Lightness**:
```
lightness = 70  // Medium-light
```

**Lightness Stops**:
```
lightness = stops(20, 80)  // Dark to light
lightness = stops(50, 95, 50)  // Dark → light → dark (diverging)
```

### Chroma

Saturation/intensity (0-0.4):
- `0` = Grayscale (no color)
- `0.1` = Muted colors
- `0.2` = Medium saturation
- `0.3+` = Vibrant colors

**Single Chroma**:
```
chroma = 0.2  // Medium saturation
```

**Chroma Stops**:
```
chroma = stops(0.2, 0.05)  // High to low saturation
chroma = stops(0.2, 0.05, 0.2)  // High → low → high
```

### Steps

Number of colors or step names:

**Number**:
```
steps = 5  // Creates 5 colors
```

**Named Steps**:
```
steps = [50, 100, 200, 300, 400, 500]
steps = [light, medium, dark]
steps = [cold, cool, neutral, warm, hot]
```

## Using Color Scales

### Accessing Individual Colors

```
blue
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2
        steps = [50, 100, 200, 300, 400, 500]

// Use individual colors
buttonBackground = $blue.500
cardBorder = $blue.200
textColor = $blue.900
```

### Referencing the Entire Scale

```
blue
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2
        steps = 5

// Reference all colors
allBlues = $...blue
```

## Best Practices

### Choose Appropriate Scale Type

**Sequential**: For ordered data (light → dark, low → high)
**Categorical**: For distinct categories (status types, tags)
**Diverging**: For data with center point (positive/negative, hot/cold)

### Use Meaningful Step Names

✅ **Good**:
```
steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
steps = [light, medium, dark]
steps = [cold, cool, neutral, warm, hot]
```

❌ **Avoid**:
```
steps = [1, 2, 3, 4, 5]
steps = [a, b, c, d, e]
```

### Consistent Chroma

Keep chroma consistent for cohesive palettes:

```
// Good - consistent chroma
primary
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2  // Same chroma
        steps = 5

secondary
    /colorScale
        hue = 120
        lightness = stops(20, 80)
        chroma = 0.2  // Same chroma
        steps = 5
```

### Appropriate Lightness Range

- **Full range**: `stops(10, 90)` - For complete palettes
- **Light range**: `stops(60, 95)` - For light themes
- **Dark range**: `stops(10, 50)` - For dark themes

### Document Your Choices

```
// Primary brand color scale
// Blue hue (200°) with medium saturation
// Range from dark (20%) to light (80%)
primary
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

## Common Patterns

### Pattern 1: Brand Color Scale

```
brand
    /colorScale
        hue = 200  // Your brand hue
        lightness = stops(20, 90)
        chroma = 0.25
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

### Pattern 2: Neutral Gray Scale

```
gray
    /colorScale
        hue = 0  // No hue (neutral)
        lightness = stops(5, 95)
        chroma = 0.02  // Very low saturation
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

### Pattern 3: Semantic Color Scales

```
// Success (green)
success
    /colorScale
        hue = 140
        lightness = stops(30, 80)
        chroma = 0.2
        steps = [50, 100, 200, 300, 400, 500]

// Error (red)
error
    /colorScale
        hue = 0
        lightness = stops(30, 80)
        chroma = 0.25
        steps = [50, 100, 200, 300, 400, 500]
```

### Pattern 4: Status Colors (Categorical)

```
status
    /colorScale
        hue = stops(0, 120, 60, 240)  // Red, green, yellow, blue
        lightness = 70
        chroma = 0.3
        steps = [error, success, warning, info]
```

## Troubleshooting

### Colors Look Wrong

- Check hue value (0-360)
- Verify lightness range makes sense
- Ensure chroma isn't too high (max ~0.4)

### Colors Too Similar

- Increase chroma for more saturation
- Widen lightness range
- Use different hues for categorical scales

### Colors Too Vibrant

- Lower chroma (try 0.1-0.2)
- Adjust lightness to middle range
- Use grayscale (chroma = 0) for neutrals

### Can't Reference Colors

- Check step names match exactly
- Verify scale was created successfully
- Use correct syntax: `$scaleName.stepName`

## Next Steps

Now that you understand color scales:

1. **[Color Harmonies](5.4-color-harmonies.md)** - Create harmonious color relationships
2. **[Typography Scales](5.5-typography-scales.md)** - Build typography systems
3. **[Advanced Tokens](5.6-advanced-tokens.md)** - Learn complex structures

---

**Tip**: Color scales are powerful! Start with sequential scales for your brand colors, then explore categorical and diverging scales for specific use cases. The visualizations will help you see how colors work together.

