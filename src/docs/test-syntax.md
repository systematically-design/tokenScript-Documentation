---
title: Syntax Test
---

# Syntax Highlighting Test

## JavaScript (should work)
```javascript
function hello() {
  console.log("Hello world");
  return true;
}
```

## TokenScript DSL (testing custom highlighting)
```tokenscript
// Typography scale using golden ratio
/numberScale : modular
  base = 16
  ratio = 1.618
  steps = 5
  round = 2

primaryColor = "#007acc"
spacing = $spacingScale.base
```

## Plain text (no highlighting)
```
This is just plain text
No syntax highlighting here
```
