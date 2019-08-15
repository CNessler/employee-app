const Employee = require('../models/employee');
const employeeController = {};

employeeController.add = (req, res) => {
  Employee.add(req)
  .catch(err => {
    res.status(500).json({err});
  });
}

employeeController.seed = (req, res) => {
  Employee.seed(req)
  .catch(err => {
    res.status(500).json({err});
  });
}

employeeController.delete = (req, res) => {
  Employee.delete(req.params.id)
  .catch(err => {
    res.status(500).json({err});
  });
}

employeeController.findAll = (req, res) => {
  Employee.findAll()
      .then(employees => {
        res.json({message: 'Success', data: employees});
      })
      .catch(err => {
        res.status(500).json({err});
      });
};

employeeController.findById = (req, res) => {
  Employee.findById(req.params.id)
      .then(employee => {
        res.json({message: 'Success', data: employee});
      })
      .catch(err => {
        res.status(500).json({err});
      });
};

employeeController.edit = (req, res) => {
  Employee.edit(req.body, req.params.id)
  .catch(err => {
    res.status(500).json({err});
  });
}

module.exports = employeeController;
