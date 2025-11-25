# 2.3 Working with Colors

TokenScript DSL supports multiple color formats and makes it easy to create consistent color systems.

## 2.3.1 Color Formats

### Hex Colors

```tokenscript
// Standard hex
primary = #3B82F6

// Short hex (3 digits)
accent = #f00

// With alpha channel (8 digits)
overlay = #3B82F680
```

### RGB/RGBA

```tokenscript
// RGB
primary = rgb(59, 130, 246)

// RGBA with alpha
overlay = rgba(59, 130, 246, 0.5)
```

### HSL/HSLA

```tokenscript
// HSL
primary = hsl(217, 91%, 60%)

// HSLA with alpha
overlay = hsla(217, 91%, 60%, 0.5)
```

### OKLCH

```tokenscript
// OKLCH (perceptually uniform)
primary = oklch(0.65, 0.2, 250)
```

### Named Colors

```tokenscript
// CSS named colors
primary = blue
background = white
text = black
```

## 2.3.2 Basic Color Tokens

### Simple Palette

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6
  secondary = #8B5CF6
  success = #10B981
  warning = #F59E0B
  error = #EF4444
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6",
  "colors.success": "#10B981",
  "colors.warning": "#F59E0B",
  "colors.error": "#EF4444"
}
```

### Nested Color System

**DSL Input:**
```tokenscript
colors
  primary
    main = #3B82F6
    light = #60A5FA
    dark = #2563EB
  secondary
    main = #8B5CF6
    light = #A78BFA
    dark = #7C3AED
  neutral
    light = #F3F4F6
    medium = #9CA3AF
    dark = #111827
```

**JSON Output:**
```json
{
  "colors.primary.main": "#3B82F6",
  "colors.primary.light": "#60A5FA",
  "colors.primary.dark": "#2563EB",
  "colors.secondary.main": "#8B5CF6",
  "colors.secondary.light": "#A78BFA",
  "colors.secondary.dark": "#7C3AED",
  "colors.neutral.light": "#F3F4F6",
  "colors.neutral.medium": "#9CA3AF",
  "colors.neutral.dark": "#111827"
}
```

## 2.3.3 Semantic Color Tokens

Use semantic names that describe purpose, not appearance:

```tokenscript
colors
  // Brand colors
  brand
    primary = #3B82F6
    secondary = #8B5CF6
  
  // Semantic colors
  semantic
    success = #10B981
    warning = #F59E0B
    error = #EF4444
    info = #3B82F6
  
  // UI colors
  ui
    background = #FFFFFF
    surface = #F9FAFB
    border = #E5E7EB
    text
      primary = #111827
      secondary = #6B7280
      disabled = #9CA3AF
```

## 2.3.4 Color Scales

Create color scales for consistent color variations:

```tokenscript
colors
  primary
    /numberScale : linear
      base = 50
      increment = 10
      steps = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
```

Note: Color scales work with numeric values. For actual color scales, you may need to define them manually or use color harmony generators.

## 2.3.5 Using References

Reference base colors to create variations:

```tokenscript
// Base color
primaryBase = #3B82F6

// Variations
colors
  primary = $primaryBase
  primaryLight = #60A5FA  // Manually defined
  primaryDark = #2563EB   // Manually defined
```

## 2.3.6 Color Systems

### Material Design Style

```tokenscript
colors
  primary
    50 = #EFF6FF
    100 = #DBEAFE
    200 = #BFDBFE
    300 = #93C5FD
    400 = #60A5FA
    500 = #3B82F6
    600 = #2563EB
    700 = #1D4ED8
    800 = #1E40AF
    900 = #1E3A8A
```

### Tailwind Style

```tokenscript
colors
  blue
    50 = #EFF6FF
    100 = #DBEAFE
    200 = #BFDBFE
    300 = #93C5FD
    400 = #60A5FA
    500 = #3B82F6
    600 = #2563EB
    700 = #1D4ED8
    800 = #1E40AF
    900 = #1E3A8A
    950 = #172554
```

## 2.3.7 Theme Colors

Define colors for different themes:

```tokenscript
colors
  light
    background = #FFFFFF
    surface = #F9FAFB
    text = #111827
  dark
    background = #111827
    surface = #1F2937
    text = #F9FAFB
```

## 2.3.8 Accessibility Considerations

### Contrast Ratios

When defining text colors, ensure sufficient contrast:

```tokenscript
colors
  text
    // High contrast for body text
    primary = #111827      // On white: 16.8:1
    secondary = #6B7280     // On white: 7.1:1
    
    // Lower contrast for less important text
    tertiary = #9CA3AF     // On white: 4.5:1
    
  background
    // Ensure text is readable
    primary = #FFFFFF
    secondary = #F9FAFB
```

### Color Blindness

Don't rely solely on color to convey meaning:

```tokenscript
colors
  semantic
    // Use both color and other indicators
    success = #10B981      // Green + checkmark icon
    warning = #F59E0B      // Yellow + warning icon
    error = #EF4444        // Red + error icon
```

## 2.3.9 Best Practices

1. **Use semantic names** - `primary` not `blue`
2. **Organize by purpose** - Group related colors together
3. **Define base colors** - Reference them for variations
4. **Consider themes** - Plan for light/dark modes
5. **Test contrast** - Ensure text is readable
6. **Document usage** - Add comments explaining color choices

## 2.3.10 Common Patterns

### Brand Color System

```tokenscript
// Brand colors
brand
  primary = #3B82F6
  secondary = #8B5CF6
  accent = #F59E0B

// Usage
colors
  interactive = $brand.primary
  interactiveHover = #2563EB
  interactiveActive = #1D4ED8
```

### Neutral Grayscale

```tokenscript
colors
  neutral
    50 = #F9FAFB
    100 = #F3F4F6
    200 = #E5E7EB
    300 = #D1D5DB
    400 = #9CA3AF
    500 = #6B7280
    600 = #4B5563
    700 = #374151
    800 = #1F2937
    900 = #111827
```

## 2.3.11 Next Steps

- Learn about Working with Typography
- Check Best Practices for guidelines

