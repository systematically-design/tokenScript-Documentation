---
title: References
order: 6
---

# References

Master the art of connecting tokens with references. References eliminate duplication, ensure consistency, and create maintainable relationships between design tokens.

## Why References Matter

### ❌ Without References (Duplication)
```tokenscript
// Lots of duplication and potential inconsistency
primaryColor = "#3B82F6"

buttonBackground = "#3B82F6"      // Duplicate!
linkColor = "#3B82F6"             // Duplicate!
iconColor = "#3B82F6"             // Duplicate!

// What happens when you change the primary color?
// You have to update it in 4 places manually!
```

### ✅ With References (DRY Principle)
```tokenscript
// Define once, reference everywhere
primaryColor = "#3B82F6"

buttonBackground = $primaryColor  // References primary
linkColor = $primaryColor         // References primary  
iconColor = $primaryColor         // References primary

// Change primaryColor once, everything updates automatically!
```

## Basic Reference Syntax

Use the `$` symbol to reference other tokens:

```tokenscript
// Define a value
baseUnit = 16

// Reference it anywhere
fontSize = $baseUnit              // 16
padding = $baseUnit               // 16
margin = $baseUnit                // 16

// References work in mathematical expressions
doublePadding = $baseUnit * 2     // 32
halfMargin = $baseUnit / 2        // 8
```

## Nested Object References

Reference values inside nested structures using dot notation:

```tokenscript
// Define nested structure
colors
  brand
    primary = "#3B82F6"
    secondary = "#1D4ED8"
  
  semantic
    success = "#10B981"
    error = "#EF4444"

// Reference nested values with dots
buttonColor = $colors.brand.primary      // "#3B82F6"
successMessage = $colors.semantic.success // "#10B981"
errorBorder = $colors.semantic.error      // "#EF4444"
```

### Deep Nesting
```tokenscript
// Complex nested structure
designSystem
  foundation
    colors
      brand
        blue
          primary = "#3B82F6"
          light = "#93C5FD"
          dark = "#1D4ED8"

// Reference deep values
headerColor = $designSystem.foundation.colors.brand.blue.primary
subtleBackground = $designSystem.foundation.colors.brand.blue.light
```

## Tree Shorthand References

Use `...` to search through nested structures without specifying the full path:

```tokenscript
// Complex nested structure
designSystem
  foundation
    spacing
      baseUnit = 16
    colors  
      brand
        primary = "#3B82F6"
        
  components
    button
      padding = 12
      
// Tree shorthand - finds the value anywhere in the structure
quickPadding = $designSystem...padding      // Finds components.button.padding
brandColor = $designSystem...primary        // Finds foundation.colors.brand.primary
unit = $designSystem...baseUnit             // Finds foundation.spacing.baseUnit
```

### When to Use Tree Shorthand
```tokenscript
// ✅ Good use case - unique property names
theme
  light
    colors
      background = "#FFFFFF"
  dark  
    colors
      background = "#000000"
      
// These are ambiguous - tree shorthand might find the wrong one
// lightBg = $theme...background    // Which background?

// ✅ Better - be specific when names aren't unique
lightBg = $theme.light.colors.background
darkBg = $theme.dark.colors.background

// ✅ Good use case - unique names across the structure
navigation
  sidebar
    uniqueWidth = 240
    
content
  main
    uniqueHeight = 600
    
// Safe to use tree shorthand
sidebarSize = $navigation...uniqueWidth     // Unambiguous
contentSize = $content...uniqueHeight       // Unambiguous
```

## Forward References

TokenScript DSL supports forward references - you can reference values before they're defined:

```tokenscript
// Reference before definition (forward reference)
buttonPadding = $baseSpacing
linkMargin = $baseSpacing

// Define later in the file
baseSpacing = 16

// This works! TokenScript resolves references after parsing
```

### Circular Reference Prevention
```tokenscript
// ❌ This creates a circular reference and will error
valueA = $valueB
valueB = $valueA         // Error! Circular dependency

// ✅ This is fine - no circular dependency
baseValue = 16
derivedA = $baseValue * 2
derivedB = $baseValue * 3
combinedValue = $derivedA + $derivedB
```

## References in Scale Parameters

Use references to make scales dynamic and interconnected:

```tokenscript
// Foundation values
baseUnit = 16
ratio = 1.25

// Reference in scale parameters
spacing
  /numberScale : linear
    base = $baseUnit           // References baseUnit
    increment = $baseUnit / 2  // Mathematical expression with reference
    steps = 6

typography
  /numberScale : modular
    base = $baseUnit           // Same base as spacing
    ratio = $ratio             // References ratio  
    steps = 5
    
// Now changing baseUnit or ratio updates both scales!
```

### Complex Reference Patterns
```tokenscript
// Configuration object
config
  baseUnit = 16
  goldenRatio = 1.618
  screenWidth = 1200

// Multiple scales referencing config
spacing
  /numberScale : linear  
    base = $config.baseUnit / 2
    increment = $config.baseUnit / 4
    steps = 8

typography
  /numberScale : modular
    base = $config.baseUnit
    ratio = $config.goldenRatio  
    steps = 6

layout
  /numberScale : linear
    base = $config.screenWidth / 10
    increment = $config.screenWidth / 20
    steps = 5
```

## Scale-to-Scale References

Reference entire scales or individual scale steps:

