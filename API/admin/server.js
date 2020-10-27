const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();
const credentialsInput = require('./handlers/postSignup');
const retrieval = require('./handlers/postLogin');

app.set('view-engine', 'ejs');//to use the ejs files
app.use(express.urlencoded({ extended: false }));//to tell the program that we will get info from forms and use in our http request
app.use(express.json());//for using the middleware

app.get('/admin', (req, res) => {
    res.render('index.ejs');
});

app.get('/admin/login', (req, res) => {
    res.render('login.ejs')
});

app.post('/admin/login', retrieval);

app.get('/admin/signup', (req, res) => {
    res.render('signup.ejs');
});

app.post('/admin/signup', credentialsInput);

app.listen(port, () => {});
