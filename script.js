// 0/0
// NAN  TYPE = nOT VALID NUMBER


// NaN+1  =NaN

// NAN*NAN  = NAN
// NAN/0  = NAN
// NAN-1  = NAN

// let age=23;
// age=age+2;       // assignment operator 
// console.log(age);

// --------------------------------------------

// let hindi=60;
// let english=70;
// let maths=80;
// let avg=(hindi+english+maths)/3;
// console.log(avg);


//typescript==static    (data type change nhi kar sakate hai )
//javascript==dynamic  (data type change kar sakate hai )


// -----------------------------------------------


// Strings in js


// let name="Ravi";
// let rollno='23';
// let char='A';
// let num=23;  
// let str='Ravi "Kumar"';  // valid
// let sentence="My name is Ravi \"Kumar\"";  // escape sequence
// let empty="";  // empty string
// let role=`Admin`;  // backtick


// --------------------------------------

// String indices

// ------------------------------------------

// let name="Ravi Kumar";  // 0 to 8
// name[0];  // R
// name[1];  // a
// name[2];  // v
// name[3];  // i
// name[4];  // space
// name[5];  // K
// name.length;  // 9
// typeof name;  // string
// name[name.length-1]//r
// name[name.length-2]//a
// "Faizh".length;  // 5
// "Faizh"[5];  // h

// //concatination
// let firstName="Ravi";
// let lastName="Kumar";
// console.log(firstName+" "+lastName);  // Ravi Kumar


// -----------------------------------------
// null and undefined


// let name;  // undefined
// let age=null;  // null
// let name="Faizh";
// console.log(name);              //JAVA SCRIPT PROOVIDE functionALITY SO THATS WHY ISE BODY KE UPER LIKHA JATA HAI 


// let pencilprice=10;
// let eraserprice=5;
// let output="total price is:"+(pencilprice+eraserprice)+"rs.";   concatina
// console.log(output);

// let pencilprice=10;
// let eraserprice=5;
// let output=`Pencile price is: ${pencilprice} rs.`;  //template Literals
// console.log(output);

// --lecture 6 From Tommorow----]


// -----------------------------------------------------------

// Practice questions
// let color="red";
// if(color==="red"){
//     console.log("stop");
// }else{
//     console.log("go");
// }



// -----------------------------------------------------------------
    
                        //   Truthy and Falsy values in js

// ------------------------------------------------------------------------------

// Falsy values
// 1. false
// 2. 0
// 3. ""
// 4. null
// 5. undefined

// 6. NaN
// 7. document.all
// 8. BigInt(0)
// 9. -0
// 10. Object.is(-0, +0) === false
// 11. Object.is(NaN, NaN) === true
// 12. 0n
// 13. Number.EPSILON
// 14. Number.MIN_VALUE
// 15. Number.NaN
// 16. parseInt("string")
// 17. parseFloat("string")
// 18. new Boolean(false)  // object

//truey values
// 1. true
// 2. any number other than 0
// 3. any string other than ""
// 4. any object
// 5. any array
// 6. function
// 7. BigInt(1)
// 8. -Infinity
// 9. Infinity
// 10. Object.is(1, 1) === true




// ex:-

// let name="";  // falsy
// if(name){
//     console.log("condition is true");
// }else{
//     console.log("condition is false");
// }
// condition is false



// -----------------------------------------------------------------

                                // alert
                               // prompt
                            //    warm
// ------------------------------------------------------------------------------

// alert("Hello World");  // it is used to show message to user
// prompt("Enter your name");  // it is used to take input from user

// console.warm("This is a warning message");


// -------------------------------------------------------------------------------
                           
                           //   for loop
// -------------------------------------------------------------------------------


// let n=10;
// for(i=1;i<=n;i=i+2){
//       console.log(i);
     
// }



// -----------------------------------------------------------------------------------

// const favMovie="3 idiots";

// let guess=prompt("Guess the movie name");

// while (guess!==favMovie)&&(guess!=="quit"){
//    console.log("Wrong guess, try again!");
//    guess=prompt("Guess the movie name");
// }
// guess===favMovie?console.log("Congratulations! You guessed it right."):console.log("Game exited.");

//   =--------------------------------------------------------------------------------------------------


// let heroes = [
//   ["Superman", "Batman", "Flash", "Wonder Woman"],
//   ["Ironman", "Spiderman", "Hulk", "Thor"]
// ];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(i+" "+heroes[i],heroes[i].length);
//   for(let j=0;j<heroes[i].length;j++){
//    console.log(`j=${j}, ${heroes[i][j]}`);

