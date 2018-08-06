import mdPdf from 'markdown-pdf';
// import toc from 'markdown-toc';
// import Remarkable from 'remarkable';
// import { readFileSync } from 'fs';

export interface ReportGenerationConfig {
    inputFile: string;
    outputFile: string;
    customCssFile: string;
}

// function markdownToHTML(markdown: string): string {
    // return new Remarkable()
        // .render(markdown);
// }

export async function generateReport(config: ReportGenerationConfig): Promise<void> {
    // const markdown = readFileSync(config.inputFile).toString();
    // console.log(markdownToHTML(markdown));

    return new Promise<void>((resolve) => {
        mdPdf({ cssPath: config.customCssFile }).from(config.inputFile).to(config.outputFile, () => {
            console.log('Done');
            resolve();
        });
    });
}