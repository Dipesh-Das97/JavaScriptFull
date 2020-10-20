const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();//Creates a new client
async function retrieval(req, res) {
    const taskKey = datastore.key(['Task', "Sample1"]);
    const entity = await datastore.get(taskKey);
    //console.log(entity);
    const obj = [entity];
    const result = obj.find(c => (c.email === req.body.email) && (c.password === req.body.password));
    if (!result) {
        res.send("Wrong Credential!" + obj);
    }
    res.send("Welcome!!");
};

module.exports = retrieval;