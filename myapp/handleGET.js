const express = require('express');
const app = express();
const port = 8080;
//const port = process.env.PORT || 8000;

app.use(express.json()); //adding a piece of middle ware and then we call app.use to use the json in the request handling pipeline for post()

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"}
  ];
  
  app.get("/courses/:courseId", (req,res) => {
    const result = courses.find(c => c.id === parseInt(req.params.id));
    if(!result){
        res.status(404).send("The course was not found!");
    }
    res.send(result);
  });



//Creating another route to create new courses and add them to the existing courses and sending the response to client
//Using post() is useful for adding properties to objects.
//to call http services use "postman"

  app.post('/courses', (req, res) => {
    const result = {
        id : courses.length + 1,
        name : req.body.name //here we are assuming that the request body will have a name and that name will be the name of the course
    };//inorder for "req.body" to work we need to allow parsing of json. thats why we used 'use()'
    courses.push(result);
    res.send(result);
  });

  

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/courses`)});