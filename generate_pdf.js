const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    try {
        console.log('Launching browser...');
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox'] // Useful for some linux environments
        });
        const page = await browser.newPage();

        // Get absolute path to index.html
        const filePath = path.join(__dirname, 'index.html');
        const fileUrl = `file://${filePath}`;

        console.log(`Opening ${fileUrl}...`);
        await page.goto(fileUrl, {
            waitUntil: 'networkidle0' // Wait until network is idle (no more requests for 500ms)
        });

        console.log('Generating PDF...');
        await page.pdf({
            path: 'cv.pdf',
            format: 'Letter', // or 'A4'
            printBackground: true, // Important to capture background colors
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            }
        });

        console.log('PDF generated successfully: cv.pdf');
        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
