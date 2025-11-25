# Language Reference

Complete reference guide to the TokenScript DSL syntax and features. This section provides comprehensive documentation for developers and advanced users.

## Guides in This Section

1. **[Syntax Reference](01-syntax-reference.md)** - Complete DSL syntax guide
2. **[Scales](02-scales.md)** - Deep dive on creating scales
3. **[Colors](03-colors.md)** - Color formats and systems
4. **[Typography](04-typography.md)** - Typography tokens
5. **[Spacing](05-spacing.md)** - Spacing tokens
6. **[Composite Tokens](06-composite-tokens.md)** - Grouped properties
7. **[References](07-references.md)** - Advanced referencing (coming soon)
8. **[Expressions](08-expressions.md)** - Mathematical expressions (coming soon)

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

## Using This Reference

This reference is designed for:
- **Developers** integrating TokenScript into applications
- **Advanced users** who want to understand the language deeply
- **Tool builders** creating TokenScript integrations

For tutorials and step-by-step guides, see [Creating Tokens](../03-creating-tokens/README.md).

## Next Steps

- Start with [Syntax Reference](01-syntax-reference.md) for complete syntax
- Explore [Scales](02-scales.md) for scale generation
- Check [Best Practices](../06-best-practices/01-best-practices.md) for guidelines