//   }
// }


// -----------------------------------------------------------------------------------

// let fruits=["apple","banana","grapes","mango"]
// for(fruit of fruits){
//    console.log(fruit);
// }
// for(char of "Faizh"){
//    console.log(char);
// }


// ------------------------------------------------------------------



// todo   App

// // --------------------------------------------------------------------------------
// let todos = [];
// let request = prompt("What do you want to do?");

// while (true) {
//   if (request === "quit") {
//     console.log("Quitting app");
//     break;
//   } else if (request === "list") {
//     console.log("**********");
//     for(let i=0;i<todo.length;i++){
//     console.todo(i,todo[i]);
    
//     }
//     console.log("**********");
//   } else if (request === "add") {
//     let task = prompt("Enter a task");
//     todos.push(task);
//     console.log("Task added");
//   }
//   else if(req=="delete"){
//     let task = prompt("please enter task index");
//     todo.splice(idx,1);
//     console.log("task deleted.");
//    }else {
//     console.log("Invalid command! Use add, list, or quit.");
//   }
//   request = prompt("What do you want to add again?");
// }
// ---------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------------------

               //   Change ad update Values

// ---------------------------------------------------------------------------------------------------------------------

// const student={
//    name:"Faizh",
//    age:19,
//    hobbies:["coding","playing","sleeping"],
//    isAdmin:true,
// }

// console.log(student);
// console.log(student.name);

// let name="sohail";
// console.log(name);

// let age="A";           // int to string age is unique 
// console.log(age);

// delete student.age;   // delete property
// console.log(student);



// -----------------------------------------------------------------------

                     // Ramdom(Integers)

// --------------------------------------------------------------------------
// step 1:

// let sun=Math.random();  // 0 to 0.999999
//  console.log(sun);
//  sum=sun*10;
//  console.log(sum);
// let sum1=Math.floor(sum);  // 0 to 9
// console.log(sum1);





// ex:- in ShadowRoot
// console.log(Math.random());  // 0 to 0.999999


// console.log(Math.floor(Math.random()*10));
//   // 1
// console.log(Math.floor(Math.random()*10)+1);
// ------------------------------------------------------------------------



// ------------------------------------------------------------------------

                 // leture no 20

               //   try and catch

// ------------------------------------------------------------------------

// console.log("hello");
// console.log("hello");
// console.log("hello");
// // console.log(a);
// // let a=5;
// try{
//    console.log(a);
// }catch(err){
//    console.log("Error has occured");
//    console.log(err);?
// }
// console.log("hello Faizh");
// console.log("hello faizh");
// console.log("hello faizh");
// ------------------------------------------------------------------------

                 //like  this button replicate on console  



// ------------------------------------------------------------------------

                 
  // <button onclick="console.log('button was clicked')";>sumit</button>
  // <button onclick="console.log('button was clicked')";>sumit</button>

  // <button onclick="console.log('button was clicked')";>sumit</button>

  // <button onclick="console.log('button was clicked')";>sumit</button>

  // <button onclick="console.log('button was clicked')";>sumit</button>

  // <button onclick="console.log('button was clicked')";>sumit</button>

  
//   <button onclick="console.log('button was clicked');console.log('button was clicked')";>sumit</button>

// <!-- <button onclick="console.log('button was clicked')";>sumit</button>-->
//     <button onclick="console.log('button was clicked')";>like this Faiz</button> 
  




//single button

// let btn=document.querySelector("button");
// console.dir(btn);

//multiple button

// let btns=document.querySelector("button");

//for(btn of btns){
// btn.onclick=sayHello;
// }


//single button

// let btn=document.querySelector("button");
// console.dir(btn);

//multiple button

// let btns=document.querySelector("button");

//for(btn of btns){
// btn.onclick=sayHello;
// }


 ////////////////////////f1///////////////////////////////////////////////
// btn.onclick=function(){
//   console.log("button was clicked");
//   alert("here is some error");
// }


 ////////////////////////f2///////////////////////////////////////////////

// function sayhello(){
//   alert("hey Faiz");
// console.dir(btn); 
  
//   btn.onmouseenter= function(){
//   console.log("MASHALLHA");
//   };
// }
// btn.onclick=sayhello;
// ------------------------------------------------------------------------



