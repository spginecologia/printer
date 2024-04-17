/* * */

const fs = require('fs');

/* * */

const now = new Date();
const year = now.getFullYear();
const month = padNumber(now.getMonth() + 1);
const day = padNumber(now.getDate());
const hours = padNumber(now.getHours());
const minutes = padNumber(now.getMinutes());

const newVersion = `${year}.${month}.${day}-${hours}${minutes}`;

fs.writeFileSync('./mailer/package.json', JSON.stringify({ ...require('./mailer/package.json'), version: newVersion }, null, 2));
fs.writeFileSync('./renderer/package.json', JSON.stringify({ ...require('./renderer/package.json'), version: newVersion }, null, 2));
fs.writeFileSync('./worker/package.json', JSON.stringify({ ...require('./worker/package.json'), version: newVersion }, null, 2));

/* * */

function padNumber(number) {
  return number.toString().padStart(2, '0');
}
