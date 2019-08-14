// models/employees.js

// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the employees-app database.
// Specifically, the employees table.
const Employee = {};

// Define methods for the Employee object

// Returns all employees from the table
Employee.findAll = () => {
    return db.query(
        `SELECT * FROM employees`
    );
};

// Return one employee with the specific id
Employee.findById = (id) => {
    return db.oneOrNone(
        `
      SELECT * FROM employees
      WHERE id = $1
    `,
        [id]
    );
};

// Export the Employee object
module.exports = Employee;