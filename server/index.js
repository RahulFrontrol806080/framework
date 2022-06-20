const express = require('express');
const cors = require('cors');
const app = express();

    const projectList=  [
    {
        "id": "1",
        "name": "Project1",
        
    },
    {
        "id": "2",
        "name": "Project2"
    },
    {
        "id": "3",
        "name": "Project3"
    },
    {
        "id": "4",
        "name": "Project4"
    }
];
const projecdetail=  [
    {
        "id": "1",
        "name": "rahul",
        "surname":"singh"
    },
    {
        "id": "2",
        "name": "rahul1",
        "surname":"singh"
    },
    {
        "id": "3",
        "name": "rahul2",
        "surname":"singh"
    },
    {
        "id": "4",
        "name": "rahul3",
        "surname":"singh"
    }
];
const dropdown=  [
    {
        "id": "1",
        "name": "lists",
        "values":[1,2,3,4]
    },
    {
        "id": "1",
        "name": "lists",
        "values":[1,2,3,4]
    },
    {
        "id": "1",
        "name": "lists",
        "values":[1,2,3,4]
    },
    {
        "id": "1",
        "name": "lists",
        "values":[1,2,3,4]
    }
];

app.use(cors({
    origin: '*'
}));
app.get('/projectlist', (req, res) =>{
    res.send(projectList);
});
app.get('/projectdetail', (req, res) =>{
    res.send(projecdetail);
});
app.get('/dropdown', (req, res) =>{
    res.send(dropdown);
});
app.listen(6069);