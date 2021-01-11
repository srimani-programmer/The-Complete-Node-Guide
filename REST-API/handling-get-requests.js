const express = require('express');
const app = express();

var coursesList = [
    {id : 102356, name : "Java"},
    {id : 104656, name : "Java"},
    {id : 2, name : "NodeJS"},
    {id : 3, name : "Django"},
    {id : 4, name : "ReactJS"}
];
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.json(coursesList)
});


app.get('/courses/:id', (req, res) => {

    const course = coursesList.find(c => c.id === parseInt(req.params.id))
    console.log(course);
    if(!course){
        res.status(404).send("Course with given Id not found.");
    }else{
        res.json(course);
    }
});

app.get('/courseslist', (req, res) =>{
    const name = req.query.name;
    const list = coursesList.filter((c) => {
        if(c.name === name){
            return c;
        }else{
            return null;
        } 
    });
    if(list.length <= 0){
        res.status(404).send("Given course name not found.!");
    }else{
        res.json(list);
    }
});


app.use("/*", (req, res) => {
    res.status(404).send("404 Not Found...!");
});

app.listen(port, () => console.log(`Server is running at ${port}`));

