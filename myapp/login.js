const express = require('express');
const app = express();
var session = require('express-session');
//var bodyParser = require('body-parser');
const port = 3000;
//const port = process.env.PORT || 3000;

const ids = [
    {name : "Dipesh", password : 12345},
    {name : "Jaikishan", password : 67890}
]

app.get('/login', (req, res) => {
    res.send("Hello! Please enter the details below");
});

app.get('/signup', (req, res) => {
    res.send("Hello! Please enter the details below to get started.");
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/login`);
    console.log(`Listening at http://localhost:${port}/signup`);
});