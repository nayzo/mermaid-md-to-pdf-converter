#!/usr/bin/env node

import { Command } from 'commander';
import { convertMarkdownToPdf } from './index.js';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const program = new Command();

// Read package.json for version
const packageJson = JSON.parse(
    readFileSync(new URL('./package.json', import.meta.url), 'utf-8')
);

program
    .name('md2pdf')
    .description('Convert Markdown files with Mermaid diagrams to beautifully styled PDFs')
    .version(packageJson.version)
    .argument('<input>', 'Input Markdown file path')
    .argument('[output]', 'Output PDF file path (optional, defaults to input filename with .pdf extension)')
    .option('-f, --format <format>', 'PDF format (A4, A3, A5, Letter, Legal, Tabloid)', 'A4')
    .option('-t, --theme <theme>', 'Mermaid theme (default, neutral, dark, forest)', 'neutral')
    .option('-c, --color <color>', 'Primary color (hex code)', '#1e3a8a')
    .option('--font <font>', 'Font family', 'Inter')
    .option('--font-size <size>', 'Base font size', '11pt')
    .option('--margin-top <size>', 'Top margin', '20mm')
    .option('--margin-right <size>', 'Right margin', '15mm')
    .option('--margin-bottom <size>', 'Bottom margin', '20mm')
    .option('--margin-left <size>', 'Left margin', '15mm')
    .action(async (input, output, options) => {
        try {
            // Resolve input path
            const inputPath = resolve(input);

            // Determine output path
            const outputPath = output
                ? resolve(output)
                : inputPath.replace(/\.md$/i, '.pdf');

            // Build options
            const config = {
                format: options.format,
                mermaidTheme: options.theme,
                primaryColor: options.color,
                fontFamily: options.font,
                fontSize: options.fontSize,
                margin: {
                    top: options.marginTop,
                    right: options.marginRight,
                    bottom: options.marginBottom,
                    left: options.marginLeft
                }
            };

            // Convert
            await convertMarkdownToPdf(inputPath, outputPath, config);

        } catch (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }
    });

program.parse();
