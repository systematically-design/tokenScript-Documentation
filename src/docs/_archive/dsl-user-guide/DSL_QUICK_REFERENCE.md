---
title: TokenScript DSL - Quick Syntax Reference
order: 1
---

# TokenScript DSL - Quick Syntax Reference

**Single-page reference for all language features**

## 📝 Basic Syntax

### Variable Assignment
```tokenscript
variableName = value         // Basic assignment
nested.property = value      // Nested property
```

### Comments
```tokenscript
// Single line comment
variable = 16    // End of line comment
```

### Data Types
```tokenscript
// Numbers
fontSize = 16
ratio = 1.618

// Strings  
fontFamily = "SF Pro Display"
singleWord = Inter           // Quotes optional for single words

// Booleans
isEnabled = true
showBorder = false

// Arrays
breakpoints = [768, 1024, 1280]
```

## 🏗️ Structure & Nesting

### Indentation-based Structure
```tokenscript
parent
  child = value              // 2 spaces indentation
  nested
    grandchild = value       // 4 spaces indentation
```

### Naming Rules
- ✅ `camelCase`, `kebab-case`, `snake_case`
- ✅ Numbers at end: `size2xl`
- ❌ No spaces: `my variable`
- ❌ No leading numbers: `2xl`

## 🔗 References

### Basic References
```tokenscript
baseUnit = 16
fontSize = $baseUnit         // Simple reference
headerSize = $baseUnit * 2   // Reference in expression
```

### Nested References
```tokenscript
colors
  primary = "#3B82F6"

buttonColor = $colors.primary       // Dot notation
deepRef = $level1.level2.level3     // Deep nesting
```

### Tree Shorthand
```tokenscript
designSystem
  foundation
    colors
      brand = "#FF0000"

buttonColor = $designSystem...brand  // Find 'brand' anywhere in tree
```

### Scale References
```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg"]

headerSize = $typography.lg          // Reference scale step
lineHeight = $typography.base * 1.4  // Reference scale property
```

## ⚖️ Scales

### Linear Scale
```tokenscript
spacing
  /numberScale : linear
    base = 8              // Starting value
    increment = 8         // Step increment
    steps = 5             // Number of steps
    // Generates: 8, 16, 24, 32, 40
```

### Modular Scale
```tokenscript
typography
  /numberScale : modular
    base = 16             // Starting value
    ratio = 1.25          // Multiplication ratio
    steps = 4             // Number of steps
    // Generates: 16, 20, 25, 31.25
```

### Custom Step Names
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg", "xl"]
    // Generates: xs=8, sm=16, md=24, lg=32, xl=40
```

## 🔄 Pipeline Operations

### Transform Operations
```tokenscript
baseScale
  /numberScale : linear
    base = 16
    increment = 8
    steps = 4

// Transform existing scale
derivedScale = $baseScale
  /transform(size * 1.5)     // Multiply each value
  /roundTo(4)                // Round to nearest 4
  /clamp(16, 64)             // Limit values between 16 and 64
```

### Self-Reference in Pipelines
```tokenscript
complexScale = $baseScale
  /transform(size + $this.base)  // Reference original scale properties
  /roundTo(2)
```

## 🧮 Mathematical Expressions

### Operators
```tokenscript
// Basic operators
addition = $base + 8
subtraction = $base - 4
multiplication = $base * 1.5
division = $base / 2
exponentiation = $base ^ 2

// Order of operations
complex = ($base + 8) * 1.5 - 4
```

### Conditional Expressions
```tokenscript
// Ternary operator
fontSize = $screenWidth > 768 ? $large : $small

// Boolean operations
isLarge = $fontSize > 18
combined = $isLarge && $isEnabled
```

## 🎯 Advanced Features

### Self-References ($this)
```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.618
    
  // Reference properties from same scale
  lineHeight = $this.base * 1.4
  
  derived = $this.md * 1.2   // Reference generated scale values
```

### Context References ($...)
```tokenscript
designSystem
  spacing
    /numberScale : linear
      base = 16
      increment = $...base   // Reference 'base' from current context
      steps = 5
```

### Chained Transformations
```tokenscript
finalScale = $baseScale
  /transform(size * 2)       // First transformation
  /roundTo(8)                // Round result
  /clamp(16, 128)            // Apply limits
```

## 📋 Common Patterns

### Foundation Setup
```tokenscript
// Base configuration
baseUnit = 16
goldenRatio = 1.618
brandPrimary = "#3B82F6"

// Derived foundation
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md", "lg", "xl"]
```

### Typography System
```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = $goldenRatio
    steps = ["caption", "body", "h3", "h2", "h1"]

// Derived line heights
lineHeights = $typography
  /transform(size * 1.4)
  /roundTo(4)
```

### Color System
```tokenscript
colors
  brand
    primary = "#3B82F6"
    secondary = "#6B7280"
  
  semantic
    success = "#10B981"
    warning = "#F59E0B"
    error = "#EF4444"

// Component tokens
button
  background = $colors.brand.primary
  text = "#FFFFFF"
  padding = $spacing.md
```

### Responsive Scales
```tokenscript
breakpoints = [768, 1024, 1280]

fluidType
  /numberScale : modular
    base = 16
    ratio = 1.125
    steps = ["sm", "md", "lg"]
  /transform(clamp(size * 0.8, size, size * 1.2))
```

## ⚠️ Common Gotchas

### String Handling
```tokenscript
// ✅ Correct
fontFamily = "SF Pro Display"    // Quotes needed for spaces
version = "1.0"                  // Quotes prevent number conversion
flag = "true"                    // Quotes prevent boolean conversion

// ❌ Wrong  
fontFamily = SF Pro Display      // Syntax error - missing quotes
version = 1.0                    // Becomes number, not string
```

### Reference Resolution
```tokenscript
// ✅ Correct - defined before use
baseValue = 16
derived = $baseValue

// ⚠️ Forward reference - works but avoid for clarity
derived = $baseValue
baseValue = 16
```

### Scale Parameter References
```tokenscript
// ✅ Correct
spacing
  /numberScale : linear
    base = $baseUnit           // Reference external variable
    increment = $this.base     // Reference scale property
    steps = 5

// ❌ Wrong
spacing
  /numberScale : linear
    base = 16
    increment = base           // Missing $ prefix
```

## 🚀 Output Format

TokenScript DSL compiles to W3C Design Tokens format:

```json
{
  "baseUnit": {
    "$type": "number",
    "$value": 16
  },
  "typography": {
    "sm": { "$type": "number", "$value": 16 },
    "md": { "$type": "number", "$value": 20 },
    "lg": { "$type": "number", "$value": 25 }
  }
}
```

## 🔧 Usage

### Programmatic API
```javascript
const { compile } = require('./lib/compiler-v2.js');
const result = compile(sourceCode);
console.log(result.ast); // Compiled tokens
```

### Command Line
```bash
cd playground
node build.js          // Compile examples
```

---

**Need more details?** See the [complete User Guide](docs/user-guide/) for step-by-step explanations and examples.