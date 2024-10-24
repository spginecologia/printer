/* * */

require('dotenv').config();
const fs = require('fs');
const Papa = require('papaparse');
const SMTPSERVICE = require('./services/SMTPSERVICE');
const EmailTemplateWebinar20240924 = require('./templates/webinar-20240924');

/* * */

(async function init() {
  //

  const allJobsCsv = Papa.parse(fs.readFileSync('../jobs.csv', { encoding: 'utf-8' }), { header: true });

  // Iterate on each ready job to notify its owner
  for (const jobData of allJobsCsv.data) {
    try {
      //

      if (!jobData.email) continue;

      // Send an email to the owner
      await SMTPSERVICE.transport.sendMail({
        from: [{ name: 'Academia SPG', address: 'academia@spginecologia.pt' }],
        to: [{ name: jobData.name || '', address: jobData.email }],
        subject: EmailTemplateWebinar20240924.subject(),
        html: EmailTemplateWebinar20240924.body({
          code: jobData.code,
          name: jobData.name,
        }),
        attachments: [
          {
            filename: `${jobData.code}.pdf`,
            path: `../output/${jobData.code}.pdf`,
          },
        ],
      });

      // Log progress
      console.log(`→ Sent! code: ${jobData.code} | email: ${jobData.email}`);

      //
    } catch (err) {
      console.log('🔴 → Error notifying "%s"', jobData.code, err);
    }
  }

  // Log elapsed time for the current operation
  console.log(`→ Task completed: Worked on ${allJobsCsv.data.length} jobs.`);
  console.log(`------------------------------------------------------------------------`);
  console.log();

  //
})();
