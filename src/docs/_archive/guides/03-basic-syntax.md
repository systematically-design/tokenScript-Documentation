---
title: Basic Syntax
order: 3
---

# Basic Syntax

Master the fundamental syntax rules of TokenScript DSL. Understanding these patterns will make everything else click into place.

## File Structure

TokenScript DSL files use the `.tkns` extension and follow these basic rules:

```tokenscript
// Comments start with //
// Blank lines are ignored

// Simple assignments
variableName = value

// Nested structures use indentation
parentName
  childName = value
  anotherChild = value

// Scales use special syntax
scaleName
  /numberScale : type
    parameter = value
```

## Naming Rules

### ✅ Valid Names
```tokenscript
baseUnit = 16           // camelCase
primary-color = "#FF0000"   // kebab-case  
font_family = "Inter"       // snake_case
size2xl = 32               // numbers OK at end
_private = "internal"       // underscore prefix OK
```

### ❌ Invalid Names
```tokenscript
2xl = 32              // Can't start with number
my variable = 16      // No spaces allowed
font-size! = 14       // No special characters
class = "button"      // 'class' is reserved (avoid)
```

**Best Practice:** Use consistent naming convention across your project (we recommend camelCase).

## Comments

Document your tokens with comments:

```tokenscript
// This is a single-line comment

baseUnit = 16  // End-of-line comment

// Multi-line documentation:
// The base unit drives our entire spacing system.
// It should be divisible by 4 for pixel-perfect rendering.
// Common values: 8, 12, 16, 20
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = 8
```

## Indentation

TokenScript DSL uses **indentation** (not braces) to show structure:

```tokenscript
// Root level (no indentation)
colors
  // First level (2 spaces)
  primary = "#3B82F6"
  secondary = "#6B7280"
  
  // Nested groups
  status
    // Second level (4 spaces)
    success = "#10B981"
    warning = "#F59E0B"
    error = "#EF4444"
```

**Important Rules:**
- Use **spaces**, not tabs
- Be **consistent** (2 spaces recommended)
- **Child items** must be indented more than parent
- **Sibling items** must have same indentation

### ❌ Indentation Errors
```tokenscript
colors
  primary = "#FF0000"
 secondary = "#00FF00"    // Wrong! Inconsistent indentation

typography
  size = 16
    weight = 400          // Wrong! Child more indented than parent
```

## Assignment Syntax

The basic pattern is `name = value`:

```tokenscript
// Numbers
fontSize = 16
ratio = 1.618
count = 42

// Strings (quotes required for strings with spaces)
fontFamily = "SF Pro Display"
buttonText = "Click here"
singleWord = Inter         // Quotes optional for single words

// Booleans
isEnabled = true
showBorder = false

// Arrays
breakpoints = [768, 1024, 1280, 1920]
fontWeights = [300, 400, 500, 600, 700]
```

## Scale Syntax

Scales follow a special multi-line syntax:

```tokenscript
scaleName
  /scaleType : variant
    parameter = value
    parameter = value
    parameter = value
```

### Linear Scale
```tokenscript
spacing
  /numberScale : linear
    base = 8              // Starting value
    increment = 8         // Amount to add each step  
    steps = 5             // Number of steps
```

### Modular Scale  
```tokenscript
typography
  /numberScale : modular
    base = 16             // Starting value
    ratio = 1.25          // Multiplication ratio
    steps = 6             // Number of steps
```

### Custom Step Names
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg", "xl"]  // Custom names
```

## Reference Syntax

Reference other tokens with `$` prefix:

```tokenscript
baseUnit = 16

// Simple reference
fontSize = $baseUnit

// Dotted reference (navigation)
colors
  primary = "#3B82F6"
  
headerColor = $colors.primary

// Tree shorthand (find anywhere in structure)
designSystem
  foundation
    colors
      brand = "#FF0000"
      
// Reference brand color from anywhere
buttonColor = $designSystem...brand
```

## Mathematical Expressions

Perform calculations in assignments and scale parameters:

```tokenscript
baseUnit = 16

// Basic math
headerSize = $baseUnit * 2
padding = $baseUnit + 4
gridWidth = $baseUnit * 80 - 32

// Math in scale parameters
spacing
  /numberScale : linear
    base = $baseUnit / 2
    increment = $baseUnit / 4
    steps = 8

// Parentheses for order of operations
complexCalc = ($baseUnit + 8) * 1.5
```

**Supported Operators:**
- `+` Addition
- `-` Subtraction  
- `*` Multiplication
- `/` Division
- `^` Exponentiation
- `()` Parentheses for grouping

## Pipeline Operations

Transform scales with pipeline operations:

```tokenscript
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = 6
  /roundTo(2)              // Round to 2 decimal places

lineHeights = $fontSizes
  /transform(size * 1.4)   // Multiply each value by 1.4
  /roundTo(4)              // Round to nearest 4
```

## Nested Structures

Create hierarchical token organization:

```tokenscript
// Simple grouping
colors
  primary = "#3B82F6"
  secondary = "#6B7280"

// Multi-level nesting
designSystem
  foundation
    colors
      brand
        primary = "#3B82F6"
        secondary = "#1D4ED8"
      neutral
        white = "#FFFFFF"
        black = "#000000"
    
    typography
      family
        primary = "Inter"
        secondary = "Georgia"
```

## String Handling

Handle strings correctly:

```tokenscript
// No quotes needed for single words
fontFamily = Inter
color = red
status = active

// Quotes required for strings with spaces or special characters
displayName = "SF Pro Display"
errorMessage = "Something went wrong!"
cssClass = "btn-primary"

// Quotes required for strings that look like other types
version = "1.0"          // Without quotes, becomes number 1.0
flag = "true"            // Without quotes, becomes boolean true
```

## Common Syntax Patterns

### Configuration Block
```tokenscript
// Foundation values
config
  baseUnit = 16
  goldenRatio = 1.618
  gridColumns = 12
```

### Scale with References
```tokenscript
baseUnit = 16

spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md", "lg", "xl"]
```

### Derived Values
```tokenscript
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = 6

lineHeights = $fontSizes
  /transform(size * 1.4)
```

### Multi-Level Organization
```tokenscript
theme
  light
    colors
      background = "#FFFFFF"
      text = "#000000"
  
  dark  
    colors
      background = "#000000"
      text = "#FFFFFF"
```

## Syntax Validation

Common syntax errors to avoid:

```tokenscript
// ❌ Wrong
myToken = 16;           // No semicolons needed
my token = 16           // Spaces in names not allowed
myToken == 16           // Use = not ==
myToken: 16             // Use = not :

// ✅ Correct  
myToken = 16
```

## Next Steps

Now that you understand the basic syntax, let's explore the data types in detail:

👉 **[Continue to Variables & Values →](04-variables-values.md)**

---

### 🎯 Practice Exercise
Try writing a basic design system using only what you've learned:
```tokenscript
// Your turn! Create:
// 1. A base unit
// 2. A color palette with nesting
// 3. A spacing scale that references the base unit
// 4. A typography scale with custom step names
```