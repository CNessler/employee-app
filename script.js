#!/usr/bin/env node

const employeeController = require('./controllers/employee-controller');

var https = require('https');

function performRequest() {
  var req = https.request('https://randomuser.me/api/?results=10', function(res) {
    res.setEncoding('utf-8');

    var responseString = '';
    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      var responseObject = JSON.parse(responseString);

      for (i = 0; i < responseObject['results'].length; i++) {
        employeeController.seed(responseObject['results'][i]);
      }
    });
  });
  req.end();
}


performRequest()