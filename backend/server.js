  
//                 //Apis post get (methods)

// const { add } = require("lodash");


// // console.log("Hey Faiz");

// // import { functions } from "lodash";

// //Tab + enter :- runing shortcut key (likte likhte)

// // Funstions :-
//  // =====================================================================================

// // function add(a,b){
// //     return a+b;
// // }

// // var add=function(a,b){
// //     return a,b;
// // }
// // var result = add(2,4);
// // console.log(result);


// // ------------------------------

// // var add=(a,b) =>{return a+b};

// // var add=(a,b) =>a+b;
// // var result =add(444,5);
// // console.log(result);


// // add();
// // // ----------------------------------------------------------------------
// // (function(){
// //     console.log("Hey Faiz");
// // })();

// //--------------------------------------------------------------------------------------

// // function callback(){
// //     console.log("Faiz How are you");
// // }
// // const add=function(a,b,callback){
// // var result = a+b;
// // console.log(result);
// // callback();
// // }

// // add(3,2,callback);




// // ---------------------------------------------------------------------------------------------


// // const add=function(a,b,callback){
// // var result = a+b;
// // console.log(result);
// // callback();
// // }

// // add(3,2,function(){
// //     console.log("hey Faiz");
// // });

// // -------------------------------------------------------------------------------------------------
// // const add=function(a,b,callback){
// // var result = a+b;
// // console.log(result);
// // callback();
// // }

// // add(3,2,()=>console.log("add completed"));  //number,number,function
// //==========================================================================


// // var fs=reqire('fs');
// // var os=require('os');   //is use to find system details

// // var user=os.userInfo();
// // console.log(user.username);

// // fs.appendFile('greeting.txt','Hi'+user.username+'!',()=>{
// //     console.log("hey Faiz");
// // });



// // const fs = require('fs');
// // const os = require('os');   // system details ke liye

// // const user = os.userInfo();
// // console.log(user.username);

// // fs.appendFile('greeting.txt', 'Hi ' + user.username + '!', (err) => {
// //     if (err) throw err;
// //     console.log("hey Faiz");
// // });


// // ------------------------------------------------------------------------------

// // console.log(os);
// // console.log(fs);


// // --------------------------------------------------------------------------------------------

// const note=require('./note.js');
// console.log("hey ss");

// var age=note.age;
// console.log(age);

// var addnum=note.addnumber(age+12,5);
// console.log(addnum);

// // =========================================================================================================

// // lodash 


// // =========================================================================================================

// // var _ = require('lodash');   // _ := lodash
// // var data = ["person",1,1,2,3,2,4,"person","Faiz","hey"];
// // var Filter=_.uniq(data);
// // console.log(Filter);
// // console.log(_.isString("hey Faiz"));

// // ==============================================================================================================

// // const jsonString = '{"name":"jhon","age":30,"city":"New york"}';
// // const jsonObject = JSON.parse(jsonString);
// // console.log(jsonObject);
// // console.log(typeof jsonObject);


// // import express from 'express'
// // const express = require('express');
// // const app = express();
// // const db = require('./db');

// // app.get('/', (req, res) => {    //data recive by get method
// //   res.send('hello custemer')
// // })

// // app.get('/chicken', (req, res) => {
// //   res.send('eat it')
// // })
// // app.get('/idli', (req, res) => {
// //     var custemer_idli= {
// //         name: 'rava idli',
// //         size: '10 cm',
// //         is_sambhar:true,
// //         is_chutany:false
// //     }
// //   res.send(custemer_idli)
// // })

// // app.post('/person', (req, res) =>  {    //data recive by get method
// //   res.send('sucessful recived');
// // })
//  //data send by post method

// // app.listen(3000, () => {
// //   console.log('Server is running on http://localhost:3000')
// // })


// // const express = require('express');
// // const app = express();

// // require('./db');   // load database connection

// // app.get('/', (req, res) => {
// //     res.send('Hello customer');
// // });

