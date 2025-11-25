# Creating Tokens

This section covers how to create different types of design tokens by writing TokenScript DSL code in Systematically. These guides will help you build comprehensive design systems.

## Guides in This Section

1. **[Simple Tokens](01-simple-tokens.md)** - Basic colors, spacing, and typography values
2. **[Number Scales](02-number-scales.md)** - Create consistent spacing and sizing scales
3. **[Color Scales](03-color-scales.md)** - Build color palettes and ramps
4. **[Color Harmonies](04-color-harmonies.md)** - Create harmonious color relationships
5. **[Typography Scales](05-typography-scales.md)** - Define typography systems
6. **[Spacing Systems](06-spacing-systems.md)** - Create spacing systems and layouts
7. **[Advanced Tokens](07-advanced-tokens.md)** - Complex tokens like matrices and streams

## Learning Path

### Beginner Path

1. Start with [Simple Tokens](01-simple-tokens.md) - Learn the basics
2. Move to [Number Scales](02-number-scales.md) - Create spacing systems
3. Try [Color Scales](03-color-scales.md) - Build color palettes

### Intermediate Path

4. Explore [Color Harmonies](04-color-harmonies.md) - Advanced color relationships
5. Learn [Typography Scales](05-typography-scales.md) - Typography systems
6. Create [Spacing Systems](06-spacing-systems.md) - Layout tokens

### Advanced Path

7. Master [Advanced Tokens](07-advanced-tokens.md) - Complex structures

## Quick Reference

### Simple Token
```tokenscript
tokenName = value
```

### Number Scale
```tokenscript
groupName
    /numberScale : linear
        base = 8
        increment = 4
        steps = 5
```

### Color Scale
```tokenscript
groupName
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2
        steps = 5
```

### Reference
```tokenscript
token1 = value
token2 = $token1
```

## Common Patterns

Each guide includes:
- Step-by-step instructions for writing TokenScript DSL code
- Complete DSL syntax examples
- Real-world examples
- Best practices
- Troubleshooting tips

All tokens are created by writing TokenScript DSL code in Systematically. The app provides tools like syntax highlighting, autocomplete, live preview, and visualizations to help you write and work with your DSL code.

## Next Steps

Ready to start creating tokens? Begin with [Simple Tokens](01-simple-tokens.md)!

