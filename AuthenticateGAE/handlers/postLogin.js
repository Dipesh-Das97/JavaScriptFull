async function retrieval(req, res) {
    const taskKey = datastore.key('Task');
    const [entity] = await datastore.get(taskKey);
    //console.log(entity);
    const obj = [entity];
    const result = obj.find(c => (c.email === req.body.email) && (c.password === req.body.password));
    if (!result) {
        res.send("Wrong Credential!");
    }
    return res.send("Welcome!!");
};

module.exports = retrieval;