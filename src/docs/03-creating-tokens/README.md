# Creating Tokens

This section covers how to create different types of design tokens in TokenScript. Whether you're using the visual editor or writing DSL code, these guides will help you build comprehensive design systems.

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
- Step-by-step instructions (app perspective)
- DSL syntax examples (code perspective)
- Real-world examples
- Best practices
- Troubleshooting tips

## App vs DSL

These guides cover both perspectives:
- **App perspective**: How to create tokens using the visual editor
- **DSL perspective**: How to write the same tokens in code

Both approaches create the same tokens—choose what works best for you!

## Next Steps

Ready to start creating tokens? Begin with [Simple Tokens](01-simple-tokens.md)!

