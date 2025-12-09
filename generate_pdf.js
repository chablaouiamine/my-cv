const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Function to generate PDF from HTML file
async function generatePDF(browser, htmlFile, outputPdf) {
    const page = await browser.newPage();

    // Get absolute path to HTML file
    const filePath = path.join(__dirname, htmlFile);
    const fileUrl = `file://${filePath}`;

    console.log(`Opening ${fileUrl}...`);
    await page.goto(fileUrl, {
        waitUntil: 'networkidle0' // Wait until network is idle (no more requests for 500ms)
    });

    console.log(`Generating PDF: ${outputPdf}...`);
    await page.pdf({
        path: outputPdf,
        format: 'Letter', // or 'A4'
        printBackground: true, // Important to capture background colors
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        }
    });

    console.log(`PDF generated successfully: ${outputPdf}`);
    await page.close();
}

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox'] // Useful for some linux environments
        });

        // Generate French version (index.html -> cv-fr.pdf)
        await generatePDF(browser, 'index.html', 'cv.pdf');

        // Generate English version (index2.html -> cv-en.pdf)
        await generatePDF(browser, 'index2.html', 'cv-en.pdf');

        await browser.close();
        console.log('\n✅ Both CV versions generated successfully!');
        console.log('   - French version: cv.pdf');
        console.log('   - English version: cv-en.pdf');
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
