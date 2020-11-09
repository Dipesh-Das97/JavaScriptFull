const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.raw());
const createJob = require('./createJob');
const rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
    }
}
app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: function () { return true } }));

app.get('/', (req, res) => {
    res.send("Welcome!");
});

app.get('/createJob', createJob);

app.post('/handleJob', (req, res) => {
    const message = req.body;
    console.log(`Received job with payload: ${message}`);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
})