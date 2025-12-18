//models is a blur peint of our database


// https://www.npmjs.com/package/mongoose

import mongoose from 'mongoose';
const newPerson = new mongoose.Schema({
    name:{
     type:String,
     required:true
    },
    age:{
    type:Number,
},
work:{
    type:String,
    enum:["worker","employ","foumder","buisness","developer"],
    required:true
},
mobile:{
  type:Number,
  required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
address:{
type:String
},
salary:{
  type:Number,
}

});

//create person model

const Person = mongoose.model('Person', newPerson);

export default Person;

