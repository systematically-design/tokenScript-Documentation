# Language Reference

Complete reference guide to the TokenScript DSL syntax and features. This section provides comprehensive documentation for developers and advanced users.

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

This reference is designed for:
- **Developers** integrating TokenScript into applications
- **Advanced users** who want to understand the language deeply
- **Tool builders** creating TokenScript integrations

For tutorials and step-by-step guides, see Creating Tokens in the navigation.

## Next Steps

- Start with Syntax Reference for complete syntax
- Explore Scales for scale generation
- Check Best Practices for guidelines

