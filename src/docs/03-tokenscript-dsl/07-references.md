# References

TokenScript supports powerful referencing capabilities to create relationships between tokens and eliminate duplication.

## Basic References

### Simple Reference

Reference another token using `$tokenName`:

```tokenscript
baseSpacing = 8
cardPadding = $baseSpacing
```

### Nested References

Reference nested tokens using dot notation:

```tokenscript
colors
  primary = #3B82F6
  
buttonColor = $colors.primary
```

## Cross-Page References

Reference tokens from other pages using page name prefix:

```tokenscript
// On "Colors" page
primaryColor = #007acc

// On "Buttons" page
buttonBackground = $Colors.primaryColor
```

**Note**: Page names are case-sensitive.

## Self References

Use `$...` to reference within the current scope:

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  
// Reference all spacing values
allSpacing = $...spacing
```

## Tree Shorthand

Search within a subtree using `$start...end.path`:

```tokenscript
spacing
  xs = 4
  sm = 8
  md = 16

button
  padding = $spacing...spacing.md
```

## Mathematical Expressions

References can be used in expressions:

```tokenscript
baseSpacing = 8
cardPadding = $baseSpacing * 2
buttonPadding = $baseSpacing * 1.5
```

## Best Practices

1. **Define before referencing** - Always define tokens before referencing them
2. **Use meaningful names** - Clear names make references easier to understand
3. **Avoid circular references** - Don't create loops
4. **Document dependencies** - Comment when tokens depend on others

## Common Patterns

### Base Values

```tokenscript
baseUnit = 8
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md"]
```

### Component Tokens

```tokenscript
// Foundation tokens
primaryColor = #007acc
baseSpacing = 16px

// Component tokens
button
  backgroundColor = $primaryColor
  padding = $baseSpacing
```

## Troubleshooting

See Troubleshooting for common reference errors.

## Next Steps

- Learn about Expressions
- See Best Practices

