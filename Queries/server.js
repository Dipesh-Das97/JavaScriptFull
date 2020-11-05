const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const func = require('./handlers/ancestorEntity');
const retrieval = func.retrieval;
const ancestor = func.ancestor;
const basicQ = require('./handlers/basicQuery');


app.get('/', ancestor);

app.get('/output', retrieval);

app.get('/query', basicQ);

app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
    console.log(`Listening at: http://localhost:${port}/output`);
    console.log(`Listening at: http://localhost:${port}/query`);
    console.log(`Listening at: http://localhost:${port}`);
});