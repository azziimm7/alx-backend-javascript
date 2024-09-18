const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const rows = data.trim().split('\n');
      const fields = {};

      for (let i = 1; i < rows.length; i += 1) {
        const headers = rows[i].split(',');
        const firstname = headers[0];
        const field = headers[3];
        if (field in fields) {
          fields[field].push(firstname);
        } else {
          fields[field] = [firstname];
        }
      }
      resolve(fields);
    }
  });
});
module.exports = readDatabase;
