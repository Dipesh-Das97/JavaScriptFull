const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const func = require('./createTask');
const createTask = func.createTask;

app.enable('trust proxy');
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});


app.get('/createTask', createTask);


app.post('/task', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`listening at port http://localhost:${port}`);
    console.log(`listening at port http://localhost:${port}/createTask`);
});
