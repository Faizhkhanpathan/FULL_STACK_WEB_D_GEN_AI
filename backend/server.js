
// console.log("Hey Faiz");

//Tab + enter :- runing shortcut key (likte likhte)

// Funstions :-
 // =====================================================================================

// function add(a,b){
//     return a+b;
// }

// var add=function(a,b){
//     return a,b;
// }
// var result = add(2,4);
// console.log(result);


// ------------------------------

// var add=(a,b) =>{return a+b};

// var add=(a,b) =>a+b;
// var result =add(444,5);
// console.log(result);


// add();
// // ----------------------------------------------------------------------
// (function(){
//     console.log("Hey Faiz");
// })();

//--------------------------------------------------------------------------------------

// function callback(){
//     console.log("Faiz How are you");
// }
// const add=function(a,b,callback){
// var result = a+b;
// console.log(result);
// callback();
// }

// add(3,2,callback);




// ---------------------------------------------------------------------------------------------


// const add=function(a,b,callback){
// var result = a+b;
// console.log(result);
// callback();
// }

// add(3,2,function(){
//     console.log("hey Faiz");
// });

// -------------------------------------------------------------------------------------------------
// const add=function(a,b,callback){
// var result = a+b;
// console.log(result);
// callback();
// }

// add(3,2,()=>console.log("add completed"));  //number,number,function
//==========================================================================


// var fs=reqire('fs');
// var os=require('os');   //is use to find system details

// var user=os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi'+user.username+'!',()=>{
//     console.log("hey Faiz");
// });



// const fs = require('fs');
// const os = require('os');   // system details ke liye

// const user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!', (err) => {
//     if (err) throw err;
//     console.log("hey Faiz");
// });


// ------------------------------------------------------------------------------

// console.log(os);
// console.log(fs);


// --------------------------------------------------------------------------------------------

// const note=require('./note.js');
// console.log("hey ss");

// var age=note.age;
// console.log(age);

// var addnum=note.addnumber(age+12,5);
// console.log(addnum);

// =========================================================================================================

// lodash 


// =========================================================================================================

// var _ = require('lodash');   // _ := lodash
// var data = ["person",1,1,2,3,2,4,"person","Faiz","hey"];
// var Filter=_.uniq(data);
// console.log(Filter);
// console.log(_.isString("hey Faiz"));

// ==============================================================================================================

// const jsonString = '{"name":"jhon","age":30,"city":"New york"}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);
// console.log(typeof jsonObject);


import express from 'express'

const app = express();

app.get('/', (req, res) => {
  res.send('hello custemer')
})
app.get('/chicken', (req, res) => {
  res.send('eat it')
})
app.get('/idli', (req, res) => {
    var custemer_idli= {
        name: 'rava idli',
        size: '10 cm',
        is_sambhar:true,
        is_chutany:false
    }
  res.send(custemer_idli)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})