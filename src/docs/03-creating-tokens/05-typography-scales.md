# Creating Typography Scales

Typography scales create systematic typography systems with consistent font sizes, line heights, letter spacing, and more. They ensure your typography is harmonious and scalable.

## Table of Contents

1. [What Are Typography Scales?](#what-are-typography-scales)
2. [Basic Typography Scale](#basic-typography-scale)
3. [Typography Scale Components](#typography-scale-components)
4. [Advanced Typography Scales](#advanced-typography-scales)
5. [Using Typography Scales](#using-typography-scales)
6. [Best Practices](#best-practices)

## What Are Typography Scales?

Typography scales generate systematic typography values that work together harmoniously. Instead of manually picking font sizes, you define a scale and TokenScript generates consistent sizes, line heights, and spacing.

**Example**: Instead of manually creating:
```
fontSizeSmall = 12px
fontSizeBase = 16px
fontSizeLarge = 24px
fontSizeXLarge = 32px
```

You create:
```
typography
    /typographyScale
        sizes:params = [small, medium, large, xlarge]
        :fontSizes
            /numberScale : linear
                base = 12
                steps = $...sizes
```

## Basic Typography Scale

### Simple Typography Scale

**Syntax**:
```
groupName
    /typographyScale
        sizes:params = [stepNames]
        :fontSizes
            /numberScale : scaleType
                base = number
                steps = $...sizes
```

**Example**:
```
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

### Complete Typography Scale

A full typography scale includes multiple properties:

```
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

## Typography Scale Components

### Font Sizes

Font sizes define the size of text. Usually created with a modular scale for visual hierarchy.

**Example**:
```
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl]
        :fontSizes
            /numberScale : modular
                base = 12
                ratio = 1.25
                steps = $...sizes
```

**Result**: `[12px, 15px, 18.75px, 23.4px, 29.3px]`

### Line Heights

Line heights control vertical spacing between lines. Usually calculated from font sizes.

**Example**:
```
:lineHeights
    /transform(*range(1.2, 1.6))
    /roundTo(0.1)
```

This multiplies each font size by a value between 1.2 and 1.6, creating proportional line heights.

**Alternative**:
```
:lineHeights = $...fontSizes
    /transform(* 1.5)
    /roundTo(0.1)
```

Multiplies each font size by 1.5.

### Letter Spacing

Letter spacing controls horizontal spacing between characters.

**Example**:
```
:letterSpacing
    /transform(* 0.01)
    /roundTo(0.01)
```

Multiplies each font size by 0.01 for proportional letter spacing.

**Fixed Letter Spacing**:
```
:letterSpacing = [-0.5px, 0px, 0.5px, 1px, 1.5px]
```

### Paragraph Spacing

Spacing between paragraphs, usually related to font size.

**Example**:
```
:paragraphSpacing = $...fontSizes
    /transform(* 1.5)
    /roundTo(1)
```

Creates paragraph spacing that's 1.5× the font size.

## Advanced Typography Scales

### Complete Typography System

```
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl, xxl]
        :fontSizes
            /numberScale : modular
                base = 12
                peak = 48
                steps = $...sizes
            /roundTo(1)
        :lineHeights
            /transform(*range(1.2, 1.6))
            /roundTo(0.1)
        :letterSpacing
            /transform(* 0.01)
            /roundTo(0.01)
        :paragraphSpacing = $...fontSizes
            /transform(* 1.5)
            /roundTo(1)
```

### Responsive Typography Scale

Create different scales for different breakpoints:

```
// Mobile
typographyMobile
    /typographyScale
        sizes:params = [xs, sm, md, lg]
        :fontSizes
            /numberScale : modular
                base = 10
                ratio = 1.2
                steps = $...sizes

// Desktop
typographyDesktop
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl, xxl]
        :fontSizes
            /numberScale : modular
                base = 12
                ratio = 1.25
                steps = $...sizes
```

## Using Typography Scales

### Accessing Individual Values

```
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl]
        :fontSizes
            /numberScale : modular
                base = 12
                ratio = 1.25
                steps = $...sizes

// Use individual values
headingFontSize = $typography.fontSizes.xl
bodyFontSize = $typography.fontSizes.md
captionFontSize = $typography.fontSizes.xs
```

### Using Line Heights

```
headingLineHeight = $typography.lineHeights.xl
bodyLineHeight = $typography.lineHeights.md
```

### Creating Typography Styles

Combine values into typography styles:

```
// Heading Style
headingStyle
    fontSize = $typography.fontSizes.xl
    lineHeight = $typography.lineHeights.xl
    letterSpacing = $typography.letterSpacing.xl

// Body Style
bodyStyle
    fontSize = $typography.fontSizes.md
    lineHeight = $typography.lineHeights.md
    letterSpacing = $typography.letterSpacing.md
```

## Best Practices

### Use Modular Scales for Font Sizes

Modular scales create better visual hierarchy than linear scales:

✅ **Good**:
```
:fontSizes
    /numberScale : modular
        base = 12
        ratio = 1.25
        steps = $...sizes
```

❌ **Avoid**:
```
:fontSizes
    /numberScale : linear
        base = 12
        increment = 4
        steps = $...sizes
```

### Proportional Line Heights

Calculate line heights from font sizes for consistency:

```
:lineHeights = $...fontSizes
    /transform(* 1.5)
    /roundTo(0.1)
```

### Appropriate Base Size

Choose a base size that works for body text:

- **12px**: Small, compact designs
- **14px**: Standard web
- **16px**: Large, accessible designs
- **18px**: Very large, high-contrast designs

### Consistent Ratios

Use the same ratio throughout your typography system:

```
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl]
        :fontSizes
            /numberScale : modular
                base = 12
                ratio = 1.25  // Consistent ratio
                steps = $...sizes
```

### Document Your Choices

```
// Typography scale
// Modular scale with 1.25 ratio (major third)
// Base size: 12px (body text)
// Line heights: 1.2-1.6× font size
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl]
        :fontSizes
            /numberScale : modular
                base = 12
                ratio = 1.25
                steps = $...sizes
```

## Common Patterns

### Pattern 1: Standard Typography Scale

```
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl]
        :fontSizes
            /numberScale : modular
                base = 14
                ratio = 1.25
                steps = $...sizes
        :lineHeights
            /transform(*range(1.2, 1.6))
            /roundTo(0.1)
```

### Pattern 2: Compact Typography Scale

```
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg]
        :fontSizes
            /numberScale : modular
                base = 12
                ratio = 1.2
                steps = $...sizes
        :lineHeights
            /transform(* 1.4)
            /roundTo(0.1)
```

### Pattern 3: Large Typography Scale

```
typography
    /typographyScale
        sizes:params = [sm, md, lg, xl, xxl]
        :fontSizes
            /numberScale : modular
                base = 16
                ratio = 1.333
                steps = $...sizes
        :lineHeights
            /transform(*range(1.3, 1.7))
            /roundTo(0.1)
```

## Troubleshooting

### Font Sizes Too Similar

- Increase ratio (try 1.333 or 1.5)
- Use more steps
- Widen base-to-peak range

### Line Heights Too Tight/Loose

- Adjust transform multiplier
- Use range() for varied line heights
- Check base font size

### Values Not Generating

- Check parameter syntax (`sizes:params`)
- Verify number scale parameters
- Ensure proper indentation

### Can't Reference Values

- Check step names match exactly
- Verify scale was created successfully
- Use correct syntax: `$scaleName.propertyName.stepName`

## Next Steps

Now that you understand typography scales:

1. **[Advanced Tokens](5.6-advanced-tokens.md)** - Learn complex structures like typography streams
2. **[Visualizations](../6.0-visualizations.md)** - See your typography scales visualized
3. **[Workflows](../8.0-workflows.md)** - See real-world typography system examples

---

**Tip**: Typography scales are essential for consistent typography! Start with a modular scale for font sizes, then add line heights and letter spacing. The visualizations will help you see how your typography works together.

