const { Datastore } = require('@google-cloud/datastore');
const bcrypt = require('bcrypt');
const datastore = new Datastore();//Creates a new client

async function retrieval(req, res) {
    const taskKey = datastore.key(['Task', req.body.email]);
    const entity = await datastore.get(taskKey);
    const comp = await bcrypt.compare(req.body.password, entity[0]["password"]);
    //res.send(result);
    const result = entity.find(c => (c.email === req.body.email) && comp);
    if (!result) {
        res.send("Wrong Credential!");
    }
    res.send("Welcome!!");
};

module.exports = retrieval;