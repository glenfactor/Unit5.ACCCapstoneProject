// init express app
const express = require('express');
const app = express();

// import path module
const path = require('path');

// import the pets array from data.js
//const fakestoreAPI = require('./data');

const PORT = 8080;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as a static index.html file
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

///////////////////////////////////////////

///////////////////////////////////////////


app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;
