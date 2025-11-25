# Editor Features

The TokenScript editor is powered by Monaco Editor (the same editor used in VS Code) and includes many features to make writing TokenScript easier and more enjoyable.

## Syntax Highlighting

Syntax highlighting colors different parts of your code to make it easier to read and understand.

### What Gets Highlighted

- **Directives** (like `/numberScale`) - Appear in green
- **References** (like `$primaryColor`) - Appear in yellow/orange
- **Types** (like `:color`) - Appear in blue
- **Comments** (like `// comment`) - Appear in gray
- **Values** - Appear in appropriate colors based on type
- **Operators** (like `=`) - Appear in magenta

### Benefits

- **Spot errors quickly** - Wrong colors indicate syntax issues
- **Understand structure** - Colors show the relationship between elements
- **Read faster** - Your brain processes colored code more efficiently

## Autocomplete

Autocomplete suggests completions as you type, saving you time and reducing errors.

### Slash Menu (Directives)

When you type `/`, a menu appears with available directives:

**How to use**:
1. Type `/` in the editor
2. A dropdown menu appears showing directives
3. Use arrow keys or mouse to select
4. Press Enter or click to insert

**Available directives**:
- `/numberScale` - Create number sequences
- `/colorScale` - Create color ramps
- `/colorHarmony` - Create color harmonies
- `/typographyScale` - Create typography scales
- `/transform` - Transform values
- `/roundTo` - Round numbers
- `/forEach` - Loop through collections
- `/matrix` - Create matrices

**Example**:
```tokenscript
spacing
    /  // Type "/" here and see suggestions
```

### Dollar Menu (References)

When you type `$`, a menu appears with available token references:

**How to use**:
1. Type `$` in the editor
2. A dropdown appears showing tokens you can reference
3. Start typing to filter the list
4. Select with arrow keys or mouse
5. Press Enter or click to insert

**What appears**:
- Tokens from the current page
- Tokens from other pages (with page prefix)
- Recently used tokens

**Example**:
```tokenscript
primaryColor = #007acc
buttonColor = $  // Type "$" here to see primaryColor
```

### Inline Search

After typing `/` or `$`, you can continue typing to search:

- Type `/num` to find `/numberScale`
- Type `$prim` to find `$primaryColor`
- Type `$Colors.` to see tokens from the Colors page

**Tip**: The search is fuzzy, so you don't need to type exactly!

## Error Detection

The editor shows errors in real-time to help you fix issues quickly.

### Error Indicators

**Red Squiggles**: Underline syntax errors
- Hover over the squiggle to see the error message
- Common errors: missing `=`, wrong indentation, invalid syntax

**Error Messages**: 
- Appear when you hover over red squiggles
- Explain what's wrong
- Sometimes suggest fixes

### Common Errors Shown

1. **Syntax Errors**
   - Missing equals sign
   - Invalid characters
   - Wrong indentation

2. **Reference Errors**
   - Referencing non-existent tokens
   - Wrong page name in cross-page references
   - Typo in token name

3. **Type Errors**
   - Wrong value type for the token type
   - Invalid color format
   - Invalid number format

### Fixing Errors

1. **Read the error message** - Hover over the red squiggle
2. **Check the syntax** - Compare with examples in documentation
3. **Fix the issue** - Correct the syntax
4. **Watch it disappear** - Error indicators update automatically

## Keyboard Shortcuts

Keyboard shortcuts help you work faster. Here are the most useful ones:

### Navigation

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + G` | Go to line |
| `Ctrl/Cmd + F` | Find |
| `Ctrl/Cmd + H` | Find and replace |
| `F3` / `Shift + F3` | Find next/previous |

### Editing

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + D` | Select next occurrence |
| `Ctrl/Cmd + Shift + L` | Select all occurrences |
| `Alt + Up/Down` | Move line up/down |
| `Shift + Alt + Up/Down` | Copy line up/down |
| `Ctrl/Cmd + /` | Toggle comment |

