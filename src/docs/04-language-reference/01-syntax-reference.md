# 2.1 DSL Syntax Reference

Complete reference guide to TokenScript DSL syntax.

## 2.1.1 Basic Syntax

### 2.1.1.1 Assignments

The simplest form: `name = value`

**DSL Input:**
```tokenscript
spacing = 8
color = #ff0000
label = "Hello World"
enabled = true
```

**JSON Output:**
```json
{
  "spacing": 8,
  "color": "#ff0000",
  "label": "Hello World",
  "enabled": true
}
```

### 2.1.1.2 Comments

Use `//` for comments:

```tokenscript
// This is a comment
spacing = 8  // Inline comment
```

### 2.1.1.3 Nested Groups

Use indentation (spaces or tabs) to create nested groups:

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6
  secondary = #8B5CF6
  neutral
    light = #F3F4F6
    dark = #111827
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6",
  "colors.neutral.light": "#F3F4F6",
  "colors.neutral.dark": "#111827"
}
```

This creates tokens:
- `colors.primary`
- `colors.secondary`
- `colors.neutral.light`
- `colors.neutral.dark`

## 2.1.2 Value Types

### 2.1.2.1 Numbers

**DSL Input:**
```tokenscript
spacing = 8
fontSize = 16.5
ratio = 1.25
```

**JSON Output:**
```json
{
  "spacing": 8,
  "fontSize": 16.5,
  "ratio": 1.25
}
```

### 2.1.2.2 Strings

**DSL Input:**
```tokenscript
fontFamily = "Inter"
label = "Primary Button"
// Unquoted strings work too
fontFamily = Inter
```

**JSON Output:**
```json
{
  "fontFamily": "Inter",
  "label": "Primary Button"
}
```

### Colors

Multiple color formats supported:

```tokenscript
// Hex colors
primary = #3B82F6
shortHex = #f00
withAlpha = #3B82F680

// RGB/RGBA
rgbColor = rgb(59, 130, 246)
rgbaColor = rgba(59, 130, 246, 0.5)

// HSL/HSLA
hslColor = hsl(217, 91%, 60%)
hslaColor = hsla(217, 91%, 60%, 0.5)

// OKLCH
oklchColor = oklch(0.65, 0.2, 250)

// Named colors
namedColor = blue
```

### 2.1.2.4 Booleans

**DSL Input:**
```tokenscript
enabled = true
disabled = false
```

**JSON Output:**
```json
{
  "enabled": true,
  "disabled": false
}
```

### 2.1.2.5 Objects

In TokenScript DSL, objects are created using indentation. This creates separate tokens for each property:

**DSL Input:**
```tokenscript
button
  padding
    x = 16
    y = 8
```

**JSON Output:**
```json
{
  "button.padding.x": 16,
  "button.padding.y": 8
}
```

This creates individual tokens that can be referenced independently (e.g., `$button.padding.x`).

## 2.1.1 References

### 2.1.3.1 Dotted References

Reference other tokens using `$`:

**DSL Input:**
```tokenscript
baseSpacing = 8
cardPadding = $baseSpacing
buttonPadding = $baseSpacing * 2
```

**JSON Output:**
```json
{
  "baseSpacing": 8,
  "cardPadding": 8,
  "buttonPadding": 16
}
```

### 2.1.3.2 Nested References

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6

button
  backgroundColor = $colors.primary
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "button.backgroundColor": "#3B82F6"
}
```

### 2.1.3.3 Self References

Use `$...` to reference within the current scope:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  // Reference the base from this scale
  custom = $...base * 3
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 16,
  "spacing.custom": 24
}
```

### 2.1.3.4 Tree Shorthand

Search within a subtree using `$start...end.path`:

**DSL Input:**
```tokenscript
spacing
  xs = 8
  sm = 16
  md = 24

