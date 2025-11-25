# Quick Start

Welcome! This guide will walk you through your first steps with Systematically, from signing in to writing your first TokenScript DSL code and seeing it compile into design tokens.

## What You'll Learn

By the end of this guide, you'll know how to:
- Sign in to Systematically
- Navigate the interface
- Write TokenScript DSL code
- Create simple tokens and see them compile in real-time
- Use references and create scales

## Signing In

Systematically uses Google authentication to keep your work secure and synced.

### Step 1: Access Systematically

Open Systematically in your web browser. You'll see the login page.

### Step 2: Sign In with Google

1. Click the **"Continue with Google"** button
2. Select your Google account
3. Grant permissions if prompted

**Note**: If you don't have access yet, you may need to sign up for the alpha program first.

### Step 3: You're In!

After signing in, you'll be automatically redirected to the main editor interface where you'll write TokenScript DSL code.

## Understanding the Interface

The Systematically interface is divided into several key areas:

### Top Navigation Bar

At the very top, you'll see:
- **Page tabs** - Switch between different token sets to organize your tokens
- **Add page button (+)** - Click to create a new page
- **Navigation menu** - Access settings and other options

### Main Editor Area

The editor is split into two main panels:

#### Left Panel: Code Editor

This is where you write TokenScript DSL code. It features:
- **Syntax highlighting** - Colors help you see different parts of your code
- **Autocomplete** - Suggestions appear as you type
- **Line numbers** - Help you navigate longer files
- **Error indicators** - Red squiggles show syntax errors

#### Right Panel: Preview

This shows your compiled tokens in a table format:
- **Token name** - The name you gave your token
- **Token value** - The computed value
- **Token type** - What kind of token it is (color, number, etc.)

### Bottom Panel: Visualizations

When you create scales (like color scales or typography scales), visualizations appear here automatically. You'll learn more about these in the Visualizations section.

## Your First Tokens

Let's start with the simplest possible tokens - direct values. In the editor, type:

```tokenscript
// Simple value tokens
primaryColor = #007acc
baseSpacing = 16px
fontSize = 16
```

As you type, Systematically automatically compiles your TokenScript DSL code. After a moment, you should see:

1. **In the preview panel**: New rows appear showing:
   - `primaryColor` with value `#007acc` (type: color)
   - `baseSpacing` with value `16px` (type: spacing)
   - `fontSize` with value `16` (type: number)

2. **In the editor**: The syntax is highlighted in different colors

That's it! You've created three tokens by writing TokenScript DSL code.

## Using References

Instead of repeating values, you can reference other tokens. Try this:

```tokenscript
baseSpacing = 16px

// Reference the base spacing
cardPadding = $baseSpacing
buttonPadding = $baseSpacing * 2
```

Now `cardPadding` is 16px and `buttonPadding` is 32px, automatically calculated from `baseSpacing`. If you change `baseSpacing`, both `cardPadding` and `buttonPadding` will automatically update!

## Creating Scales

Scales automatically generate multiple tokens from a pattern. Here's a spacing scale:

```tokenscript
spacing
  /numberScale : linear
    base = 8
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]
```

This creates:
- `spacing.xs` = 8
- `spacing.sm` = 12
- `spacing.md` = 16
- `spacing.lg` = 20
- `spacing.xl` = 24

All five tokens are generated automatically from this single scale definition!

## Nested Tokens

Use indentation to create nested token groups:

```tokenscript
colors
  primary
    main = #007acc
    light = #60A5FA
    dark = #2563EB
  secondary
    main = #00a86b
    light = #00c97a
    dark = #008a5a
```

This creates tokens like `colors.primary.main`, `colors.primary.light`, `colors.secondary.main`, etc.

## Complete Example

Here's a complete example combining everything:

```tokenscript
// Base values
baseUnit = 8
primaryColor = #007acc

// Spacing scale
spacing
  /numberScale : linear
    base = $baseUnit
    increment = 4
    steps = ["xs", "sm", "md", "lg", "xl"]

// Typography scale
typography
  /numberScale : modular
    base = 16
    ratio = 1.25
    steps = ["sm", "md", "lg", "xl"]

// Colors
colors
  primary = $primaryColor
  secondary = #00a86b
  neutral
    light = #f5f5f5
    dark = #1a1a1a
```

This creates:
- A linear spacing scale from 8px to 24px
- A modular typography scale from 16px to 31.25px
- Color tokens for primary, secondary, and neutral colors

## Understanding Your First Page

When you first open Systematically, you'll see a page called something like "Page 1" or "Untitled". This is your first workspace page.

**Think of pages as token sets** - you can organize different types of tokens into different pages:
- One page for colors
- One page for spacing
- One page for typography
- And so on

You'll learn more about managing pages in the Pages & Workspace section.

## Common First Steps

### Adding Comments

You can add comments to document your tokens:

```tokenscript
// Primary brand color
primaryColor = #007acc

// Base spacing unit
baseSpacing = 16px
```

Comments start with `//` and help you remember what each token is for.

### Organizing Tokens

You can group related tokens together:

```tokenscript
// Colors
primaryColor = #007acc
secondaryColor = #00a86b

// Spacing
baseSpacing = 16px
largeSpacing = 32px
```

## What's Next

Congratulations! You've written your first TokenScript DSL code and seen it compile into tokens. Here's what to explore next:

1. **Using Systematically** - Master the interface and features
2. **Creating Tokens** - Learn to create different types of tokens
3. **Language Reference** - Complete TokenScript DSL syntax guide

## Tips for Beginners

**Start Simple**: Begin with basic tokens (colors, numbers) before moving to scales and complex structures.

**Use Comments**: Document your tokens as you create them. Future you will thank you!

**Experiment**: Don't worry about making mistakes. Systematically will show you errors with red squiggles, and you can always fix them.

**Save Often**: Your work is automatically saved to the cloud via Systematically, but it's good practice to check that cloud sync is working.

**Explore Visualizations**: When you create scales, visualizations appear automatically to help you see how your tokens work together.

## Getting Help

If you run into issues:

- Check the Troubleshooting Guide
- Look for error messages in the editor (red squiggles)
- Review the Syntax Reference for syntax help

---

**Ready to learn more?** Use the navigation to explore Using Systematically or start Creating Tokens!

