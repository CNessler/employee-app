// server.js

const express = require('express');
var cors = require("cors");
const app = express();

// Set the port
const PORT = process.env.PORT || 9000;

// Import Path
const path = require('path');

// Static files
app.use(express.static('client/build'));
app.use(cors());
app.use(require("body-parser").json());
// API Routes
app.use('/api/employees', require('./routes/employees'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});