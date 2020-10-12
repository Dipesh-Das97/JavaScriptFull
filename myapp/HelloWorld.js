const express = require('express');
const app = express();
const port = 8000;
//const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/courses', (req, res) => {
  res.send([1,2,3]);
});

app.get('/courses/:courseId', (req, res) => {
  res.send(req.params.courseId);
});

app.get('/courses/:year/:month/:day',(req, res) =>{
  res.send(req.params); //here we want to check the params object
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});