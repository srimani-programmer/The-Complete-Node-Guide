const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json())

// app.use(express.json());

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

app.post('/addNewCourse', (req, res) => {

    if(!isNaN(req.body.id) && req.body.name.length >= 2){

        const course = {
            id: req.body.id,
            name: req.body.name
        };

        console.log(course)
        coursesList.push(course);

        res.send(coursesList);
    }else{
        return res.status(400).send("Unable to add the new course");
    }
});


app.use('/*', (req, res)=>{
    return res.status(404).send('The requested URL Not Found.!');
});


app.listen(3000, () => {console.log(`Server is running at ${port}`)});