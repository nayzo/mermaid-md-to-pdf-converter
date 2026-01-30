# Quick Start Guide

Get started with Mermaid Markdown to PDF Converter in 5 minutes!

## Installation

```bash
# Option 1: Global installation (recommended for CLI usage)
npm install -g mermaid-md-to-pdf-converter

# Option 2: Local installation (for use in projects)
npm install mermaid-md-to-pdf-converter
```

## Basic Usage

### 1. Create a Markdown file

Create `document.md`:

```markdown
# My Document

## Introduction

This is a sample document with a Mermaid diagram.

## Process Flow

\`\`\`mermaid
graph LR
    A[Start] --> B[Process]
    B --> C[End]
\`\`\`

## Conclusion

That's all!
```

### 2. Convert to PDF

```bash
# Simple conversion
md2pdf document.md

# Will create: document.pdf
```

### 3. View the result

Open `document.pdf` and see your Mermaid diagram beautifully rendered!

## Common Use Cases

### 1. Technical Documentation

```bash
md2pdf API_DOCS.md --format A4 --theme neutral
```

### 2. Project Reports

```bash
md2pdf PROJECT_REPORT.md --format Letter --color "#ff6600"
```

### 3. Sequence Diagrams

```bash
md2pdf ARCHITECTURE.md --theme dark --margin-top 30mm
```

## Tips

1. **Keep diagrams simple**: Complex diagrams may need larger page formats
2. **Use neutral theme**: Best for printing
3. **Check syntax**: Use [Mermaid Live Editor](https://mermaid.live) to validate diagrams
4. **Custom colors**: Match your brand colors with `--color "#hexcode"`

## Troubleshooting

### Diagram not rendering?

- Check Mermaid syntax is valid
- Ensure using ```mermaid (not ```mmd)
- Try simpler diagram first

### PDF looks wrong?

- Try different `--format` (A4, Letter, etc.)
- Adjust margins with `--margin-*` options
- Change theme with `--theme`

## Next Steps

- Read full documentation in [README.md](README.md)
- Explore all CLI options with `md2pdf --help`
- Check out [CONTRIBUTING.md](CONTRIBUTING.md) to contribute

## Examples

See [example.md](example.md) for a complete example with multiple diagram types.

Convert it:
```bash
md2pdf example.md
```

---

Need help? [Open an issue](https://github.com/yourusername/mermaid-md-to-pdf-converter/issues)