### Selection

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + L` | Select entire line |
| `Ctrl/Cmd + Shift + K` | Delete line |
| `Ctrl/Cmd + ]` | Indent |
| `Ctrl/Cmd + [` | Outdent |

### Autocomplete

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + Space` | Trigger autocomplete |
| `Tab` | Accept suggestion |
| `Esc` | Dismiss autocomplete |

### Page Navigation

| Shortcut | Action |
|----------|--------|
| `Left/Right Arrow` | Switch pages (when tabs focused) |
| `Ctrl/Cmd + Tab` | Next page |
| `Ctrl/Cmd + Shift + Tab` | Previous page |

## Editor Settings

The editor is configured with sensible defaults, but understanding the settings helps you work effectively.

### Font

- **Font Family**: Geist Mono (monospace font for code)
- **Font Size**: 14px (adjustable with browser zoom)
- **Line Height**: 24px (comfortable reading)

### Layout

- **Line Numbers**: Shown on the left
- **Word Wrap**: Enabled (long lines wrap)
- **Minimap**: Disabled (cleaner interface)
- **Folding**: Enabled (collapse code sections)

### Behavior

- **Auto-indent**: Enabled
- **Bracket matching**: Enabled (highlights matching brackets)
- **Auto-closing brackets**: Enabled
- **Suggestions**: Enabled (autocomplete)

## Tips & Tricks

### Tip 1: Use Autocomplete Liberally

Don't type everything manually! Use `/` and `$` menus to:
- Avoid typos
- Discover available options
- Learn syntax patterns

### Tip 2: Multi-Cursor Editing

Select multiple occurrences and edit them all at once:

1. Select a word
2. Press `Ctrl/Cmd + D` to select next occurrence
3. Repeat to select more
4. Type to edit all at once

**Example**: Rename `primaryColor` to `brandColor` everywhere:
1. Select `primaryColor`
2. Press `Ctrl/Cmd + D` multiple times
3. Type `brandColor` to replace all

### Tip 3: Quick Comment Toggle

Use `Ctrl/Cmd + /` to quickly comment/uncomment lines:

```tokenscript
// primaryColor = #007acc  // Commented out
secondaryColor = #00a86b   // Active
```

Select both lines and press `Ctrl/Cmd + /` to toggle.

### Tip 4: Find and Replace

Use `Ctrl/Cmd + H` for find and replace:

- Replace `px` with `rem` throughout
- Fix typos in token names
- Update color values globally

### Tip 5: Go to Line

Use `Ctrl/Cmd + G` to jump to a specific line number (useful for long files).

### Tip 6: Use Folding

Click the fold icon (▼) next to line numbers to collapse sections:

```tokenscript
colors ▼
    primary = #007acc
    secondary = #00a86b
```

This helps navigate large files.

### Tip 7: Copy with Formatting

When copying code, formatting is preserved. Paste into other editors or documentation.

### Tip 8: Undo/Redo

- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Shift + Z` - Redo

Don't worry about mistakes - undo is your friend!

## Working with Large Token Sets

### Organize with Comments

Use comments to create sections:

```tokenscript
// ============================================
// Colors
// ============================================
primaryColor = #007acc

// ============================================
// Spacing
// ============================================
baseSpacing = 16px
```

### Use Folding

Fold sections you're not working on to focus on what matters.

### Split into Multiple Pages

Consider splitting large token sets into multiple pages instead of keeping everything in one set.

## Error Prevention

### Let Autocomplete Help

- Use autocomplete instead of typing manually
- Reduces typos
- Ensures correct syntax

### Check Errors Regularly

- Look for red squiggles
- Fix errors as you go
- Don't let errors accumulate

### Use References

- Reference tokens instead of copying values
- Ensures consistency
- Makes updates easier

## Accessibility

The editor supports:
- **Keyboard navigation** - Full functionality without mouse
- **Screen readers** - Compatible with assistive technologies
- **High contrast** - Readable in various lighting conditions

## Next Steps

Now that you know the editor features:

1. **[Creating Tokens](../03-creating-tokens/01-simple-tokens.md)** - Start creating tokens with confidence
2. **[Language Reference](../04-language-reference/01-syntax-reference.md)** - Deep dive into the language
3. **[Visualizations](04-visualizations.md)** - See your tokens visualized

---

**Tip**: The best way to learn editor features is to use them! Try the shortcuts and autocomplete as you work. You'll be faster in no time.

