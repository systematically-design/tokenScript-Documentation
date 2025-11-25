# Quick Start: TokenScript App

Welcome! This guide will walk you through your first steps with the TokenScript visual editor, from signing in to creating your first design token.

## What You'll Learn

By the end of this guide, you'll know how to:
- Sign in to TokenScript
- Navigate the interface
- Create a simple token
- See your token in the preview panel

## Signing In

TokenScript uses Google authentication to keep your work secure and synced.

### Step 1: Access TokenScript

Open TokenScript in your web browser. You'll see the login page.

### Step 2: Sign In with Google

1. Click the **"Continue with Google"** button
2. Select your Google account
3. Grant permissions if prompted

**Note**: If you don't have access yet, you may need to sign up for the alpha program first.

### Step 3: You're In!

After signing in, you'll be automatically redirected to the main editor interface.

## Understanding the Interface

The TokenScript interface is divided into several key areas:

### Top Navigation Bar

At the very top, you'll see:
- **Page tabs** - Switch between different token sets to organize your tokens
- **Add page button (+)** - Click to create a new page
- **Navigation menu** - Access settings and other options

### Main Editor Area

The editor is split into two main panels:

#### Left Panel: Code Editor

This is where you write TokenScript code. It features:
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

When you create scales (like color scales or typography scales), visualizations appear here automatically. You'll learn more about these in the [Visualizations Guide](../02-using-the-app/04-visualizations.md).

## Creating Your First Token

Let's create a simple color token to get you started!

### Step 1: Start with a Simple Token

In the editor, type:

```tokenscript
primaryColor = #007acc
```

This creates a token named `primaryColor` with a blue color value.

### Step 2: See It Compile

As you type, TokenScript automatically compiles your code. After a moment, you should see:

1. **In the preview panel**: A new row appears showing:
   - Name: `primaryColor`
   - Value: `#007acc` (or the color displayed)
   - Type: `color`

2. **In the editor**: The syntax is highlighted in different colors

### Step 3: Try Another Token

Let's create a spacing token:

```tokenscript
baseSpacing = 16px
```

You'll see this appear in the preview panel as well.

### Step 4: Create a Reference

One powerful feature is referencing other tokens. Try:

```tokenscript
secondarySpacing = $baseSpacing
```

This creates a token that uses the value from `baseSpacing`. If you change `baseSpacing`, `secondarySpacing` will automatically update!

## Understanding Your First Page

When you first open TokenScript, you'll see a page called something like "Page 1" or "Untitled". This is your first workspace page.

**Think of pages as token sets** - you can organize different types of tokens into different sets:
- One page for colors
- One page for spacing
- One page for typography
- And so on

You'll learn more about managing pages in the [Pages & Workspace Guide](../02-using-the-app/02-pages-and-workspace.md).

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

Congratulations! You've created your first tokens. Here's what to explore next:

1. **[Pages & Workspace](../02-using-the-app/02-pages-and-workspace.md)** - Organize your tokens across multiple pages
2. **[Editor Features](../02-using-the-app/03-editor-features.md)** - Master the editor's powerful features
3. **[Creating Tokens](../03-creating-tokens/01-simple-tokens.md)** - Learn to create more complex tokens
4. **[Language Reference](../04-language-reference/01-syntax-reference.md)** - Deep dive into TokenScript syntax

## Tips for Beginners

**Start Simple**: Begin with basic tokens (colors, numbers) before moving to scales and complex structures.

**Use Comments**: Document your tokens as you create them. Future you will thank you!

**Experiment**: Don't worry about making mistakes. TokenScript will show you errors, and you can always fix them.

**Save Often**: Your work is automatically saved to the cloud, but it's good practice to check that cloud sync is working.

**Explore Visualizations**: When you create scales, hover over them to see beautiful visualizations appear.

## Getting Help

If you run into issues:

- Check the [Troubleshooting Guide](../07-help/01-troubleshooting.md)
- Look for error messages in the editor (red squiggles)
- Review the [Syntax Reference](../04-language-reference/01-syntax-reference.md) for syntax help

---

**Ready to learn more?** Continue to [Pages & Workspace](../02-using-the-app/02-pages-and-workspace.md) or start [Creating Tokens](../03-creating-tokens/01-simple-tokens.md)!

