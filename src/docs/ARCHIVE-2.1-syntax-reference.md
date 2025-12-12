# 2.1 DSL Syntax Reference

Complete reference guide to TokenScript DSL syntax.

## 2.1.1 Basic Syntax

### 2.1.1.1 Assignments

The simplest form: `name = value`

**DSL Input:**
```tokenscript
spacing = 8
color = #ff0000
label = "Hello World"
enabled = true
```

**JSON Output:**
```json
{
  "spacing": 8,
  "color": "#ff0000",
  "label": "Hello World",
  "enabled": true
}
```

### 2.1.1.2 Comments

Use `//` for comments:

```tokenscript
// This is a comment
spacing = 8  // Inline comment
```

### 2.1.1.3 Nested Groups

Use indentation (spaces or tabs) to create nested groups:

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6
  secondary = #8B5CF6
  neutral
    light = #F3F4F6
    dark = #111827
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6",
  "colors.neutral.light": "#F3F4F6",
  "colors.neutral.dark": "#111827"
}
```

This creates tokens:
- `colors.primary`
- `colors.secondary`
- `colors.neutral.light`
- `colors.neutral.dark`

## 2.1.2 Value Types

### 2.1.2.1 Numbers

**DSL Input:**
```tokenscript
spacing = 8
fontSize = 16.5
ratio = 1.25
```

**JSON Output:**
```json
{
  "spacing": 8,
  "fontSize": 16.5,
  "ratio": 1.25
}
```

### 2.1.2.2 Strings

**DSL Input:**
```tokenscript
fontFamily = "Inter"
label = "Primary Button"
// Unquoted strings work too
fontFamily = Inter
```

**JSON Output:**
```json
{
  "fontFamily": "Inter",
  "label": "Primary Button"
}
```

### Colors

Multiple color formats supported:

```tokenscript
// Hex colors
primary = #3B82F6
shortHex = #f00
withAlpha = #3B82F680

// RGB/RGBA
rgbColor = rgb(59, 130, 246)
rgbaColor = rgba(59, 130, 246, 0.5)

// HSL/HSLA
hslColor = hsl(217, 91%, 60%)
hslaColor = hsla(217, 91%, 60%, 0.5)

// OKLCH
oklchColor = oklch(0.65, 0.2, 250)

// Named colors
namedColor = blue
```

### 2.1.2.4 Booleans

**DSL Input:**
```tokenscript
enabled = true
disabled = false
```

**JSON Output:**
```json
{
  "enabled": true,
  "disabled": false
}
```

### 2.1.2.5 Objects

In TokenScript DSL, objects are created using indentation. This creates separate tokens for each property:

**DSL Input:**
```tokenscript
button
  padding
    x = 16
    y = 8
```

**JSON Output:**
```json
{
  "button.padding.x": 16,
  "button.padding.y": 8
}
```

This creates individual tokens that can be referenced independently (e.g., `$button.padding.x`).

### 2.1.2.6 Arrays

Arrays (lists) **must** use square bracket `[]` syntax:

**DSL Input:**
```tokenscript
sizes = ["xs", "sm", "md", "lg", "xl"]
numbers = [4, 8, 16, 32, 64]
mixed = ["small", 100, "large", 200]
```

**JSON Output:**
```json
{
  "sizes": ["xs", "sm", "md", "lg", "xl"],
  "numbers": [4, 8, 16, 32, 64],
  "mixed": ["small", 100, "large", 200]
}
```

**Important:** Square brackets are mandatory for all lists. This provides:
- Clear visual semantics
- Unambiguous parsing
- Better editor experience

**Range Syntax in Arrays:**

Generate lists automatically using ranges (brackets `[]` are required):

```tokenscript
// Simple range
steps = [gu01..gu10]  // Creates: gu01, gu02, ..., gu10

// With custom step (even/odd/multiples)
steps = [gu00..gu20:2]  // Creates: gu00, gu02, gu04, ..., gu20

// Brace sugar (equivalent)
steps = [gu{01..10}]    // Same as gu01..gu10
steps = [gu{00..20:2}]  // Same as gu00..gu20:2

// Multiple ranges in one list
steps = [bp{000..150:50}, bp{200..900:100}]
// Creates: bp000, bp050, bp100, bp150, bp200, bp300, ..., bp900
```

**Important:** Brackets are mandatory for all range patterns:
```tokenscript
steps = gu{01..10}    // ❌ Error: must use brackets
steps = [gu{01..10}]  // ✅ Correct
```

**Use cases:**
- **Even numbers:** `[item00..item20:2]` → item00, item02, item04, ...
- **Odd numbers:** `[item01..item21:2]` → item01, item03, item05, ...
- **Multiples:** `[size00..size50:5]` → size00, size05, size10, ...
- **Non-uniform spacing:** Combine multiple ranges with different steps

## 2.1.1 References

### 2.1.3.1 Dotted References

Reference other tokens using `$`:

**DSL Input:**
```tokenscript
baseSpacing = 8
cardPadding = $baseSpacing
buttonPadding = calc($baseSpacing * 2)
```

**JSON Output:**
```json
{
  "baseSpacing": 8,
  "cardPadding": 8,
  "buttonPadding": 16
}
```

**Note:** Simple references like `$baseSpacing` don't need `calc()`, but arithmetic expressions like `$baseSpacing * 2` must use `calc()`.

### 2.1.3.2 Nested References

**DSL Input:**
```tokenscript
colors
  primary = #3B82F6