// `` = Backticks in javascript

// =========================================================================================

            //trim method in javascript

// let name="      Faizh   ";
// console.log(name.trim());

// =========================================================================================

// let password=prompt("Enter your password");
// let newpass =password.trim();
// console.log(newpass);


// =========================================================================================



                          // String Method
                          
                          // str.touppercase()  //RANDOM STRING
                          // str.lowercase()   //random string


                          // =========================================================================================



                          // String Method


                          //index lake dega 
                          // StringName.method(arg)

                          // str.indexof(substring, start)

                          // EX:-
// let msg="faiz";
// console.log(msg.indexOf("i"));  //2

// =========================================================================================



                          // Method Channing

                          // str.toUpperCase().trim()
                    
// ex:-


//  let msg="      faiz      ";
//  let newmsg=msg.toUpperCase().trim();
//  console.log(newmsg);


 //slice method
//  let msg="      faiz      ";
//  let newmsg=msg.slice(1,3);
//  console.log(newmsg);


// =============================================================================
             //replace method


//  let msg=" hey love or what      ";
//  let newmsg=msg.slice("love","hate").trim();
//  console.log(newmsg);


// =============================================================================
  


                                   // Arrays ==object
  

// ===============================================================================
                                  // stringName.method()

                                  // ()== method

  // let nums=[2,3,4];
  // console.log(nums);

//   let name=["faizh","sohail","atif"];
// name.push("khan");  // add element at last
// console.log(name.length);
// console.log(name[0]);
// console.log(typeof name);  //Array is an object in js

// let info=["faizh",19,true];
// console.log(info);
// console.log(info[0][0]);


//=========================================================================================

                      //String are immutable
                     //Array are mutable


// let name="Faizh";   //string Not change 
// name[0]="s";  // not change
// console.log(name);  // Faizh


// let arr=["faizh","sohail","atif"];  // array change
// arr[0]="khan";   // change
// console.log(arr);  //khan,sohail,atif


// ==========================================================================================


                        // Array Methods

                        //push
                        //pop
                        //shift
                        //unshift

// ex

// let fruits=["apple","banana","grapes"];
// fruits.push("mango");  // add element at last
// console.log(fruits);
// fruits.pop();  // remove element from last
// console.log(fruits);
// fruits.shift();  // remove element from first
// console.log(fruits);
// fruits.unshift("kiwi");  // add element at first
// console.log(fruits);
// ==========================================================================================

                               //indexOf method

// let fruits=["apple","banana","grapes","mango"];
// console.log(fruits.indexOf("grapes"));  //2
// console.log(fruits.indexOf("kiwi"));  //-1


                              //include method

// let fruits=["apple","banana","grapes","mango"];
// console.log(fruits.includes("banana"));  //true
                              
// ==========================================================================================

                   //primary secondary concatination
//  let primary=[11,21,12,31,22];
//  let secondary=["green","orange","purple"];
//  let colors=primary.concat(secondary);
// //  console.log(colors);
// console.log(primary.sort()); //sort
// console.log(primary);
// //  primary.reverse();
// //  console.log(primary);   //reverse

//  console.log(primary.slice(-1));  //  

// ==========================================================================================================
   
                        //refrences Arrays


// [1]==[1]
// false
 

// ex

// let arr1=[1];
// let arr2=[2];
// if(arr1==arr1){
//   console.log("same");

// }else{
//   console.log("not same");
// }


// ======================================================================================================

  // Constant  Arrays

  // const arr=[1,2,3,4];   //const value not change
  
  // console.log(arr);


  //======================================================================================================

  // Nested Arrays

  // let nums=[[2,3],[4,5],[5,6],[6,7]];
  // console.log(nums);

  //=======================================================================================================

                                  //loops  in js 
                                  
                              

  // let name="Faiz";
  // for(let i=0;i<5;i++){
  //   console.log(i);
  // }


  //while loop 

  //do while loop 

  // and so on same as all 


  // =======================================================================================================
                                  // javascript part 5
                                  //object

  //Add_Update


//   const student = {
//     name:"faiz",
//     age:19,
//     marks:94.4,
//     city:"wani"

//   };
//   console.log(student);

// student.city="pune";  // update
// console.log(student);
   

// delete student.marks;  // delete
// console.log(student);

// ========================================================================================================

// Random Numbers between 1 to 10
// let number=Math.random();
// console.log(number);

// number=number*10;

// console.log(number);

