const express = require('express');
const app = express();
const port = 8000;
app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

var users = [
    { name: "Dipesh", email: "dipeshdas@gmail.com", password: "12345" },
    { name: "JaiKishan", email: "jaikishan@gmail.com", password: "64785" }
];

app.get('/', (req, res) => {
    res.render('index.ejs');
}); //for homepage

app.get('/login', (req, res) => {
    res.render('login.ejs')
});//for login page

app.post('/login', (req, res) => {
    const result = users.find(c => (c.email === req.body.email) && (c.password === req.body.password));
    if (!result) {
        res.status(404).send("Wrong credentials!");
        //res.redirect('/login');
    }
    res.send("Welcome!");
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

app.post('/signup', (req, res) => {
    var result = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    users.push(result);
    console.log(result);
    res.redirect('/login');
    //res.redirect('/signup');    
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    console.log(`Listening at http://localhost:${port}/login`);
    console.log(`Listening at http://localhost:${port}/signup`);
});