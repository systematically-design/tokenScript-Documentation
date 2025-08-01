---
title: Self-References
order: 13
---

# Self-References

Master context-aware references that look within their current scope. Self-references enable scales and nested structures to reference their own properties, creating powerful, flexible token systems.

## What Are Self-References?

Self-references use the `$...` syntax to reference properties within the same context or scope. They're particularly powerful in scales and nested structures where you want to reference sibling properties.

### Basic Concept
```tokenscript
// In a scale context, $...base refers to the base parameter
spacing
  /numberScale : linear
    base = 16
    increment = $...base / 2    # References the base value (16/2 = 8)
    steps = 5
```

This is more flexible than hardcoding the increment as `8` because if you change the base, the increment updates automatically.

## Self-References in Scales

### Basic Scale Self-Reference
```tokenscript
// Typography scale where increment is based on base
typography
  /numberScale : linear
    base = 16
    increment = $...base * 0.25    # Always 25% of base
    steps = ["xs", "sm", "md", "lg", "xl"]

# Result: If base=16, increment=4
# xs=16, sm=20, md=24, lg=28, xl=32
```

### Mathematical Relationships
```tokenscript
// Modular scale with calculated ratio
harmonicScale
  /numberScale : modular
    base = 16
    ratio = $...base / 12          # Ratio based on base
    steps = 6

// Complex mathematical relationships
spacingSystem
  /numberScale : linear
    base = 8
    increment = ($...base * 1.5) + 2    # Complex formula
    steps = ["xs", "sm", "md", "lg"]
```

### Multiple Self-References
```tokenscript
// Scale with interconnected parameters
flexibleScale
  /numberScale : linear
    base = 16
    increment = $...base / 4        # 4
    steps = $...base / $...increment # 16/4 = 4 steps
```

## Self-References in Nested Structures

### Sibling References
```tokenscript
// Reference sibling properties in nested structures
theme
  light
    colors
      background = "#FFFFFF"
      text = "#000000"
      subtle = $...background      # References sibling background
      
  dark
    colors  
      background = "#000000"
      text = "#FFFFFF"
      subtle = $...background      # References sibling background
```

### Parent Context References
```tokenscript
// Reference properties from parent contexts
designSystem
  foundation
    baseUnit = 16
    
    spacing
      small = $...baseUnit / 2     # References parent baseUnit
      medium = $...baseUnit        # References parent baseUnit  
      large = $...baseUnit * 2     # References parent baseUnit
      
    typography
      base = $...baseUnit          # Same baseUnit as spacing
      large = $...baseUnit * 1.5   # Proportional to baseUnit
```

## Self-Reference Resolution Rules

TokenScript DSL follows these rules when resolving `$...property`:

### 1. Current Scope First
```tokenscript
container
  width = 1200
  nested
    width = 800
    padding = $...width / 10    # Uses nested width (800), not container width
```

### 2. Walk Up the Hierarchy
```tokenscript
layout
  baseUnit = 16
  
  components
    card
      padding = $...baseUnit    # Walks up to find layout.baseUnit
```

### 3. Scale Context Priority
```tokenscript
// In scale contexts, self-references look at scale parameters first
spacing
  /numberScale : linear
    base = 16
    increment = $...base      # References scale parameter, not external base
    steps = 5

base = 32                     # This won't affect the scale's $...base reference
```

## Advanced Self-Reference Patterns

### Proportional Systems
```tokenscript
// Everything proportional to a base measurement
proportionalSystem
  baseUnit = 16
  
  typography
    small = $...baseUnit * 0.875      # 14
    medium = $...baseUnit             # 16
    large = $...baseUnit * 1.25       # 20
    xlarge = $...baseUnit * 1.5       # 24
    
  spacing  
    tight = $...baseUnit / 4          # 4
    normal = $...baseUnit / 2         # 8
    loose = $...baseUnit              # 16
    relaxed = $...baseUnit * 1.5      # 24
```

### Dynamic Scale Relationships
```tokenscript
// Scales that adapt based on their own parameters
adaptiveSpacing
  /numberScale : linear
    base = 8
    increment = $...base / 2          # Always half the base
    steps = $...base / 2              # Number of steps = half the base
    
# If base=8: increment=4, steps=4
# If base=16: increment=8, steps=8
# The scale grows proportionally!
```

### Self-Referencing Derived Values
```tokenscript
// Create derived scales that reference their source
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl"]

// Line heights derived from font sizes, with self-referencing base
lineHeights = $fontSizes
  /transform(size * 1.4)
  
// Letter spacing also derived, with base-relative adjustments  
letterSpacing = $fontSizes
  /transform(size * ($...base / 1000))  # References original base from fontSizes
```

## Common Self-Reference Use Cases

### Responsive Scaling
```tokenscript
// Mobile-first responsive scale
mobileScale
  /numberScale : linear
    base = 14
    increment = $...base / 7          # 2
    steps = ["xs", "sm", "md", "lg"]

// Desktop scale with larger base but same proportions
desktopScale  
  /numberScale : linear
    base = 18
    increment = $...base / 9          # 2 (same increment)
    steps = ["xs", "sm", "md", "lg"]
```