button
  backgroundColor = $colors.primary
```

**JSON Output:**
```json
{
  "colors.primary": "#3B82F6",
  "button.backgroundColor": "#3B82F6"
}
```

### 2.1.3.3 Self References

Use `$...` to reference within the current scope:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  // Reference the base from this scale
  custom = calc($...base * 3)
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 16,
  "spacing.custom": 24
}
```

### 2.1.3.4 Tree Shorthand

Search within a subtree using `$start...end.path`:

**DSL Input:**
```tokenscript
spacing
  xs = 8
  sm = 16
  md = 24

button
  padding
    x = $spacing...spacing.md
    y = 8
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 16,
  "spacing.md": 24,
  "button.padding.x": 24,
  "button.padding.y": 8
}
```

### 2.1.3.5 Collection Access

Access items from arrays using bracket notation with 1-based ordinal indexing:

**DSL Input:**
```tokenscript
sizes = ["xs", "sm", "md", "lg", "xl"]

// Single item (1-based ordinal)
first = $sizes[1]        // "xs"
third = $sizes[3]        // "md"
last = $sizes[-1]        // "xl"
secondLast = $sizes[-2]  // "lg"

// Named positions
firstItem = $sizes[first]   // "xs"
lastItem = $sizes[last]     // "xl"
secondItem = $sizes[second] // "sm"
thirdItem = $sizes[third]   // "md"
nthItem = $sizes[nth(4)]    // "lg"

// Ranges (inclusive, 1-based)
subset = $sizes[2..4]     // ["sm", "md", "lg"]
firstThree = $sizes[..3]  // ["xs", "sm", "md"]
lastTwo = $sizes[-2..]    // ["lg", "xl"]
all = $sizes[1..]         // All items

// With step
every2nd = $sizes[1..5:2]   // ["xs", "md", "xl"]
oddPos = $sizes[1..5:2]     // Same: 1st, 3rd, 5th

// Predicates
oddItems = $sizes[odd]      // ["xs", "md", "xl"]
evenItems = $sizes[even]    // ["sm", "lg"]

// List unions (de-duplicated)
selected = $sizes[1, 3, 5]  // ["xs", "md", "xl"]
mixed = $sizes[1..2, 5]     // ["xs", "sm", "xl"]
```

**JSON Output:**
```json
{
  "sizes": ["xs", "sm", "md", "lg", "xl"],
  "first": "xs",
  "third": "md",
  "last": "xl",
  "subset": ["sm", "md", "lg"],
  "every2nd": ["xs", "md", "xl"],
  "oddItems": ["xs", "md", "xl"],
  "selected": ["xs", "md", "xl"]
}
```

**Important rules:**
- All indexing is **1-based** (ordinal): `$items[1]` is the first item
- `$items[0]` is an **error**: "Index 0 is invalid, ordinals start at 1"
- Ranges are **inclusive**: `[2..4]` includes positions 2, 3, and 4
- Single-index access is **strict** (errors if out of bounds)
- Range access is **safe** (clamped to valid bounds, no error)
- Negative ordinals count from end: `-1` is last, `-2` is second from last

**Works with scales:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 4
    steps = [gu{01..05}]

secondToken = $gridUnit[second]  // 12 (value)
lastToken = $gridUnit[last]      // 24 (value)
rangeTokens = $gridUnit[2..4]    // [12, 16, 20] (values)
```

When accessing a scale, you get the **token values** by default.

#### Getting Keys Instead of Values

Use `.key` to get the token name/key instead of its value:

```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 4
    steps = [gu{01..05}]

// Get values (default)
value = $gridUnit[second]        // 12

// Get keys (use .key)
name = $gridUnit[second].key     // "gu03"

// Works with ranges
values = $gridUnit[1..3]         // [8, 12, 16]
names = $gridUnit[1..3].key      // ["gu01", "gu02", "gu03"]

// Works with predicates
oddValues = $gridUnit[odd]       // [8, 16, 24]
oddKeys = $gridUnit[odd].key     // ["gu01", "gu03", "gu05"]