// // app.listen(3000, () => {
// //     console.log('Server is running on http://localhost:3000');
// // });




// //  funcitons

// // function add(a,b){  // parameters
// //   return a+b;
// // }


// // ==============================================================
// // var add = function(a,b){
// //   return a+b;
// // }
// // var result=add(12,3);   //arguments  //function calling 
// // console.log(result);
// //================================================================
// // var add = (a,b) =>{return a+b;}
// // var result=add(12,3);   //arguments  //function calling 
// // console.log(result);
// //==================================================================

// // var add = (a,b) => a+b;
// // var result=add(12,3);   //arguments  //function calling 
// // console.log(result);

// //======================================================================

// // (function(){
// //   console.log("hey Faiz");
// // })();

// //=============================================================================

//                       //call Back Function  (main fun me call ho rha is cal callback)
// //============================================================================

// // function callback(){
// //   console.log("prince is acalling a function");
// // }
// // var add=function(a,b,callback){
// //   var result= a+b;
// //   console.log(result);
// //   callback();
  
// // }
// // console.log(add(10,20,callback));


// //=====================================================================================

// // var add=function(a,b,callback){
// //   var result= a+b;
// //   console.log(result);
// //   callback();
  
// // }

// // add(2,3,function(){
// //   console.log("work done");
// // })


// //========================================================================================

// // var add=function(a,b,callback){
// //   var result= a+b;
// //   console.log(result);
// //   callback();
  
// // }

// // add(2,3,()=> console.log("hey Faiz"));

// //===============================================================================
// // "use strict"
// // var fs = require('fs');
// // var os=require('os');

// // // var result=os.userInfo();
// // // console.log(result);

// // // fs.appendFile('greeting.txt', 'Hi ' + user.username + '!', (err) => {
// // //     if (err) throw err;
// // //     console.log("hey Faiz");
// // // });

// // console.log(os);
// // console.log(fs);


// //-----------------------------------------------------------------------------------------------

// // const note=require('./note.js');
// // console.log("sever File is loading");
// // var a=note.a;
// // console.log("a is:"+a);
// // var b=note.b;
// // console.log("a is:"+b);
// // var addnum=note.addnum(12,31);
// // console.log("addnum is:"+addnum);


// // ==========================================================================================================

// //loadash  npm

// // npm i lodash

// // var _=require('lodash');
// // var data =["person","person",1,2,5,2,3,6,4,34,32,3,1,43,34,5,3,432,12,"Faiz","Faiz","sohail","atif","papa","aami",12,3,21,1,2];
// // var filter =_.uniq(data);
// // console.log(filter);
// // console.log(_.isString(data));

// // const jsonString = '{"name":"john","age":30,"city":"wani"}';
// // const jsonObject=JSON.parse(jsonString);
// // console.log(jsonObject);
// // console.log(typeof json);



// // const ObjectToconvert = {"name":"john"
// //     ,"age":30
// //     ,"city":"wani"
// // };
// // const json=JSON.stringify(ObjectToconvert);
// // console.log(json);
// // console.log(typeof json);

//   //get ===  method (data chaheye sirf no update )
//   //server to req karega get method se aaour vo res lake dedega


//   //menu card
//                                                //get and post :- data de sakata hai data le sakata hai
// // import express from 'express'

// // const app = express();    //express funciton we store in apps 

// // app.get('/', (req, res) => {       //server zinda ho gya 
// //   res.send('Hello Faiz Where are you Bhai')
// // })
// // app.get('/syaal',(req,res)=>{            //get method only res de sakata hai bus
// //     var say = {
// //         name:"faiz",
// //         age:19,
// //         caste:"islam",
// //         is_hey:"sds"
// //     }
// //    res.send(say);
// // })                          
// // app.get('/you',(req,res)=>{      
// //     res.send("hey i am not here")
// // })

// // app.post('/items',(req,res)=>{
// //   res.send("items is running");

// // })

// // app.listen(3000, () => {
// //   console.log('Server is running on http://localhost:3000')
// // })


