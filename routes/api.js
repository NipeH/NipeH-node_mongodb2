const { response } = require('express');
const express = require('express');
const router = express.Router();
const Person = require('../models/person.js');

//GET BY NAME from db
router.get('/persons', function(req, res, next){

    Person.find({_id: req.params.name}).then(function(person){
        res.send(person)
    })
});

//GET ALL PERSONS from db
router.get('/allpersons', function(req, res, next){
    //res.send({type: 'GET'});
     Person.find({}).then(function(person){      // Returns all persons from the mongo database
        res.send(person)
    }); 
   
});


//POST to db
router.post('/persons', function(req, res, next){
  // var person = new Person(req.body);// saves person to the mongodb collection
  // person.save(); // saves person to the mongodb collection
    
    Person.create(req.body).then(function(person){// ANOTHER, SHORTER OPTION - saves 'person' to the mongodb collection

    res.send(person);
    }).catch(next); 

    
});

//UPDATE in db
router.put('/persons/:id', function(req, res, next){
    Person.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Person.findOne({_id: req.params.id}).then(function(person){
             res.send(person);
        });
       
    });
    //res.send({type: 'PUT'});
});

//DELETE from db
router.delete('/persons/:id', function(req, res, next){
    console.log(req.params.id);
    Person.findByIdAndRemove({_id: req.params.id}).then(function(person){
        res.send(person);
    });
   // res.send({type: 'DELETE'});
});

module.exports = router;
