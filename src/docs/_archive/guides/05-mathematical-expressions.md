---
title: Mathematical Expressions
order: 5
---

# Mathematical Expressions

Unlock the power of calculations in your design tokens. Mathematical expressions eliminate manual calculations and create dynamic relationships between values.

## Why Use Math in Design Tokens?

### ❌ Without Math (Static)
```tokenscript
// Manual calculations - error-prone and hard to maintain
baseUnit = 16

// Had to calculate these by hand
smallPadding = 8      // baseUnit / 2
mediumPadding = 12    // baseUnit * 0.75  
largePadding = 24     // baseUnit * 1.5
xlargePadding = 32    // baseUnit * 2

// What happens when baseUnit changes to 20?
// You have to recalculate everything manually!
```

### ✅ With Math (Dynamic)
```tokenscript
// Mathematical expressions - automatically calculated and maintainable
baseUnit = 16

// Calculated automatically
smallPadding = $baseUnit / 2        // Always half
mediumPadding = $baseUnit * 0.75    // Always 75%
largePadding = $baseUnit * 1.5      // Always 1.5x
xlargePadding = $baseUnit * 2       // Always double

// Change baseUnit to 20 and everything updates automatically!
```

## Basic Arithmetic

TokenScript DSL supports all standard mathematical operations:

```tokenscript
baseUnit = 16

// Addition
headerHeight = $baseUnit + 32        // 48
totalPadding = $baseUnit + 8         // 24

// Subtraction
reducedSize = $baseUnit - 4          // 12
offsetMargin = $baseUnit - 2         // 14

// Multiplication  
doubleSize = $baseUnit * 2           // 32
largeText = $baseUnit * 1.5          // 24

// Division
halfSize = $baseUnit / 2             // 8
thirdSize = $baseUnit / 3            // 5.333...

// Exponentiation
squared = $baseUnit ^ 2              // 256
cubeRoot = $baseUnit ^ (1/3)         // 2.52...
```

## Order of Operations

TokenScript DSL follows standard mathematical precedence (PEMDAS):

```tokenscript
baseUnit = 16

// Without parentheses - follows PEMDAS
result1 = $baseUnit + 8 * 2          // 32 (not 48!)
// Calculated as: 16 + (8 * 2) = 16 + 16 = 32

// With parentheses - controls order
result2 = ($baseUnit + 8) * 2        // 48
// Calculated as: (16 + 8) * 2 = 24 * 2 = 48

// Complex expressions
complex = ($baseUnit * 2 + 8) / 4    // 10
// Calculated as: ((16 * 2) + 8) / 4 = (32 + 8) / 4 = 40 / 4 = 10
```

## Working with Multiple Variables

Create relationships between multiple tokens:

```tokenscript
// Foundation values
baseUnit = 16
goldenRatio = 1.618
gridColumns = 12

// Mathematical relationships
columnWidth = $baseUnit * 4          // 64
gutterWidth = $baseUnit              // 16
containerWidth = ($columnWidth + $gutterWidth) * $gridColumns - $gutterWidth
// Calculated as: (64 + 16) * 12 - 16 = 80 * 12 - 16 = 960 - 16 = 944

// Typography relationships  
baseTextSize = $baseUnit             // 16
headingSize = $baseTextSize * $goldenRatio  // 25.888
lineHeight = $baseTextSize * 1.5     // 24
```

## Math in Scale Parameters

Use expressions directly in scale definitions:

```tokenscript
baseUnit = 16
ratio = 1.25

// Math in scale parameters
spacing
  /numberScale : linear
    base = $baseUnit / 2           // 8
    increment = $baseUnit / 4      // 4  
    steps = 8

typography
  /numberScale : modular
    base = $baseUnit               // 16
    ratio = $ratio + 0.125         // 1.375
    steps = 6

// Complex math in parameters
layout
  /numberScale : linear  
    base = ($baseUnit * 2) + 8     // 40
    increment = $baseUnit + ($baseUnit / 4)  // 20
    steps = 5
```

## Common Mathematical Patterns

### Proportional Scaling
```tokenscript
baseUnit = 16

// Create proportional relationships
smallSize = $baseUnit * 0.75     // 12
mediumSize = $baseUnit           // 16  
largeSize = $baseUnit * 1.25     // 20
xlargeSize = $baseUnit * 1.5     // 24
```

### Golden Ratio Applications
```tokenscript
goldenRatio = 1.618
baseSize = 16

// Typography using golden ratio
headingLarge = $baseSize * ($goldenRatio ^ 2)    // ~42.25
headingMedium = $baseSize * $goldenRatio         // ~25.89
bodyText = $baseSize                             // 16
captionText = $baseSize / $goldenRatio           // ~9.89
```

### Grid Calculations
```tokenscript
containerWidth = 1200
columns = 12
gutterWidth = 20

// Calculate column width automatically
columnWidth = ($containerWidth - ($gutterWidth * ($columns - 1))) / $columns
// Result: (1200 - (20 * 11)) / 12 = (1200 - 220) / 12 = 980 / 12 = 81.67
```

### Aspect Ratio Calculations
```tokenscript
cardWidth = 320

// Common aspect ratios
ratio16to9 = 16 / 9                   // 1.778
ratio4to3 = 4 / 3                     // 1.333
ratioGolden = 1.618

// Calculate heights based on width and ratio
cardHeight16to9 = $cardWidth / $ratio16to9    // 180
cardHeight4to3 = $cardWidth / $ratio4to3      // 240
cardHeightGolden = $cardWidth / $ratioGolden  // 197.78
```