// Works with named positions
firstName = $gridUnit[first].key  // "gu01"
lastName = $gridUnit[last].key    // "gu05"
```

**Note:** `.key` only works with scale/group references, not plain arrays. Using `.key` on a plain array will produce an error:

```tokenscript
items = ["a", "b", "c"]
name = $items[second].key  // ❌ Error: .key only works with scale/group references
```

#### Using Ellipsis References with Collection Access

Ellipsis references (`$...ref`) can be combined with bracket notation to access collections from parent scopes:

```tokenscript
parent
  sizes = ["xs", "sm", "md", "lg", "xl"]
  gridUnit
    /numberScale : linear
      base = 10
      increment = 5
      steps = [gu{01..04}]
  
  nested
    // Access array from parent scope
    firstSize = $...sizes[first]      // "xs"
    lastTwo = $...sizes[-2..]         // ["lg", "xl"]
    middle = $...sizes[2..4]          // ["sm", "md", "lg"]
    
    // Access scale from parent scope
    values = $...gridUnit[1..3]       // [10, 15, 20]
    keys = $...gridUnit[1..3].key     // ["gu01", "gu02", "gu03"]
    secondKey = $...gridUnit[second].key  // "gu02"
```

Ellipsis references search upward through parent scopes to find the referenced collection, making it easy to access data without needing to know the exact path.

#### Arithmetic in Bracket Selectors

You can use arithmetic expressions inside bracket selectors for dynamic indexing:

**DSL Input:**
```tokenscript
spacing
  sp01 = 10
  sp02 = 20
  sp03 = 30
  sp04 = 40

test
  // Numeric arithmetic
  simple = $spacing[2 + 1]           // → 30 (index 3)
  doubled = $spacing[2 * 2]          // → 40 (index 4)
  
  // With iterator variables (in /forEach or /matrix)
  /matrix
    [a, b, c] as item
      value = $spacing[index + 1]    // Dynamic: a→sp02, b→sp03, c→sp04
```

**Operators supported:** `+`, `-`, `*`, `/`

**Note:** Arithmetic inside brackets does NOT require `calc()` - the bracket context makes intent clear.

#### Step-Based Navigation with .scope

Access a token's collection using `.scope`, then navigate by step:

**DSL Input:**
```tokenscript
spacing
  sp01 = 8
  sp02 = 12
  sp03 = 16
  sp04 = 20
  sp05 = 24

test
  /matrix
    [small, medium, large] as size
      base = $spacing[index + 1]              // a→sp02(12), b→sp03(16), c→sp04(20)
      next = $...base.scope[step + 1]         // Navigate within spacing scale
      prev = $...base.scope[step - 1]         // Go backward
      double = $...base.scope[step * 2]       // Jump ahead
```

**How it works:**
1. `$...base` references the token (e.g., `spacing.sp03`)
2. `.scope` extracts its collection (the `spacing` scale)
3. `[step]` gets the current position in that collection
4. `[step + 1]` navigates relative to that position

**Result for example above:**
```
small: base=12(sp02), next=16(sp03), prev=8(sp01), double=20(sp04)
medium: base=16(sp03), next=20(sp04), prev=12(sp02), double=24(sp05)
large: base=20(sp04), next=24(sp05), prev=16(sp03), double=... (out of bounds)
```

#### Rounding Modes in Selectors

When arithmetic produces fractional positions, specify rounding with a second argument:

**DSL Input:**
```tokenscript
spacing
  sp01 = 8
  sp02 = 12
  sp03 = 16
  sp04 = 20

test
  /matrix
    [a, b, c] as item
      base = $spacing[index + 1]
      half_floor = $...base.scope[step / 2]           // Default: floor
      half_ceil = $...base.scope[step / 2, up]        // Ceiling
      half_round = $...base.scope[step / 2, nearest]  // Round
```

**Rounding modes:**
- `down` or `floor` - Round down (default)
- `up` or `ceil` - Round up
- `nearest` or `round` - Round to nearest

**When step=3, step/2=1.5:**
- `down` → 1
- `up` → 2
- `nearest` → 2

## 2.1.4 Expressions

### 2.1.4.0 calc() for Arithmetic

Arithmetic expressions must use the `calc()` wrapper for clarity and explicitness:

**DSL Input:**
```tokenscript
base = 8
double = calc($base * 2)
half = calc($base / 2)
sum = calc($base + 4)
difference = calc($base - 2)
```

**JSON Output:**
```json
{
  "base": 8,
  "double": 16,
  "half": 4,
  "sum": 12,
  "difference": 6
}
```

**Why calc()?** It makes calculations explicit and eliminates ambiguity. Without `calc()`, expressions like `value = 4 + 5` would cause an error guiding you to use `calc(4 + 5)`.

**Supported operators:** `+`, `-`, `*`, `/`, `%` (modulo)

**Simple references don't need calc():**
```tokenscript
value = $base        // OK - no arithmetic
```

#### calc() with Methods

Chain methods for post-processing:

**Rounding:**
```tokenscript
rounded = calc(100 / 3).roundTo(1)                    // → 33
roundUp = calc(127.5).roundTo(10, up)                 // → 130
roundDown = calc(127.5).roundTo(10, down)             // → 120
roundNearest = calc(127.5).roundTo(10, nearest)       // → 130
```

**Reference lookup:**
```tokenscript
spacing
  sp01 = 10
  sp02 = 20
  sp03 = 30

