const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((fields) => {
        let body = 'This is the list of our students\n';
        const keys = Object.keys(fields);
        keys.sort();
        for (let i = 0; i < keys.length; i += 1) {
          const field = keys[i];
          const count = fields[field].length;
          const names = fields[field].join(', ');
          body += `Number of students in ${field}: ${count}. List: ${names}\n`;
        }
        response.status(200).send(body.slice(0, -1));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    readDatabase(process.argv[2])
      .then((fields) => {
        if (field in fields) {
          const students = fields[field].join(', ');
          response.status(200).send(`List: ${students}`);
        } else {
          response.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
module.exports = StudentsController;
