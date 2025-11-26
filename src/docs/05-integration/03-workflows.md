# Common Workflows

This guide covers real-world workflows for using TokenScript. Follow these step-by-step processes to accomplish common design system tasks.

## Table of Contents

1. [Setting Up a New Design System](#setting-up-a-new-design-system)
2. [Creating a Color System](#creating-a-color-system)
3. [Building a Typography System](#building-a-typography-system)
4. [Organizing Tokens by Category](#organizing-tokens-by-category)
5. [Creating Responsive Typography](#creating-responsive-typography)
6. [Building Component Tokens](#building-component-tokens)

## Setting Up a New Design System

This workflow helps you set up a complete design system from scratch.

### Step 1: Plan Your Structure

Before creating tokens, plan your page organization:

**Recommended Structure**:
- **Colors** - Brand and semantic colors
- **Spacing** - Spacing and sizing scales
- **Typography** - Typography system
- **Shadows** - Shadow tokens
- **Borders** - Border radius and styles
- **Components** - Component-specific tokens (optional)

### Step 2: Create Pages

1. Click the **"+"** button to create a new page
2. Rename it to "Colors"
3. Repeat for "Spacing", "Typography", etc.

### Step 3: Start with Foundation

Begin with the most fundamental tokens:

**Colors Page**:
```
// Brand Colors
primaryColor = #007acc
secondaryColor = #00a86b

// Semantic Colors
successColor = #00a86b
errorColor = #ff3333
warningColor = #ffaa00
```

**Spacing Page**:
```
spacing
    /numberScale : linear
        base = 4
        increment = 4
        steps = [xs, sm, md, lg, xl, xxl]
```

### Step 4: Build Scales

Create scales for systematic values:

- Color scales for brand colors
- Number scales for spacing
- Typography scales for text

### Step 5: Create References

Use references to build relationships:

```
// On Colors page
primaryColor = #007acc

// On Components page
buttonBackground = $Colors.primaryColor
```

### Step 6: Document Your Decisions

Add comments explaining your choices:

```
// Primary brand color
// Used for main CTAs and primary actions
primaryColor = #007acc
```

## Creating a Color System

Build a complete color system with scales and harmonies.

### Step 1: Define Brand Colors

Start with your primary brand color:

```
// Brand Colors
primaryColor = #007acc
```

### Step 2: Create Color Scale

Create a scale from your brand color:

```
primary
    /colorScale
        hue = 200  // Your brand hue
        lightness = stops(20, 90)
        chroma = 0.25
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

### Step 3: Create Additional Scales

Create scales for other colors:

```
// Secondary color scale
secondary
    /colorScale
        hue = 120  // Green
        lightness = stops(20, 90)
        chroma = 0.25
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

// Neutral gray scale
gray
    /colorScale
        hue = 0  // No hue
        lightness = stops(5, 95)
        chroma = 0.02  // Very low saturation
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

### Step 4: Create Semantic Colors

Create semantic color scales:

```
// Success (green)
success
    /colorScale
        hue = 140
        lightness = stops(30, 80)
        chroma = 0.2
        steps = [50, 100, 200, 300, 400, 500]

// Error (red)
error
    /colorScale
        hue = 0
        lightness = stops(30, 80)
        chroma = 0.25
        steps = [50, 100, 200, 300, 400, 500]
```

### Step 5: Use Color Harmonies

Create harmonious color relationships:

```
brandPalette
    /colorHarmony : complementary
        hue = 200  // Your brand hue
        steps = [primary, accent]
        lightness = 70
        chroma = 0.25
```

### Step 6: Reference Colors

Use references throughout your system:

```
// On Components page
buttonBackground = $Colors.primary.500
buttonHover = $Colors.primary.600
errorText = $Colors.error.500
```

## Building a Typography System

Create a complete typography system with scales and styles.

### Step 1: Define Base Typography

Start with fundamental typography values:

```
// Font Families
fontFamily = "Inter"
fontFamilyMono = "Fira Code"

// Font Weights
fontWeightNormal = "400"
fontWeightMedium = "500"
fontWeightBold = "700"
```

### Step 2: Create Typography Scale

Create a scale for font sizes:

```
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl, xxl]
        :fontSizes
            /numberScale : modular
                base = 14
                ratio = 1.25
                steps = $...sizes
            /roundTo(1)
```

### Step 3: Add Line Heights

Calculate line heights from font sizes:

```
        :lineHeights
            /transform(*range(1.2, 1.6))
            /roundTo(0.1)
```

### Step 4: Add Letter Spacing

Add proportional letter spacing:

```
        :letterSpacing
            /transform(* 0.01)
            /roundTo(0.01)
```

### Step 5: Create Typography Styles

Combine values into styles:

```
// Heading Style
headingStyle
    fontSize = $typography.fontSizes.xl
    lineHeight = $typography.lineHeights.xl
    fontFamily = $fontFamily
    fontWeight = $fontWeightBold

// Body Style
bodyStyle
    fontSize = $typography.fontSizes.md
    lineHeight = $typography.lineHeights.md
    fontFamily = $fontFamily
    fontWeight = $fontWeightNormal
```

### Step 6: Create Typography Stream (Advanced)

For complete typography systems:

```
typography
    /typographyStream
        scales
            /typographyScale
                sizes:params = [xs, sm, md, lg, xl]
                :fontSizes
                    /numberScale : modular
                        base = 14
                        ratio = 1.25
                        steps = $...sizes
                :lineHeights
                    /transform(*range(1.2, 1.6))
                    /roundTo(0.1)
        styles
            fontWeight:params = [normal, bold]
            fontFamily = "Inter"
        /matrix
            [$...fontWeight] as weight
                [$...sizes] as size
                    fontSize = $...fontSizes.{size}
                    lineHeight = $...lineHeights.{size}
                    fontFamily = $...fontFamily
                    fontWeight = $...fontWeight.{weight}
```

## Organizing Tokens by Category

Organize your tokens into logical categories for better management.

### Step 1: Create Category Pages

Create pages for each category:

- **Foundation** - Core tokens (colors, spacing, typography)
- **Components** - Component-specific tokens
- **Layout** - Layout-related tokens
- **Effects** - Shadows, borders, etc.

### Step 2: Move Tokens to Categories

Organize existing tokens:

1. Create a new page for the category
2. Copy relevant tokens to the new page
3. Update references if needed
4. Delete old tokens (if moved completely)

### Step 3: Use Cross-Page References

Reference tokens across pages:

```
// On Foundation/Colors page
primaryColor = #007acc

// On Components/Buttons page
buttonBackground = $Foundation.Colors.primaryColor
```

### Step 4: Document Organization

Add comments explaining organization:

```
// Foundation/Colors
// Core brand and semantic colors
// Used throughout the design system
```

## Creating Responsive Typography

Create typography that adapts to different screen sizes.

### Step 1: Define Breakpoints

Create breakpoint tokens:

```
// Breakpoints
breakpointMobile = 0
breakpointTablet = 768
breakpointDesktop = 1024
```

### Step 2: Create Mobile Typography

```
typographyMobile
    /typographyScale
        sizes:params = [xs, sm, md, lg]
        :fontSizes
            /numberScale : modular
                base = 12  // Smaller base for mobile
                ratio = 1.2
                steps = $...sizes
        :lineHeights
            /transform(*range(1.3, 1.7))
            /roundTo(0.1)
```

### Step 3: Create Desktop Typography

```
typographyDesktop
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl, xxl]
        :fontSizes
            /numberScale : modular
                base = 16  // Larger base for desktop
                ratio = 1.25
                steps = $...sizes
        :lineHeights
            /transform(*range(1.2, 1.6))
            /roundTo(0.1)
```

### Step 4: Use Responsive Tokens

Reference appropriate scale:

```
// Mobile
mobileHeading = $typographyMobile.fontSizes.lg

// Desktop
desktopHeading = $typographyDesktop.fontSizes.xl
```

## Building Component Tokens

Create tokens for specific UI components.

### Step 1: Identify Component Needs

List what tokens a component needs:

**Button Example**:
- Background color
- Text color
- Padding
- Border radius
- Font size
- Font weight

### Step 2: Reference Foundation Tokens

Use foundation tokens where possible:

```
// Button Tokens
button
    backgroundColor = $Colors.primary.500
    textColor = $Colors.white
    padding = $Spacing.md $Spacing.lg
    borderRadius = $BorderRadius.md
    fontSize = $Typography.fontSizes.md
    fontWeight = $Typography.fontWeight.medium
```

### Step 3: Create Component Variants

Create variants using references:

```
// Primary Button
buttonPrimary
    backgroundColor = $Colors.primary.500
    textColor = $Colors.white

// Secondary Button
buttonSecondary
    backgroundColor = $Colors.gray.200
    textColor = $Colors.gray.900

// Both use same base tokens
buttonBase
    padding = $Spacing.md $Spacing.lg
    borderRadius = $BorderRadius.md
    fontSize = $Typography.fontSizes.md
```

### Step 4: Create Component Scales

For components with sizes:

```
buttonSizes
    /matrix
        [small, medium, large] as size
            padding = [8 16, 12 24, 16 32]
            fontSize = [14, 16, 18]
```

## Best Practices for Workflows

### Start Simple

Begin with basic tokens and build complexity gradually:
1. Simple tokens first
2. Then scales
3. Then advanced structures
4. Finally, complex systems

### Document as You Go

Add comments explaining decisions:
```
// Primary brand color
// Chosen for accessibility and brand alignment
primaryColor = #007acc
```

### Test Incrementally

Verify each step works before moving on:
1. Create token
2. Check preview
3. Verify visualization (if applicable)
4. Move to next step

### Use References

Build relationships with references:
- Reference foundation tokens
- Avoid duplicating values
- Create clear hierarchies

### Organize Early

Set up page structure early:
- Create pages before adding many tokens
- Organize by category
- Use consistent naming

## Next Steps

Now that you understand common workflows:

1. **[Creating Tokens](03-creating-tokens/5.0-README.md)** - Learn more token types
2. **[Visualizations](6.0-visualizations.md)** - See your tokens visualized
3. **[Troubleshooting](9.0-troubleshooting.md)** - Fix common issues

---

**Tip**: Workflows help you accomplish real-world tasks efficiently. Start with simple workflows and build up to more complex ones as you become comfortable with TokenScript!

