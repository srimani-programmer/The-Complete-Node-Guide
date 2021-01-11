const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

var coursesList = [
    {id : 102356, name : "Java"},
    {id : 104656, name : "Java"},
    {id : 2, name : "NodeJS"},
    {id : 3, name : "Django"},
    {id : 4, name : "ReactJS"}
];

app.get('/', (req, res) => {
    res.json(coursesList)
});

app.put('/course/:id', (req, res) => {
    
    if(isNaN(req.params.id)){
        return res.status(400).send("Bad Request. Couldn't make a request at this moment");
    }else{
        const course = coursesList.find(c => c.id === parseInt(req.params.id));
        if(!course){
            res.status(404).send("Course with given Id not found.");
            return;
        }
        if(req.body.name.length >= 2){
            course.name = req.body.name;
            for(let i = 0; i<coursesList.length; i++){
                if(coursesList[i].id === parseInt(req.params.id)){
                    coursesList[i] = course;
                }
            }
            res.json(coursesList);
        }else{
            return res.status(400).send("Bad Request. Couldn't add a course at this moment");
        }
    }
});

app.use('/*', (req, res)=>{
   return res.status(404).send('The requested URL Not Found.!');
});

app.listen(3000, () => {console.log(`Server is running at ${port}`)});