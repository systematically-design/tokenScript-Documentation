# Interface Overview

The Systematically interface is designed to make creating and managing design tokens intuitive and efficient. This guide will help you understand all the key areas of the interface.

## Main Layout

The Systematically interface is divided into several key areas:

### Top Navigation Bar

At the very top of the screen, you'll find:

- **Page tabs** - Switch between different token sets to organize your tokens
- **Add page button (+)** - Click to create a new page
- **Navigation menu** - Access settings and other options
- **Account info** - Your Google account information and sign-out option

### Main Editor Area

The center of the screen contains the main editor, split into two panels:

#### Left Panel: Code Editor

This is where you write TokenScript DSL code. It features:
- **Syntax highlighting** - Colors help you see different parts of your code
- **Autocomplete** - Suggestions appear as you type
- **Line numbers** - Help you navigate longer files
- **Error indicators** - Red squiggles show syntax errors
- **Code folding** - Collapse sections for better organization

#### Right Panel: Preview

This shows your compiled tokens in a table format:
- **Token name** - The name you gave your token
- **Token value** - The computed value
- **Token type** - What kind of token it is (color, number, etc.)
- **Search/filter** - Find specific tokens quickly

### Bottom Panel: Visualizations

When you create scales (like color scales or typography scales), visualizations appear here automatically:
- **Color scales** - See color ramps and palettes
- **Typography scales** - See typography rendered as text
- **Interactive displays** - Hover and click to explore

## Key Interface Elements

### Page Tabs

Page tabs let you switch between token sets:
- **Click to switch** - Click any tab to view that page
- **Right-click menu** - Rename, duplicate, or delete pages
- **Drag to reorder** - Organize pages by dragging tabs

### Editor Features

The Monaco-powered editor includes:
- **Autocomplete** - Type `/` for directives, `$` for references
- **Error detection** - Red squiggles show syntax errors
- **Keyboard shortcuts** - VS Code-style shortcuts
- **Multi-cursor editing** - Edit multiple places at once

### Preview Panel

The preview shows:
- **Compiled tokens** - All tokens from the current page
- **Token values** - Computed values (not just expressions)
- **Token types** - Color, number, string, etc.
- **Search** - Filter tokens by name

### Visualization Panel

Visualizations help you:
- **See relationships** - Understand how tokens relate
- **Verify consistency** - Ensure scales work harmoniously
- **Make decisions** - Visually evaluate choices
- **Share designs** - Show stakeholders your system

## Navigation Tips

### Switching Between Pages

- **Click tabs** - Click any page tab to switch
- **Keyboard shortcuts** - Use arrow keys when tabs are focused
- **Right-click menu** - Access page options

### Finding Tokens

- **Use preview search** - Filter tokens in the preview panel
- **Use editor search** - `Ctrl/Cmd + F` to find in code
- **Use autocomplete** - Type `$` to see available tokens

### Working with Large Token Sets

- **Use folding** - Collapse sections you're not working on
- **Use comments** - Organize with section headers
- **Split into pages** - Don't put everything in one token set

## Interface Customization

### Resizing Panels

- **Drag borders** - Resize editor and preview panels
- **Toggle panels** - Hide/show visualization panel
- **Full-screen editor** - Focus on code when needed

### Editor Settings

The editor uses sensible defaults:
- **Font**: Geist Mono (monospace)
- **Font size**: 14px
- **Line height**: 24px
- **Word wrap**: Enabled
- **Line numbers**: Shown

## Next Steps

Now that you understand the interface:

1. **[Pages & Workspace](02-pages-and-workspace.md)** - Learn to organize your tokens
2. **[Editor Features](03-editor-features.md)** - Master the editor's powerful features
3. **[Creating Tokens](../03-creating-tokens/README.md)** - Start creating tokens

---

**Tip**: Take time to explore the interface. The more familiar you are with it, the faster you'll work!

