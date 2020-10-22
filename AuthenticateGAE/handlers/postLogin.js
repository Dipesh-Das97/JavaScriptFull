const { Datastore } = require('@google-cloud/datastore');
const bcrypt = require('bcrypt');
const datastore = new Datastore();//Creates a new client

async function retrieval(req, res) {
    const taskKey = datastore.key(['Task', req.body.email]);
    const entity = await datastore.get(taskKey);
<<<<<<< HEAD
    const comp = await bcrypt.compare(req.body.password, entity[0]["password"]);
    //res.send(result);
    const result = entity.find(c => (c.email === req.body.email) && comp);
=======
    //res.send(entity);
    const result = entity.find(c => (c.email === req.body.email) && bcrypt.compare(req.body.password, c.password));
>>>>>>> 596e9419a32ff20f5b12b1f95fbc11fa4faee02e
    if (!result) {
        res.send("Wrong Credential!");
    }
    res.send("Welcome!!");
};

module.exports = retrieval;