// number=Math.floor(number);   //remove after decimal numbers 

// console.log(number);

// number=number+1;

// console.log(number);
// console.log(Math.floor(Math.random()*10)+1);   //random number


// =========================================================================================================



                           //Functions in js


  //        function hello(){
  // console.log("Hello Faizh");
  //        }                  
  //         hello();  // function call
  //         hello();


  // ------------------------------------------------------------------------------------------------

  // Practice Questions

   //roll dice allways random number between 1 to 6
      // function random(){
      // let rand=Math.floor(Math.random()*6)+1;
      // console.log(rand);
      //    }                  
      //    random();  // function call




      // ---------------------------------------------------------------------------------------------------

            //  Function with Arguments


      // function sum(a,b){
      //   let c=a+b;
      //   console.log(c);
      // }
      // sum(2,3);  //5
      // sum(10,20);  //30
      // sum(100,200);  //300
      // sum(5,15);  //20
      // sum(7,8);  //15
      // sum(12,18);  //30

      //==================================================================================


                          //function scope
                          // local scope
                          //golobal scope
                          //lexical scope


                          // ex:-
                          //  let name="Faizh";  // global scope
                          // function myfun(){
                          //   let name="Faizh";  // local scope
                          //   console.log(name);
                          // }
                          // myfun();
                          // console.log(name);
                          //==================================================================================

                          // ex:=   lexical scope
                            
                          // function outer(){
                          //   let x=10;
                          //   let y=20;
                          //   function inner(){
                          //    console.log(x+y);    //lexical scope
                          //   }
                          //   inner();
                          // }
                          // outer();


 // =======================================================================================================================
 
                            //  new trick of function define 

                            // let sum=function(a,b){

                            //   return a+b;
                            // }
                            // console.log(sum(2,3)); //5
                        
                            

 // ========================================================================================================================
 
                            //Higer Order Functions


                  // function greet(func,n){
                  //   for(let i=0;i<n;i++){
                  //     func();
                  //   }
                  // }
                  // function sayHello(){

                  //   console.log("Hello Faizh");
                  // }
                  // greet(sayHello,3);
                  // // Hello Faizh

   //Ex:- 2
   
   
  //  function oddEven(request){
  //   if(request==="odd"){
  //    return function(n){
  //     console.log(!(n%2==0));
  //  }
  //   }else if(request==="even"){
  //     return function(n){
  //       console.log(n%2==0);
  //     }
  //   }
  //   }
  //   let odd=oddEven("odd");
  //   odd(3);  // true
  //   odd(4);  // false

  // EX 2


  //  let odd = function(n){
  //   if(n%2==0){
  //   console.log("even");
  //   }else{
  //     console.log("odd");
  //   }
  //  }                             
  //  odd(10);

//   function oddEven(request){
//     if(request=="odd"){
//   let odd = function(n){
//     console.log(!(n%2==0));
//     }
//     return odd;
//   }
//   else if(request=="even"){
//   let even = function(n){
//     console.log(n%2==0);
//     }
// return even;
//   }
//   else{
//     console.log("invalid request");
//   }
// }
// oddEven("odd")(5);  // true



 //  ==================================================================================================

                                //  Method //I have done thid like function


        // const student={                        
        //    add:function(a,b){
        //     return a+b;
        //   },
        //    sub:function(a,b){
        //     return a-b;
        //   },
        //   mul:function(a,b){
        //     return a*b;
        //   }
        // };
        // console.log(student.add(2,3));  //5

// =======================================================================================================================
        // try or catch to handle error pr exceptions 
// let a=10;
// try{
//   console.log(a);
// }
// catch{
//   console.log("Variable a doesn't")
// }


//======================================================================================================


                    //DOM in js

                    // Document object model 

//  ----------------------------------------------------------------------------------------------------

                                    // getElementById  

                                    //most imp

//   https://drive.google.com/drive/folders/1NlNZy0glWyw001uB8JbL63F7-jMyHXzx



                    //  java script :- documents object model  on lec no 22 IMP
                        
                      //QUERY SELECTOR IMP IN THAT

                      // document.querySelector('p');
                      // document.querySelector('#myId');
                      // document.querySelector('.myClass');
                      // document.querySelector("p");

//=======================================================================================================================================

  // Using Properties AND method

  // innerText

  // Shows the visible text contained in a node 


  //textContent

  //show all the full text 

  //innerHTML

  //SHOWS the full markup

  