// //============================================================================================
// import mongoose from 'mongoose';
//                                              //get and post :- data de sakata hai data le sakata hai
// import express from 'express'
// import "./db.js"; 
// const app = express();    //express funciton we store in apps 
// import bodyParser from 'body-parser';
// import Person from './models/person.js';
// app.use(bodyParser.json());   //req.body

// //POST METHOD  //  YE DATA SAVE KARNE KE LIYE BHEJA JA RHA HAI 
// // app.post('/person',(req,res)=>{   //most of the persons not use call back function
// //   const data=req.body;                 
// //   const newPerson = new Person(data);
// //   newPerson.save((error,savedPerson)=>{
// //     if(error){
// //       console.log('Error saving person:',error);
// //       res.status(500).json({ error:'Internal server error'});

// //     }else{
// //       console.log('data saved sucessfully');
// //       res.status(200).json(savedPerson);

// //     }
// //   });
// // newPerson.name=data.name;
// // newPerson.age=data.age;
// // newPerson.mobileno=data.mobileno;
// // newPerson.email=data.email;
// // newPerson.address=data.address;

// //informational responses (100–199)

// // Successful responses (200–299)

// // Redirection messages (300–399)

// // Client error responses (400–499)

// // Server error responses (500–599)

// // })


// //we use Async and await





// // ============================================================================

// // try// all sucessfull code yaha likhte hai 
// // catch // kuch galat hua 

// // and //asyc Await use hota Hai bahot jagaha 


  
// // app.post('/person',async (req,res)=>{     //agar kuch wait lagta hai to usse liye asyc method lagate hai 
// //   try{
// //  const data=req.body;                 
// //   const newPerson = new Person(data);
// //    const response = await newPerson.save();//  👉 MongoDB me data permanently store karne ke liye                            // → object ko database record bana deta hai.
// //   console.log('data saved');
// //   res.status(200).json(response);

// //   }  //most of the persons not use call back function
// //  catch(err){
// //   console.log(err);
// //   res.status(500).json({err:'Internal server Error'});
// //  }

// //   });
  

// //   //====================================================
// app.get('/person', async (req, res) => {   //post and get method lena and bhejna 
//   try {
//     const data = await Person.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: 'Internal server Error' });
//   }
// });


// // //   👉 async function bolta hai:
// // // “Thoda time lene wala kaam hai, ruk-ruk ke kaam karenge”

// // // Isse hum await use kar sakte hain,
// // // jo database / API ka result aane tak wait karta hai — bina app ko freeze kiye 😊
  

// // app.get('/', (req, res) => {       //server zinda ho gya 
// //   res.send('Hello Faiz Where are you Bhai')
// // })
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })




// // =======================================================================================================================


//                         //  CRUD FUNCTION

// //=========================================================================================================================

//               // CREATE     READ    UPDATE    DELETE  


//               //WITH THE HELP OF POST  (WE SAVE THE DATA)
//               //WITH THEN HELP OF GET  (WE GET THE DATA)


// // C → Create → POST
// // R → Read → GET
// // U → Update → PUT/PATCH
// // D → Delete → DELETE


// //post  on menu

// import Menu from './models/menu.js';

// app.post('/Menu', async (req, res) => {     //agar kuch wait lagta hai to usse liye asyc method lagate hai 
//   try{
//  const data=req.body;                 
//   const newMenu = new Menu(data);
//    const response = await newMenu.save();//  👉 MongoDB me data permanently store karne ke liye                            // → object ko database record bana deta hai.
//   console.log('data saved');
//   res.status(201).json(response);

//   }  //most of the persons not use call back function
//  catch(err){
//   console.log(err);
//   res.status(500).json({err:'Internal server Error'});
//  }

//   });

