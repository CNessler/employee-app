
const express = require('express');
var request = require('request');
const router = express.Router();
const employeeController = require('../controllers/employee-controller');

// router.get('/', function(req, res, next) {
//   request(
//       'https://randomuser.me/api/?results=100',
//       function(error, response, body) {
//         var results = JSON.parse(body)
//         console.log(results.results[0].name)
//         if (!error && response.statusCode === 200) {
//           res.json(results.results[0].name);
//         }
//         else {
//           res.json(error);
//         }
//       });
// });

router.get('/', employeeController.findAll);

// Export the router
module.exports = router;