const express = require('express');//returns an function
const app = express();//returns an object of type Application
const port = process.env.PORT || 8080;

app.use(express.json());//adding a piece of middleware for parsing in the post method for req.body.name

const courseSelection = [
    {id : 1, name : "Basics"}, 
    {id : 2, name : "REST API"}, 
    {id : 3, name :"App Engine"},
    {id : 4, name : "Datastore"}
];

app.get('/', (req, res) => {
    res.send("Welcome to our REST API!");
});// thus is how we specify a route and the callback called a route handler

app.get('/api/courses', (req, res) => {
    res.send(courseSelection);//an array of objects
});

app.get('/api/courses/:id', (req, res) => { //: makes 'id' a parameter 
    const course = courseSelection.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("NOT Found!!");
    }
    res.send(course);//to get value of each course
});

app.post('/api/courses/', (req, res) => {
    const course = {
        id : courseSelection.length + 1,
        name : req.body.name //in order for this req to work we need to enable parsing of json object
    }
    courseSelection.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courseSelection.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("NOT Found!!");
    }
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courseSelection.find(c => c.id === parseInt(req.params.id));
    if(!course){
        res.status(404).send("NOT Found!!");
    }
    const index = courseSelection.indexOf(course);
    courseSelection.splice(index, 1);
    res.send(courseSelection);
})
/*app.get('/api/posts/:year/:month', (req, res) => { //: makes 'id' a parameter 
    res.send(req.params);//params returns an object of params passed to the address
});*/

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});