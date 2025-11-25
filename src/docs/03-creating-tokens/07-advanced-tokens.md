# Advanced Tokens

Advanced tokens include complex structures like typography streams, matrices, and forEach loops. These are powerful features for creating sophisticated design systems.

## Table of Contents

1. [Typography Streams](#typography-streams)
2. [Matrices](#matrices)
3. [ForEach Loops](#foreach-loops)
4. [Transform Functions](#transform-functions)
5. [Combining Advanced Features](#combining-advanced-features)
6. [Best Practices](#best-practices)

## Typography Streams

Typography streams create complete typography systems with scales, styles, and matrices. They're the most comprehensive way to define typography.

### Basic Typography Stream

**Syntax**:
```
groupName
    /typographyStream
        // Define scales
        scales
            /typographyScale
                sizes:params = [stepNames]
                :fontSizes
                    /numberScale : scaleType
                        base = number
                        steps = $...sizes
        // Define styles
        styles
            // Style definitions
        // Generate matrix
        /matrix
            // Matrix generation
```

### Complete Example

```
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

This creates a matrix of typography styles combining all font weights with all sizes.

## Matrices

Matrices create multi-dimensional combinations of values. They're perfect for creating all combinations of properties.

### Basic Matrix

**Syntax**:
```
groupName
    /matrix
        [array1] as name1
            [array2] as name2
                property = value
```

### Simple Matrix Example

```
buttonSizes
    /matrix
        [small, medium, large] as size
            [primary, secondary] as variant
                padding = [12px 16px, 16px 24px, 20px 32px]
                fontSize = [14px, 16px, 18px]
```

Creates combinations:
- small + primary
- small + secondary
- medium + primary
- medium + secondary
- large + primary
- large + secondary

### Typography Matrix

```
typographyStyles
    /matrix
        [$...fontWeights] as weight
            [$...sizes] as size
                fontSize = $...fontSizes.{size}
                lineHeight = $...lineHeights.{size}
                fontWeight = $...fontWeights.{weight}
```

### Color × Size Matrix

```
components
    /matrix
        [$...colors] as color
            [small, medium, large] as size
                backgroundColor = $...colors.{color}
                padding = [8px, 12px, 16px]
                fontSize = [12px, 14px, 16px]
```

## ForEach Loops

ForEach loops iterate over collections to create multiple tokens or transformations.

### Basic ForEach

**Syntax**:
```
groupName
    /forEach [collection] as itemName
        {itemName}
            property = value
```

### Color Scale ForEach

```
colorScales
    baseColors
        /colorHarmony : balanced
            base = 0
            steps = [red, green, blue]
            lightness = 70
            chroma = 0.25
    scales
        /forEach [$$baseColors] as color
            {color}
                /colorScale
                    base = $$baseColors.{color}
                    steps = [100, 200, 300, 400, 500]
                    lightness = stops(20, 80)
                    chroma = 0.2
```

This creates a color scale for each base color.

### Typography ForEach

```
responsiveTypography
    breakpoints:params = [mobile, tablet, desktop]
    /forEach [$$breakpoints] as breakpoint
        {breakpoint}
            /typographyScale
                sizes:params = [xs, sm, md, lg]
                :fontSizes
                    /numberScale : modular
                        base = [10, 12, 14][$$breakpoints.{breakpoint}]
                        ratio = 1.25
                        steps = $...sizes
```

## Transform Functions

Transform functions modify values mathematically.

### Basic Transform

**Syntax**:
```
property
    /transform(operation)
```

### Multiply Transform

```
lineHeights = $...fontSizes
    /transform(* 1.5)
    /roundTo(0.1)
```

Multiplies each font size by 1.5.

### Range Transform

```
lineHeights = $...fontSizes
    /transform(*range(1.2, 1.6))
    /roundTo(0.1)
```

Multiplies each font size by a value between 1.2 and 1.6, distributed across the range.

### Round Transform

```
fontSizes
    /numberScale : modular
        base = 12
        ratio = 1.25
        steps = 5
    /roundTo(1)
```

Rounds values to 1 decimal place.

### Multiple Transforms

```
lineHeights = $...fontSizes
    /transform(* 1.5)
    /transform(+ 2)
    /roundTo(0.1)
```

Applies multiple transformations in sequence.

## Combining Advanced Features

### Complete Typography System

```
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
                :letterSpacing
                    /transform(* 0.01)
                    /roundTo(0.01)
        styles
            fontWeight:params = [normal, medium, bold]
            fontFamily = "Inter"
        /matrix
            [$...fontWeight] as weight
                [$...sizes] as size
                    fontSize = $...fontSizes.{size}
                    lineHeight = $...lineHeights.{size}
                    letterSpacing = $...letterSpacing.{size}
                    fontFamily = $...fontFamily
                    fontWeight = $...fontWeight.{weight}
```

### Color System with Scales

```
colors
    baseColors
        /colorHarmony : balanced
            base = 0
            steps = [primary, secondary, accent]
            lightness = 70
            chroma = 0.25
    scales
        /forEach [$$baseColors] as color
            {color}
                /colorScale
                    base = $$baseColors.{color}
                    steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
                    lightness = stops(20, 90)
                    chroma = 0.2
```

## Best Practices

### Start Simple

Begin with basic structures and add complexity gradually:

1. Create simple scales
2. Add transforms
3. Combine with matrices
4. Use forEach for repetition

### Use Comments

Document complex structures:

```
// Typography stream
// Creates complete typography system with:
// - Modular font size scale (1.25 ratio)
// - Proportional line heights (1.2-1.6×)
// - Matrix of all weight × size combinations
typography
    /typographyStream
        // ... structure
```

### Test Incrementally

Build and test each part:

1. Create the scale
2. Verify it works
3. Add transforms
4. Verify transforms
5. Add matrix
6. Verify matrix

### Keep It Readable

Break complex structures into logical sections:

```
typography
    /typographyStream
        // Scales
        scales
            // ... scale definitions
        
        // Styles
        styles
            // ... style definitions
        
        // Matrix
        /matrix
            // ... matrix generation
```

### Reuse Patterns

Create reusable patterns:

```
// Reusable typography scale pattern
typographyScalePattern
    sizes:params = [xs, sm, md, lg, xl]
    :fontSizes
        /numberScale : modular
            base = 12
            ratio = 1.25
            steps = $...sizes
```

## Common Patterns

### Pattern 1: Complete Design System

```
designSystem
    colors
        // Color scales
    spacing
        // Spacing scales
    typography
        // Typography stream
    components
        // Component matrices
```

### Pattern 2: Responsive System

```
responsive
    mobile
        // Mobile tokens
    tablet
        // Tablet tokens
    desktop
        // Desktop tokens
```

### Pattern 3: Theme System

```
themes
    light
        // Light theme tokens
    dark
        // Dark theme tokens
```

## Troubleshooting

### Matrix Not Generating

- Check array syntax: `[item1, item2]`
- Verify variable names match
- Ensure proper indentation

### ForEach Not Working

- Check collection syntax: `[$$collection]`
- Verify item name: `as itemName`
- Ensure collection exists

### Transform Errors

- Check transform syntax
- Verify value types match
- Test transforms individually

### Complex Structure Issues

- Break into smaller parts
- Test each component
- Check indentation carefully

## Next Steps

Now that you understand advanced tokens:

1. **[Visualizations](../6.0-visualizations.md)** - See your advanced tokens visualized
2. **[Workflows](../8.0-workflows.md)** - See real-world examples
3. **[Troubleshooting](../9.0-troubleshooting.md)** - Fix common issues

---

**Tip**: Advanced tokens are powerful but can be complex. Start simple, test often, and build up gradually. Use comments to document your structures, and don't be afraid to break complex tokens into smaller, manageable pieces!

