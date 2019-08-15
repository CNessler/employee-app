#!/usr/bin/env node

var https = require('https');

function performRequest() {
  var req = https.request('https://randomuser.me/api/?results=10', function(res) {
    res.setEncoding('utf-8');

    var responseString = '';
    var inserts = '';
    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      var responseObject = JSON.parse(responseString);

      for (i = 0; i < responseObject['results'].length; i++) {
        inserts +=
            'INSERT INTO employees(first_name, last_name, email, phone, picture) VALUES(' +
            '\'' + responseObject['results'][i].name.first + '\'' +
            ',' +
            '\'' + responseObject['results'][i].name.last + '\'' +
            ',' +
            '\'' + responseObject['results'][i].email + '\'' +
            ',' +
            '\'' + responseObject['results'][i].phone + '\'' +
            ',' +
            '\'' + responseObject['results'][i].picture.thumbnail + '\'' +
            ');' +
            '\n';
      }
    });
  });
  req.end();
}


performRequest()