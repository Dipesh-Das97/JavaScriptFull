const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.enable('trust proxy');
app.use(bodyParser.raw({type: 'application/octet-stream'}));

app.get('/', (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});

app.post('/task', (req, res) => {
    console.log('Received task with payload: %s', req.body);
    res.send(`Printed task payload: ${req.body}`).end();
});

app.get('/task', (req, res) => {
    res.send(`Printed task payload: ${req.body}`).end();
    console.log('Received task with payload: %s', req.body);
});

app.get('*', (req, res) => {
    res.send('OK').end();
});

app.listen(port, () => {
    console.log(`listening at port http://localhost:${port}`);
    console.log(`listening at port http://localhost:${port}/task`);
})