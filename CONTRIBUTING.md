# Contributing to Mermaid Markdown to PDF Converter

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/yourusername/mermaid-md-to-pdf-converter/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (Node.js version, OS, etc.)
   - Sample Markdown file if applicable

### Suggesting Features

1. Check if the feature has been suggested already
2. Create a new issue with:
   - Clear description of the feature
   - Use cases and benefits
   - Potential implementation approach

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/mermaid-md-to-pdf-converter.git
   cd mermaid-md-to-pdf-converter
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the code style (see below)
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm test
   node cli.js example.md
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding or updating tests
   - `chore:` - Maintenance tasks

6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

7. **Open a Pull Request**
   - Provide clear description
   - Reference related issues
   - Include screenshots if applicable

## Development Setup

1. **Prerequisites**
   - Node.js 18+
   - npm or yarn

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Test locally**
   ```bash
   node cli.js example.md
   ```

## Code Style

- Use ES6+ modern JavaScript
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Use async/await instead of callbacks

### Example

```javascript
// Good
async function convertMarkdownToPdf(inputPath, outputPath, options) {
    const config = { ...DEFAULT_OPTIONS, ...options };
    // ... implementation
}

// Avoid
function convert(i, o, opts) {
    // ... unclear implementation
}
```

## Project Structure

```
mermaid-md-to-pdf-converter/
├── index.js              # Main conversion logic
├── cli.js                # CLI interface
├── package.json          # Dependencies and metadata
├── README.md             # User documentation
├── CONTRIBUTING.md       # This file
├── LICENSE               # MIT License
└── example.md            # Example Markdown file
```

## Adding New Features

### 1. New PDF Format

Add to `index.js`:

```javascript
const SUPPORTED_FORMATS = {
    // ... existing formats
    'custom': { width: '210mm', height: '297mm' }
};
```

### 2. New Mermaid Theme

Update theme validation in `cli.js` and documentation.

### 3. New Styling Options

Add to `DEFAULT_OPTIONS` in `index.js` and expose via CLI in `cli.js`.

## Testing

Currently, testing is done manually with example files. Future improvements:

- [ ] Add automated tests with Jest
- [ ] Add snapshot testing for PDF output
- [ ] Add CI/CD pipeline
- [ ] Add code coverage reporting

## Documentation

When adding features:

1. Update README.md with usage examples
2. Add JSDoc comments to functions
3. Update CLI help text
4. Add examples to example.md if applicable

## Release Process

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create git tag
4. Publish to npm (maintainers only)

## Questions?

- Open an issue for questions
- Check existing issues and discussions
- Reach out to maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🎉
