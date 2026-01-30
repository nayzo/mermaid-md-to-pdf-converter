#!/usr/bin/env node

/**
 * Mermaid Markdown to PDF Converter
 * Converts Markdown files with Mermaid diagrams to beautifully styled PDFs
 */

import { readFileSync } from 'fs';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

/**
 * Default configuration options
 */
const DEFAULT_OPTIONS = {
    format: 'A4',
    margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
    },
    mermaidTheme: 'neutral',
    primaryColor: '#1e3a8a',
    fontFamily: 'Inter',
    fontSize: '11pt'
};

/**
 * Convert Markdown to PDF with Mermaid diagram support
 * @param {string} inputPath - Path to input Markdown file
 * @param {string} outputPath - Path to output PDF file
 * @param {Object} options - Configuration options
 */
export async function convertMarkdownToPdf(inputPath, outputPath, options = {}) {
    const config = { ...DEFAULT_OPTIONS, ...options };

    try {
        console.log('📄 Converting Markdown to PDF with Mermaid diagrams...');
        console.log(`   Input: ${inputPath}`);
        console.log(`   Output: ${outputPath}`);

        // Read markdown file
        const markdownContent = readFileSync(inputPath, 'utf-8');

        // Configure marked to handle Mermaid diagrams
        marked.use({
            renderer: {
                code({ text, lang }) {
                    const language = (lang || '').trim();
                    if (language === 'mermaid') {
                        // Return mermaid div instead of pre/code
                        return `<div class="mermaid">\n${text}\n</div>\n`;
                    }
                    // Default code block rendering
                    const langClass = language ? ` class="language-${language}"` : '';
                    return `<pre><code${langClass}>${text}</code></pre>\n`;
                }
            }
        });

        // Convert markdown to HTML
        const htmlContent = marked.parse(markdownContent);

        // Count mermaid blocks
        const mermaidMatches = htmlContent.match(/<div class="mermaid">/g);
        const mermaidBlocksCount = mermaidMatches ? mermaidMatches.length : 0;
        if (mermaidBlocksCount > 0) {
            console.log(`   Found ${mermaidBlocksCount} Mermaid diagram(s) to render`);
        }

        // Create full HTML document with Mermaid support
        const fullHtml = generateHtml(htmlContent, config);

        console.log('🚀 Launching browser...');

        // Launch puppeteer
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        console.log('📝 Loading content...');

        // Set content
        await page.setContent(fullHtml, {
            waitUntil: 'networkidle0'
        });

        // Wait for Mermaid diagrams to render
        if (mermaidBlocksCount > 0) {
            console.log('🎨 Rendering Mermaid diagrams...');

            // Wait for Mermaid to be loaded and initialized
            await page.waitForFunction(() => {
                return typeof window.mermaid !== 'undefined';
            }, { timeout: 10000 });

            // Count mermaid blocks in the page
            const mermaidCount = await page.evaluate(() => {
                return document.querySelectorAll('.mermaid').length;
            });

            // Wait for all mermaid diagrams to be rendered (they get SVG elements when rendered)
            await page.waitForFunction((expectedCount) => {
                const mermaidElements = document.querySelectorAll('.mermaid');
                let renderedCount = 0;

                mermaidElements.forEach(el => {
                    // Check if diagram has been rendered (contains SVG)
                    if (el.querySelector('svg')) {
                        renderedCount++;
                    }
                });

                return renderedCount >= expectedCount;
            }, { timeout: 30000 }, mermaidCount);

            console.log(`   ✓ ${mermaidCount} diagram(s) rendered successfully!`);
        }

        console.log('💾 Generating PDF...');

        // Generate PDF
        await page.pdf({
            path: outputPath,
            format: config.format,
            margin: config.margin,
            printBackground: true,
            preferCSSPageSize: false
        });

        await browser.close();

        console.log('✅ PDF generated successfully!');
        console.log(`   📄 Output: ${outputPath}`);

        return { success: true, output: outputPath };

    } catch (error) {
        console.error('❌ Error:', error.message);
        throw error;
    }
}

/**
 * Generate complete HTML with styles
 */
function generateHtml(content, config) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Markdown to PDF</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            mermaid.initialize({
                startOnLoad: true,
                theme: '${config.mermaidTheme}',
                securityLevel: 'loose',
                logLevel: 'error'
            });
        });
    </script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=${config.fontFamily}:wght@400;500;600;700&display=swap');

        body {
            font-family: '${config.fontFamily}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            max-width: 210mm;
            margin: 0 auto;
            padding: 20mm;
            font-size: ${config.fontSize};
        }

        h1 {
            color: ${config.primaryColor};
            font-size: 24pt;
            font-weight: 700;
            margin-top: 0;
            margin-bottom: 20pt;
            border-bottom: 3pt solid ${config.primaryColor};
            padding-bottom: 10pt;
            text-align: center;
        }

        h2 {
            color: ${config.primaryColor};
            font-size: 18pt;
            font-weight: 600;
            margin-top: 24pt;
            margin-bottom: 12pt;
            page-break-after: avoid;
        }

        h3 {
            color: #2563eb;
            font-size: 14pt;
            font-weight: 600;
            margin-top: 18pt;
            margin-bottom: 10pt;
        }

        p {
            margin: 10pt 0;
            text-align: justify;
        }

        code {
            background-color: #f3f4f6;
            padding: 2pt 6pt;
            border-radius: 3pt;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 9.5pt;
            color: #dc2626;
        }

        pre {
            background-color: #1f2937;
            color: #f9fafb;
            padding: 12pt;
            border-radius: 6pt;
            overflow-x: auto;
            font-size: 9pt;
            line-height: 1.5;
            page-break-inside: avoid;
        }

        pre code {
            background: transparent;
            color: inherit;
            padding: 0;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 12pt 0;
            page-break-inside: avoid;
        }

        th, td {
            border: 1pt solid #d1d5db;
            padding: 8pt 12pt;
            text-align: left;
        }

        th {
            background-color: ${config.primaryColor};
            color: white;
            font-weight: 600;
        }

        tr:nth-child(even) {
            background-color: #f9fafb;
        }

        blockquote {
            border-left: 4pt solid #3b82f6;
            margin: 12pt 0;
            padding-left: 16pt;
            color: #4b5563;
            font-style: italic;
        }

        ul, ol {
            margin: 10pt 0;
            padding-left: 24pt;
        }

        li {
            margin: 6pt 0;
        }

        hr {
            border: none;
            border-top: 2pt solid #e5e7eb;
            margin: 20pt 0;
        }

        .mermaid {
            margin: 20pt 0;
            page-break-inside: avoid;
            text-align: center;
        }

        a {
            color: #2563eb;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        @media print {
            body {
                padding: 0;
            }

            h1, h2, h3 {
                page-break-after: avoid;
            }

            pre, table, .mermaid {
                page-break-inside: avoid;
            }
        }
    </style>
</head>
<body>
    ${content}
</body>
</html>`;
}

export default convertMarkdownToPdf;