### Modular Grid Systems
```tokenscript
// Grid system where everything relates to base unit
gridSystem
  baseUnit = 16
  
  columns
    /numberScale : linear
      base = $...baseUnit * 4         # 64px columns
      increment = $...base            # Same as base
      steps = 12
      
  gutters
    /numberScale : linear  
      base = $...baseUnit             # 16px gutters
      increment = $...base / 2        # 8px increments
      steps = 5
```

### Theme Consistency
```tokenscript
// Ensure theme consistency with self-references
lightTheme
  baseColor = "#FFFFFF"
  
  colors
    background = $...baseColor
    surface = $...baseColor
    subtle = $...baseColor           # All reference the same base
    
  spacing
    baseUnit = 16
    small = $...baseUnit / 2
    medium = $...baseUnit
    large = $...baseUnit * 2
```

## Self-References vs. Global References

### Global References (`$variableName`)
```tokenscript
globalBase = 16

scale1
  /numberScale : linear
    base = $globalBase              # References global variable
    increment = 4
    steps = 5

scale2
  /numberScale : linear  
    base = $globalBase              # Same global reference
    increment = 8
    steps = 5
```

### Self-References (`$...property`)
```tokenscript
scale1
  /numberScale : linear
    base = 16
    increment = $...base / 4        # References own base (16/4 = 4)
    steps = 5

scale2
  /numberScale : linear
    base = 20  
    increment = $...base / 4        # References own base (20/4 = 5)
    steps = 5
```

**Key Difference:** Self-references adapt to their context, global references are fixed.

## Complex Self-Reference Examples

### Multi-Level Self-Reference System
```tokenscript
designSystem
  foundation
    baseUnit = 16
    
    grid
      columns = 12
      columnWidth = $...baseUnit * 5           # 80px
      gutterWidth = $...baseUnit               # 16px
      containerWidth = ($...columnWidth + $...gutterWidth) * $...columns - $...gutterWidth
      # (80 + 16) * 12 - 16 = 1136px
      
    typography
      baseSize = $...baseUnit                  # 16px
      ratio = $...baseSize / 12.8              # 1.25 (16/12.8)
      
      scale
        /numberScale : modular
          base = $...baseSize                  # References typography.baseSize
          ratio = $...ratio                    # References typography.ratio  
          steps = 6
```

### Self-Referencing Transformations
```tokenscript
// Base scale with self-referencing transformations
masterScale
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl"]
  /roundTo($...base / 8)                      # Round to base/8 = 2 decimal places

// Derived scale with self-referencing math
derivedScale = $masterScale
  /transform(size * ($...base / 16))          # Scale relative to original base
  /roundTo($...base / 4)                      # Different rounding precision
```

## Best Practices

### ✅ Do Use Self-References For:
```tokenscript
// Proportional relationships within the same context
spacing
  /numberScale : linear
    base = 16
    increment = $...base / 4        # Always 1/4 of base
    steps = 8

// Derived properties that should track their source
theme
  primaryColor = "#3B82F6"
  lightVariant = $...primaryColor   # Will update if primaryColor changes
  darkVariant = $...primaryColor    # Same relationship
```

### ❌ Don't Use Self-References For:
```tokenscript
// Cross-system references (use global references instead)
typographyBase = 16

spacing
  /numberScale : linear
    base = 8
    increment = $typographyBase     # Use global reference, not $...typographyBase
    steps = 5
```

### 🎯 Self-Reference Guidelines
```tokenscript
// Clear, semantic self-references
cardSystem
  baseWidth = 320
  
  dimensions
    width = $...baseWidth           # Clear relationship
    height = $...width * 0.75       # Proportional to width
    padding = $...width / 20        # Proportional to width
    
// Avoid overly complex self-reference chains
complexSystem
  base = 16
  derived = $...base * 2           # OK: 32
  complex = $...derived * $...base  # Harder to follow: 32 * 16 = 512
```

## Debugging Self-References

### Understanding Context
```tokenscript
// Self-references resolve within their immediate context
outer
  value = 100
  
  inner
    value = 50
    result = $...value              # Uses inner.value (50), not outer.value
```

### Tracing Resolution
```tokenscript
// TokenScript resolves self-references by walking up the hierarchy
level1
  baseUnit = 16
  
  level2
    spacing = $...baseUnit          # Walks up to find level1.baseUnit
    
    level3  
      padding = $...spacing         # Finds level2.spacing
      margin = $...baseUnit         # Walks up to find level1.baseUnit
```

## Next Steps

Now that you understand self-references, let's explore tree shorthand for efficient deep navigation:

👉 **[Continue to Tree Shorthand →](14-tree-shorthand.md)**

---

### 🎯 Self-Reference Challenge

Create a proportional design system using self-references:

```tokenscript
// Build a system where:
// 1. Everything relates to a single baseUnit using self-references
// 2. Typography scale uses self-referencing ratio calculation
// 3. Spacing system has self-referencing increments  
// 4. Components use self-references for internal proportions

// Try changing the baseUnit and see how everything scales!
```