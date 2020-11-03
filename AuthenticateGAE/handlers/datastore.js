const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore({apiEndpoint: 'http://localhost:8081'});
module.exports = datastore;