// server.js

const express = require('express');
var cors = require("cors");
const app = express();

// Set the port
const PORT = process.env.PORT || 9000;

// Import Path
const path = require('path');


//TODO REMOVE
// var testAPIRouter = require("./routes/testAPI");

// Static files
app.use(express.static('build'));
app.use(cors());
// API Routes
app.use('/api/employees', require('./routes/employees'));


//TODO REMOVE
// app.use("/testAPI", testAPIRouter);


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});