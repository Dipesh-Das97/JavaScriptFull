const { Datastore } = require('@google-cloud/datastore');
const bcrypt = require('bcrypt');
const datastore = new Datastore();//Creates a new client
async function credentialsInput(req, res) {
    try {
        const hashPass = await bcrypt.hash(req.body.password, 10);
        const kind = "Task";
        //const id = "Sample2"
        //const taskKey = datastore.key([kind, id]);
        const obj = {
            key: datastore.key([kind, req.body.email]),
            data: {
                time: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashPass
            }
        };
        //await datastore.upsert(obj);
        datastore.insert(obj).then(() => {
            //Successful
        })
        //res.send(obj);
        res.redirect('/admin/login');
    } catch {
        res.redirect('/admin/signup');
    }
}
module.exports = credentialsInput;
