const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {    
   res.render('home.ejs');
});

app.get('/google', (req, res) => {
   res.send("Signin With GOOGLE");
});

app.get('/admin', (req, res) => {
   res.send("Signin With API");
});

app.listen(port);