```tokenscript
// Define a base scale
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl"]

// Reference the entire scale
lineHeights = $fontSizes
  /transform(size * 1.4)
  /roundTo(2)

// Reference individual scale steps  
buttonTextSize = $fontSizes.md       // Gets the "md" step value
captionSize = $fontSizes.xs          // Gets the "xs" step value
headingSize = $fontSizes.xl          // Gets the "xl" step value
```

## Mixed Reference Types

Combine different reference patterns:

```tokenscript
// Base configuration
foundation
  units
    base = 16
    ratio = 1.25
  
  colors
    brand
      primary = "#3B82F6"

// Typography system using mixed references
typography
  size
    /numberScale : modular
      base = $foundation.units.base        // Dot notation
      ratio = $foundation...ratio          // Tree shorthand  
      steps = ["xs", "sm", "md", "lg", "xl"]
  
  color
    primary = $foundation...primary        // Tree shorthand
    body = $foundation.colors.brand.primary // Dot notation (same result)
```

## Reference Best Practices

### ✅ Semantic Naming
```tokenscript
// Create semantic foundation
foundation
  baseUnit = 16
  primaryColor = "#3B82F6"
  fontFamily = "Inter"

// Reference with semantic meaning
button
  padding = $foundation.baseUnit        // Clear relationship
  background = $foundation.primaryColor // Clear purpose
  font = $foundation.fontFamily         // Clear connection
```

### ✅ Logical Grouping
```tokenscript
// Group related values
typography
  family
    primary = "Inter"
    secondary = "Georgia"
  
  weight
    normal = 400
    medium = 500
    bold = 700

// Reference grouped values
components
  heading
    font = $typography.family.primary
    weight = $typography.weight.bold
    
  body
    font = $typography.family.primary  
    weight = $typography.weight.normal
```

### ✅ Consistent Patterns
```tokenscript
// Establish consistent reference patterns
colors
  brand = "#3B82F6"
  accent = "#F59E0B"
  
spacing
  base = 16
  
// Use consistent pattern throughout
navigation
  background = $colors.brand           // Always colors.X
  padding = $spacing.base              // Always spacing.X

footer  
  background = $colors.accent          // Same pattern
  padding = $spacing.base              // Same pattern
```

## Common Reference Patterns

### Configuration-Driven Design
```tokenscript
// Central configuration
config
  baseUnit = 16
  ratio = 1.25
  primaryColor = "#3B82F6"
  fontFamily = "Inter"

// Everything references config
spacing
  /numberScale : linear
    base = $config.baseUnit
    increment = $config.baseUnit
    steps = 6

typography
  /numberScale : modular
    base = $config.baseUnit
    ratio = $config.ratio
    steps = 5

branding
  color = $config.primaryColor
  font = $config.fontFamily
```

### Hierarchical Systems
```tokenscript
// Base layer
base
  unit = 16
  color = "#3B82F6"

// Derived layer (references base)
derived
  spacing = $base.unit * 1.5           // 24
  padding = $base.unit / 2             // 8
  tint = $base.color                   // Same color

// Component layer (references derived)
components
  card
    margin = $derived.spacing          // 24
    padding = $derived.padding         // 8
    border = $derived.tint             // "#3B82F6"
```

### Theme Systems
```tokenscript
// Theme foundations
themes
  light
    background = "#FFFFFF"
    text = "#000000"
    
  dark
    background = "#000000"
    text = "#FFFFFF"

// Components reference current theme
activeTheme = light                    // Switch themes here

components
  card
    background = $themes.$activeTheme.background  // Dynamic reference
    text = $themes.$activeTheme.text              // Dynamic reference
```

## Debugging References

### Understanding Reference Resolution
```tokenscript
// TokenScript resolves references in multiple passes
baseUnit = 16
step1 = $baseUnit                      // Direct reference: 16
step2 = $step1 * 2                     // Reference to reference: 32
step3 = $step2 + $baseUnit             // Multiple references: 48

// All references are resolved automatically
```

### Common Reference Errors
```tokenscript
// ❌ Typo in reference name
baseUnit = 16
padding = $baseUnti                    // Error! baseUnti doesn't exist

// ❌ Wrong path
colors
  primary = "#FF0000"
  
button = $color.primary                // Error! Should be $colors.primary

// ❌ Circular reference
valueA = $valueB
valueB = $valueA                       // Error! Circular dependency
```

## Advanced Reference Techniques

### Conditional-Like Patterns
```tokenscript
// Base values
mobile = 16
desktop = 24

// "Conditional" selection (by changing the reference)
currentBreakpoint = mobile             // Switch between mobile/desktop
fontSize = $currentBreakpoint          // Uses mobile (16)

// To switch to desktop, just change one line:
// currentBreakpoint = desktop         // Now fontSize becomes 24
```

### Reference Chains
```tokenscript
// Create chains of related values
base = 16
double = $base * 2                     // 32
quadruple = $double * 2                // 64  
octuple = $quadruple * 2               // 128

// Changes to base cascade through the chain
```

## Next Steps

Now that you understand references, let's explore how to create scales that generate sequences of values:

👉 **[Continue to Introduction to Scales →](07-scales-intro.md)**

---

### 🔗 Reference Challenge
Build a complete reference system:

```tokenscript
// Create a foundation with:
// 1. Base configuration values
// 2. A color system with nested organization  
// 3. Typography that references the base values
// 4. Spacing that references the base values
// 5. Components that reference everything above

// Try changing one foundation value and see how everything updates!
```