## Advanced Mathematical Concepts

### Modular Math for Rhythm
```tokenscript
baselineGrid = 4

// Ensure all values align to baseline grid
fontSize = 16
lineHeight = ($fontSize * 1.5)
paddingTop = $lineHeight + $baselineGrid     // Adds extra baseline unit
```

### Responsive Scaling
```tokenscript
minScreen = 320
maxScreen = 1440
minSize = 16
maxSize = 24

// Linear interpolation concept (would need transform function in real implementation)
screenRange = $maxScreen - $minScreen        // 1120
sizeRange = $maxSize - $minSize              // 8
scaleFactor = $sizeRange / $screenRange      // 0.00714...
```

### Mathematical Constants
```tokenscript
// Useful mathematical constants
goldenRatio = 1.618033988749895
pi = 3.141592653589793
e = 2.718281828459045
sqrt2 = 1.4142135623730951

// Applications
circularPadding = $baseUnit * $sqrt2     // For circular elements
harmonicSpacing = $baseUnit * $goldenRatio
```

## Error Handling and Edge Cases

### Division by Zero
```tokenscript
baseUnit = 16
divisor = 0

// This will cause an error
// problematic = $baseUnit / $divisor    // Don't do this!

// Safe division with validation
safeDivisor = 2
result = $baseUnit / $safeDivisor        // Safe: 8
```

### Very Large Numbers
```tokenscript
// TokenScript handles large numbers gracefully
largeNumber = 999999999
calculation = $largeNumber * 1.5         // Works fine

// But be practical in design contexts
practicalSize = 16
reasonableMax = $practicalSize * 10      // 160 - more realistic
```

### Precision Considerations
```tokenscript
// Some calculations produce many decimal places
precise = 16 / 3                         // 5.333333...

// Use rounding in scales for clean output
values
  /numberScale : custom
    values = [16, $precise, 24]
  /roundTo(2)                           // Rounds to 5.33
```

## Real-World Examples

### Complete Spacing System
```tokenscript
baseUnit = 16
ratio = 1.5

// Mathematical spacing system
spacing
  /numberScale : modular
    base = $baseUnit / 4               // 4 (quarter unit)
    ratio = $ratio                     // 1.5
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
  /roundTo(2)

// Derived padding (75% of spacing)
padding = $spacing
  /transform(size * 0.75)
  /roundTo(2)

// Derived margins (125% of spacing)  
margin = $spacing
  /transform(size * 1.25)
  /roundTo(2)
```

### Typography Scale with Line Heights
```tokenscript
baseFont = 16
textRatio = 1.25
lineHeightRatio = 1.4

// Font sizes
fontSizes
  /numberScale : modular
    base = $baseFont
    ratio = $textRatio
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]
  /roundTo(2)

// Corresponding line heights (always 1.4x the font size)
lineHeights = $fontSizes
  /transform(size * $lineHeightRatio)
  /roundTo(2)
```

### Responsive Container System
```tokenscript
// Base measurements
baseUnit = 16
maxWidth = 1200
padding = $baseUnit * 2

// Container calculations
containerSm = 640
containerMd = 768  
containerLg = 1024
containerXl = $maxWidth

// Content widths (container minus padding)
contentSm = $containerSm - ($padding * 2)      // 608
contentMd = $containerMd - ($padding * 2)      // 736
contentLg = $containerLg - ($padding * 2)      // 992
contentXl = $containerXl - ($padding * 2)      // 1168
```

## Best Practices

### ✅ Do
```tokenscript
// Use descriptive variable names
baseUnit = 16
goldenRatio = 1.618
result = $baseUnit * $goldenRatio

// Group related calculations
typography
  baseSize = 16
  ratio = 1.25
  largeHeading = $baseSize * ($ratio ^ 2)

// Use parentheses for clarity
padding = ($baseUnit + 4) * 2
```

### ❌ Don't
```tokenscript
// Avoid magic numbers
mysterious = $baseUnit * 1.847392847    // What is this ratio?

// Don't make overly complex expressions
complex = ($a * $b + $c) / ($d ^ 2 - $e) * ($f + $g)  // Hard to understand

// Avoid unnecessary precision
tooMuch = $baseUnit * 1.618033988749895123456789  // Overkill
```

### 🎯 Recommended Patterns
```tokenscript
// Clear, meaningful calculations
baseUnit = 16

// Semantic relationships
headerPadding = $baseUnit * 1.5      // 1.5x base unit
buttonPadding = $baseUnit * 0.75     // 3/4 base unit
cardMargin = $baseUnit / 2           // Half base unit

// Document unusual ratios
specialRatio = 1.414                 // √2 - for diagonal relationships
diagonalSpacing = $baseUnit * $specialRatio
```

## Next Steps

Now that you've mastered mathematical expressions, let's explore how to reference and connect your tokens:

👉 **[Continue to References →](06-references.md)**

---

### 🧮 Math Challenge
Create a complete spacing system using only mathematical expressions:

```tokenscript
// Start with these values
baseUnit = 16
ratio = 1.5

// Create:
// 1. A spacing scale using modular progression
// 2. Padding values that are 75% of spacing
// 3. Margin values that are 125% of spacing  
// 4. Border radius values that follow golden ratio
```