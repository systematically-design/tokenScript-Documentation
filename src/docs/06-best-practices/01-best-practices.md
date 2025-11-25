# 3.2 Best Practices

Guidelines for creating maintainable, scalable design token systems.

## 3.2.1 Naming Conventions

### Use Semantic Names

✅ **Good:**
```tokenscript
colors
  primary = #3B82F6
  textPrimary = #111827
  backgroundSurface = #FFFFFF
```

❌ **Bad:**
```tokenscript
colors
  blue = #3B82F6
  black = #111827
  white = #FFFFFF
```

### Be Consistent

Use consistent naming patterns across your system:

```tokenscript
// Consistent pattern
button
  sizeSm = ...
  sizeMd = ...
  sizeLg = ...

// Or
button
  sm = ...
  md = ...
  lg = ...
```

### Use Clear Hierarchies

```tokenscript
// Clear hierarchy
colors
  brand
    primary = #3B82F6
    secondary = #8B5CF6
  semantic
    success = #10B981
    error = #EF4444
```

## 3.2.2 Organization

### Group Related Tokens

```tokenscript
// Group by purpose
spacing
  component = ...
  layout = ...
  content = ...

typography
  heading = ...
  body = ...
  caption = ...
```

### Use Base Values

Define base values and reference them:

```tokenscript
// Base values
baseUnit = 8
baseFontSize = 16
primaryColor = #3B82F6

// Reference base values
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md"]
```

### Avoid Duplication

❌ **Don't repeat values:**
```tokenscript
spacing
  xs = 8
  sm = 16
  md = 24
  lg = 32

button
  padding = 16  // Duplicate of sm
```

✅ **Reference instead:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg"]

button
  padding = $spacing.sm
```

## 3.2.3 Scale Design

### Choose Appropriate Scales

- **Linear scales** for spacing, sizing, z-index
- **Modular scales** for typography, icon sizes

```tokenscript
// Linear for spacing
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg"]

// Modular for typography
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]
```

### Use Meaningful Step Names

✅ **Good:**
```tokenscript
steps = ["xs", "sm", "md", "lg", "xl"]
```

❌ **Bad:**
```tokenscript
steps = ["1", "2", "3", "4", "5"]
```

### Round When Needed

Round values for cleaner numbers:

```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg"]
  /roundTo(1)  // Round to whole numbers
```

## 3.2.4 Color Systems

### Use Semantic Names

✅ **Good:**
```tokenscript
colors
  interactive = #3B82F6
  interactiveHover = #2563EB
  textPrimary = #111827
```

❌ **Bad:**
```tokenscript
colors
  blue = #3B82F6
  darkBlue = #2563EB
  black = #111827
```

### Plan for Themes

Design with themes in mind:

```tokenscript
colors
  light
    background = #FFFFFF
    text = #111827
  dark
    background = #111827
    text = #F9FAFB
```

### Consider Accessibility

Ensure sufficient contrast:

```tokenscript
colors
  text
    primary = #111827      // High contrast
    secondary = #6B7280     // Medium contrast
    tertiary = #9CA3AF     // Lower contrast (use sparingly)
```

## 3.2.5 Documentation

### Add Comments

Explain why, not what:

```tokenscript
// Base unit - chosen for 8px grid system compatibility
baseUnit = 8

// Typography ratio - Major Third (1.25) for balanced hierarchy
typography
  /numberScale : modular
    base = 16
    ratio = 1.25  // Major Third
    steps = ["sm", "md", "lg"]
```

### Document Decisions

```tokenscript
// Spacing system
// Uses 8px base unit for consistency with common design tools
// Linear scale ensures even spacing distribution
spacing
  /numberScale : linear
    base = 8
    increment = 8
    steps = ["xs", "sm", "md", "lg"]
```

## 3.2.6 Version Control

### Use Meaningful Commits

```
feat: Add dark theme color tokens
fix: Correct typography scale ratio
refactor: Reorganize spacing tokens
```

### Tag Releases

Tag major token system updates:

```bash
git tag -a v1.0.0 -m "Initial token system"
```

## 3.2.7 Testing

### Test in Context

Always test tokens in actual designs:

```tokenscript
// Test spacing
button
  padding = $spacing.md  // Verify this works in UI

// Test typography
heading
  fontSize = $typography.lg  // Verify readability
```

### Validate Relationships

Ensure tokens work together:

```tokenscript
// Ensure spacing and typography are harmonious
card
  padding = $spacing.md
  fontSize = $typography.md
  // Verify these work well together
```

## 3.2.8 Performance

### Minimize Token Count

Don't create unnecessary tokens:

❌ **Too many:**
```tokenscript
spacing
  xs = 4
  xsPlus = 6
  xsPlusPlus = 8
  sm = 8
  smPlus = 10
```

✅ **Better:**
```tokenscript
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg"]
```

## 3.2.9 Common Mistakes

### 1. Hardcoding Values

❌ **Don't:**
```tokenscript
button
  padding = 16
```

✅ **Do:**
```tokenscript
button
  padding = $spacing.md
```

### 2. Inconsistent Naming

❌ **Don't:**
```tokenscript
spacingSmall = 8
spacing-md = 16
spacing_lg = 24
```

✅ **Do:**
```tokenscript
spacing
  sm = 8
  md = 16
  lg = 24
```

### 3. Not Using Scales

❌ **Don't:**
```tokenscript
spacing
  xs = 4
  sm = 8
  md = 12
  lg = 16
  xl = 20
```

✅ **Do:**
```tokenscript
spacing
  /numberScale : linear
    base = 4
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

## 3.2.10 Next Steps

- Check [Troubleshooting](./5.1-troubleshooting.md) for issues
- See [API Reference](./4.1-api-reference.md) for integration

