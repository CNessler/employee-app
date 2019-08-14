// controllers/employee-controller.js

// Import the Employee model.
const Employee = require('../models/employee');

// Instantiate the controller object
const employeeController = {};

// Controller method for handling a request for all employees
employeeController.findAll = (req, res) => {
    // Uses the findAll method from Employee
    Employee.findAll()
        .then(employees => {
            // Sends the employees as a JSON object
            res.json({
                message: 'Success',
                data: employees
            });
        })
        .catch(err => {
            // If something goes wrong it logs the error in the console and sends it as a JSON object
            console.log(err);
            res.status(500).json({ err });
        });
};

// Controller method for handling a request for a single employee
employeeController.findById = (req, res) => {
    // Employees method for finding by id, passes the id as an argument
    Employee.findById(req.params.id)
        .then(employee => {
            // Sends the employee as a JSON object
            res.json({
                message: "Success",
                data: employee
            });
        })
        .catch(err => {
            // If something goes wrong it logs the error in the console and sends it as a JSON object
            console.log(err);
            res.status(500).json({ err });
        });
};

// Export the controller
module.exports = employeeController;
