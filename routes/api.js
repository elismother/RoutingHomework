var express = require('express');
var router = express.Router();

var data = [
    {id: 0, name: "person1", username: "user1"},
    {id: 1, name: "person2", username: "user2"},
    {id: 2, name: "person3", username: "user3"}
]

//GET/api/person
router.get('/person', function(req, res, next) {

    res.status(200);
    res.send(data);
});

//GET/api/person/:id
router.get('/person/:id', function(req,res,next) {

    res.status(200);
    res.send(data.filter(person =>
        person.id == req.params.id
    ));
});

//POST/api/person
router.post('/person', function (req,res,next) {
    //note we are adding any data sent to the endpoint
    //to the array. this really needs some checking.
    res.status(200);
    data.push(req.body);
    res.send(req.body);
});

//PUT/api/person/:id
router.put('/person/:id', function(req,res,next) {
    //note we are adding any data sent to the endpoint
    //to the array. this really needs some checking.
    res.status(200);

    var index = data.findIndex(person =>
        person.id == req.params.id
    );
    
    data[index] = req.body;
    res.send(data[index]);
});

//DELETE/api/person/:id
router.delete('/person/:id', function(req,res,next) {
    res.status(200);
    data = data.filter(person => person.id !== parseInt(req.params.id));
});


module.exports = router;