---
title: Introduction to TokenScript DSL
order: 1
---

# Introduction to TokenScript DSL --0

## What is TokenScript DSL?

TokenScript DSL is a powerful, intuitive language for defining design tokens. It transforms the way teams create, maintain, and scale design systems by providing:

- **📏 Dynamic Scales**: Generate consistent value sequences automatically
- **🔗 Smart References**: Connect tokens to eliminate duplication and ensure consistency  
- **🧮 Mathematical Operations**: Create derived values with expressions and transformations
- **🏗️ Nested Organization**: Structure complex token hierarchies naturally
- **⚡ W3C Compatibility**: Outputs standard Design Tokens format

## Why TokenScript DSL?

### **Traditional Approach Problems**
```json
// Traditional JSON - repetitive and error-prone
{
  "fontSize": {
    "small": { "$value": 14 },
    "medium": { "$value": 16 },
    "large": { "$value": 18 },
    "xlarge": { "$value": 20 }
  },
  "lineHeight": {
    "small": { "$value": 21 },    // 14 * 1.5 - calculated manually
    "medium": { "$value": 24 },   // 16 * 1.5 - calculated manually  
    "large": { "$value": 27 },    // 18 * 1.5 - calculated manually
    "xlarge": { "$value": 30 }    // 20 * 1.5 - calculated manually
  }
}
```

**Problems:**
- ❌ Manual calculations prone to errors
- ❌ No relationship between related values
- ❌ Hard to maintain and update
- ❌ Inconsistent scaling

### **TokenScript DSL Solution**
```tokenscript
// TokenScript DSL - declarative and maintainable
fontSize
  /numberScale : linear
    base = 14
    increment = 2
    steps = ["small", "medium", "large", "xlarge"]

lineHeight = $fontSize
  /transform(size * 1.5)
```

**Benefits:**
- ✅ Automatic generation ensures consistency
- ✅ Clear relationships between tokens
- ✅ Easy to update (change base = 14 to base = 16)
- ✅ Mathematical precision

## Core Philosophy

TokenScript DSL is built on three principles:

### 1. **Declarative Design**
Describe *what* you want, not *how* to calculate it.

```tokenscript
// Say what you want
spacing
  /numberScale : modular
    base = 8
    ratio = 1.5
    steps = 5

// Not how to calculate it
// spacing1 = 8
// spacing2 = 12  
// spacing3 = 18
// spacing4 = 27
// spacing5 = 40.5
```

### 2. **Relationship-Driven**
Tokens should express their relationships explicitly.

```tokenscript
baseUnit = 16

typography
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit / 8
    steps = ["xs", "sm", "md", "lg", "xl"]

// All typography scales with baseUnit changes
```

### 3. **Progressive Complexity**
Start simple, add complexity only when needed.

```tokenscript
// Simple
primaryColor = "#3B82F6"

// Add relationships  
secondaryColor = $primaryColor
  /transform(lighten(20%))

// Add scales
colorScale
  /colorScale : hue
    base = $primaryColor
    steps = 5
```

## What Makes It Special?

### **🎯 Type Safety**
```tokenscript
baseUnit = 16        // Number
brandColor = "#FF0000"  // Color
fontFamily = "Inter"    // String
isEnabled = true        // Boolean
breakpoints = [768, 1024, 1280]  // Array
```

### **🔄 Dynamic Relationships**
```tokenscript
// Change one value...
gridUnit = 8

// Everything updates automatically
spacing
  /numberScale : linear
    base = $gridUnit
    increment = $gridUnit
    steps = 6

padding = $spacing
  /transform(size * 0.75)
```

### **🧮 Mathematical Power**
```tokenscript
goldenRatio = 1.618

typography
  /numberScale : modular  
    base = 16
    ratio = $goldenRatio
    steps = ["xs", "sm", "md", "lg", "xl"]
  /roundTo(2)
```

## Real-World Impact

### **Before TokenScript DSL**
- 🕐 **Hours** spent manually calculating scales
- 🐛 **Bugs** from inconsistent values  
- 😰 **Fear** of changing base values
- 📈 **Growing** maintenance burden

### **After TokenScript DSL**
- ⚡ **Seconds** to generate perfect scales
- ✅ **Zero** inconsistency bugs
- 🚀 **Confident** system-wide updates
- 📉 **Shrinking** maintenance overhead

## Next Steps

Ready to experience the power of TokenScript DSL? Let's get your hands dirty with some real code!

👉 **[Continue to Quick Start →](02-quick-start.md)**

---

### 💡 Pro Tip
TokenScript DSL compiles to standard W3C Design Tokens format, so it works with your existing toolchain. You get all the benefits of a powerful authoring language while maintaining compatibility with the ecosystem.