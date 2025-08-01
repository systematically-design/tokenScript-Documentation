---
title: Design Systems
order: 15
---

# Design Systems

Learn how to build comprehensive, scalable design systems using TokenScript DSL. This chapter shows you how to structure, organize, and maintain professional design systems that grow with your product.

## What Makes a Great Design System?

A well-structured design system has these characteristics:

- **🏗️ Systematic Foundation**: Core values that drive everything else
- **🔗 Clear Relationships**: Tokens that connect and depend on each other logically
- **📏 Mathematical Consistency**: Values that follow predictable patterns
- **🎯 Semantic Organization**: Structure that matches how designers think
- **⚡ Easy Maintenance**: Change one thing, update everything automatically

## Foundation-First Architecture

Start with foundation values that drive your entire system:

```tokenscript
// Foundation Layer - The bedrock of your design system
foundation
  // Core measurements
  baseUnit = 16
  goldenRatio = 1.618
  
  // Brand colors
  brand
    primary = "#3B82F6"
    secondary = "#6B7280"
    accent = "#F59E0B"
    
  // Typography foundation
  typography
    primaryFont = "Inter"
    secondaryFont = "Georgia"
    monoFont = "Fira Code"
    
  // Animation foundation
  timing
    fast = 150
    normal = 300
    slow = 500
```

## Systematic Value Generation

Use scales to generate consistent value systems:

```tokenscript
// Spacing System - Linear progression for visual rhythm
spacing
  /numberScale : linear
    base = $foundation.baseUnit / 4     # 4px base
    increment = $foundation.baseUnit / 4 # 4px increments
    steps = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]
  /roundTo(2)

# Result: xs=4, sm=8, md=12, lg=16, xl=20, 2xl=24, 3xl=28, 4xl=32

// Typography Scale - Modular progression for harmonious hierarchy  
fontSizes
  /numberScale : modular
    base = $foundation.baseUnit         # 16px base
    ratio = $foundation.goldenRatio / 1.3 # ~1.245 ratio
    steps = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"]
  /roundTo(2)

# Result: xs=16, sm=19.92, md=24.81, lg=30.89, xl=38.46, etc.

// Z-Index Scale - Powers of 10 for layering
zIndex
  /numberScale : modular
    base = 1
    ratio = 10
    steps = ["base", "dropdown", "sticky", "fixed", "modal", "popover", "tooltip"]

# Result: base=1, dropdown=10, sticky=100, fixed=1000, etc.
```

## Derived Value Systems

Create values that automatically adapt based on your foundation:

```tokenscript
// Line Heights - Proportional to font sizes
lineHeights = $fontSizes
  /transform(size * 1.4)
  /roundTo(2)

// Letter Spacing - Optimized for readability at each size
letterSpacing = $fontSizes
  /transform(size * -0.02)  # Negative spacing for larger text
  /roundTo(0.01)

// Padding System - 75% of spacing for component internals
padding = $spacing
  /transform(size * 0.75)
  /roundTo(2)

// Margin System - 125% of spacing for component separation  
margin = $spacing
  /transform(size * 1.25)
  /roundTo(2)

// Border Radius - Modular scale for consistency
borderRadius
  /numberScale : modular
    base = $foundation.baseUnit / 4     # 4px base
    ratio = 1.5                         # Moderate growth
    steps = ["sm", "md", "lg", "xl", "2xl", "full"]
  /roundTo(2)
```

## Color System Architecture

Build a comprehensive color system with semantic meaning:

```tokenscript
// Color Foundation
colors
  // Brand Colors
  brand
    primary = $foundation.brand.primary     # "#3B82F6"
    secondary = $foundation.brand.secondary # "#6B7280"  
    accent = $foundation.brand.accent       # "#F59E0B"
    
  // Neutral Scale
  neutral
    white = "#FFFFFF"
    50 = "#F9FAFB"
    100 = "#F3F4F6"
    200 = "#E5E7EB"
    300 = "#D1D5DB"
    400 = "#9CA3AF"
    500 = "#6B7280"
    600 = "#4B5563"
    700 = "#374151"
    800 = "#1F2937"
    900 = "#111827"
    black = "#000000"
    
  // Semantic Colors
  semantic
    success = "#10B981"
    warning = "#F59E0B"
    error = "#EF4444"
    info = $colors.brand.primary
    
  // State Colors (derived from semantic)
  state
    successLight = $colors.semantic.success   # Could add lightening transform
    successDark = $colors.semantic.success    # Could add darkening transform
    warningLight = $colors.semantic.warning
    warningDark = $colors.semantic.warning
    errorLight = $colors.semantic.error
    errorDark = $colors.semantic.error
```

## Component-Level Organization