//   app.get('/Menu', async (req, res) => {     //agar kuch wait lagta hai to usse liye asyc method lagate hai 
//   try{                
//   const data = await Menu.find();
//   //  const response = await newMenu.save();//  👉 MongoDB me data permanently store karne ke liye                            // → object ko database record bana deta hai.
//   console.log('data fetch');
//   res.status(201).json(data);

//   }  //most of the persons not use call back function
//  catch(err){
//   console.log(err);
//   res.status(500).json({err:'Internal server Error'});
//  }

//   });
  



// //   app.get('/person', async (req, res) => {   //post and get method lena and bhejna 
// //   try {
// //     const data = await Person.find();
// //     console.log('data fetched');
// //     res.status(200).json(data);
// //   } catch (err) {
// //     console.log(err);
// //     res.status(500).json({ error: 'Internal server Error' });
// //   }
// // });

// // ========================================================================================================

//                                  //parameterized API call

// // ========================================================================================================                            

// app.get('/person/:workType',async(req,res)=>{
//   try{
//      const workType = req.params.workType;
//      if(workType=='chef'||workType=='buisnessman'||workType=='developer'||workType=='broker'){
//       const response=await Person.find({work:workType});
//       console.log('response fetch');
//       res.status(200).json(response);
//     }else{
//       res.status(404).json({error:'Invalid work type'});

//     }
//   }catch(err){
//      console.log(err);
//      res.status(500).json({error:'Internal Server Error'});

//   }
// })

// // ===============================================================================================================================


// // all of these bad practice to write a code

//                             //Express Router(code ko ache se manage karte hai aaour route modeling ko hangel karte hai)



// ================================================================================================================================================================

                        //revision
// ====================================================================================================================
// import express from 'express';
// const app = express();

// app.get('/', function(req, res) {
//   res.send('Hey Welcome to My Hotel');
// });

// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


// ==================================================================================================




                                  //basics 
// const cars=["i20","bmw","meridies","rolls",32];
// cars.push("tesla");
// console.log(cars[5]);

                                  //function

  // const ages=[32,2,3,2,21,2,3,21,2];
  // const result=ages.filter(checkage);
  // function checkage(age){
  //   return age>10
  // }
  // console.log(result);


  //======================================================================================

  //i have include that

//  import promptSync from 'prompt-sync';
// const prompt = promptSync();

// const ages = prompt("Enter your age: ");
// console.log('your age is:', ages);


  //
//   let age = 22;
// console.log('your age is:', age);
//
// const ageSS = 25;
// console.log(`your age is: ${ageSS}`);



// ==============================================================================================================================

// Again1 lec 4 Revision

// var add=function(a,b){
//   return a+b;
// }
// var result = add(10,20);
// console.log(result);


// ========================================================================================================================
 
// var add=(a,b)=>{
//   return a+b;
// }
// var result = add(10,20);
// console.log(result);


// =========================================================================================================================

// var add = (a,b) =>{console.log(a+b)};   //known as make my script java script ig brother 
// add(3,2);

//===========================================================================================================================

// function add(a,b){              
//   return a+b;
// }
// var result=add(3,4);
// console.log(result);

// ==========================================================================================================================

// (function(){
//   console.log("Hey Faiz");
// })();


// =============================================================================================================================

// function callback(){
//   console.log("Hey Faiz Are you There");
// }
// const add =function(a,b,callback){
//   var result = a+b;
//   console.log(result);
//   callback();            //this is our call back function ek functon ke under dusra function

  
// }

// add(2,3,()=>console.log("callback is done"));

// add(12,13,callback);

// ================================================================================================================================

// const add =function(a,b,callback){
//   var result = a+b;
//   console.log(result);
//   callback();            //this is our call back function ek functon ke under dusra function

  
// }

// add(2,3,function(){
// console.log("Hey Faiz I am there ");
// });

//fs and os library we use here 

// var fs= require('fs');  //means reqirement hai fs library ka

// import os from 'os';

// const user = os.userInfo();
// console.log(user.username);
// fs.appendFile();


// ====================================================================================================

import booksdetail from './booksdetail.js';
console.log(booksdetail);