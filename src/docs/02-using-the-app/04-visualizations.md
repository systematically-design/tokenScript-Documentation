# Visualizations

Systematically automatically creates beautiful visualizations of your tokens. These help you see how your design tokens work together and make it easier to understand your design system.

## What Are Visualizations?

Visualizations are interactive displays that show your tokens in a visual format. They appear automatically when you create scales or harmonies, helping you:

- **See relationships** - Understand how tokens relate to each other
- **Verify consistency** - Ensure your scales work harmoniously
- **Make decisions** - Visually evaluate color choices and typography

## Color Scale Visualizations

Color scale visualizations show your color scales as swatches or ramps.

### How They Appear

When you create a color scale, a visualization panel appears showing:
- **Color swatches** - Each step as a colored square
- **Color values** - Hex, HSL, or OKLCH values
- **Step names** - Labels for each color
- **Progression** - Visual representation of the scale

### Example

```tokenscript
blue
    /colorScale
        hue = 200
        lightness = stops(20, 80)
        chroma = 0.2
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
```

**Visualization shows**:
- 10 color swatches from light (50) to dark (900)
- Smooth progression from light blue to dark blue
- Values for each step

### Reading Color Scale Visualizations

- **Left to right** - Usually shows progression from light to dark (or vice versa)
- **Swatch size** - Larger swatches may indicate more important steps
- **Color values** - Hover or click to see exact values
- **Step labels** - Names help identify which step is which

## Color Harmony Visualizations

Color harmony visualizations show how harmonious colors work together.

### How They Appear

When you create a color harmony, a visualization shows:
- **Color wheel** - Colors positioned on the color wheel
- **Color swatches** - Each color in the harmony
- **Relationships** - Lines or grouping showing harmony type
- **Values** - Color values for each harmony color

### Example

```tokenscript
palette
    /colorHarmony : complementary
        base = 200
        steps = [primary, accent]
        lightness = 70
        chroma = 0.25
```

**Visualization shows**:
- Two colors opposite each other on the color wheel
- Visual representation of complementary relationship
- Color swatches with values

### Harmony Types Visualized

**Analogous**: Colors close together on the wheel
**Complementary**: Colors opposite each other
**Balanced**: Colors evenly distributed around the wheel

## Typography Scale Visualizations

Typography scale visualizations show your typography scales with actual text rendering.

### How They Appear

When you create a typography scale, a visualization shows:
- **Text samples** - Each size rendered as text
- **Size comparison** - Visual comparison of sizes
- **Line height** - Spacing between lines
- **Letter spacing** - Character spacing
- **Values** - Font sizes, line heights, etc.

### Example

```tokenscript
typography
    /typographyScale
        sizes:params = [xs, sm, md, lg, xl]
        :fontSizes
            /numberScale : modular
                base = 12
                ratio = 1.25
                steps = $...sizes
```

**Visualization shows**:
- Text samples at each size
- Visual hierarchy from smallest to largest
- Line height relationships
- Letter spacing effects

### Reading Typography Visualizations

- **Size progression** - See how sizes relate to each other
- **Readability** - Evaluate if sizes are readable
- **Hierarchy** - Understand visual hierarchy
- **Spacing** - See line height and letter spacing effects

## Typography Stream Visualizations

Typography stream visualizations show complete typography systems with all combinations.

### How They Appear

When you create a typography stream, a visualization shows:
- **Style matrix** - All combinations of weights and sizes
- **Text samples** - Rendered examples of each style
- **Relationships** - How styles relate to each other
- **Values** - All typography values

### Example

```tokenscript
typography
    /typographyStream
        scales
            /typographyScale
                sizes:params = [xs, sm, md, lg, xl]
                :fontSizes
                    /numberScale : modular
                        base = 12
                        ratio = 1.25
                        steps = $...sizes
        styles
            fontWeight:params = [normal, bold]
        /matrix
            [$...fontWeight] as weight
                [$...sizes] as size
                    fontSize = $...fontSizes.{size}
                    fontWeight = $...fontWeight.{weight}
```

**Visualization shows**:
- Matrix of all weight × size combinations
- Text samples for each combination
- Visual comparison across the matrix

## Interacting with Visualizations

### Hovering

- **Hover over swatches** - See detailed information
- **Hover over text** - See typography values
- **Hover over colors** - See color values and codes

### Clicking

- **Click swatches** - May copy values or show details
- **Click text samples** - See typography details
- **Click colors** - View color information

### Viewing Values

Visualizations show:
- **Hex colors** - `#007acc`
- **HSL colors** - `hsl(200, 100%, 50%)`
- **OKLCH colors** - `oklch(70% 0.2 200deg)`
- **Font sizes** - `16px`, `24px`
- **Line heights** - `1.5`, `1.8`
- **Other values** - As applicable

## Understanding Visualization Panels

### Panel Location

Visualizations appear in the **bottom panel** of the Systematically interface, below the editor and preview panels.

### Panel Behavior

- **Automatic appearance** - Shows when you create scales or harmonies
- **Updates in real-time** - Changes as you edit tokens
- **Multiple visualizations** - Can show multiple scales at once
- **Collapsible** - Can be hidden or shown

### Panel Controls

- **Toggle visibility** - Show/hide visualization panel
- **Switch views** - Different visualization types
- **Zoom** - Adjust visualization size

## Tips for Using Visualizations

### Tip 1: Use for Validation

Visualizations help you verify:
- Colors work well together
- Typography scales are harmonious
- Spacing is consistent
- Values make sense

### Tip 2: Compare Variations

Create multiple scales and compare:
- Different color harmonies
- Different typography ratios
- Different spacing increments
- See which works best visually

### Tip 3: Check Accessibility

Use visualizations to verify:
- Color contrast ratios
- Typography readability
- Size relationships
- Spacing consistency

## Common Visualization Scenarios

### Scenario 1: Evaluating Color Scales

Create a color scale and use the visualization to:
- Verify smooth progression
- Check if colors are too similar
- Ensure appropriate lightness range
- Validate color choices

### Scenario 2: Comparing Typography Scales

Create multiple typography scales and compare:
- Which ratio works best
- Size relationships
- Readability at different sizes
- Visual hierarchy

### Scenario 3: Building Color Systems

Use color harmony visualizations to:
- See how colors work together
- Verify harmony types
- Check color relationships
- Build cohesive palettes

## Troubleshooting

### Visualizations Not Appearing

- Check if you created a scale (not just simple tokens)
- Verify scale syntax is correct
- Look for errors in the editor
- Try refreshing the page

### Wrong Colors Shown

- Check color scale parameters
- Verify hue, lightness, chroma values
- Ensure steps are correct
- Check for syntax errors

### Typography Not Rendering

- Verify typography scale syntax
- Check font sizes are valid
- Ensure line heights are correct
- Look for transform errors

### Visualization Panel Hidden

- Look for a toggle button
- Check panel settings
- Try resizing the window
- Refresh the page

## Next Steps

Now that you understand visualizations:

1. **Creating Tokens** - Create more scales to visualize
2. **Troubleshooting** - Fix visualization issues

---

**Tip**: Visualizations are one of Systematically's most powerful features! Use them to validate your design decisions and ensure your design system is cohesive and well-designed.