Structure component tokens systematically:

```tokenscript
// Button System
button
  // Size variants using existing scales
  size
    sm
      fontSize = $fontSizes.sm
      lineHeight = $lineHeights.sm
      padding = "$padding.sm $padding.md"
      height = $fontSizes.sm + ($padding.sm * 2)
      
    md  
      fontSize = $fontSizes.md
      lineHeight = $lineHeights.md
      padding = "$padding.md $padding.lg"
      height = $fontSizes.md + ($padding.md * 2)
      
    lg
      fontSize = $fontSizes.lg  
      lineHeight = $lineHeights.lg
      padding = "$padding.lg $padding.xl"
      height = $fontSizes.lg + ($padding.lg * 2)
  
  // Color variants
  variant
    primary
      background = $colors.brand.primary
      text = $colors.neutral.white
      border = $colors.brand.primary
      
    secondary
      background = $colors.neutral.100
      text = $colors.neutral.900
      border = $colors.neutral.300
      
    danger
      background = $colors.semantic.error
      text = $colors.neutral.white
      border = $colors.semantic.error
  
  // Interactive states (could be derived with transforms)
  state
    hover
      primaryBackground = $colors.brand.primary  # Could darken
      secondaryBackground = $colors.neutral.200
      
    active
      primaryBackground = $colors.brand.primary  # Could darken more
      secondaryBackground = $colors.neutral.300
      
    disabled
      background = $colors.neutral.100
      text = $colors.neutral.400
      border = $colors.neutral.200
```

## Layout and Grid Systems

Create systematic layout tokens:

```tokenscript
// Grid System
grid
  // Container sizes
  container
    sm = 640
    md = 768
    lg = 1024
    xl = 1280
    2xl = 1536
    
  // Grid configuration
  columns = 12
  columnGap = $spacing.lg              # 16px
  rowGap = $spacing.xl                 # 20px
  
  // Breakpoints (matching container sizes)
  breakpoint
    sm = $grid.container.sm
    md = $grid.container.md
    lg = $grid.container.lg
    xl = $grid.container.xl
    2xl = $grid.container.2xl

// Layout Spacing - Specific to layout needs
layout
  // Page-level spacing
  page
    paddingX = $spacing.lg             # Horizontal page padding
    paddingY = $spacing.xl             # Vertical page padding
    maxWidth = $grid.container.xl      # Max content width
    
  // Section spacing
  section
    marginY = $spacing.3xl             # Between major sections
    paddingY = $spacing.2xl            # Within sections
    
  // Component spacing  
  component
    marginY = $spacing.lg              # Between components
    paddingY = $spacing.md             # Within components
```

## Animation and Timing

Systematic approach to motion design:

```tokenscript
// Animation System
animation
  // Duration scale
  duration
    instant = 0
    fast = $foundation.timing.fast      # 150ms
    normal = $foundation.timing.normal  # 300ms
    slow = $foundation.timing.slow      # 500ms
    glacial = 1000
    
  // Easing curves
  easing
    linear = "linear"
    easeIn = "cubic-bezier(0.4, 0, 1, 1)"
    easeOut = "cubic-bezier(0, 0, 0.2, 1)"
    easeInOut = "cubic-bezier(0.4, 0, 0.2, 1)"
    
  // Common animation combinations
  transition
    quick = "$animation.duration.fast $animation.easing.easeOut"
    smooth = "$animation.duration.normal $animation.easing.easeInOut"
    gentle = "$animation.duration.slow $animation.easing.easeOut"
```

## Theme System Architecture

Support multiple themes systematically:

```tokenscript
// Theme System
themes
  // Light Theme
  light
    background
      primary = $colors.neutral.white
      secondary = $colors.neutral.50
      tertiary = $colors.neutral.100
      
    text
      primary = $colors.neutral.900
      secondary = $colors.neutral.700
      tertiary = $colors.neutral.500
      
    border
      primary = $colors.neutral.200
      secondary = $colors.neutral.100
      
  // Dark Theme  
  dark
    background
      primary = $colors.neutral.900
      secondary = $colors.neutral.800
      tertiary = $colors.neutral.700
      
    text
      primary = $colors.neutral.100
      secondary = $colors.neutral.300
      tertiary = $colors.neutral.500
      
    border
      primary = $colors.neutral.700
      secondary = $colors.neutral.800

// Active theme selection (switch between light/dark)
theme = $themes.light                   # Change to $themes.dark for dark mode
```

## Responsive Design Tokens

Handle responsive design systematically:

