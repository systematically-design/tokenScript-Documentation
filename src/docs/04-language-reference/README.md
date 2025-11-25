# Language Reference

Complete reference guide to TokenScript DSL—the language you write in Systematically to generate design tokens. This section provides comprehensive syntax documentation for all TokenScript DSL features.

## Guides in This Section

1. **Syntax Reference** - Complete DSL syntax guide
2. **Scales** - Deep dive on creating scales
3. **Colors** - Color formats and systems
4. **Typography** - Typography tokens
5. **Spacing** - Spacing tokens
6. **Composite Tokens** - Grouped properties
7. **References** - Advanced referencing (coming soon)
8. **Expressions** - Mathematical expressions (coming soon)

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

This reference covers all TokenScript DSL syntax and features you can use in Systematically. Whether you're:
- **Writing tokens** in Systematically
- **Learning the language** syntax and capabilities
- **Understanding advanced features** like scales, references, and expressions

For step-by-step tutorials on creating tokens, see Creating Tokens in the navigation.

## Next Steps

- Start with Syntax Reference for complete syntax
- Explore Scales for scale generation
- Check Best Practices for guidelines

