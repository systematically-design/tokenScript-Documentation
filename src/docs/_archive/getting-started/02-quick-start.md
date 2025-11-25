---
title: Quick Start Guide
order: 2
---

# Quick Start Guide

Get up and running with TokenScript DSL in 5 minutes! This hands-on tutorial will have you creating your first design tokens right away.

## Your First Token

Let's start with the simplest possible token:

```tokenscript
primaryColor = "#3B82F6"
```

That's it! You've just created a design token. TokenScript DSL compiles this to:

```json
{
  "primaryColor": {
    "$type": "color",
    "$value": "#3B82F6"
  }
}
```

## Basic Data Types

TokenScript DSL supports all the data types you need:

```tokenscript
// Numbers
baseUnit = 16
ratio = 1.5
count = 42

// Strings  
fontFamily = "Inter"
buttonLabel = "Click me"

// Colors
brandBlue = "#3B82F6"
errorRed = "#EF4444"

// Booleans
isEnabled = true
showBorder = false

// Arrays
breakpoints = [768, 1024, 1280]
fontWeights = [400, 500, 600, 700]
```

## Your First Scale

Now let's create something more powerful - a scale that generates multiple related values:

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 8  
    steps = ["xs", "sm", "md", "lg", "xl"]
```

This generates:
- `xs`: 8
- `sm`: 16  
- `md`: 24
- `lg`: 32
- `xl`: 40

**Try it yourself:** Change `base = 8` to `base = 4` and see how all values update automatically!

## Using References

Connect your tokens to eliminate duplication:

```tokenscript
// Define once
baseUnit = 16

// Reference everywhere
fontSize
  /numberScale : linear
    base = $baseUnit
    increment = 2
    steps = ["sm", "md", "lg"]

lineHeight
  /numberScale : linear  
    base = $baseUnit * 1.5
    increment = 3
    steps = ["sm", "md", "lg"]
```

Now when you change `baseUnit`, both scales update automatically!

## Mathematical Expressions

Perform calculations right in your token definitions:

```tokenscript
baseUnit = 16
goldenRatio = 1.618

// Math in assignments
headerSize = $baseUnit * 2
cardPadding = $baseUnit + 8
sidebarWidth = $baseUnit * 20

// Math in scales
typography
  /numberScale : modular
    base = $baseUnit
    ratio = $goldenRatio
    steps = 5
```

## Building a Mini Design System

Let's put it all together with a small but complete design system:

```tokenscript
// Foundation
baseUnit = 16
goldenRatio = 1.618
primaryColor = "#3B82F6"

// Typography Scale
typography
  /numberScale : modular
    base = $baseUnit
    ratio = $goldenRatio  
    steps = ["xs", "sm", "md", "lg", "xl", "xxl"]
  /roundTo(2)

// Spacing Scale  
spacing
  /numberScale : linear
    base = $baseUnit / 2
    increment = $baseUnit / 2
    steps = ["xs", "sm", "md", "lg", "xl", "xxl"]

// Derived Values
lineHeight = $typography
  /transform(size * 1.4)
  /roundTo(2)

buttonPadding = $spacing
  /transform(size * 0.75)
```

**What's happening here:**
1. **Foundation**: Core values that drive everything
2. **Typography**: Modular scale using golden ratio for harmonious proportions  
3. **Spacing**: Linear scale based on half the base unit
4. **Derived Values**: Line heights and padding calculated from base scales

## Nested Organization

Organize complex token systems with nesting:

```tokenscript
colors
  primary = "#3B82F6"
  secondary = "#6B7280"
  
  status
    success = "#10B981"
    warning = "#F59E0B"
    error = "#EF4444"

typography
  size
    /numberScale : modular
      base = 16  
      ratio = 1.25
      steps = ["sm", "md", "lg", "xl"]
      
  weight
    regular = 400
    medium = 500
    bold = 700
```

## What You've Learned

In just a few minutes, you've discovered:

- ✅ **Basic Syntax**: Simple, readable token definitions
- ✅ **Data Types**: Numbers, strings, colors, booleans, arrays
- ✅ **Scales**: Automatic generation of related values
- ✅ **References**: Connecting tokens to eliminate duplication  
- ✅ **Math**: Expressions and calculations
- ✅ **Organization**: Nested structures for complex systems

## Try These Exercises

1. **Modify the spacing scale** to use `base = 4` instead of `8`
2. **Add a new color scale** using your brand color
3. **Create a modular scale** for border radius values
4. **Build a typography system** with both size and line-height scales

## Common Patterns Cheat Sheet

```tokenscript
// Linear Scale (evenly spaced)
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = 5

// Modular Scale (proportional)  
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = 6

// Reference with Math
derivedValue = $baseValue * 1.5

// Transform a Scale
lineHeights = $fontSizes
  /transform(size * 1.4)
  /roundTo(2)
```

## Next Steps

Ready to dive deeper? Let's explore the syntax rules and conventions:

👉 **[Continue to Basic Syntax →](03-basic-syntax.md)**

---

### 🎯 Quick Win
Copy the mini design system example into a `.tkns` file and experiment! Change the `baseUnit` from 16 to 20 and watch your entire system scale proportionally.