```tokenscript
// Responsive Typography
typography
  responsive
    // Headlines that scale with viewport
    h1
      mobile = $fontSizes.2xl
      tablet = $fontSizes.3xl  
      desktop = $fontSizes.4xl
      
    h2
      mobile = $fontSizes.xl
      tablet = $fontSizes.2xl
      desktop = $fontSizes.3xl
      
    body
      mobile = $fontSizes.sm
      tablet = $fontSizes.md
      desktop = $fontSizes.md

// Responsive Spacing
spacing
  responsive
    // Container padding that adapts
    containerPadding
      mobile = $spacing.md
      tablet = $spacing.lg
      desktop = $spacing.xl
      
    // Section spacing that scales
    sectionSpacing
      mobile = $spacing.xl
      tablet = $spacing.2xl
      desktop = $spacing.3xl
```

## Maintenance and Evolution

Design your system for long-term maintenance:

```tokenscript
// Version and Metadata
system
  version = "2.1.0"
  lastUpdated = "2024-01-15"
  
  // Feature flags for gradual rollouts
  features
    newColorSystem = true
    experimentalSpacing = false
    betaComponents = false
    
// Deprecation Management  
deprecated
  // Old values kept for backward compatibility
  oldPrimaryColor = "#1E40AF"         # Replaced by foundation.brand.primary
  legacySpacing = 8                   # Replaced by spacing scale
  
  // Migration helpers
  migration
    // Map old tokens to new ones
    primaryBlue = $foundation.brand.primary
    baseSpacing = $spacing.md
```

## Complete Design System Example

Here's a complete, production-ready design system:

```tokenscript
// TokenScript Design System v2.0
// Foundation-driven, mathematically consistent, semantically organized

// === FOUNDATION LAYER ===
foundation
  baseUnit = 16
  goldenRatio = 1.618
  
  brand
    primary = "#3B82F6"
    secondary = "#6B7280"
    accent = "#F59E0B"
    
  typography
    sans = "Inter"
    serif = "Georgia"
    mono = "Fira Code"

// === SYSTEMATIC SCALES ===
spacing
  /numberScale : linear
    base = $foundation.baseUnit / 4
    increment = $foundation.baseUnit / 4
    steps = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"]

fontSizes  
  /numberScale : modular
    base = $foundation.baseUnit
    ratio = 1.25
    steps = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"]
  /roundTo(2)

// === DERIVED VALUES ===
lineHeights = $fontSizes
  /transform(size * 1.4)
  /roundTo(2)

padding = $spacing
  /transform(size * 0.75)
  /roundTo(2)

margin = $spacing
  /transform(size * 1.25)
  /roundTo(2)

// === COLOR SYSTEM ===
colors
  brand
    primary = $foundation.brand.primary
    secondary = $foundation.brand.secondary
    accent = $foundation.brand.accent
    
  neutral
    white = "#FFFFFF"
    100 = "#F3F4F6"
    300 = "#D1D5DB"
    500 = "#6B7280"
    700 = "#374151"
    900 = "#111827"
    black = "#000000"
    
  semantic
    success = "#10B981"
    warning = "#F59E0B"
    error = "#EF4444"

// === COMPONENT TOKENS ===
button
  size
    sm
      fontSize = $fontSizes.sm
      padding = "$padding.sm $padding.md"
      
    md
      fontSize = $fontSizes.md  
      padding = "$padding.md $padding.lg"
      
    lg
      fontSize = $fontSizes.lg
      padding = "$padding.lg $padding.xl"
  
  variant
    primary
      background = $colors.brand.primary
      text = $colors.neutral.white
      
    secondary
      background = $colors.neutral.100
      text = $colors.neutral.900

// === LAYOUT SYSTEM ===
layout
  container
    sm = 640
    md = 768
    lg = 1024
    xl = 1280
    
  spacing
    section = $spacing.3xl
    component = $spacing.lg
    element = $spacing.md
```

## Best Practices Summary

### ✅ Do
- Start with foundation values
- Use mathematical relationships
- Create semantic organization
- Build systematic scales
- Plan for maintenance and evolution

### ❌ Don't  
- Hardcode arbitrary values
- Create tokens without relationships
- Ignore mathematical consistency
- Skip semantic naming
- Build monolithic, unmaintainable structures

## Next Steps

Now let's explore specific applications, starting with typography systems:

👉 **[Continue to Typography Systems →](16-typography-systems.md)**

---

### 🏗️ Design System Challenge

Build your own foundation-driven design system:

1. **Foundation**: Define your core values (base unit, brand colors, typography)
2. **Scales**: Create spacing, typography, and color scales
3. **Derived Values**: Build line heights, padding, margins from your scales  
4. **Components**: Define at least 2 components using your systematic values
5. **Test**: Change your foundation.baseUnit and verify everything scales proportionally

This exercise will show you the power of systematic, mathematical design tokens!