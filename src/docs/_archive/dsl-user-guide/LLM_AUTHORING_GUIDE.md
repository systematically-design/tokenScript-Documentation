---
title: Authoring TokenScript DSL with LLMs
order: 2
---

# Authoring TokenScript DSL with LLMs

This guide defines a strict output contract and style rules for large language models when generating TokenScript DSL. Follow it to produce valid, deterministic DSL that compiles without manual fixes.

## Output Contract (must follow)

- Respond with a single fenced code block labeled `tokenscript` and nothing else.
- No prose, explanations, or extra code blocks before or after the DSL.
- Use 2 spaces for indentation. No tabs. No mixed indentation.
- One assignment per line in the form: `name = value` with single spaces around `=`.
- No units in numbers (e.g., use `16`, not `16px`).
- Prefer defining values before they are referenced. Forward references are technically allowed but should be avoided.
- Strings: always use double quotes. Use quotes for any string containing spaces or special characters.
- Arrays: bracketed `[]`, comma + space separation, no trailing comma.
- Comments are allowed with `//`, but only include them if explicitly asked.

Example minimal contract-compliant response:

```tokenscript
baseUnit = 16

spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md", "lg", "xl"]

typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["caption", "body", "h3", "h2", "h1"]

lineHeights = $typography
  /transform(size * 1.4)
  /roundTo(4)

colors
  brand
    primary = "#3B82F6"
    secondary = "#1D4ED8"

button
  background = $colors.brand.primary
  text = "#FFFFFF"
  padding = $spacing.md
```

## Language Surface (what you may use)

Data types:
- number (e.g., `16`, `1.25`)
- string (double-quoted, e.g., `"Inter"`, `"#3B82F6"`)
- boolean (`true`, `false`)
- array (e.g., `[1, 2, 3]`, `["sm", "md", "lg"]`)

Structure and names:
- Indentation defines hierarchy. Use 2 spaces per level.
- Valid identifiers: `camelCase`, `kebab-case`, `snake_case`, may end with digits (e.g., `size2xl`). Do not start with digits or include spaces.

Assignments:
- `name = value`
- Siblings share the same indentation level; children are indented one level deeper than their parent.

References:
- `$token`: reference any previously defined token.
- `$a.b.c`: dot navigation into nested groups.
- `$a...x`: tree search shorthand (find `x` under `a` anywhere in its subtree).
- `$this.*`: reference properties or generated values within the current scale/group context.

Scales (numberScale):
- Linear: parameters `base` (number), `increment` (number), `steps` (number or array of names).
- Modular: parameters `base` (number), `ratio` (number), `steps` (number or array of names).

Pipelines (post-scale transforms):
- `/transform(expr)` where `size` is the current value, may use `$this.*` or other references.
- `/roundTo(n)` rounds to nearest `n` (or decimals if `n` is a decimal count depending on implementation).
- `/clamp(min, max)` limits values to a range.

Expressions and logic:
- Arithmetic: `+ - * / ^`
- Grouping: parentheses `(...)`
- Comparisons in expressions: `> >= < <= == !=` (when needed for conditionals)
- Boolean: `&& || !`
- Ternary: `cond ? a : b`

## Formatting Rules (be strict)

- Indent children by exactly 2 spaces. Do not mix tabs and spaces.
- One space on each side of `=`.
- Place binary operators with single spaces around them: `a + b`, `a * 1.25`.
- Always use double quotes for strings for determinism.
- Arrays: `[1, 2, 3]`, `["sm", "md", "lg"]` with a space after commas, no trailing comma.
- Keep a blank line between major sections (e.g., between top-level groups) for readability.
- Do not append comments unless requested.

## Common Pitfalls to Avoid

- Do not output JSON, CSS, or JS—only TokenScript DSL.
- Do not add units like `px`, `%`, `rem` to numbers.
- Do not add semicolons, braces, or colons for assignments. Use `=` not `:`.
- Do not invent scale types. Supported here: `numberScale` with variants `linear` and `modular`.
- Do not produce undefined references. Prefer defining tokens before referencing them.
- Do not use tabs or inconsistent indentation.
- Do not place prose outside the `tokenscript` code fence.

## Canonical Templates

Foundation + Scales:
```tokenscript
baseUnit = 8

spacing
  /numberScale : linear
    base = $baseUnit
    increment = $baseUnit
    steps = ["xs", "sm", "md", "lg", "xl"]

typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["caption", "body", "h3", "h2", "h1"]
```

Components referencing tokens:
```tokenscript
button
  background = $colors.brand.primary
  text = "#FFFFFF"
  padding = $spacing.md
  fontSize = $typography.body
```

Pipelines with self-reference:
```tokenscript
lineHeights = $typography
  /transform(size * 1.4)
  /roundTo(4)

typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = 5
  // Example of $this usage
  baseLine = $this.base * 1.4
```

## Self-Check List (before returning output)

1. Is the response a single `tokenscript` fenced code block with no extra prose?
2. Is indentation exactly 2 spaces everywhere? No tabs?
3. Are all references defined (preferably above their use)?
4. Are all strings in double quotes? Strings with spaces quoted?
5. Are arrays formatted with comma + space and no trailing comma?
6. Are there any units or foreign syntax (JSON, CSS) present? If so, remove them.
7. Are operators spaced correctly and assignments using `=`?

## Prompting Pattern (for humans instructing LLMs)

Use this when asking a model to emit TokenScript DSL:

```
You are generating TokenScript DSL. Follow the Output Contract from the LLM Authoring Guide:
- Return only one fenced code block labeled tokenscript. No extra prose.
- Use 2-space indentation, no tabs.
- Use = for assignments, one space on each side.
- Strings must be double-quoted; numbers are unitless.
- Define tokens before referencing them.
- Use only supported constructs: numberScale (linear, modular), references ($token, $a.b, $a...x, $this.*), pipelines (/transform, /roundTo, /clamp), arithmetic and simple conditionals.
Now generate: [describe the tokens you want].
```

Following this guide will help models produce valid, build-ready TokenScript DSL consistently.
