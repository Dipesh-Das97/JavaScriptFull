const bcrypt = require('bcrypt');
const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();//Creates a new client
async function credentialsInput(req, res) {
    try {
        const hashPass = await bcrypt.hash(req.body.password, 10);
        const kind = "Task"
        const id = "Sample1"
        const taskKey = datastore.key([kind, id]);
        const obj = {
            key: taskKey,
            data: {
                time: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashPass
            }
        };
        await datastore.upsert(obj);
        console.log(obj);
        res.redirect('/login');
    } catch {
        res.redirect('/signup');
    }

};

module.exports = credentialsInput;
