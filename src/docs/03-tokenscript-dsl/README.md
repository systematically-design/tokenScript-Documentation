# TokenScript DSL

Complete guide to TokenScript DSL—the language you write in Systematically to generate design tokens. This section combines tutorials and reference documentation for all DSL features.

## Guides in This Section

1. **[Syntax Basics](01-syntax-basics.md)** - Basic syntax, value types, assignments, and simple tokens
2. **[Scales](02-scales.md)** - Linear and modular scales for generating sequences
3. **[Colors](03-colors.md)** - Color formats, scales, and harmonies
4. **[Typography](04-typography.md)** - Typography tokens and scales
5. **[Spacing](05-spacing.md)** - Spacing tokens and systems
6. **[Composite Tokens](06-composite-tokens.md)** - Grouped properties and advanced structures
7. **[References](07-references.md)** - Referencing tokens and creating relationships
8. **[Expressions](08-expressions.md)** - Mathematical expressions and calculations

## Learning Path

### Beginner
1. Start with **Syntax Basics** - Learn the fundamentals
2. Move to **Scales** - Create systematic sequences
3. Try **Colors** - Build color palettes

### Intermediate
4. Explore **Typography** - Typography systems
5. Learn **Spacing** - Spacing systems
6. Use **References** - Create relationships between tokens

### Advanced
7. Master **Composite Tokens** - Complex structures
8. Use **Expressions** - Advanced calculations

## Quick Reference

### Basic Syntax
```tokenscript
tokenName = value
groupName
  nestedToken = value
```

### References
```tokenscript
token1 = value
token2 = $token1
```

### Scales
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
```

### Color Scale
```tokenscript
blue
  /colorScale
    hue = 200
    lightness = stops(20, 80)
    chroma = 0.2
    steps = 5
```

## How to Use This Section

Each guide includes:
- **Quick Start** - Tutorial section with step-by-step examples
- **Complete Syntax Reference** - All syntax options and parameters
- **Examples** - Real-world examples
- **Best Practices** - Guidelines specific to each topic

Start with the Quick Start sections to learn how to create tokens, then refer to the Complete Syntax Reference when you need detailed parameter documentation.

## Next Steps

Ready to start? Begin with [Syntax Basics](01-syntax-basics.md)!

