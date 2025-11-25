---
title: Variables & Values
order: 4
---

# Variables & Values

Learn how to work with all data types in TokenScript DSL. Understanding data types is crucial for building robust, type-safe design systems.

## Data Types Overview

TokenScript DSL supports five core data types:

| Type | Example | W3C Output Type |
|------|---------|-----------------|
| **Number** | `16`, `1.5`, `-4` | `number` |
| **String** | `"Inter"`, `primary` | `string` |  
| **Color** | `"#FF0000"`, `"red"` | `color` |
| **Boolean** | `true`, `false` | `boolean` |
| **Array** | `[1, 2, 3]` | Multiple tokens |

## Numbers

Numbers are the foundation of most design systems:

```tokenscript
// Integers
baseUnit = 16
gridColumns = 12
zIndex = 100

// Decimals
ratio = 1.618
opacity = 0.8
lineHeight = 1.4

// Negative numbers
offset = -8
topMargin = -16
```

### Number Precision
```tokenscript
// High precision is preserved
goldenRatio = 1.618033988749

// But you can round in scales
typography
  /numberScale : modular
    base = 16
    ratio = $goldenRatio
    steps = 5
  /roundTo(2)        // Rounds to 2 decimal places
```

### Mathematical Context
Numbers can be used in mathematical expressions:

```tokenscript
baseUnit = 16

// Mathematical expressions with numbers
padding = $baseUnit * 1.5      // 24
margin = $baseUnit + 8         // 24  
containerWidth = $baseUnit * 80 // 1280
```

## Strings

Strings represent textual values:

```tokenscript
// Font families
primaryFont = "SF Pro Display"
codeFont = "Fira Code"
webFont = Inter                // Quotes optional for single words

// Labels and content
buttonLabel = "Get Started"
placeholderText = "Enter your email..."
errorMessage = "Something went wrong"

// CSS classes and selectors  
className = "btn-primary"
selector = ".card-header"
```

### When to Use Quotes

```tokenscript
// ✅ Quotes optional for single words
fontFamily = Inter
status = active
theme = dark

// ✅ Quotes required for spaces or special characters  
displayName = "SF Pro Display"
errorMsg = "User not found!"
cssValue = "1px solid red"

// ✅ Quotes required to force string interpretation
version = "1.0"        // String "1.0"
flag = "true"          // String "true" 

// Without quotes:
version = 1.0          // Number 1.0
flag = true            // Boolean true
```

### String Use Cases

```tokenscript
// Typography
fonts
  display = "Playfair Display"
  body = "Inter"
  code = "Fira Code"

// Content
labels
  submit = "Submit Form"
  cancel = "Cancel"
  loading = "Please wait..."

// Technical values  
animations
  easing = "cubic-bezier(0.4, 0, 0.2, 1)"
  duration = "300ms"
```

## Colors

Colors are automatically detected and typed:

```tokenscript
// Hex colors (most common)
primary = "#3B82F6"
secondary = "#6B7280"
accent = "#F59E0B"

// Shorthand hex
white = "#FFF"
black = "#000"

// Named colors
red = "red"
blue = "blue"
transparent = "transparent"

// RGB/RGBA (as strings)
semiTransparent = "rgba(59, 130, 246, 0.5)"
rgbColor = "rgb(59, 130, 246)"

// HSL/HSLA (as strings)  
hslColor = "hsl(217, 91%, 60%)"
hslaColor = "hsla(217, 91%, 60%, 0.8)"
```

### Color Organization Patterns

```tokenscript
// Flat structure
primaryBlue = "#3B82F6"
secondaryGray = "#6B7280"
accentYellow = "#F59E0B"

// Nested by purpose
colors
  brand
    primary = "#3B82F6"
    secondary = "#1D4ED8"
  
  semantic
    success = "#10B981"
    warning = "#F59E0B"
    error = "#EF4444"
    info = "#3B82F6"

// Nested by shade (common pattern)
blue
  50 = "#EFF6FF"
  100 = "#DBEAFE"  
  500 = "#3B82F6"
  900 = "#1E3A8A"
```

## Booleans

Booleans represent true/false values:

```tokenscript
// Feature flags
isEnabled = true
showBorder = false
hasDropShadow = true

// Configuration
debugMode = false
useFlexbox = true
autoResize = false

// State indicators
isActive = true
isEmpty = false
isLoading = false
```

### Boolean Use Cases

```tokenscript
// Component configuration
button
  outlined = false
  disabled = false
  fullWidth = true

// System settings
accessibility
  reducedMotion = false
  highContrast = false
  largeText = true

// Build flags
build
  production = true
  minified = true
  sourceMaps = false
```

## Arrays

Arrays represent lists of values:

