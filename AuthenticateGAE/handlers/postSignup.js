const bcrypt = require('bcrypt');
async function credentialsInput(req, res) {
        const hashPass = await bcrypt.hash(req.body.password, 10);
        const kind = "Task"
        const id = "Sample1"
        const taskKey = datastore.key([kind, id]);
        const obj = {
            key: taskKey,
            data: {
                time: Date.now().toString(),
                name: "Dipesh Das",
                email: "dipeshdas@gmail.com",
                password: hashPass
            }
        };
        await datastore.upsert(obj);
        console.log(obj);
        return res.redirect('/login');
};

module.exports = credentialsInput;