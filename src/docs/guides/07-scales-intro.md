---
title: Introduction to Scales
order: 7
---

# Introduction to Scales

Discover the power of scales - TokenScript DSL's most distinctive feature. Scales automatically generate sequences of related values, ensuring mathematical consistency and eliminating manual calculations.

## What Are Scales?

Scales generate multiple related values following mathematical rules. Instead of manually calculating each value, you define the pattern and let TokenScript generate the sequence.

### ❌ Manual Approach
```tokenscript
// Manually calculated spacing values - error-prone and inconsistent
spacingXs = 4
spacingSm = 8  
spacingMd = 12
spacingLg = 16
spacingXl = 20
spacingXxl = 24

// What if you want to change the progression?
// You have to recalculate everything by hand!
```

### ✅ Scale Approach
```tokenscript
// Automatically generated spacing scale - consistent and maintainable
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl", "xxl"]

// Result: xs=4, sm=8, md=12, lg=16, xl=20, xxl=24
// Change base to 8 and everything doubles automatically!
```

## Scale Types

TokenScript DSL supports two primary scale types:

### Linear Scales (Arithmetic Progression)
Values increase by a **constant amount**:
```
4, 8, 12, 16, 20, 24  (adding 4 each time)
```

### Modular Scales (Geometric Progression)  
Values increase by a **constant ratio**:
```
16, 20, 25, 31.25, 39.06  (multiplying by 1.25 each time)
```

## Basic Scale Syntax

All scales follow this pattern:

```tokenscript
scaleName
  /numberScale : scaleType
    parameter = value
    parameter = value
    parameter = value
```

### Linear Scale Example
```tokenscript
spacing
  /numberScale : linear
    base = 8              # Starting value
    increment = 8         # Amount to add each step
    steps = 5             # Number of values to generate
```

**Generates:** `[8, 16, 24, 32, 40]`

### Modular Scale Example
```tokenscript
typography
  /numberScale : modular
    base = 16             # Starting value
    ratio = 1.25          # Multiplication factor
    steps = 5             # Number of values to generate
```

**Generates:** `[16, 20, 25, 31.25, 39.06]`

## Custom Step Names

Give meaningful names to your scale steps:

```tokenscript
// Default numeric names (1, 2, 3, 4, 5)
basicScale
  /numberScale : linear
    base = 8
    increment = 8
    steps = 5

// Custom semantic names
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg", "xl"]

// T-shirt sizing
sizes
  /numberScale : linear
    base = 12
    increment = 4  
    steps = ["small", "medium", "large", "xlarge"]
```

## When to Use Each Scale Type

### Use Linear Scales For:
- **Spacing systems** - consistent visual rhythm
- **Grid systems** - evenly distributed layouts  
- **Border widths** - systematic thickness progression
- **Shadow offsets** - uniform shadow progression

```tokenscript
// Perfect for spacing
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
# Result: xs=4, sm=8, md=12, lg=16, xl=20
```

### Use Modular Scales For:
- **Typography** - harmonious size relationships
- **Layout containers** - proportional sizing
- **Animation timing** - natural rhythm progression
- **Visual hierarchy** - perceptually consistent scaling

```tokenscript
// Perfect for typography
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl", "xxl"]
# Result: sm=16, md=20, lg=25, xl=31.25, xxl=39.06
```

## Scale Output Structure

Scales generate objects with named properties:

```tokenscript
// Scale definition
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg"]
```

**Compiles to:**
```json
{
  "spacing": {
    "xs": { "$type": "number", "$value": 8 },
    "sm": { "$type": "number", "$value": 16 },
    "md": { "$type": "number", "$value": 24 },
    "lg": { "$type": "number", "$value": 32 }
  }
}
```

**Usage:** Access individual steps like `$spacing.xs` or `$spacing.lg`

## Mathematical Precision

### Linear Scale Math
```
value(n) = base + (increment × step_number)

For base=8, increment=4:
step 0: 8 + (4 × 0) = 8
step 1: 8 + (4 × 1) = 12  
step 2: 8 + (4 × 2) = 16
step 3: 8 + (4 × 3) = 20
```

