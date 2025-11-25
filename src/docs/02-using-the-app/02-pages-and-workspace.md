# Pages & Workspace

Systematically uses a multi-page system to organize your tokens into sets. This guide will teach you how to organize your design tokens across multiple token sets.

## Understanding Pages

Think of pages as token sets or groups. Each page:
- Has its own name (like "Colors", "Spacing", "Typography")
- Contains its own TokenScript DSL code
- Can reference tokens from other pages
- Is saved independently

**Why use multiple pages?**
- **Organization**: Keep related tokens together
- **Clarity**: Easier to find what you're looking for
- **Collaboration**: Different team members can work on different pages
- **Scalability**: Large design systems stay manageable

## Creating a New Page

### Method 1: Using the Add Button

1. Look at the top of the editor, where you see page tabs
2. Click the **"+"** button at the end of the tabs
3. A new page appears with a temporary name (like "Page 2")
4. The page name is automatically selected for editing
5. Type your desired page name (e.g., "Colors")
6. Press **Enter** or click outside to confirm

### Method 2: From Context Menu

1. Right-click on any existing page tab
2. Select **"Duplicate"** to create a copy, then rename it
3. Or use the context menu to create a new page

**Tip**: New pages start with a default name. Always rename them to something meaningful!

## Switching Between Pages

### Using Tabs

1. Click on any page tab at the top
2. The editor content switches to that page
3. The preview panel updates to show tokens from that page

### Using Keyboard Shortcuts

- **Arrow keys**: When focused on tabs, use left/right arrows to navigate
- **Tab key**: Navigate through tabs in order

**Note**: Only tokens from the active page are shown in the preview panel by default.

## Renaming a Page

### Method 1: Double-Click

1. Double-click on the page tab you want to rename
2. The name becomes editable
3. Type the new name
4. Press **Enter** to save, or **Escape** to cancel

### Method 2: Context Menu

1. Right-click on the page tab
2. Select **"Rename"**
3. Type the new name
4. Press **Enter** to save

**Rules for Page Names**:
- Must be unique (no two pages can have the same name)
- Should be descriptive (e.g., "Brand Colors" not "Page 1")
- Avoid special characters that might cause issues

## Duplicating a Page

Duplicating creates an exact copy of a page, which is useful for:
- Creating variations (e.g., "Light Theme" and "Dark Theme")
- Experimenting without losing your original
- Creating templates

### Steps to Duplicate

1. Right-click on the page tab you want to duplicate
2. Select **"Duplicate"** from the context menu
3. A new page appears with the same name plus " (copy)"
4. Rename it to something appropriate

**Tip**: After duplicating, remember to rename the copy to avoid confusion!

## Deleting a Page

**Warning**: Deleting a page permanently removes all tokens on that page. Make sure you don't need anything from it!

### Steps to Delete

1. Right-click on the page tab you want to delete
2. Select **"Delete"** from the context menu
3. A confirmation dialog appears
4. Confirm the deletion

**Note**: You cannot delete the last remaining page. Systematically always keeps at least one page.

## Organizing Your Tokens

### Strategy 1: By Category

Create separate pages for different token categories:

```
Colors          → All color tokens
Spacing         → All spacing/sizing tokens
Typography      → All typography tokens
Shadows         → All shadow tokens
Borders         → All border tokens
```

### Strategy 2: By Component

Organize by UI component or feature:

```
Buttons         → Button-specific tokens
Forms           → Form-specific tokens
Navigation      → Navigation-specific tokens
Cards           → Card-specific tokens
```

### Strategy 3: By Theme

If you have multiple themes:

```
Light Theme     → Light mode tokens
Dark Theme      → Dark mode tokens
Brand A         → Brand-specific tokens
Brand B         → Different brand tokens
```

### Strategy 4: Hybrid Approach

Combine strategies for large systems:

```
Foundation/
  ├── Colors
  ├── Spacing
  └── Typography
Components/
  ├── Buttons
  ├── Forms
  └── Navigation
Themes/
  ├── Light
  └── Dark
```

## Cross-Page References

Tokens can reference tokens from other pages! This is powerful for maintaining relationships.

### How It Works

When you reference a token from another page, use the page name as a prefix:

```tokenscript
// On "Colors" page
primaryColor = #007acc

// On "Buttons" page
buttonBackground = $Colors.primaryColor
```

**Note**: The page name acts as a namespace, so `Colors.primaryColor` refers to the `primaryColor` token on the `Colors` page.

### Best Practices for References

1. **Keep foundation tokens separate**: Put base tokens (colors, spacing) on dedicated pages
2. **Reference, don't duplicate**: Use references instead of copying values
3. **Document dependencies**: Comment when a token depends on another page

## Page Context Menu

Right-clicking on a page tab gives you access to:

- **Rename** - Change the page name
- **Duplicate** - Create a copy of the page
- **Delete** - Remove the page (with confirmation)

## Best Practices

### Naming Pages

✅ **Good Names**:
- "Brand Colors"
- "Spacing Scale"
- "Typography System"
- "Dark Theme"

❌ **Avoid**:
- "Page 1", "Page 2" (not descriptive)
- "Untitled" (too generic)
- Very long names (hard to read in tabs)

### Organization Tips

1. **Start with foundation**: Create pages for core tokens first (colors, spacing, typography)
2. **Group related tokens**: Keep tokens that work together on the same page
3. **Use consistent naming**: Follow a naming convention across pages
4. **Limit page count**: Too many pages can be overwhelming (aim for 5-15 pages)
5. **Review regularly**: Periodically reorganize as your system grows

### Workflow Recommendations

1. **Plan your structure**: Before creating many pages, sketch out your organization
2. **Create pages as needed**: Don't create empty pages "just in case"
3. **Rename immediately**: Always rename new pages right away
4. **Keep it simple**: Start with fewer pages and add more as needed

## Common Patterns

### Pattern 1: Foundation + Components

```
Foundation (base tokens)
├── Colors
├── Spacing
└── Typography

Components (component-specific tokens)
├── Buttons
├── Forms
└── Cards
```

### Pattern 2: By Feature Area

```
Design System
├── Colors
├── Spacing
├── Typography
└── Effects

Product Features
├── Dashboard
├── Settings
└── Profile
```

### Pattern 3: Theme-Based

```
Base Tokens
├── Colors
├── Spacing
└── Typography

Themes
├── Light
└── Dark
```

## Troubleshooting

### "Page name already exists"

Each page name must be unique. If you see this error:
- Choose a different name
- Add a suffix (e.g., "Colors 2")
- Check if you meant to rename an existing page instead

### Can't delete a page

- Make sure it's not the last page (you need at least one)
- Check if other pages reference tokens from this page
- Try refreshing if the delete option doesn't appear

### Lost a page

- Check if it's hidden behind other tabs (scroll the tab bar)
- Look for it in the page list
- If truly lost, check your cloud sync history

## Next Steps

Now that you understand pages:

1. **Editor Features** - Master the editor's powerful features
2. **Creating Tokens** - Start creating different types of tokens

---

**Tip**: Take time to plan your page structure before creating many tokens. A good organization system will save you time later!