test
  nearest = calc(25).reference(spacing, nearest)      // → 30 (sp03)
  up = calc(25).reference(spacing, up)                // → 30 (sp03)
  down = calc(25).reference(spacing, down)            // → 20 (sp02)
```

**Method chaining:**
```tokenscript
// Chain multiple operations
value = calc($base * 2.7).roundTo(4, up).reference(spacing, nearest)
```

#### Scope Persistence

When an expression references a token from a specific scope and performs calculations, the scope context persists. The system automatically searches that same scope for a matching token:

```tokenscript
spacing
  sp01 = 10
  sp02 = 20
  sp03 = 30
  sp04 = 40

derived
  // References $spacing.sp02 (20), doubles it to 40
  // Automatically finds and references sp04 (40)
  double = calc($spacing.sp02 * 2)  // → 40, ref: "spacing.sp04"
  
  // References $spacing.sp04 (40), halves it to 20
  // Automatically finds and references sp02 (20)
  half = calc($spacing.sp04 / 2)    // → 20, ref: "spacing.sp02"
```

**How it works:**
1. Expression starts with a token reference (e.g., `$spacing.sp02`)
2. Calculation is performed (e.g., `* 2` → `40`)
3. System searches the source scope (`spacing`) for a token with value `40`
4. If found, the result includes a `ref` property pointing to that token

**Benefits:**
- Maintains semantic relationships between tokens
- Enables design system consistency
- Allows tooling to understand token relationships

**When scope persistence happens:**
- Expression starts with `$nameScope.token`
- No explicit `.reference()` method is used
- Result value exactly matches another token in the same scope

**When it doesn't:**
- Expression doesn't start with a token reference
- Explicit `.reference()` is used (takes precedence)
- No exact match exists in the source scope

### 2.1.4.1 Interpolation

You can interpolate expressions using `{expr}`:

```tokenscript
fullName = { $firstName + " " + $lastName }
fontSize = $...fontSizes.{role}
label    = "Hello { $firstName } { $lastName }"
```

- Inside `{...}` you can use:
  - iterator variables (e.g. `role`, `weight`)
  - `$` references (e.g. `$token`, `$...fontSizes.{role}`)
  - basic arithmetic with `expr-eval` semantics.

## 2.1.5 Scales

### 2.1.5.1 Linear Scales

Create evenly spaced values:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md", "lg"]
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 16,
  "spacing.lg": 20
}
```

Parameters:
- `base` - Starting value (required)
- `increment` - Amount to add each step
- `peak` - Maximum value (alternative to increment)
- `steps` - Array of step names or number

### 2.1.5.2 Modular Scales

Create proportional scales (great for typography):

**DSL Input:**
```tokenscript
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]
```

**JSON Output:**
```json
{
  "typography.sm": 16,
  "typography.md": 20,
  "typography.lg": 25,
  "typography.xl": 31.25
}
```

Parameters:
- `base` - Starting value (required)
- `ratio` - Multiplier for each step
- `peak` - Maximum value (alternative to ratio)
- `steps` - Array of step names or number

### Step Formats

Steps can be defined in multiple ways:

```tokenscript
// Array of names (recommended)
steps = ["xs", "sm", "md"]

// Number (creates "1", "2", "3", ...)
steps = 5
```

### 2.1.5.3 Inheriting Token Groups

The `/inherit()` generator clones token groups, copying their structure and values. This is useful for creating variations of existing token sets.

#### Basic Inheritance

Clone values from a regular token group:

**DSL Input:**
```tokenscript
yourFriends
  bob = 25
  clair = 52

myFriends
  /inherit($yourFriends)
```

**JSON Output:**
```json
{
  "yourFriends": {
    "bob": 25,
    "clair": 52
  },
  "myFriends": {
    "bob": 25,
    "clair": 52
  }
}
```

#### Inheriting from Scales

Clone generated scale values:

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..05}]
  /roundTo(1)

spacing
  /inherit($gridUnit)
```

**JSON Output:**
```json
{
  "gridUnit": {
    "gu01": 8,
    "gu03": 10,
    "gu05": 12,
    "gu07": 14,
    "gu09": 16
  },
  "spacing": {
    "gu01": 8,
    "gu03": 10,
    "gu05": 12,
    "gu07": 14,
    "gu09": 16
  }
}
```

#### With Pipeline Transformationsc

Apply transformations to inherited values:

**DSL Input:**
```tokenscript
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = [sm, md, lg]

