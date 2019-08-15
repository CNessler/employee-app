const db = require('../db/config');
const Employee = {};

Employee.add = (data) => {
  return db.query(
            'INSERT INTO employees(first_name, last_name, email, phone, picture) VALUES(' +
            '\'' + data.firstName + '\'' +
            ',' +
            '\'' + data.lastName + '\'' +
            ',' +
            '\'' + data.email + '\'' +
            ',' +
            '\'' + data.phone + '\'' +
            ',' +
            '\'' + data.photoUrl + '\'' +
            ');'
            )
}

Employee.seed = (data) => {
  return db.query(
            'INSERT INTO employees(first_name, last_name, email, phone, picture) VALUES(' +
            '\'' + data.name.first + '\'' +
            ',' +
            '\'' + data.name.last + '\'' +
            ',' +
            '\'' + data.email + '\'' +
            ',' +
            '\'' + data.phone + '\'' +
            ',' +
            '\'' + data.picture.thumbnail + '\'' +
            ');'
  )
}

Employee.findAll = () => {
  return db.query(`SELECT * FROM employees;`);
};

Employee.findById = (id) => {
  return db.oneOrNone(
      `
      SELECT * FROM employees
      WHERE id = $1
    `,
      [id]);
};

Employee.delete = (id) => {
  return db.query('DELETE FROM employees WHERE id = ' + id )
}

Employee.edit = (data, id) => {
  return db.query('UPDATE employees SET first_name= \'' + data.firstName + '\', last_name=\'' + data.lastName + '\', email=\'' + data.email + '\', phone=\'' + data.phone + '\', picture=\'' + data.photoUrl + '\' WHERE id = ' + id
            )
}

module.exports = Employee;