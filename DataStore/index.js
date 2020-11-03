const { Datastore } =  require('@google-cloud/datastore');
const datastore = new Datastore();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
/*const func = require('./Files/entryEntity');
const input = func.input;
const retrieval = func.retrieval;*/
const func = require('./Files/batchEntity');
const batchInput = func.batchInput;
const batchRetrieval = func.batchRetrieval;

app.get('/', batchInput);

app.get('/output', batchRetrieval);

app.listen(port);