:lineHeights
  /inherit($fontSizes)
  /transform(*1.5)
  /roundTo(8)
```

**JSON Output:**
```json
{
  "fontSizes": {
    "sm": 16,
    "md": 20,
    "lg": 25
  },
  "lineHeights": {
    "sm": 24,
    "md": 30,
    "lg": 38
  }
}
```

#### With Ellipsis References

Inherit from parent scopes:

**DSL Input:**
```tokenscript
parent
  numbers
    one = 10
    two = 20
  
  nested
    /inherit($...numbers)
    /transform(*2)
```

**JSON Output:**
```json
{
  "parent": {
    "numbers": {
      "one": 10,
      "two": 20
    },
    "nested": {
      "one": 20,
      "two": 40
    }
  }
}
```

#### Key Features

- **Clones structure**: Preserves token names and organization
- **Copies final values**: Gets values after all pipelines are applied
- **Supports transformations**: Apply `/transform()`, `/roundTo()`, etc.
- **Works with ellipsis**: Use `$...ref` for scope traversal
- **Works with scales**: Inherits from generated scales
- **Preserves types**: Maintains the token type information

#### Common Use Cases

1. **Typography scales**: Create lineHeights from fontSizes
2. **Spacing variations**: Double gridUnit values for larger spacing
3. **Token reuse**: Share base values across different contexts
4. **Responsive scales**: Create variants with different multipliers

**Notes:**
- Cannot inherit from plain arrays (only groups and scales)
- Source tokens must exist before inheritance
- Inherited tokens can be referenced like any other token

## 2.1.6 Type Annotations

Specify token types using `:type`:

**DSL Input:**
```tokenscript
// Color type
primary:color = #3B82F6

// Spacing type
padding:spacing = 16

// Multiple tokens with same type
colors : colors
  primary = #3B82F6
  secondary = #8B5CF6
```

**JSON Output:**
```json
{
  "primary": "#3B82F6",
  "padding": 16,
  "colors.primary": "#3B82F6",
  "colors.secondary": "#8B5CF6"
}
```

## 2.1.7 Pipelines

Apply transformations to scales:

### 2.1.7.1 Round To

Round values to nearest unit:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 7
    increment = 3
    steps = ["xs", "sm", "md"]
  /roundTo(4)
```

**JSON Output:**
```json
{
  "spacing.xs": 8,
  "spacing.sm": 12,
  "spacing.md": 12
}
```

### 2.1.7.2 Transform

Apply expressions to each value:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md"]
  /transform(each * 1.5)
```

**JSON Output:**
```json
{
  "spacing.xs": 12,
  "spacing.sm": 18,
  "spacing.md": 24
}
```

Available variables in transform:
- `value`, `each`, `size`, `x` - Current value (all aliases)
- `index` - Current position (1-based ordinal, consistent with collection access)
- `index0` - Current position (0-based, for explicit use)
- `index1` - Current position (1-based, same as `index`)

**Examples:**
```tokenscript
/transform(value + index * 10)    // Uses ordinal: 1st→+10, 2nd→+20, 3rd→+30
/transform(value * index)         // Multiply by position: 1, 2, 3...
/transform(value + index0 * 5)    // Explicit 0-based: 0, 1, 2...
```

**Migration Note (Breaking Change):**  
In previous versions, `index` was 0-based. It is now 1-based (ordinal) for consistency with collection access (`$items[1]`, `$items[2]`). If you need 0-based indexing, use `index0` explicitly.

### 2.1.7.3 Selective Transformations

Apply transformations to specific tokens using selectors. This allows fine-grained control over which tokens are transformed within a scale or inherited group.

#### Syntax

```tokenscript
/transform(expression, selector)
```

The selector is optional and defaults to `all` (transforms all tokens).

#### By Name

Transform a single token by its name:

**DSL Input:**
```tokenscript
pricing
  /inherit($basePricing)
  /transform(value * 1.5, premium)
```

Only the `premium` token is multiplied by 1.5.

#### By Position Range

Transform tokens by their position (1-based ordinal):

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 10
    steps = [gu{01..10}]
  /transform(value * 2, [1..5])
```

Doubles the first 5 items (`gu01` through `gu05`).

**Range Syntax:**
- `[1..3]` - Items 1 through 3
- `[..5]` - First 5 items (1 through 5)
- `[3..]` - From item 3 to the end
- `[-2..]` - Last 2 items
- `[1..10:2]` - Items 1, 3, 5, 7, 9 (step by 2)

#### By Name List

Transform multiple named tokens:

**DSL Input:**
```tokenscript
pricing
  /inherit($basePricing)
  /transform(value * 1.2, [bob, clair])
```

Only `bob` and `clair` tokens are multiplied by 1.2.

#### By Predicate

Transform tokens based on their position:

