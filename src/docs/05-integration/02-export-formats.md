# 4.2 Export Formats

Understanding different output formats and when to use them.

## 4.2.1 Available Formats

TokenScript DSL supports multiple export formats:

1. **Simple** - Flat key-value mapping
2. **W3C** - W3C Design Tokens format
3. **Tokens Studio** - Tokens Studio native format
4. **IR** - Raw Intermediate Representation

## 4.2.2 Simple Format

Flat key-value mapping, easiest to use.

### When to Use

- Quick prototyping
- Simple integrations
- When you don't need type information

### Example

**DSL:**
```tokenscript
spacing = 16
colors
  primary = #3B82F6
```

**Output:**
```json
{
  "spacing": 16
  "colors.primary": "#3B82F6"
}
```

### Usage

```javascript
const tokens = {
  "spacing": 16
  "colors.primary": "#3B82F6"
};

// Direct access
const spacing = tokens.spacing;
const primaryColor = tokens["colors.primary"];
```

## 4.2.3 W3C Format

W3C Design Tokens standard format with type information.

### When to Use

- Design tool integration
- Standards compliance
- When you need type information
- Multi-tool workflows

### Example

**DSL:**
```tokenscript
spacing = 16
colors
  primary = #3B82F6
```

**Output:**
```json
{
  "spacing": {
    "$type": "number"
    "$value": 16
  }
  "colors": {
    "primary": {
      "$type": "color"
      "$value": "#3B82F6"
    }
  }
}
```

### Usage

```javascript
const tokens = {
  "spacing": {
    "$type": "number"
    "$value": 16
  }
};

// Access value
const spacing = tokens.spacing.$value;
const spacingType = tokens.spacing.$type;
```

## 4.2.4 Tokens Studio Format

Tokens Studio native format with optional expression preservation.

### When to Use

- Tokens Studio integration
- When you need expression preservation
- Design tool workflows

### Example

**DSL:**
```tokenscript
base = 8
spacing = $base * 2
```

**Output (expressive: false):**
```json
{
  "base": {
    "value": 8
    "type": "number"
  }
  "spacing": {
    "value": 16
    "type": "number"
  }
}
```

**Output (expressive: true):**
```json
{
  "base": {
    "value": 8
    "type": "number"
  }
  "spacing": {
    "value": "{base} * 2"
    "type": "number"
  }
}
```

### Usage

```javascript
const tokens = {
  "spacing": {
    "value": 16
    "type": "number"
  }
};

// Access value
const spacing = tokens.spacing.value;
```

## 4.2.5 IR Format

Raw Intermediate Representation - complete token system structure.

### When to Use

- Custom processing
- Advanced integrations
- Debugging
- When you need full metadata

### Example

**DSL:**
```tokenscript
spacing = 16
```

**Output:**
```json
{
  "tokens": {
    "spacing": {
      "type": "number"
      "value": 16
      "dependencies": []
    }
  }
  "generators": {}
  "iterators": {}
  "derivedGroups": {}
  "metadata": {
    "compiledAt": "2024-01-01T00:00:00.000Z"
    "sourceHash": "..."
    "irHash": "..."
  }
}
```

### Usage

```javascript
const ir = {
  "tokens": {
    "spacing": {
      "type": "number"
      "value": 16
    }
  }
  "metadata": {
    "sourceHash": "..."
  }
};

// Access tokens
const spacing = ir.tokens.spacing.value;
const sourceHash = ir.metadata.sourceHash;
```

## 4.2.6 Format Comparison

| Feature | Simple | W3C | Tokens Studio | IR |
|---------|--------|-----|---------------|-----|
| Type info | ❌ | ✅ | ✅ | ✅ |
| Nested structure | ❌ | ✅ | ✅ | ✅ |
| Expression preservation | ❌ | ❌ | ✅ | ✅ |
| Metadata | ❌ | ❌ | ❌ | ✅ |
| Standards compliant | ❌ | ✅ | ❌ | ❌ |
| Ease of use | ✅✅✅ | ✅✅ | ✅✅ | ✅ |

## 4.2.7 Choosing a Format

### For CSS

Use **Simple** or **W3C** format:

```css
:root {
  --spacing-md: 16px;
  --color-primary: #3B82F6;
}
```

### For JavaScript

Use **Simple** format for direct access:

```javascript
const tokens = {
  "spacing.md": 16
  "colors.primary": "#3B82F6"
};
```

### For Design Tools

Use **W3C** or **Tokens Studio** format:

```json
{
  "spacing": {
    "md": {
      "$type": "number"
      "$value": 16
    }
  }
}
```

### For Custom Processing

Use **IR** format:

```javascript
const ir = compileToIR(source);
// Custom processing
const processed = processIR(ir);
```

## 4.2.8 Converting Between Formats

You can convert between formats using the API:

```javascript
// Get IR first
const ir = await compileToIR(source);

// Then emit in different formats
const simple = new DesignTokensEmitter().emit(ir);
const w3c = new DesignTokensEmitter({ strict: true }).emit(ir);
```

## 4.2.9 Best Practices

1. **Use Simple for quick access** - When you just need values
2. **Use W3C for standards** - When integrating with design tools
3. **Use Tokens Studio for expressions** - When you need expression preservation
4. **Use IR for advanced** - When you need full control

## 4.2.10 Next Steps

- See [API Reference](./4.1-api-reference.md) for integration details
- Check [Getting Started](./1-getting-started.md) for DSL basics

