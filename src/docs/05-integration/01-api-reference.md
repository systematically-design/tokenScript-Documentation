# 4.1 API Reference

For developers integrating TokenScript DSL into applications.

## 4.1.1 Overview

TokenScript DSL provides a REST API for compiling DSL source code into design tokens in various formats.

## 4.1.2 Base URL

```
http://localhost:3001
```

Default port: `3001` (configurable via `PORT` environment variable)

## 4.1.3 Endpoints

### Health Check

Check if the API is running.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "ok"
  "timestamp": "2024-01-01T00:00:00.000Z"
  "service": "TokenScript DSL API"
}
```

### Get Available Formats

Get information about available output formats.

**Endpoint:** `GET /api/formats`

**Response:**
```json
{
  "success": true
  "description": "Use 'strict' and 'expressive' boolean parameters..."
  "endpoints": {
    "/api/compile": "Legacy endpoint..."
    "/api/tokens": "Enhanced endpoint..."
    "/api/ir": "Raw IR output"
  }
  "combinations": [...]
}
```

### Compile DSL (Legacy)

Compile DSL source to tokens (legacy endpoint).

**Endpoint:** `POST /api/compile`

**Request Body:**
```json
{
  "source": "spacing\n  /numberScale : linear\n    base = 8\n    increment = 4\n    steps = [\"xs\", \"sm\", \"md\"]"
  "format": "w3c"
}
```

**Parameters:**
- `source` (string, required) - DSL source code
- `format` (string, optional) - Output format: `"simple"`, `"w3c"`, `"tokens-studio"`, `"ir"` (default: `"simple"`)

**Response:**
```json
{
  "tokens": {
    "spacing.xs": 8
    "spacing.sm": 12
    "spacing.md": 16
  }
  "format": "simple"
  "metadata": {
    "compiledAt": "2024-01-01T00:00:00.000Z"
    "sourceHash": "..."
    "irHash": "..."
  }
}
```

### Compile to Tokens (Enhanced)

Compile DSL source with format control.

**Endpoint:** `POST /api/tokens`

**Request Body:**
```json
{
  "source": "spacing = 16"
  "strict": true
  "expressive": false
}
```

**Parameters:**
- `source` (string, required) - DSL source code
- `strict` (boolean, optional) - Use W3C format with `$type` and `$value` (default: `false`)
- `expressive` (boolean, optional) - Preserve expressions and references (default: `false`)

**Response (strict: false, expressive: false):**
```json
{
  "tokens": {
    "spacing": 16
  }
}
```

**Response (strict: true, expressive: false):**
```json
{
  "tokens": {
    "spacing": {
      "$type": "number"
      "$value": 16
    }
  }
}
```

### Compile to IR

Get raw Intermediate Representation (IR).

**Endpoint:** `POST /api/ir`

**Request Body:**
```json
{
  "source": "spacing = 16"
}
```

**Parameters:**
- `source` (string, required) - DSL source code

**Response:**
```json
{
  "ir": {
    "tokens": {
      "spacing": {
        "type": "number"
        "value": 16
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
}
```

## 4.1.4 Output Formats

### Simple Format

Flat key-value mapping:

```json
{
  "spacing.xs": 8
  "spacing.sm": 12
  "colors.primary": "#3B82F6"
}
```

### W3C Format

W3C Design Tokens format:

```json
{
  "spacing": {
    "xs": {
      "$type": "number"
      "$value": 8
    }
    "sm": {
      "$type": "number"
      "$value": 12
    }
  }
}
```

### Tokens Studio Format

Tokens Studio native format (with optional expression preservation):

```json
{
  "spacing": {
    "xs": {
      "value": 8
      "type": "number"
    }
  }
}
```

### IR Format

Raw Intermediate Representation:

```json
{
  "tokens": {...}
  "generators": {...}
  "iterators": {...}
  "derivedGroups": {...}
  "metadata": {...}
}
```

## 4.1.5 Error Responses

All endpoints return errors in this format:

```json
{
  "error": "Error message"
  "details": "Additional error details"
}
```

**HTTP Status Codes:**
- `200` - Success
- `400` - Bad Request (invalid input)
- `500` - Internal Server Error

## 4.1.6 Usage Examples

### JavaScript/Node.js

```javascript
const fetch = require('node-fetch');

async function compileTokens(source) {
  const response = await fetch('http://localhost:3001/api/tokens', {
    method: 'POST'
    headers: { 'Content-Type': 'application/json' }
    body: JSON.stringify({
      source: source
      strict: true
      expressive: false
    })
  });
  
  return await response.json();
}

// Usage
const tokens = await compileTokens(`
  spacing
    /numberScale : linear
      base = 8
      increment = 4
      steps = ["xs", "sm", "md"]
`);

console.log(tokens);
```

### cURL

```bash
curl -X POST http://localhost:3001/api/tokens \
  -H "Content-Type: application/json" \
  -d '{
    "source": "spacing = 16"
    "strict": true
  }'
```

### Python

```python
import requests

def compile_tokens(source, strict=False):
    response = requests.post(
        'http://localhost:3001/api/tokens'
        json={
            'source': source
            'strict': strict
        }
    )
    return response.json()

// Usage
tokens = compile_tokens("""
  spacing
    /numberScale : linear
      base = 8
      increment = 4
      steps = ["xs", "sm", "md"]
""", strict=True)

print(tokens)
```

## 4.1.7 Programmatic Usage

### Node.js Module

```javascript
const { compileToIR } = require('./lib/compiler-v2');
const { DesignTokensEmitter } = require('./lib/design-tokens-emitter');

// Compile to IR
const { ir } = compileToIR(`
  spacing
    /numberScale : linear
      base = 8
      increment = 4
      steps = ["xs", "sm", "md"]
`);

// Emit tokens
const emitter = new DesignTokensEmitter({ strict: true });
const tokens = emitter.emit(ir);

console.log(tokens);
```

## 4.1.8 Best Practices

1. **Cache results** - Tokens don't change unless source changes
2. **Handle errors** - Always check for error responses
3. **Use appropriate format** - Choose format based on your needs
4. **Validate source** - Validate DSL syntax before sending
5. **Use IR for advanced** - Use IR format for custom processing

## 4.1.9 Rate Limiting

Currently no rate limiting is implemented. For production use, consider:
- Implementing rate limiting
- Caching compiled results
- Using CDN for static token files

## 4.1.10 Next Steps

- See [Export Formats](./4.2-export-formats.md) for format details
- Check [Getting Started](./1-getting-started.md) for DSL basics