**DSL Input:**
```tokenscript
spacing
  /numberScale : linear
    base = 8
    steps = [sp{01..10}]
  /transform(value * 2, [odd])   // 1st, 3rd, 5th, 7th, 9th
  /transform(value + 5, [even])  // 2nd, 4th, 6th, 8th, 10th
```

**Available Predicates:**
- `[odd]` - Tokens at odd positions (1, 3, 5...)
- `[even]` - Tokens at even positions (2, 4, 6...)

#### Multiple Selective Transforms

Apply different transformations to different subsets:

**DSL Input:**
```tokenscript
pricing
  basic = 10
  standard = 20
  premium = 30
  enterprise = 40

adjustedPricing
  /inherit($pricing)
  /transform(value * 0.8, basic)      // 20% discount
  /transform(value * 1.5, premium)    // 50% increase
  /transform(value * 2, enterprise)   // Double
```

**JSON Output:**
```json
{
  "pricing": {
    "basic": 10,
    "standard": 20,
    "premium": 30,
    "enterprise": 40
  },
  "adjustedPricing": {
    "basic": 8,
    "standard": 20,
    "premium": 45,
    "enterprise": 80
  }
}
```

### 2.1.7.4 Rename

Rename tokens using template expressions. This allows you to transform token names dynamically based on their original name or position.

#### Syntax

```tokenscript
/rename("template", [selector])
```

The template is a quoted string (single or double quotes) that can contain:
- `{name}` - The original token name
- `{index}` - The token's position (1-based ordinal)
- `{index0}` - The token's position (0-based, explicit)
- `{index1}` - The token's position (1-based, explicit, same as `{index}`)
- `{expression}` - Math expressions evaluated with `index`, `index0`, `index1` variables

The selector is optional and defaults to `all` (renames all tokens).

#### Basic Usage

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..03}]
  /rename("spacing-{index}")
```

**JSON Output:**
```json
{
  "gridUnit": {
    "spacing-1": 8,
    "spacing-2": 10,
    "spacing-3": 12
  }
}
```

#### Using {name}

Include the original token name in the new name:

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..03}]
  /rename("my-{name}")
```

**JSON Output:**
```json
{
  "gridUnit": {
    "my-gu01": 8,
    "my-gu02": 10,
    "my-gu03": 12
  }
}
```

#### Using Math Expressions

Evaluate expressions in the template:

**DSL Input:**
```tokenscript
colors
  /numberScale : linear
    base = 100
    increment = 50
    steps = [c{01..03}]
  /rename("color-{index * 100}")
```

**JSON Output:**
```json
{
  "colors": {
    "color-100": 100,
    "color-200": 200,
    "color-300": 300
  }
}
```

#### With Selector

Rename only specific tokens:

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..05}]
  /rename("spacing-{index}", [1..3])
```

**JSON Output:**
```json
{
  "gridUnit": {
    "spacing-1": 8,
    "spacing-2": 10,
    "spacing-3": 12,
    "gu04": 14,
    "gu05": 16
  }
}
```

#### With Inherit

Rename inherited tokens:

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..03}]

spacing
  /inherit($gridUnit)
  /rename("sp-{index}")
```

**JSON Output:**
```json
{
  "gridUnit": {
    "gu01": 8,
    "gu02": 10,
    "gu03": 12
  },
  "spacing": {
    "sp-1": 8,
    "sp-2": 10,
    "sp-3": 12
  }
}
```

#### String Functions (Method Chaining)

Use string manipulation functions to transform token names. Functions can be chained together using dot notation.

**Available Functions:**
- `find(pattern)` - Finds all occurrences of a pattern in the name (establishes scope for subsequent operations)
- `replace(old, new)` - Replaces patterns (works standalone on whole name, or after `find()` on found parts)
- `case(mode)` - Transforms case (works standalone on whole name, or after `find()` on found parts)
- `remove(pattern)` - Removes patterns (works standalone with pattern argument, or after `find()` without argument)

**Scope Rules:**
- `find()` establishes scope - all subsequent operations in the chain operate on found parts only
- Without `find()`, operations operate on the whole name sequentially
- Scope persists through the entire chain after `find()`

##### replace() Standalone

Replace patterns in the whole name:

**DSL Input:**
```tokenscript
colors
  color-dark = #000
  bg-dark-blue = #1e3a8a
  /rename(replace('dark', 'light'))
```

**JSON Output:**
```json
{
  "colors": {
    "color-light": "#000",
    "bg-light-blue": "#1e3a8a"
  }
}
```

##### find().replace()

Find and replace patterns within found parts (selection within selection):

**DSL Input:**
```tokenscript
colors
  color-dark = #000
  bg-dark-blue = #1e3a8a
  /rename(find('dark').replace('dark', 'light'))
```

**JSON Output:**
```json
{
  "colors": {
    "color-light": "#000",
    "bg-light-blue": "#1e3a8a"
  }
}
```

