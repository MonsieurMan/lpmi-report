import mdPdf from 'markdown-pdf';

export interface ReportGenerationConfig {
    inputFile: string;
    outputFile: string;
}

export function generateReport(config: ReportGenerationConfig) {
    mdPdf().from(config.inputFile).to(config.outputFile, () => {
        console.log('Done');
    })
}