const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const credentialsInput = require('./handlers/postSignup');
const retrieval = require('./handlers/postLogin');

app.set('view-engine', 'ejs');//to use the ejs files
app.use(express.urlencoded({ extended: false }));
app.use(express.json());//for using the middleware

app.get('/', (req, res) => {
    res.render('index.ejs');
}); //for homepage

app.get('/login', (req, res) => {
    res.render('login.ejs');
});//for login page

app.post('/login', retrieval);

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

app.post('/signup', credentialsInput);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    console.log(`Listening at http://localhost:${port}/login`);
    console.log(`Listening at http://localhost:${port}/signup`);
});
