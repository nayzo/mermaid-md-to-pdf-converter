# Mermaid Markdown to PDF Converter

Convert Markdown files with Mermaid diagrams to beautifully styled PDFs.

## Installation

```bash
# Global installation
npm install -g mermaid-md-to-pdf-converter

# Or use directly with npx
npx mermaid-md-to-pdf-converter input.md output.pdf
```

## Usage

### CLI

```bash
# Basic usage
md2pdf document.md

# With options
md2pdf document.md output.pdf --format A4 --theme neutral --color "#1e3a8a"
```

### Node.js API

```javascript
import { convertMarkdownToPdf } from 'mermaid-md-to-pdf-converter';

await convertMarkdownToPdf('input.md', 'output.pdf', {
    format: 'A4',
    mermaidTheme: 'neutral',
    primaryColor: '#1e3a8a'
});
```

## Features

- ✅ **Automatic Mermaid rendering** - Flowcharts, sequence diagrams, gantt charts, etc.
- ✅ **Professional styling** - Modern typography with Google Fonts
- ✅ **Multiple formats** - A4, A3, A5, Letter, Legal, Tabloid
- ✅ **Customizable** - Colors, fonts, margins, themes
- ✅ **CLI & API** - Use as command or library

## Options

| Option | Description | Default |
|--------|-------------|---------|
| `--format` | PDF format (A4, Letter, etc.) | `A4` |
| `--theme` | Mermaid theme (neutral, dark, forest) | `neutral` |
| `--color` | Primary color (hex) | `#1e3a8a` |
| `--font` | Font family | `Inter` |
| `--font-size` | Base font size | `11pt` |
| `--margin-*` | Margins (top, right, bottom, left) | `20mm`, `15mm` |

## Example

**document.md**:

```markdown
# My Document

## Process Flow

\`\`\`mermaid
graph LR
    A[Start] --> B[Process]
    B --> C[End]
\`\`\`
```

**Convert**:

```bash
md2pdf document.md
# Creates: document.pdf with rendered diagram
```

## Requirements

- Node.js 18+

## License

MIT
