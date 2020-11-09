const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const func = require('./createTask');
const createTask = func.createTask;

app.enable('trust proxy');
app.use(bodyParser.raw({type: 'application/octet-stream'}));

const rawBodySaver = function (req, res, buf, encoding) {
    if (buf && buf.length) {
      req.rawBody = buf.toString(encoding || 'utf8');
    }
}

app.use(bodyParser.json({ verify: rawBodySaver }));
app.use(bodyParser.urlencoded({ verify: rawBodySaver, extended: true }));
app.use(bodyParser.raw({ verify: rawBodySaver, type: function () { return true } }));

app.get('/', (req, res) => {
    console.log("Hello World!");
    res.send("Hello World!");
});

app.get('/createTask', createTask);

app.post('/handleTask', (req, res) => {
    const bodyData = req.body//JSON.parse(req.rawBody);
    console.log(`%%%%  Received task with payload - name : ${bodyData} & Job - ${bodyData}`  );
    res.sendStatus(200);
});
app.listen(port, () => {
    console.log(`listening at port http://localhost:${port}`);
    console.log(`listening at port http://localhost:${port}/createTask`);
    console.log(`listening at port http://localhost:${port}/task`)
});
