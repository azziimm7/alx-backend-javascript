const { createServer } = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const rows = data.trim().split('\n');
      const headers = rows[0].split(',');
      const students = [];
      const fields = {};

      for (let i = 1; i < rows.length; i += 1) {
        const student = {};
        const values = rows[i].split(',');
        for (let j = 0; j < headers.length; j += 1) {
          const key = headers[j];
          const value = values[j];
          student[key] = value;
        }
        students.push(student);
      }

      for (let i = 0; i < students.length; i += 1) {
        const { field, firstname } = students[i];
        if (field in fields) {
          fields[field].count += 1;
          fields[field].students.push(firstname);
        } else {
          fields[field] = { count: 1, students: [firstname] };
        }
      }
      let output = `Number of students: ${students.length}\n`;
      for (const field of Object.keys(fields)) {
        const { count } = fields[field];
        const students = fields[field].students.join(', ');
        output += `Number of students in ${field}: ${count}. List: ${students}\n`;
      }
      resolve(output);
    }
  });
});

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((output) => {
        res.end(output.slice(0, -1));
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});
app.listen(1245, '127.0.0.1');

module.exports = app;
