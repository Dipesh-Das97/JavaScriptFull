const express = require('express');
const app = express();
const port = 8000;

const ObjectsToCsv = require('objects-to-csv');

const neatCsv = require('neat-csv');
const fs = require('fs');

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('index.ejs');
}); //for homepage

app.get('/login', (req, res) => {
    res.render('login.ejs')
});//for login page

app.post('/login', (req, res) => {

    fs.readFile('./models/file.csv', async (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        //console.log(await neatCsv(data))
        const cred = await neatCsv(data);
        const result = cred.find(c => (c.email === req.body.email) && (c.password === req.body.password));
        if (!result) {
            res.status(404).send("Wrong credentials!");
            //res.redirect('/login');
        }
        res.send("Welcome!");
    })


});

app.get('/signup', (req, res) => {
    res.render('signup.ejs')
});

app.post('/signup', (req, res) => {
    const obj = {
        time: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const object = [obj]
    const csv = new ObjectsToCsv(object)

    const write = async () => {
        await csv.toDisk('./models/file.csv', { append: true })
    }
    write();
    console.log(object);
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
    console.log(`Listening at http://localhost:${port}/login`);
    console.log(`Listening at http://localhost:${port}/signup`);
});
