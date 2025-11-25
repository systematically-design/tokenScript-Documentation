# Creating Simple Tokens

Simple tokens are the foundation of your design system. They're individual values like colors, spacing, and typography that you can reference throughout your tokens.

## Table of Contents

1. [What Are Simple Tokens?](#what-are-simple-tokens)
2. [Creating Color Tokens](#creating-color-tokens)
3. [Creating Spacing Tokens](#creating-spacing-tokens)
4. [Creating Typography Tokens](#creating-typography-tokens)
5. [Creating Other Simple Tokens](#creating-other-simple-tokens)
6. [Best Practices](#best-practices)

## What Are Simple Tokens?

Simple tokens are single values that represent design decisions:

- **Colors** - Brand colors, semantic colors, etc.
- **Spacing** - Individual spacing values
- **Typography** - Font families, font weights, etc.
- **Numbers** - Any numeric value (opacity, border radius, etc.)
- **Strings** - Text values (font names, etc.)

They're called "simple" because they're just one value, not scales or complex structures.

## Creating Color Tokens

Color tokens are the most common type of simple token.

### Basic Color Token

**Syntax**:
```
tokenName = #hexcolor
```

**Example**:
```
primaryColor = #007acc
secondaryColor = #00a86b
errorColor = #ff3333
```

### Color Formats

TokenScript supports multiple color formats:

**Hex Colors** (most common):
```
primaryColor = #007acc
secondaryColor = #00a86b
```

**HSL Colors**:
```
primaryColor = hsl(200, 100%, 50%)
```

**OKLCH Colors** (advanced, for better color manipulation):
```
primaryColor = oklch(70% 0.2 200deg)
```

### Organizing Color Tokens

Group related colors together:

```
// Brand Colors
primaryColor = #007acc
secondaryColor = #00a86b
accentColor = #ff6b35

// Semantic Colors
successColor = #00a86b
errorColor = #ff3333
warningColor = #ffaa00
infoColor = #007acc

// Neutral Colors
white = #ffffff
black = #000000
gray100 = #f5f5f5
gray900 = #1a1a1a
```

### Using Color Tokens

Reference color tokens in other tokens:

```
// Define colors
primaryColor = #007acc
secondaryColor = #00a86b

// Use them
buttonBackground = $primaryColor
linkColor = $secondaryColor
```

## Creating Spacing Tokens

Spacing tokens define distances and sizes.

### Basic Spacing Token

**Syntax**:
```
tokenName = numberpx
```

**Example**:
```
baseSpacing = 16px
smallSpacing = 8px
largeSpacing = 32px
```

### Common Spacing Values

```
// Base spacing unit
baseSpacing = 16px

// Common spacing values
xsSpacing = 4px
smSpacing = 8px
mdSpacing = 16px
lgSpacing = 24px
xlSpacing = 32px
xxlSpacing = 48px
```

### Spacing Units

You can use different units:

- `px` - Pixels (fixed size)
- `rem` - Relative to root font size
- `em` - Relative to parent font size
- `%` - Percentage

**Example**:
```
baseSpacing = 16px        // Fixed
relativeSpacing = 1rem    // Relative to root
parentSpacing = 1em       // Relative to parent
```

**Tip**: Use `rem` or `em` for responsive designs that scale with font size.

## Creating Typography Tokens

Typography tokens define text styling.

### Font Family

**Syntax**:
```
fontFamilyName = "Font Name"
```

**Example**:
```
primaryFont = "Inter"
secondaryFont = "Georgia"
monoFont = "Fira Code"
```

### Font Weight

**Syntax**:
```
fontWeightName = "weight"
```

**Example**:
```
fontWeightNormal = "400"
fontWeightMedium = "500"
fontWeightBold = "700"
```

**Common Weights**:
- `"100"` - Thin
- `"300"` - Light
- `"400"` - Regular/Normal
- `"500"` - Medium
- `"600"` - Semi-bold
- `"700"` - Bold
- `"800"` - Extra-bold
- `"900"` - Black

### Font Size

**Syntax**:
```
fontSizeName = numberpx
```

**Example**:
```
fontSizeSmall = 12px
fontSizeBase = 16px
fontSizeLarge = 24px
fontSizeXLarge = 32px
```

### Line Height

**Syntax**:
```
lineHeightName = number
```

**Example**:
```
lineHeightTight = 1.2
lineHeightNormal = 1.5
lineHeightRelaxed = 1.8
```

**Note**: Line height is usually a unitless number (ratio).

### Letter Spacing

**Syntax**:
```
letterSpacingName = numberpx
```

**Example**:
```
letterSpacingTight = -0.5px
letterSpacingNormal = 0px
letterSpacingWide = 1px
```

### Organizing Typography Tokens

Group typography tokens logically:

```
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

## Creating Other Simple Tokens

### Border Radius

```
borderRadiusSmall = 4px
borderRadiusMedium = 8px
borderRadiusLarge = 16px
borderRadiusRound = 999px
```

### Opacity

```
opacityDisabled = 0.5
opacityHover = 0.8
opacityOverlay = 0.9
```

### Shadows

```
shadowSmall = "0 1px 2px rgba(0,0,0,0.1)"
shadowMedium = "0 4px 6px rgba(0,0,0,0.1)"
shadowLarge = "0 10px 20px rgba(0,0,0,0.15)"
```

### Z-Index

```
zIndexDropdown = 1000
zIndexModal = 2000
zIndexTooltip = 3000
```

### Durations (Animation)

```
durationFast = 150ms
durationNormal = 300ms
durationSlow = 500ms
```

## Best Practices

### Naming Conventions

✅ **Good Names**:
- Descriptive: `primaryColor`, `baseSpacing`
- Consistent: Use the same pattern (`color`, `spacing`, etc.)
- Clear purpose: `errorColor` not `red`

❌ **Avoid**:
- Generic: `color1`, `spacing1`
- Unclear: `blue`, `big`
- Inconsistent: Mixing `color` and `Color`

### Organization

**Group Related Tokens**:
```
// Colors
primaryColor = #007acc
secondaryColor = #00a86b

// Spacing
baseSpacing = 16px
largeSpacing = 32px
```

**Use Comments**:
```
// Brand Colors
primaryColor = #007acc
secondaryColor = #00a86b

// Semantic Colors
successColor = #00a86b
errorColor = #ff3333
```

### Use References

Instead of duplicating values, use references:

❌ **Don't**:
```
buttonColor = #007acc
linkColor = #007acc  // Same value duplicated
```

✅ **Do**:
```
primaryColor = #007acc
buttonColor = $primaryColor
linkColor = $primaryColor
```

### Document Your Decisions

Add comments explaining why tokens exist:

```
// Primary brand color - used for main CTAs and primary actions
primaryColor = #007acc

// Base spacing unit - all spacing should be multiples of this
baseSpacing = 16px
```

## Common Patterns

### Pattern 1: Semantic Colors

```
// Semantic Colors
successColor = #00a86b
errorColor = #ff3333
warningColor = #ffaa00
infoColor = #007acc
```

### Pattern 2: Spacing Scale

```
// Spacing Scale
spacingXS = 4px
spacingSM = 8px
spacingMD = 16px
spacingLG = 24px
spacingXL = 32px
```

### Pattern 3: Typography System

```
// Typography
fontFamily = "Inter"
fontWeightNormal = "400"
fontWeightBold = "700"
fontSizeBase = 16px
lineHeightNormal = 1.5
```

### Pattern 4: Component Tokens

```
// Button Tokens
buttonPadding = 12px 24px
buttonBorderRadius = 8px
buttonFontWeight = "600"
```

## Troubleshooting

### Color Not Showing

- Check hex format: `#007acc` not `007acc`
- Verify color exists: Use a color picker to confirm
- Check for typos in token name

### Spacing Not Working

- Include unit: `16px` not `16`
- Check reference: `$baseSpacing` not `baseSpacing`
- Verify token exists

### Typography Not Applying

- Use quotes for strings: `"Inter"` not `Inter`
- Check font is available
- Verify reference syntax

## Next Steps

Now that you can create simple tokens:

1. **[Number Scales](5.2-number-scales.md)** - Create systematic spacing scales
2. **[Color Scales](5.3-color-scales.md)** - Build color palettes
3. **[Typography Scales](5.5-typography-scales.md)** - Create typography systems

---

**Tip**: Start with simple tokens to establish your foundation. You can always create scales later that build on these base values!

