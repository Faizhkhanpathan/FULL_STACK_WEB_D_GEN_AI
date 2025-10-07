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