button
  padding
    x = $spacing...spacing.md
    y = 8
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 16,
  "spacing.md": 24,
  "button.padding.x": 24,
  "button.padding.y": 8
}
```

## 2.1.4 Expressions

Perform calculations using expressions:

**DSL Input:**
```tokenscript
base = 8
double = $base * 2
half = $base / 2
sum = $base + 4
difference = $base - 2
```

**JSON Output:**
```json
{
  "base": 8,
  "double": 16,
  "half": 4,
  "sum": 12,
  "difference": 6
}
```

Supported operators: `+`, `-`, `*`, `/`, `%` (modulo)

## 2.1.5 Scales

### 2.1.5.1 Linear Scales

Create evenly spaced values:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md", "lg"]
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 16,
  "spacing.lg": 20
}
```

Parameters:
- `base` - Starting value (required)
- `increment` - Amount to add each step
- `peak` - Maximum value (alternative to increment)
- `steps` - Array of step names or number

### 2.1.5.2 Modular Scales

Create proportional scales (great for typography):

**DSL Input:**
```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]
```

**JSON Output:**
```json
{
  "typography.sm": 16,
  "typography.md": 20,
  "typography.lg": 25,
  "typography.xl": 31.25
}
```

Parameters:
- `base` - Starting value (required)
- `ratio` - Multiplier for each step
- `peak` - Maximum value (alternative to ratio)
- `steps` - Array of step names or number

### Step Formats

Steps can be defined in multiple ways:

```tokenscript
// Array of names
steps = ["xs", "sm", "md"]

// Number (creates "1", "2", "3", ...)
steps = 5

// Comma-separated string
steps = "xs, sm, md, lg"
```

## 2.1.6 Type Annotations

Specify token types using `:type`:

**DSL Input:**
```tokenscript
// Color type
primary:color = #3B82F6

// Spacing type
padding:spacing = 16

// Multiple tokens with same type
colors : colors
  primary = #3B82F6
  secondary = #8B5CF6
```

**JSON Output:**
```json
{
  "primary": "#3B82F6",
  "padding": 16,
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6"
}
```

## 2.1.7 Pipelines

Apply transformations to scales:

### 2.1.7.1 Round To

Round values to nearest unit:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 7
    increment = 3
    steps = ["xs", "sm", "md"]
  /roundTo(4)
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 12
}
```

### 2.1.7.2 Transform

Apply expressions to each value:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  /transform(each * 1.5)
```

**JSON Output:**
```json
{
  "spacing.xs": 12,
  "spacing.sm": 18,
  "spacing.md": 24
}
```

Available variables in transform:
- `each` or `value` - Current value
- `index` - Current index (0-based)
- `size` - Total number of values

## 2.1.6 Iteration

### ForEach

Generate tokens from a list:

```tokenscript
/forEach [xs, sm, md] as size
  margin = 8
  padding = 16
```

Creates: `xs.margin`, `xs.padding`, `sm.margin`, `sm.padding`, etc.

### Matrix

Create combinations from multiple lists:

```tokenscript
/matrix
  [primary, secondary] as color
  [light, dark] as theme
    backgroundColor = palette.{color}.{theme}
```

Creates tokens for all combinations:
- `primary.light.backgroundColor`
- `primary.dark.backgroundColor`
- `secondary.light.backgroundColor`
- `secondary.dark.backgroundColor`

## 2.1.7 Composite Tokens

Group related properties:

### Typography

```tokenscript
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter"
```

### Border

```tokenscript
border:border
  width = 1
  style = solid
  color = #000000
```

### Shadow

```tokenscript
shadow:shadow
  offsetX = 0
  offsetY = 4
  blur = 8
  spread = 0
  color = rgba(0, 0, 0, 0.1)
```

## 2.1.8 Best Practices

1. **Use meaningful names** - `spacing.md` is better than `spacing.3`
2. **Group related tokens** - Use nesting to organize
3. **Reference base values** - Don't repeat numbers
4. **Use scales** - Generate consistent values automatically
5. **Add comments** - Explain why, not what

## 2.1.9 Common Patterns