```tokenscript
// Numbers
breakpoints = [640, 768, 1024, 1280, 1536]
fontWeights = [300, 400, 500, 600, 700, 900]
zIndices = [0, 10, 20, 30, 40, 50]

// Strings
fontFamilies = ["Inter", "SF Pro Display", "system-ui", "sans-serif"]
themes = ["light", "dark", "auto"]
sizes = ["xs", "sm", "md", "lg", "xl"]

// Mixed types (less common but valid)
config = [true, 16, "primary"]
```

### Arrays in Scales

Arrays are commonly used for custom step names:

```tokenscript
// Custom step names in scales
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg", "xl", "2xl"]

// Multiple breakpoints
screens
  /numberScale : custom
    values = [640, 768, 1024, 1280, 1536]
    names = ["sm", "md", "lg", "xl", "2xl"]
```

## Type Inference

TokenScript DSL automatically infers types:

```tokenscript
// Number (starts with digit or decimal)
fontSize = 16           // → number
ratio = 1.5             // → number
offset = -8             // → number

// String (quotes or non-color word)
fontFamily = Inter      // → string
theme = primary         // → string

// Color (hex, named color, or color function)
primary = "#FF0000"     // → color
accent = red            // → color
bg = "rgba(0,0,0,0.5)"  // → color

// Boolean (literal true/false)
isEnabled = true        // → boolean
showBorder = false      // → boolean

// Array (square brackets)
sizes = [16, 20, 24]    // → array → multiple number tokens
```

## Working with References

All data types can be referenced and used in expressions:

```tokenscript
// Define foundation values
baseUnit = 16                    // number
primaryColor = "#3B82F6"         // color
fontFamily = "Inter"             // string
isLargeScreen = true             // boolean
breakpoints = [768, 1024]        // array

// Reference in calculations (numbers only)
padding = $baseUnit * 1.5
margin = $baseUnit / 2

// Reference directly (any type)
buttonColor = $primaryColor
headingFont = $fontFamily
largeScreenMode = $isLargeScreen

// Reference in nested structures
theme
  light
    background = "#FFFFFF"
    text = "#000000"
    
  dark
    background = "#000000"  
    text = "#FFFFFF"

// Reference nested values
cardBackground = $theme.light.background
```

## Type Conversion Examples

Understanding how values are interpreted:

```tokenscript
// These are numbers
count = 42
ratio = 1.618
negative = -16

// These are strings  
version = "1.0"           // Quoted to prevent number interpretation
label = "true"            // Quoted to prevent boolean interpretation
fontName = Inter          // Single word, becomes string

// These are colors
hex = "#FF0000"           // Hex format detected
named = red               // Named color detected
rgba = "rgba(255,0,0,1)"  // Function format detected

// These are booleans
enabled = true            // Literal boolean
disabled = false          // Literal boolean

// These are arrays
list = [1, 2, 3]         // Square bracket format detected
```

## Common Patterns

### Configuration Objects
```tokenscript
config
  baseUnit = 16
  animationDuration = 200
  debugMode = false
  fontStack = ["Inter", "system-ui", "sans-serif"]
```

### Typed Groupings
```tokenscript
typography
  // Numbers
  sizes = [14, 16, 18, 24, 32, 48]
  weights = [400, 500, 600, 700]
  
  // Strings
  families
    sans = "Inter"
    serif = "Georgia" 
    mono = "Fira Code"

colors
  // Colors
  brand
    primary = "#3B82F6"
    secondary = "#6B7280"
    
  // Booleans for feature flags
  features
    darkMode = true
    animations = true
```

### Mathematical Relationships
```tokenscript
// Foundation
baseUnit = 16
ratio = 1.25

// Derived values using math
spacing
  /numberScale : linear
    base = $baseUnit / 2      // 8
    increment = $baseUnit / 4  // 4
    steps = 8

typography  
  /numberScale : modular
    base = $baseUnit          // 16
    ratio = $ratio            // 1.25
    steps = 6
```

## Best Practices

### ✅ Do
```tokenscript
// Use semantic names
primaryColor = "#3B82F6"
baseSpacing = 16
isEnabled = true

// Group related values
colors
  brand = "#3B82F6"
  accent = "#F59E0B"

// Use math for relationships
padding = $baseUnit * 1.5
```

### ❌ Don't
```tokenscript
// Avoid non-semantic names
color1 = "#3B82F6"          // What is color1?
val = 16                    // What does val represent?

// Don't hardcode derived values
padding = 24                // Better: $baseUnit * 1.5
```

## Next Steps

Now that you understand data types, let's explore mathematical expressions:

👉 **[Continue to Mathematical Expressions →](05-mathematical-expressions.md)**

---

### 🧪 Type Exploration Exercise
Try creating tokens with each data type and see how they compile:

```tokenscript
// Numbers
myNumber = 42

// Strings  
myString = "Hello World"

// Colors
myColor = "#FF0000"

// Booleans
myBoolean = true  

// Arrays
myArray = [1, 2, 3]
```

Check the output and notice how each type is handled!