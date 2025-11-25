# Troubleshooting

This guide helps you solve common issues and errors in TokenScript. Whether you're using the visual editor or writing DSL code, check here first!

## Table of Contents

1. [Syntax Errors](#syntax-errors)
2. [Reference Errors](#reference-errors)
3. [Compilation Errors](#compilation-errors)
4. [Visualization Issues](#visualization-issues)
5. [Cloud Sync Issues](#cloud-sync-issues)
6. [Editor Issues](#editor-issues)
7. [Scale Errors](#scale-errors)
8. [General Issues](#general-issues)

## Syntax Errors

Syntax errors occur when your TokenScript code doesn't follow the correct syntax.

### Missing Equals Sign

**Error**: Token not recognized, value not assigned

**Problem**:
```tokenscript
primaryColor #007acc  // Missing =
```

**Solution**:
```tokenscript
primaryColor = #007acc  // Add equals sign
```

### Wrong Indentation

**Error**: Structure not recognized, scale not working

**Problem**:
```tokenscript
spacing
/numberScale : linear  // Wrong indentation
    base = 8
```

**Solution**:
```tokenscript
spacing
    /numberScale : linear  // Correct indentation (4 spaces)
        base = 8
```

**Note**: Use consistent indentation (spaces or tabs, but not both).

### Missing Quotes for Strings

**Error**: String not recognized

**Problem**:
```tokenscript
fontFamily = Inter  // Missing quotes
```

**Solution**:
```tokenscript
fontFamily = "Inter"  // Add quotes (required for strings with spaces)
```

### Invalid Color Format

**Error**: Color not recognized

**Problem**:
```tokenscript
primaryColor = 007acc  // Missing #
primaryColor = #007accff  // Invalid hex length (unless 8-digit with alpha)
```

**Solution**:
```tokenscript
primaryColor = #007acc  // Correct hex format
primaryColor = #007accff  // 8-digit hex (with alpha) is valid
```

**Supported formats**:
- Hex: `#ff0000`, `#f00`, `#ff0000ff`
- RGB: `rgb(255, 0, 0)`
- HSL: `hsl(0, 100%, 50%)`
- Named: `blue`, `red`, etc.

## Reference Errors

Reference errors occur when you reference a token that doesn't exist.

### Token Not Found

**Error**: Reference error, token not found

**Problem**:
```tokenscript
primaryColor = #007acc
buttonColor = $primaryColr  // Typo in name
```

**Solution**:
```tokenscript
primaryColor = #007acc
buttonColor = $primaryColor  // Correct name
```

### Cross-Page Reference Error

**Error**: Page not found, token not found

**Problem**:
```tokenscript
// On "Colors" page
primaryColor = #007acc

// On "Buttons" page
buttonColor = $Color.primaryColor  // Wrong page name
```

**Solution**:
```tokenscript
// On "Colors" page
primaryColor = #007acc

// On "Buttons" page
buttonColor = $Colors.primaryColor  // Correct page name (case-sensitive)
```

### Reference Before Definition

**Error**: Token referenced before it's defined

**Problem**:
```tokenscript
buttonColor = $primaryColor  // Referenced before definition
primaryColor = #007acc
```

**Solution**:
```tokenscript
primaryColor = #007acc  // Define first
buttonColor = $primaryColor  // Then reference
```

### Circular Reference

**Error**: Circular reference detected

**Problem**: Token references itself or creates a loop.

**Solution**: Break the circular reference:

```tokenscript
// ❌ Wrong - circular reference
a = $b
b = $a

// ✅ Correct - use direct values
a = 8
b = $a * 2
```

### Range Reference Error

**Error**: Range reference not found

**Problem**:
```tokenscript
spacing = $...spacings  // Wrong name
```

**Solution**:
```tokenscript
spacing
    /numberScale : linear
        base = 8
        steps = 5

// Correct reference
allSpacing = $...spacing  // Correct name
```

## Compilation Errors

Compilation errors occur when TokenScript can't compile your tokens.

### Invalid Scale Parameters

**Error**: Scale parameters invalid

**Problem**:
```tokenscript
spacing
    /numberScale : linear
        base = "8"  // String instead of number
        increment = 4
        steps = 5
```

**Solution**:
```tokenscript
spacing
    /numberScale : linear
        base = 8  // Number, not string
        increment = 4
        steps = 5
```

### Missing Required Parameters

**Error**: Required parameter missing

**Problem**:
```tokenscript
spacing
    /numberScale : linear
        base = 8
        // Missing increment and steps
```

**Solution**:
```tokenscript
spacing
    /numberScale : linear
        base = 8
        increment = 4  // Add required parameter
        steps = 5      // Add required parameter
```

**Required parameters**:
- `base` - Always required
- For linear: `increment` or `peak`
- For modular: `ratio` or `peak`
- `steps` - Always required

### Invalid Color Scale Parameters

**Error**: Color scale parameters invalid

**Problem**:
```tokenscript
blue
    /colorScale
        hue = 200
        lightness = stops(20)  // Missing second value
        chroma = 0.2
        steps = 5
```

**Solution**:
```tokenscript
blue
    /colorScale
        hue = 200
        lightness = stops(20, 80)  // Two values required
        chroma = 0.2
        steps = 5
```

## Scale Errors

### Values Not Generating

**Problem**: Scale defined but tokens not created.

**Solution**: Check:
- Scale syntax is correct
- Steps are defined
- Scale is properly indented

```tokenscript
// ❌ Wrong - scale not properly formatted
spacing /numberScale : linear base = 8

// ✅ Correct
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
```

### Invalid Steps Value

**Problem**: Invalid steps value.

**Solution**: Use:
- Positive number
- Array of strings
- Comma-separated string

```tokenscript
// ❌ Wrong
steps = -5
steps = []

// ✅ Correct
steps = 5
steps = ["xs", "sm", "md"]
steps = "xs, sm, md"
```

## Visualization Issues

### Visualizations Not Appearing

**Problem**: No visualization shows up

**Possible Causes**:
- Not a scale (simple tokens don't visualize)
- Syntax error preventing compilation
- Visualization panel hidden

**Solutions**:
1. Verify you created a scale (not just a simple token)
2. Check for syntax errors (red squiggles)
3. Look for visualization toggle button
4. Refresh the page

### Wrong Colors in Visualization

**Problem**: Colors don't match expectations

**Possible Causes**:
- Wrong hue value
- Incorrect lightness range
- Chroma too high/low

**Solutions**:
1. Check hue value (0-360)
2. Verify lightness range (0-100)
3. Adjust chroma (0-0.4)
4. Check color scale parameters

### Typography Not Rendering

**Problem**: Typography visualization not showing text

**Possible Causes**:
- Invalid font sizes
- Missing line heights
- Syntax errors

**Solutions**:
1. Verify font size values are valid
2. Check line height calculations
3. Look for syntax errors
4. Ensure typography scale is complete

## Cloud Sync Issues

### Work Not Saving

**Problem**: Changes disappear after refresh

**Solutions**:
1. Check you're signed in (look for account indicator)
2. Verify internet connection
3. Look for error messages
4. Try manual save (if available)
5. Wait a few seconds for auto-save

### Work Not Loading

**Problem**: Pages or tokens missing

**Solutions**:
1. Verify you're signed in with correct account
2. Check internet connection
3. Refresh the page
4. Clear browser cache
5. Check if work was actually saved

### Sync Not Working

**Problem**: Changes not appearing on other devices

**Solutions**:
1. Wait a few seconds for sync
2. Refresh the page
3. Verify same Google account on both devices
4. Check internet connection
5. Sign out and sign back in

## Editor Issues

### Autocomplete Not Working

**Problem**: No suggestions when typing `/` or `$`

**Solutions**:
1. Wait a moment (may take time to load)
2. Check internet connection
3. Refresh the page
4. Try typing more characters
5. Check for JavaScript errors in console

### Syntax Highlighting Wrong

**Problem**: Colors don't match syntax

**Solutions**:
1. Check syntax is correct
2. Refresh the page
3. Clear browser cache
4. Try different browser

### Editor Not Responding

**Problem**: Editor is slow or frozen

**Solutions**:
1. Refresh the page
2. Check browser performance
3. Close other tabs
4. Clear browser cache
5. Try different browser

## Pipeline Errors

### Invalid Pipeline Operation

**Problem**: Unknown or malformed pipeline operation.

**Solution**: Use supported operations:
- `/roundTo(unit)`
- `/transform(expression)`

```tokenscript
// ❌ Wrong
/roundTo()  // Missing unit
/transform()  // Missing expression

// ✅ Correct
/roundTo(4)
/transform(each * 2)
```

### Transform Expression Error

**Problem**: Invalid expression in transform.

**Solution**: Check:
- Expression syntax
- Available variables (`each`, `value`, `index`)
- Mathematical operators

```tokenscript
// ❌ Wrong
/transform(each * )  // Incomplete expression
/transform(value +)  // Missing operand

// ✅ Correct
/transform(each * 2)
/transform(value + 4)
```

## General Issues

### Page Not Found

**Problem**: Can't find a page

**Solutions**:
1. Check page tabs (may be hidden)
2. Scroll tab bar if many pages
3. Look for page in page list
4. Check if page was deleted
5. Refresh the page

### Tokens Not Compiling

**Problem**: Preview panel empty or showing errors

**Solutions**:
1. Check for syntax errors (red squiggles)
2. Verify all references exist
3. Check scale parameters
4. Look for error messages
5. Start with simple token to test

### Can't Create New Page

**Problem**: Add page button not working

**Solutions**:
1. Refresh the page
2. Check if signed in
3. Try right-clicking existing page
4. Clear browser cache
5. Check for JavaScript errors

### Performance Issues

**Problem**: TokenScript is slow

**Solutions**:
1. Check internet connection
2. Close other browser tabs
3. Clear browser cache
4. Disable browser extensions
5. Try different browser

## Getting More Help

If you can't solve your issue:

1. **Check Documentation**: Review relevant guides
   - [Syntax Reference](../04-language-reference/01-syntax-reference.md)
   - [Creating Tokens](../03-creating-tokens/README.md)
2. **Search Error Messages**: Copy error text and search
3. **Simplify**: Try creating a simple token to isolate issue
4. **Contact Support**: Reach out if issue persists

## Prevention Tips

### Avoid Common Mistakes

1. **Always use `=` for assignment**
2. **Use proper indentation (4 spaces)**
3. **Quote string values**
4. **Check token names for typos**
5. **Define tokens before referencing**

### Best Practices

1. **Start simple** - Build complexity gradually
2. **Test often** - Verify tokens work as you create them
3. **Use comments** - Document your decisions
4. **Organize early** - Set up pages before adding many tokens
5. **Save regularly** - Check that cloud sync is working

### Debugging Workflow

When something doesn't work:

1. **Check syntax** - Look for red squiggles
2. **Verify references** - Ensure tokens exist
3. **Test simple case** - Create minimal example
4. **Check documentation** - Review relevant guides
5. **Isolate issue** - Remove parts to find problem

## Next Steps

If you've resolved your issue:

1. **[Getting Started](../01-getting-started/01-introduction.md)** - Review basics
2. **[Syntax Reference](../04-language-reference/01-syntax-reference.md)** - Check syntax rules
3. **[Creating Tokens](../03-creating-tokens/README.md)** - Learn token types

---

**Tip**: Most issues are syntax-related. Check for red squiggles in the editor, verify your syntax matches examples, and test with simple tokens first. When in doubt, simplify and build up gradually!
