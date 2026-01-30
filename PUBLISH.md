# Publishing Guide

This guide explains how to publish this package to GitHub and npm.

## Prerequisites

- GitHub account
- npm account (create at https://www.npmjs.com/signup)
- Git configured locally
- npm configured locally (`npm login`)

## 1. Publish to GitHub

### Create Repository on GitHub

1. Go to https://github.com/new
2. Name: `mermaid-md-to-pdf-converter`
3. Description: "Convert Markdown files with Mermaid diagrams to beautifully styled PDFs"
4. Public repository
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### Push Local Code to GitHub

```bash
# Add GitHub remote (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/mermaid-md-to-pdf-converter.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Update package.json

Update the repository URL in `package.json`:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/YOURUSERNAME/mermaid-md-to-pdf-converter.git"
  },
  "bugs": {
    "url": "https://github.com/YOURUSERNAME/mermaid-md-to-pdf-converter/issues"
  },
  "homepage": "https://github.com/YOURUSERNAME/mermaid-md-to-pdf-converter#readme"
}
```

Replace `YOURUSERNAME` with your actual GitHub username.

## 2. Publish to npm

### First Time Setup

```bash
# Login to npm
npm login

# Check your npm user
npm whoami
```

### Publish Package

```bash
# Make sure everything is committed
git status

# Test the package locally first
npm pack

# Publish to npm (version 1.0.0)
npm publish
```

### Update README.md

After publishing, update installation instructions:

```markdown
## Installation

\`\`\`bash
npm install -g mermaid-md-to-pdf-converter
\`\`\`
```

## 3. Create GitHub Release

1. Go to your repository on GitHub
2. Click "Releases" → "Create a new release"
3. Tag version: `v1.0.0`
4. Release title: `v1.0.0 - Initial Release`
5. Description: Copy from CHANGELOG.md
6. Click "Publish release"

## 4. Add Topics to GitHub

Add these topics to your repository:

- `markdown`
- `pdf`
- `mermaid`
- `converter`
- `cli`
- `diagram`
- `puppeteer`
- `nodejs`

## 5. Future Updates

### Versioning

Follow [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.x.x): Breaking changes
- **MINOR** (x.1.x): New features (backward compatible)
- **PATCH** (x.x.1): Bug fixes

### Release Process

```bash
# 1. Update version in package.json
npm version patch  # or minor, or major

# 2. Update CHANGELOG.md
# Add new section for the version

# 3. Commit changes
git add .
git commit -m "chore: bump version to 1.0.1"

# 4. Create tag
git tag v1.0.1

# 5. Push to GitHub
git push origin main --tags

# 6. Publish to npm
npm publish

# 7. Create GitHub Release
# Go to GitHub → Releases → Create new release
```

## 6. Badges for README

Add these badges to the top of README.md:

```markdown
[![npm version](https://badge.fury.io/js/mermaid-md-to-pdf-converter.svg)](https://www.npmjs.com/package/mermaid-md-to-pdf-converter)
[![CI](https://github.com/YOURUSERNAME/mermaid-md-to-pdf-converter/workflows/CI/badge.svg)](https://github.com/YOURUSERNAME/mermaid-md-to-pdf-converter/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/mermaid-md-to-pdf-converter)](https://nodejs.org)
```

## 7. npm Package Settings

### Add Keywords

Already configured in package.json:
- markdown
- pdf
- mermaid
- converter
- diagram
- puppeteer
- cli

### Package Visibility

The package is public by default. To keep it public, no action needed.

## Checklist Before Publishing

- [ ] All tests pass locally
- [ ] README.md is complete
- [ ] LICENSE file is present
- [ ] package.json metadata is correct
- [ ] .gitignore and .npmignore are configured
- [ ] Example files work
- [ ] No sensitive data in repository
- [ ] Repository URL is correct in package.json

## Troubleshooting

### npm publish fails with "403 Forbidden"

- Check if package name is already taken
- Verify you're logged in: `npm whoami`
- Try scoped package: `@yourusername/mermaid-md-to-pdf-converter`

### Git push fails

- Check remote URL: `git remote -v`
- Verify GitHub credentials
- Try HTTPS or SSH

## Resources

- [npm Publishing Guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Repository Guide](https://docs.github.com/en/repositories/creating-and-managing-repositories)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

---

Happy publishing! 🚀
