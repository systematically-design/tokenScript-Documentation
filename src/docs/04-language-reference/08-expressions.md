# Mathematical Expressions

TokenScript supports mathematical expressions for calculating derived values.

## Basic Operations

### Arithmetic

```tokenscript
baseSpacing = 8
cardPadding = $baseSpacing * 2      // 16
buttonPadding = $baseSpacing + 4     // 12
sectionMargin = $baseSpacing / 2    // 4
```

### Supported Operators

- `+` - Addition
- `-` - Subtraction
- `*` - Multiplication
- `/` - Division
- `%` - Modulo

## Using in Scales

Expressions can be used in scale parameters:

```tokenscript
baseUnit = 8
spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit * 2
    steps = ["xs", "sm", "md"]
```

## Transform Expressions

Use expressions in transform pipelines:

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  /transform(each * 1.5)
```

### Available Variables

In transform expressions:
- `each` - Current value
- `value` - Current value (alias)
- `index` - Current index (0-based)

### Examples

```tokenscript
// Multiply each value
/transform(each * 2)

// Add based on index
/transform(each + index)

// Complex expression
/transform(each * 1.5 + 2)
```

## Range Function

Generate ranges in expressions:

```tokenscript
lineHeights
  /transform(*range(1.2, 1.6))
```

This distributes values evenly across the range.

## Best Practices

1. **Keep expressions simple** - Complex expressions can be hard to understand
2. **Document calculations** - Comment why expressions are used
3. **Test values** - Verify expressions produce expected results
4. **Use references** - Reference base values instead of hardcoding

## Common Patterns

### Proportional Values

```tokenscript
baseFontSize = 16
headingSize = $baseFontSize * 1.5
captionSize = $baseFontSize * 0.75
```

### Calculated Spacing

```tokenscript
baseSpacing = 8
cardPadding = $baseSpacing * 2
sectionGap = $baseSpacing * 4
```

## Troubleshooting

See [Troubleshooting](../07-help/01-troubleshooting.md) for expression errors.

## Next Steps

- Learn about [References](07-references.md)
- See [Scales](02-scales.md) for scale expressions
- Check [Best Practices](../06-best-practices/01-best-practices.md)

