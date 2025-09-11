//  globle scope
// function outer() {
//     let balue = 22;
//     function inner() {
//         console.log(balue);

//     }
//     inner();
// }
// outer();


// closer in js
// function first(){
//     let value = 20;
//     function second(par1,par2){
//         console.log(value);
//     }
//     second();
// }
// first()

// use callback function sandwich 
// function sandwich(make, cb) {
//     console.log("take a sandwich then:", make);
//     cb();
// }

// function butter(cb) {
//     console.log("take a butter for sandwich:");
//     cb();
// }

// function grid(cb) {
//     setTimeout(() => {
//         console.log("grid the sandwich");
//         cb();
//     }, 5000); 
// }

// function last(cb) {
//     console.log("this is cooked:");
//     cb();
// }

// // Execution
// sandwich("bread", function () {
//     butter(function () {
//         grid(function () {
//             last(function () {
//                 console.log("your sandwich is ready");
//             });
//         });
//     });
// });


// let salary = [100,200,300,400,500];
// function calculateTen(num){
//     return num*0.1;
// }
// Array.prototype.calculateTax = function (fn){
//     let res = [];
//     for(let i=0;i<this.length;i++){
//         res.push(fn(this[i]));
//     }
//     return res;
// }
// console.log(salary.calculateTax(calculateTen));



// let arr = [2,3,4,5,6];
// function multi(ar){
//     return ar*2;
// }
// Array.prototype.cal = function(fn){
//     let a=[];
//     for(let i=0;i<this.length;i++){
//         a.push(fn(this[i]))
//     }
//     return a;
// }
// console.log(arr.cal(multi));

// iife is used for scope for variables,preventing for the js
// ((name)=>{
//     console.log("what is your name:",name);
// })("deepak")
