# TokenScript DSL Syntax Highlighting Specification

This document provides complete syntax highlighting information for the TokenScript Domain Specific Language (DSL) for documentation sites and code highlighting tools.

## File Extension

**`.tokenscript`** - Official file extension for TokenScript DSL files

## Complete Keywords List

### Core Directives
```
/numberScale
```

### Scale Types
```
modular
linear
```

### Scale Parameters
```
base
ratio
increment
peak
steps
round
```

### Data Types
```
number
string
boolean
color
array
```

### Operators
```
=
:
```

### Special Syntax
- **Variable References**: `$variableName`, `$nested.property`
- **Comments**: Single-line `//` and multi-line `/* */`
- **String Literals**: `"quoted strings"`
- **Numbers**: Integers, decimals, and hex colors (`16`, `1.618`, `#007acc`)

## Token Categories for Syntax Highlighters

### Keywords (Green - #80ff79)
- `/numberScale` - Main directive for creating mathematical scales

### Types (Blue - #4fc1ff)  
- `modular` - Exponential growth scale type
- `linear` - Fixed increment scale type
- `number` - Numeric data type
- `string` - Text data type  
- `boolean` - True/false data type
- `color` - Color value data type
- `array` - List data type

### Scale Parameters (Orange - #ffb86c)
- `base` - Starting value for scales
- `ratio` - Multiplication factor for modular scales
- `increment` - Fixed step size for linear scales  
- `peak` - Maximum value for scales
- `steps` - Number of steps in scale
- `round` - Decimal precision control

### Variables (Yellow - #fff562)
- Pattern: `$[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z0-9_]+)*`
- Examples: `$primaryColor`, `$spacing.base`, `$scale.xs`

### Operators (Light Grey - #888888)
- `=` - Assignment operator
- `:` - Type annotation operator

### Strings (Pink - #ff6188)
- Pattern: `"[^"]*"`
- Examples: `"Inter"`, `"bold"`, `"#007acc"`

### Numbers (White - #ffffff)
- Integers: `16`, `8`, `4`
- Decimals: `1.618`, `1.25`, `2.5`
- Hex Colors: `#007acc`, `#ff0000`, `#f0f0f0`
- Units: `16px`, `1.5rem`, `100%`

### Comments (Grey - #727072)
- Single-line: `// comment text`
- Multi-line: `/* comment block */`

## Real Code Examples

### Example 1: Basic Modular Scale
```tokenscript
// Typography scale using golden ratio
/numberScale : modular
  base = 16
  ratio = 1.618
  steps = 5
  round = 2
```

### Example 2: Linear Scale with Peak
```tokenscript
// Spacing scale with maximum value
/numberScale : linear
  base = 8
  peak = 64
  steps = 6
```

### Example 3: Token Assignments and References
```tokenscript
// Basic design tokens
primaryColor = "#007acc"
baseSpacing = 16
fontFamily : string = "Inter"

// References and calculations
secondarySpacing = $baseSpacing
largeSpacing = $baseSpacing * 2
```

### Example 4: Nested Token Groups
```tokenscript
// Color system
colors
  primary = "#007acc"
  secondary = "#6c757d"
  success = "#28a745"

// Spacing system with scale references  
spacing
  xs = $spacingScale.xs
  sm = $spacingScale.sm
  md = $spacingScale.md
  lg = $spacingScale.lg
```

### Example 5: Complex Scale with Array Steps
```tokenscript
// Named modular scale steps
/numberScale : modular
  base = 14
  ratio = 1.25
  steps = ["xs", "sm", "base", "lg", "xl", "xxl"]
  round = 1

// Typography tokens
typography
  fontSize = $typescale.base
  lineHeight = $typescale.base * 1.5
```

## Regular Expression Patterns

For implementing syntax highlighting in various tools:

### Keywords
```regex
\/numberScale\b
\b(modular|linear|number|string|boolean|color|array)\b
```

### Scale Parameters (when indented 4+ spaces)
```regex
^\s{4,}(base|ratio|increment|peak|steps|round)(?=\s*=)
```

### Variable References
```regex
\$[a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z0-9_]+)*
```

### Comments
```regex
\/\/.*$
\/\*[\s\S]*?\*\/
```

### String Literals
```regex
"[^"]*"
```

### Numbers and Hex Colors
```regex
#[0-9a-fA-F]{3,8}
\d+(\.\d+)?(px|rem|em|%)?
```

### Operators
```regex
[=:]
```

## Language Structure Rules

### Indentation-Based Grouping
- **4 spaces** for scale parameters under `/numberScale` directives
- **2 spaces** for nested token groups
- Consistent indentation creates hierarchical structure

### Case Sensitivity
- **Keywords**: Case-sensitive (`modular` not `Modular`)
- **Parameters**: Case-sensitive (`base` not `Base`)
- **Variables**: Case-sensitive (`$primaryColor` vs `$PrimaryColor`)

### Comment Styles
- **Single-line**: `//` extends to end of line
- **Multi-line**: `/* */` can span multiple lines
- Comments can appear anywhere in the code

## Integration Notes

### Monaco Editor Integration
The TokenScript editor uses Monaco Editor with a custom Monarch tokenizer. The highlighting rules are defined using Monaco's tokenization system.

### VS Code Extension Support
For VS Code extensions, these patterns can be adapted to TextMate grammar format for `.tokenscript` files.

### Web Highlighting Libraries
For Prism.js, highlight.js, or similar libraries, these token patterns can be converted to their respective grammar formats.

## File Structure Examples

### Typical .tokenscript File
```
design-tokens.tokenscript
theme-config.tokenscript
spacing-system.tokenscript
typography-scales.tokenscript
```

### Project Structure
```
tokens/
  ├── colors.tokenscript
  ├── spacing.tokenscript
  ├── typography.tokenscript
  └── components.tokenscript
```

## Additional Resources

- **Complete Language Reference**: `./docs/tokensScript/TokenScript-Language.md`
- **Editor Implementation**: `./editor-implementation-report.md`
- **Live Editor**: The TokenScript web editor provides real-time syntax highlighting examples

---

**Contact**: For questions about implementing TokenScript syntax highlighting, refer to the Monaco Editor integration in `/src/lib/components/MonacoEditor.svelte` which contains the complete tokenization rules.
