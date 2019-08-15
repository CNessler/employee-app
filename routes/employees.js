
const express = require('express');
var request = require('request');
const router = express.Router();
const employeeController = require('../controllers/employee-controller');

router.get('/seed', function(req, res, next) {
  request(
      'https://randomuser.me/api/?results=100',
      function(error, response, body) {
        var results = JSON.parse(body)
        if (!error && response.statusCode === 200) {
            for (i = 0; i < results.results.length; i++) {
                employeeController.seed(results.results[i]);
            }
        }
        else {
          res.json(error);
        }
      });
});

router.get('/', employeeController.findAll);

router.post('/add', function (req, res) {
    employeeController.add(req.body);
})

router.post('/delete/:id', employeeController.delete)

router.post('/edit/:id', employeeController.edit)

module.exports = router;