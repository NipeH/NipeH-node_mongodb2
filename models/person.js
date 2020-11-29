const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create person Schema & model


const PersonSchema = new Schema({

    name:{
        type: String,
        //required: [true, 'Name field is required'] // doesn't work with express currently from html, so no data requiring 
    },
    age:{
        type: Number,
        //required: [true, 'Name field is required']
    },
    phoneNumber:{
        type: String,
        //required: [true, 'Name field is required']
    },
    
});


const Person = mongoose.model('person', PersonSchema);

module.exports = Person;