**Note:** `find()` matches all occurrences. `"bg-dark-blue-dark"` with `find('dark').replace('dark', 'light')` becomes `"bg-light-blue-light"`.

**Selection within selection:** You can replace parts within the found pattern:
```tokenscript
/rename(find('dark').replace('k', 'x'))
// "color-dark" → "color-darx" (found "dark", then replaced "k" with "x" within "dark")
```

##### find().case()

Transform only the found parts:

**DSL Input:**
```tokenscript
colors
  color-dark = #000
  bg-dark-blue = #1e3a8a
  /rename(find('dark').case('uppercase'))
```

**JSON Output:**
```json
{
  "colors": {
    "color-DARK": "#000",
    "bg-DARK-blue": "#1e3a8a"
  }
}
```

##### find().remove()

Remove found patterns:

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..03}]
  /rename(find('gu').remove())
```

**JSON Output:**
```json
{
  "gridUnit": {
    "01": 8,
    "02": 10,
    "03": 12
  }
}
```

##### case() and remove() Standalone

These functions can also work on the whole name without `find()`:

**DSL Input:**
```tokenscript
tokens
  gridUnit = 8
  spacingUnit = 16
  /rename(case('kebabcase'))
```

**JSON Output:**
```json
{
  "tokens": {
    "grid-unit": 8,
    "spacing-unit": 16
  }
}
```

**DSL Input:**
```tokenscript
legacyTokens
  old-grid-unit = 8
  old-spacing-unit = 16
  /rename(remove('old-'))
```

**JSON Output:**
```json
{
  "legacyTokens": {
    "grid-unit": 8,
    "spacing-unit": 16
  }
}
```

##### Method Chaining

Chain multiple operations together. Scope persists through the chain after `find()`:

**DSL Input (with find() scope):**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..03}]
  /rename(find('gu').replace('gu', 'sp').case('uppercase'))
```

**JSON Output:**
```json
{
  "gridUnit": {
    "SP01": 8,
    "SP02": 10,
    "SP03": 12
  }
}
```

**Note:** `find('gu')` finds "gu", `replace('gu', 'sp')` replaces it with "sp", and `case('uppercase')` uppercases the found part → "SP".

**DSL Input (standalone chaining):**
```tokenscript
colors
  color-dark = #000
  /rename(replace('dark', 'light').case('uppercase'))
```

**JSON Output:**
```json
{
  "colors": {
    "COLOR-LIGHT": "#000"
  }
}
```

**Note:** Without `find()`, all operations work on the whole name sequentially.

**Available case modes:**
- `uppercase` - UPPERCASE
- `lowercase` - lowercase
- `titlecase` - Title Case
- `camelcase` - camelCase
- `kebabcase` - kebab-case
- `snakecase` - snake_case

#### Combining with Other Pipeline Operations

Rename can be combined with transform and roundTo:

**DSL Input:**
```tokenscript
gridUnit
  /numberScale : linear
    base = 8
    increment = 2
    steps = [gu{01..03}]
  /rename("spacing-{index}")
  /transform(*2)
  /roundTo(1)
```

**JSON Output:**
```json
{
  "gridUnit": {
    "spacing-1": 16,
    "spacing-2": 20,
    "spacing-3": 24
  }
}
```

#### Selector Syntax

The selector uses the same syntax as selective transformations:
- `[1..3]` - Range of positions
- `[..5]` - First 5 items
- `[3..]` - From position 3 to end
- `[odd]` - Odd positions
- `[even]` - Even positions
- `[bob, clair]` - List of names
- `premium` - Single name

**Examples:**
```tokenscript
/rename("color-{index}", [1..3])        // Rename first 3
/rename("size-{name}", [odd])           // Rename odd positions
/rename("premium-{name}", premium)      // Rename single token
```

#### Explicit All

Transform all tokens explicitly:

```tokenscript
/transform(value * 2, all)  // Same as /transform(value * 2)
```

#### Common Use Cases

1. **Tiered Pricing**: Apply different multipliers to different price tiers
2. **Responsive Adjustments**: Scale specific breakpoint values differently
3. **Progressive Enhancement**: Apply transformations to later items in a sequence
4. **Alternating Patterns**: Use `[odd]` and `[even]` for alternating effects

**Notes:**
- Selectors work with both scales and inherited groups
- Token names are matched exactly (case-sensitive)
- Non-matching selectors are silently ignored (no error)
- Positions use 1-based ordinal indexing (consistent with collection access)
- Multiple transforms are applied in order

## 2.1.6 Iteration

### ForEach

Generate tokens from a list:

```tokenscript
/forEach [xs, sm, md] as size
  margin = 8
  padding = 16
```

Creates: `xs.margin`, `xs.padding`, `sm.margin`, `sm.padding`, etc.

### Matrix

