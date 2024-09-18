const fs = require('fs');

module.exports = function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const rows = fs.readFileSync(path, 'utf8').trim().split('\n');
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
  console.log(`Number of students: ${students.length}`);
  for (const field of Object.keys(fields)) {
    const { count } = fields[field];
    const students = fields[field].students.join(', ');
    console.log(`Number of students in ${field}: ${count}. List: ${students}`);
  }
};
