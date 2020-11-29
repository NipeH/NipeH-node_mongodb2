const express = require('express')
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/mylib', { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.Promise = global.Promise;

const testischema = {btdata:'testiiiii', pvm: '2020:11:03'}

app.use(express.static(__dirname+'/public'));

//initialize routes
const routes = require('./routes/api'); // import api.js

// error handling middleware
app.use(function(err, req, res, next){
        console.log(err);
        res.status(422).send({error: err.message});

});

app.use(express.json({ extended: true }));  // 
app.use(bodyParser.json({ extended: true })); // 
// make sure these json thingys are before '/api' otherwise it won't work
app.use('/api', routes);



app.use(express.urlencoded({ extended: true }));

app.post('/api', function(req, res){
    console.log('POST Request');
    res.send(testischema);  //test schema
  
}) 

app.listen(process.env.port || 8080, function(){
console.log("listening for requests");

});

