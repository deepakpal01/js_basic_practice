//        javascript
// syncronous language
// single thread language
// dynamic typeed language

// aajiel 
// workers 
 
// mark and sweep

//    harraki m dhunta rahta h pahle aapne parent then unke parent then ...  then global nhi h to refrence errror 
//    isse bolte h kbhi haar na manna or fir bhi isses bolte h prototype biaebhiour of javascript.


// let a =10;
// const b= 30;
//  function a(){
//     console.log(a);
//     let c= 20;
//     console.log(c); 
//  }
// a()
// console.log(a);

// curring function in js
// const curryUnaryFunction = (a) => (b) => (c) => a + b + c;

// // console.log(curryUnaryFunction(1));       
// // console.log(curryUnaryFunction(1)(2));    
// console.log(curryUnaryFunction(1)(2)(3));
 

// function userDetails(username) {
//   if (username) {
//     console.log(salary); // undefined due to hoisting
//     console.log(age); // ReferenceError: Cannot access 'age' before initialization
//     let age = 30;
//     var salary = 10000;
//   }
//   console.log(salary); //10000 (accessible due to function scope)
//   console.log(age); //error: age is not defined(due to block scope)
// }
// userDetails("John");

// let counter = 1;
// switch (x) {
//   case 0:
//     let name;
//     break;
//   case 1:
//     let name; // SyntaxError: Identifier 'name' has already been declared
//     break;
// }    //refrence error

// let counter = 1;
// switch (x) {
//   case 0: {
//     let name;
//     // code for case 0
//     break;
//   }
//   case 1: {
//     let name; // No SyntaxError
//     // code for case 1
//     break;
//   }
// }

// (function () {
//   var message = "IIFE";
//   console.log(message);
// })();
// console.log(message)

// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);

// !(function () {
//   var message = "IIFE";
//   console.log(message);
// }());
// console.log(message);

// console.log(1||x>=10);


// create a function 
// function abc(){
//     return "kuch hvihf sdfhsdh";
// }
// console.log(abc());

// function expretion
// let fun = function abc(){
//     return "kuch hvihf sdfhsdh";
// }
// console.log(fun);
// console.log(fun());

// pure function
// pure function is always  same input pr same output return krta h 
// or ye global variable me koi modificaion nhi krta 
// let a =10;
// (() => {
//    return console.log(a+5); 
// })();

// console.log(a);

// // example no 2
// function abc(a,b){
//     return a+b;
// }
// console.log(abc(5,6));
// function prin(){
//     console.log(10); 
// }
// prin()
// console.log(a);

// console.log(prin);
// console.log(pr());


// callstack function in js




// proxy in js
// it is use to private the obj .
// let man= {
//     name1:"deepak",
//     age:21,
// lastName:"kumar",
// and:"eneret kuch new"
// }

// let person = new Proxy(man,{
//     set(man,pro,val){
//         if(pro in man){
//             return Reflect.set(man,pro,val);
//         }
//         else{
//             throw new Error("you can not change this object");
//         }
//     }
// })

// person.kuch="isdofhds";
// console.log(person);
// console.log(person.join);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I'm a Promise!");
//   }, 5000);
// });
// promise.then((resolve)=> console.log(resolve));
// promise.catch((error)=>console.error(error));
// promise.finally(()=>console.log("done"))

// (() => {
//     (() => {
//         console.log("Inner IIFE");
//     })();
//     console.log("Outer IIFE");
// })();