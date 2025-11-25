# Creating Number Scales

Number scales create systematic sequences of numbers, perfect for spacing, sizing, and other numeric design tokens. They ensure consistency and make it easy to maintain proportional relationships.

## Table of Contents

1. [What Are Number Scales?](#what-are-number-scales)
2. [Linear Scales](#linear-scales)
3. [Modular Scales](#modular-scales)
4. [Scale Parameters](#scale-parameters)
5. [Using Scale Values](#using-scale-values)
6. [Best Practices](#best-practices)

## What Are Number Scales?

Number scales generate a sequence of numbers based on rules you define. Instead of manually creating individual spacing values, you define a pattern and TokenScript generates the values.

**Example**: Instead of:
```
spacing1 = 4px
spacing2 = 8px
spacing3 = 12px
spacing4 = 16px
spacing5 = 20px
```

You create:
```
spacing
    /numberScale : linear
        base = 4
        increment = 4
        steps = 5
```

This automatically generates: `[4, 8, 12, 16, 20]`

## Linear Scales

Linear scales add the same amount each step. They're perfect for consistent spacing increments.

### Basic Linear Scale

**Syntax**:
```
groupName
    /numberScale : linear
        base = startingValue
        increment = amountToAdd
        steps = numberOfSteps
```

**Example**:
```
spacing
    /numberScale : linear
        base = 8
        increment = 4
        steps = 5
```

**Result**: `[8, 12, 16, 20, 24]`

### Real-World Example: Spacing Scale

```
spacing
    /numberScale : linear
        base = 4
        increment = 4
        steps = 8
```

**Generated Values**:
- Step 1: `4px`
- Step 2: `8px`
- Step 3: `12px`
- Step 4: `16px`
- Step 5: `20px`
- Step 6: `24px`
- Step 7: `28px`
- Step 8: `32px`

### Real-World Example: Border Radius Scale

```
borderRadius
    /numberScale : linear
        base = 2
        increment = 2
        steps = 5
```

**Generated Values**: `[2px, 4px, 6px, 8px, 10px]`

## Modular Scales

Modular scales multiply by a ratio each step. They create more dramatic progressions, perfect for typography and larger spacing systems.

### Basic Modular Scale

**Syntax**:
```
groupName
    /numberScale : modular
        base = startingValue
        ratio = multiplier
        steps = numberOfSteps
```

**Example**:
```
spacing
    /numberScale : modular
        base = 8
        ratio = 1.5
        steps = 5
```

**Result**: `[8, 12, 18, 27, 40.5]` (each step is 1.5× the previous)

### Modular Scale with Peak

You can also define a peak value:

**Syntax**:
```
groupName
    /numberScale : modular
        base = startingValue
        peak = endingValue
        steps = numberOfSteps
```

**Example**:
```
spacing
    /numberScale : modular
        base = 8
        peak = 64
        steps = 5
```

TokenScript calculates the ratio needed to go from `base` to `peak` in `steps` steps.

### Common Ratios

**Golden Ratio** (1.618):
```
spacing
    /numberScale : modular
        base = 8
        ratio = 1.618
        steps = 5
```

**Major Third** (1.25):
```
spacing
    /numberScale : modular
        base = 16
        ratio = 1.25
        steps = 6
```

**Perfect Fourth** (1.333):
```
spacing
    /numberScale : modular
        base = 12
        ratio = 1.333
        steps = 5
```

## Scale Parameters

### Base

The starting value of your scale.

```
spacing
    /numberScale : linear
        base = 8  // Starts at 8
        increment = 4
        steps = 5
```

### Increment (Linear Only)

How much to add each step.

```
spacing
    /numberScale : linear
        base = 8
        increment = 4  // Add 4 each time
        steps = 5
```

### Ratio (Modular Only)

The multiplier for each step.

```
spacing
    /numberScale : modular
        base = 8
        ratio = 1.5  // Multiply by 1.5 each time
        steps = 5
```

### Peak (Modular Only)

The ending value. TokenScript calculates the ratio.

```
spacing
    /numberScale : modular
        base = 8
        peak = 64  // End at 64
        steps = 5
```

### Steps

How many values to generate.

```
spacing
    /numberScale : linear
        base = 8
        increment = 4
        steps = 5  // Generate 5 values
```

## Using Scale Values

### Accessing Individual Steps

Scale values are accessed by step name or index:

```
spacing
    /numberScale : linear
        base = 8
        increment = 4
        steps = [xs, sm, md, lg, xl]

// Use individual steps
buttonPadding = $spacing.md
cardMargin = $spacing.lg
```

### Step Names

You can name your steps:

```
spacing
    /numberScale : linear
        base = 8
        increment = 4
        steps = [xs, sm, md, lg, xl]
```

**Access**:
```
smallPadding = $spacing.xs
mediumPadding = $spacing.md
largePadding = $spacing.xl
```

### Referencing the Entire Scale

Use `$...scaleName` to reference all values:

```
spacing
    /numberScale : linear
        base = 8
        increment = 4
        steps = 5

// Reference all spacing values
componentSpacings = $...spacing
```

## Best Practices

### Choose the Right Scale Type

**Use Linear For**:
- Consistent spacing increments
- Predictable progressions
- Simple spacing systems

**Use Modular For**:
- Typography scales
- Larger spacing systems
- More dramatic progressions
- Visual hierarchy

### Start Small

Begin with fewer steps and add more as needed:

```
// Start with 5 steps
spacing
    /numberScale : linear
        base = 8
        increment = 4
        steps = 5

// Add more later if needed
```

### Use Meaningful Step Names

Name your steps descriptively:

✅ **Good**:
```
steps = [xs, sm, md, lg, xl]
steps = [tight, normal, relaxed]
steps = [small, medium, large]
```

❌ **Avoid**:
```
steps = [1, 2, 3, 4, 5]
steps = [a, b, c, d, e]
```

### Match Your Base Unit

Use a base that makes sense for your system:

- **8px base**: Common for spacing (divisible by 8)
- **4px base**: Tighter spacing system
- **16px base**: Larger spacing system

### Document Your Choices

Add comments explaining your scale:

```
// Spacing scale - 8px base with 4px increments
// Provides consistent spacing from 8px to 32px
spacing
    /numberScale : linear
        base = 8
        increment = 4
        steps = 5
```

## Common Patterns

### Pattern 1: Standard Spacing Scale

```
spacing
    /numberScale : linear
        base = 4
        increment = 4
        steps = [xs, sm, md, lg, xl, xxl]
```

### Pattern 2: Typography Scale (Modular)

```
fontSizes
    /numberScale : modular
        base = 12
        ratio = 1.25
        steps = [xs, sm, base, lg, xl, xxl]
```

### Pattern 3: Border Radius Scale

```
borderRadius
    /numberScale : linear
        base = 2
        increment = 2
        steps = [sm, md, lg, xl]
```

### Pattern 4: Z-Index Scale

```
zIndex
    /numberScale : linear
        base = 100
        increment = 100
        steps = [dropdown, modal, tooltip, overlay]
```

## Troubleshooting

### Values Not Generating

- Check `steps` parameter: Must be a number or array
- Verify `base` and `increment`/`ratio` are numbers
- Ensure proper indentation

### Wrong Values

- **Linear**: Check `increment` is correct
- **Modular**: Verify `ratio` or `peak` makes sense
- **Steps**: Ensure you have enough steps

### Can't Reference Steps

- Use correct syntax: `$scaleName.stepName`
- Check step names match exactly
- Verify scale was created successfully

## Next Steps

Now that you understand number scales:

1. **[Color Scales](5.3-color-scales.md)** - Create color palettes
2. **[Typography Scales](5.5-typography-scales.md)** - Build typography systems
3. **[Advanced Tokens](5.6-advanced-tokens.md)** - Learn complex structures

---

**Tip**: Number scales are powerful! Start with linear scales for spacing, then explore modular scales for typography. You'll save time and ensure consistency.