### Modular Scale Math
```
value(n) = base × (ratio ^ step_number)

For base=16, ratio=1.25:
step 0: 16 × (1.25 ^ 0) = 16 × 1 = 16
step 1: 16 × (1.25 ^ 1) = 16 × 1.25 = 20
step 2: 16 × (1.25 ^ 2) = 16 × 1.5625 = 25
step 3: 16 × (1.25 ^ 3) = 16 × 1.953125 = 31.25
```

## Common Scale Patterns

### T-Shirt Sizing
```tokenscript
// Standard t-shirt progression
sizes
  /numberScale : linear
    base = 12
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl", "xxl"]
# Result: xs=12, sm=16, md=20, lg=24, xl=28, xxl=32
```

### Powers of Two
```tokenscript
// Binary progression
memory
  /numberScale : modular
    base = 1
    ratio = 2
    steps = ["kb", "mb", "gb", "tb"]
# Result: kb=1, mb=2, gb=4, tb=8
```

### Golden Ratio Typography
```tokenscript
// Harmonious proportions
typography
  /numberScale : modular
    base = 16
    ratio = 1.618
    steps = ["caption", "body", "heading", "display"]
# Result: caption=16, body=25.89, heading=41.89, display=67.77
```

### Grid System
```tokenscript
// 12-column grid
columns
  /numberScale : linear
    base = 60
    increment = 60
    steps = 12
# Result: 1=60, 2=120, 3=180, ..., 12=720
```

## Scales vs. Individual Values

### When to Use Scales
```tokenscript
// ✅ Related values that follow a pattern
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg", "xl"]

// ✅ Values that need to maintain relationships
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = 6
```

### When to Use Individual Values
```tokenscript
// ✅ Unique, unrelated values
branding
  primaryColor = "#3B82F6"
  logoWidth = 180
  borderRadius = 8

// ✅ Configuration values
config
  maxWidth = 1200
  animationDuration = 300
  zIndex = 1000
```

## Scale Benefits

### 🎯 Consistency
All values follow the same mathematical rule - no arbitrary numbers.

### 🔄 Maintainability  
Change one parameter and the entire scale updates proportionally.

### 🧮 Precision
Mathematical generation eliminates rounding errors and inconsistencies.

### 📏 Visual Harmony
Modular scales create perceptually pleasing relationships.

### ⚡ Speed
Generate dozens of related values with a few lines of code.

## Real-World Scale Examples

### Complete Spacing System
```tokenscript
baseUnit = 16

// Primary spacing scale
spacing
  /numberScale : linear
    base = $baseUnit / 4      # 4
    increment = $baseUnit / 4  # 4
    steps = ["xs", "sm", "md", "lg", "xl", "xxl"]
# Result: xs=4, sm=8, md=12, lg=16, xl=20, xxl=24

// Component-specific scales derived from primary
padding = $spacing
  /transform(size * 0.75)    # 3, 6, 9, 12, 15, 18

margin = $spacing  
  /transform(size * 1.25)    # 5, 10, 15, 20, 25, 30
```

### Typography Hierarchy
```tokenscript
// Base typography scale
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "xxl"]

// Corresponding line heights
lineHeights = $fontSizes
  /transform(size * 1.4)
  /roundTo(2)

// Letter spacing for larger text
letterSpacing = $fontSizes
  /transform(size * -0.02)   # Negative spacing for larger text
  /roundTo(0.01)
```

## Next Steps

Now that you understand scale concepts, let's dive deep into linear scales:

👉 **[Continue to Linear Scales →](08-linear-scales.md)**

---

### 🎯 Scale Thinking Exercise

Before moving on, think about these questions:

1. **What values in your design system follow patterns?**
   - Spacing increments?
   - Font size progressions?
   - Container width steps?

2. **Are your current values arbitrary or mathematical?**
   - Do they follow a consistent rule?
   - Could they be generated instead of hardcoded?

3. **What would happen if you needed to change your base values?**
   - How many places would you need to update?
   - Could a scale eliminate this maintenance burden?

The answers will help you identify where scales can transform your design system!