# Mermaid Markdown to PDF Converter

Convert Markdown files with Mermaid diagrams to beautifully styled PDFs.

## Features

- ✅ **Mermaid Diagrams**: Automatically renders flowcharts, sequence diagrams, and more
- ✅ **Modern Styling**: Professional typography with customizable fonts and colors
- ✅ **Multiple Formats**: A4, A3, A5, Letter, Legal, Tabloid
- ✅ **Configurable**: Custom margins, colors, fonts, and themes
- ✅ **CLI & API**: Use as command-line tool or Node.js library
- ✅ **Fast**: Uses Puppeteer for server-side rendering

## Installation

### Global Installation (CLI)

```bash
npm install -g mermaid-md-to-pdf-converter
```

### Local Installation (Library)

```bash
npm install mermaid-md-to-pdf-converter
```

## Usage

### Command Line Interface (CLI)

#### Basic Usage

```bash
# Convert file.md to file.pdf
md2pdf input.md

# Specify output filename
md2pdf input.md output.pdf

# With options
md2pdf input.md output.pdf --format A4 --theme neutral --color "#1e3a8a"
```

#### CLI Options

```
Usage: md2pdf [options] <input> [output]

Arguments:
  input                       Input Markdown file path
  output                      Output PDF file path (optional)

Options:
  -V, --version              Output version number
  -h, --help                 Display help
  -f, --format <format>      PDF format (A4, A3, A5, Letter, Legal, Tabloid) (default: "A4")
  -t, --theme <theme>        Mermaid theme (default, neutral, dark, forest) (default: "neutral")
  -c, --color <color>        Primary color (hex code) (default: "#1e3a8a")
  --font <font>              Font family (default: "Inter")
  --font-size <size>         Base font size (default: "11pt")
  --margin-top <size>        Top margin (default: "20mm")
  --margin-right <size>      Right margin (default: "15mm")
  --margin-bottom <size>     Bottom margin (default: "20mm")
  --margin-left <size>       Left margin (default: "15mm")
```

#### Examples

```bash
# A4 format with default settings
md2pdf document.md

# Letter format with custom color
md2pdf document.md --format Letter --color "#ff6600"

# Dark Mermaid theme with custom margins
md2pdf document.md --theme dark --margin-top 30mm --margin-bottom 30mm

# Custom font and size
md2pdf document.md --font "Roboto" --font-size "12pt"
```

### Node.js API

```javascript
import { convertMarkdownToPdf } from 'mermaid-md-to-pdf-converter';

// Basic usage
await convertMarkdownToPdf('input.md', 'output.pdf');

// With custom options
await convertMarkdownToPdf('input.md', 'output.pdf', {
    format: 'A4',
    mermaidTheme: 'neutral',
    primaryColor: '#1e3a8a',
    fontFamily: 'Inter',
    fontSize: '11pt',
    margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
    }
});
```

## Markdown Features Supported

- **Headers**: H1-H6 with modern styling
- **Text formatting**: Bold, italic, strikethrough
- **Lists**: Ordered and unordered
- **Tables**: Styled with alternating row colors
- **Code blocks**: Syntax highlighting
- **Blockquotes**: Elegant left-border styling
- **Links**: Styled with hover effects
- **Images**: Embedded with proper scaling
- **Mermaid diagrams**: Flowcharts, sequence diagrams, gantt charts, etc.

## Mermaid Diagram Examples

### Flowchart

```markdown
\`\`\`mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
\`\`\`
```

### Sequence Diagram

```markdown
\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Server
    Client->>Server: Request
    Server-->>Client: Response
\`\`\`
```

### Gantt Chart

```markdown
\`\`\`mermaid
gantt
    title Project Timeline
    section Phase 1
    Task 1 :a1, 2024-01-01, 30d
    Task 2 :after a1, 20d
\`\`\`
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `format` | string | `'A4'` | PDF page format |
| `mermaidTheme` | string | `'neutral'` | Mermaid diagram theme |
| `primaryColor` | string | `'#1e3a8a'` | Primary color for headings |
| `fontFamily` | string | `'Inter'` | Font family |
| `fontSize` | string | `'11pt'` | Base font size |
| `margin.top` | string | `'20mm'` | Top margin |
| `margin.right` | string | `'15mm'` | Right margin |
| `margin.bottom` | string | `'20mm'` | Bottom margin |
| `margin.left` | string | `'15mm'` | Left margin |

### Available Formats

- `A4` (210mm x 297mm)
- `A3` (297mm x 420mm)
- `A5` (148mm x 210mm)
- `Letter` (8.5in x 11in)
- `Legal` (8.5in x 14in)
- `Tabloid` (11in x 17in)

### Available Mermaid Themes

- `default` - Mermaid default theme
- `neutral` - Neutral colors (recommended)
- `dark` - Dark background
- `forest` - Green theme

## Requirements

- Node.js 18+
- Chrome/Chromium (automatically installed with Puppeteer)

## How It Works

1. **Parse Markdown**: Uses `marked` to convert Markdown to HTML
2. **Detect Mermaid**: Identifies ```mermaid code blocks
3. **Render Diagrams**: Uses Puppeteer to render Mermaid diagrams server-side
4. **Generate PDF**: Creates styled PDF with embedded diagrams

## Troubleshooting

### Mermaid diagrams not rendering

- Ensure code blocks use ```mermaid (not ```mmd or other variants)
- Check Mermaid syntax is valid
- Increase timeout if diagrams are complex

### PDF generation fails

- Ensure Node.js version is 18+
- Check input file exists and is readable
- Verify output directory has write permissions

### Missing fonts

The converter uses Google Fonts CDN. Ensure you have internet connectivity during PDF generation.

## Development

```bash
# Clone repository
git clone https://github.com/yourusername/mermaid-md-to-pdf-converter.git
cd mermaid-md-to-pdf-converter

# Install dependencies
npm install

# Test locally
node cli.js test.md test.pdf
```

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details

## Author

Created by nzo

## Acknowledgments

- [Marked](https://marked.js.org/) - Markdown parser
- [Puppeteer](https://pptr.dev/) - Headless Chrome Node.js API
- [Mermaid](https://mermaid.js.org/) - Diagram and flowchart tool
- [Inter Font](https://rsms.me/inter/) - Professional typography

## Support

- Report issues: [GitHub Issues](https://github.com/yourusername/mermaid-md-to-pdf-converter/issues)
- Documentation: [GitHub Wiki](https://github.com/yourusername/mermaid-md-to-pdf-converter/wiki)

---

Made with ❤️ for the Markdown and Mermaid community
