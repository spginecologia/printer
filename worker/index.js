/* * */

const fs = require('fs');
const puppeteer = require('puppeteer');
const Papa = require('papaparse');

/* * */

const OUTPUT_DIRECTORY = '../output';
const RENDERER_URL = 'http://localhost:3006';

/* * */

(async function init() {
  //

  const allJobsCsv = Papa.parse(fs.readFileSync('../jobs.csv', { encoding: 'utf-8' }), { header: true });

  // Setup browser instance on init
  const BROWSER_INSTANCE = await puppeteer.launch({
    headless: 'new',
    // executablePath: 'google-chrome-stable',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Initiate a new page on the browser
  const browserPage = await BROWSER_INSTANCE.newPage();

  for (const jobData of allJobsCsv.data) {
    //

    // Create an empty directory in the given path if it does not yet exists
    if (!fs.existsSync(OUTPUT_DIRECTORY)) fs.mkdirSync(OUTPUT_DIRECTORY);

    try {
      //

      // Build the complete URL to be rendered
      let completeUrl = `${RENDERER_URL}${jobData.render_path}`;

      // Navigate to the URL
      await browserPage.goto(completeUrl, { waitUntil: 'networkidle0', timeout: 2000 });

      // Set media-type to reflect CSS used for screens instead of print
      await browserPage.emulateMediaType('screen');

      // Print the PDF
      const pdfData = await browserPage.pdf({
        width: jobData.render_width,
        height: jobData.render_height,
        printBackground: true,
      });

      // Save the PDF to the shared volume on disk
      fs.writeFileSync(`${OUTPUT_DIRECTORY}/${jobData.code}.pdf`, pdfData);

      // Log progress
      console.log(`→ code: ${jobData.code}`);

      //
    } catch (err) {
      console.log('🔴 → Error printing "%s"', `${RENDERER_URL}${jobData.render_path}`, err);
    }

    //
  }

  // Close the page
  await browserPage.close();

  await BROWSER_INSTANCE.close();

  // Log elapsed time for the current operation
  console.log(`→ Task completed: Worked on ${allJobsCsv.data.length} jobs.`);
  console.log(`------------------------------------------------------------------------`);
  console.log();

  //
})();