Create combinations from multiple lists:

```tokenscript
/matrix
  [primary, secondary] as color
  [light, dark] as theme
    backgroundColor = palette.{color}.{theme}
```

Creates tokens for all combinations:
- `primary.light.backgroundColor`
- `primary.dark.backgroundColor`
- `secondary.light.backgroundColor`
- `secondary.dark.backgroundColor`

### Conditionals

Control token generation with `/if`, `/else if`, and `/else`:

```tokenscript
/matrix [small, medium, large] as size
  /if {size} == "small"
    padding = 8
    margin = 4
  /else if {size} == "large"
    padding = 24
    margin = 16
  /else
    padding = 16
    margin = 8
```

**Supported Operators:**

**Comparison:**
- `==` - Equal
- `!=` - Not equal
- `<` - Less than
- `>` - Greater than
- `<=` - Less than or equal
- `>=` - Greater than or equal

**Membership:**
- `in` - Value in list
- `not in` - Value not in list

**Logical:**
- `and` - Logical AND
- `or` - Logical OR
- `not` - Logical NOT

**Using Token References:**

```tokenscript
baseSize = 16

/forEach [compact, normal, spacious] as density
  /if $baseSize > 14 and {density} == "spacious"
    padding = 32
  /else if {density} == "compact"
    padding = 8
  /else
    padding = 16
```

**Complex Conditions:**

```tokenscript
/matrix
  [mobile, tablet, desktop] as device
  [light, dark] as theme
    /if {device} == "mobile" and {theme} == "dark"
      fontSize = 14
      contrast = "high"
    /else if {device} in ["tablet", "desktop"]
      fontSize = 16
      contrast = "normal"
    /else
      fontSize = 15
      contrast = "normal"
```

**With Membership Testing:**

```tokenscript
/forEach [xs, sm, md, lg, xl] as size
  /if {size} in ["xs", "sm"]
    multiplier = 0.8
  /else if {size} not in ["xs", "sm", "md"]
    multiplier = 1.5
  /else
    multiplier = 1.0
    
  value = calc($base * $...multiplier)
```

## 2.1.7 Composite Tokens

Group related properties:

### Typography

```tokenscript
heading:typography
  fontSize = 24
  lineHeight = 1.5
  fontWeight = 700
  fontFamily = "Inter"
```

### Border

```tokenscript
border:border
  width = 1
  style = solid
  color = #000000
```

### Shadow

```tokenscript
shadow:shadow
  offsetX = 0
  offsetY = 4
  blur = 8
  spread = 0
  color = rgba(0, 0, 0, 0.1)
```

## 2.1.8 Best Practices

1. **Use meaningful names** - `spacing.md` is better than `spacing.3`
2. **Group related tokens** - Use nesting to organize
3. **Reference base values** - Don't repeat numbers
4. **Use scales** - Generate consistent values automatically
5. **Add comments** - Explain why, not what

## 2.1.9 Common Patterns

### Responsive Spacing with Advanced Selectors

Combine multiple features for powerful responsive patterns:

```tokenscript
spacing
  sp01 = 8
  sp02 = 12
  sp03 = 16
  sp04 = 20
  sp05 = 24
  sp06 = 32
  sp07 = 40

responsive
  /matrix
    [mobile, tablet, desktop] as breakpoint
      // Base spacing increases with breakpoint
      base = $spacing[index + 1]
      
      // Related spacing based on base
      small = $...base.scope[step - 1]
      large = $...base.scope[step + 2]
      double = $...base.scope[step * 2]
      
      // With rounding for fractional steps
      half = $...base.scope[step / 2, down]
```

**Result:**
```
mobile:  base=12(sp02), small=8(sp01),  large=20(sp04), double=24(sp05), half=8(sp01)
tablet:  base=16(sp03), small=12(sp02), large=24(sp05), double=32(sp06), half=12(sp02)
desktop: base=20(sp04), small=16(sp03), large=32(sp06), double=40(sp07), half=16(sp03)
```

### Typography Scale with calc()

Use calc() for computed values:

```tokenscript
fontSizes
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = [xs, sm, md, lg, xl]

lineHeights
  /inherit($fontSizes)
  /transform(value * 1.5)
  /roundTo(4)

custom
  // Computed font size
  special = calc($fontSizes.md * 1.15).roundTo(1)
  
  // Find closest match
  dynamic = calc(23).reference(fontSizes, nearest)
```

### Dynamic Calculations with Method Chaining

```tokenscript
base = 100
multiplier = 1.618

derived
  // Simple calc
  simple = calc($base / 3)
  
  // With rounding
  rounded = calc($base / 3).roundTo(5, up)
  
  // With reference lookup
  matched = calc($base * $multiplier).reference(spacing, nearest)
  
  // Full chain
  complex = calc($base * $multiplier).roundTo(8, up).reference(spacing, up)
```


