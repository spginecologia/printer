/* * */

const fs = require('fs');

/* * */

module.exports.subject = () => 'Certificado de Participação';

/* * */

module.exports.body = ({ code, name }) => {
  // Import HTML file and replace placeholders
  let body = fs.readFileSync('./templates/webinar-20241205.html', { encoding: 'utf-8' });
  body = body.replace(/INSERT_CODE_HERE/g, code);
  body = body.replace(/INSERT_NAME_HERE/g, name);
  return body;
};
