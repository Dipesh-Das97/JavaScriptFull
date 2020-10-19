const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();//Creates a new client
const bcrypt = require('bcrypt');

app.set('view-engine', 'ejs');//to use the ejs files
app.use(express.urlencoded({ extended: false }));
app.use(express.json());//for using the middleware

app.get('/', (req, res) => {
    res.render('index.ejs');
}); //for homepage

app.get('/login', (req, res) => {
    res.render('login.ejs');
});//for login page

app.post('/login', async (req, res) => {
    const taskKey = datastore.key('Task');
    const [entity] = await datastore.get(taskKey);
    const obj = [entity];
    console.log(obj);
    const result = obj.find(c => (c.email === req.body.email) && (c.password === req.body.password));
    if (!result) {
        res.status(404).send("Wrong credentials!");
    }
    res.send("Welcome!");
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

app.post('/signup', async (req, res) => {
    try {
        const hashPass = await bcrypt.hash(req.body.password, 10);
        const kind = 'Task';
        const id = 'sampletask1';// The name/ID for the new entity
        const taskKey = datastore.key([kind, id]);// The Cloud Datastore key for the new entity
        const task = {
            key: taskKey,
            data: {
                time: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: hashPass
            }
        };// Prepares the new entity
        await datastore.save(task);
        console.log(`Saved ${task.key.id}: ${task.data.description}`);
        //retrieving entity
        res.redirect('/login');
    } catch {
        res.redirect('/signup');
    };
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    console.log(`Listening at http://localhost:${port}/login`);
    console.log(`Listening at http://localhost:${port}/signup`);
});
