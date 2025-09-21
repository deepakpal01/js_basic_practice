// function simple(){
//     return "function reurn kiya menen witout sdfjkshdf"
// }
// console.log(simple());

const { log } = require("document/lib/lang");

// const { log } = require("document/lib/lang");


// function withParamerter(par1,par2){
//     return par1+par2;
// }
// console.log(withParamerter((44,"44")));  


// let result = (1, 2, 3 + 5);
// console.log(result);  //1,2,8  only 8

// let a = (console.log("Hello"));
// console.log(a);
// let a = (10,4,5,6)
// console.log(a);

// console.log(console.log(10,4,3));

// function test() {
//     return (console.log("Calculating..."), 100);
// }
//    console.log(test());
// console.log((console.log("Calculating..."), 100));
// console.log(console.log("Calculating..."), 100);

// for(let i=0, j=5;i<5;i++,j--){
//     console.log(i,j);
// }
// 0, 5
// 1, 4
// 2, 3
// 3, 2
// 4, 1




// fucntion Expression in js 
// le
// console.log(null)
// console.log(typeof null);

// console.log(undefined);
// console.log(typeof undefined);

// console.log(NaN);
// console.log(typeof NaN);


// console.log(null+null);
// console.log(typeof (null+null));


// callback function in js
// function outer(hello){
//     console.log("hello i am outer fun",hello);   
// }
// function callStack(val1,val2,fun){
//     console.log(val1+val2);

//    return fun(7);  
// }
// callStack(1,2,outer)

// anonimous function 
// (
// function(par1){
//     console.log(par1);  
//     ((par2)=>{
//         console.log(par2); 
//     })(11)
// })(12)


// anonimous ka example no 2
// let sum = function (val,par){
//     return val+par
// }
// console.log(sum(4,5));  //isse function ko anonimous k sath sath function expression bhi kahte h 
// let hello = ()=>console.log("hello"); // it is also fucntion expression in js
// hello()

// let settime = setTimeout(function(kuch ,kro){
// return kuch+kro;
// },4000)


// console.log();


// high order function in js

// function outer(a,b){
//     console.log(a+b);
//     return function innner(c,j){
//         return (c+j);  
//     }
//     innner();
// }
// let res =outer(2,4)
// console.log(res(4,6));



// call back funcion 
// function print() {
//     console.log("hello i am deepak");
// }
// function cal(a,b,fun){
//     console.log(a+b);
//     return fun();    
// }
// cal(5,6)

// function operate(fn, x, y) {
//     return fn();   // fn ek function hai jo argument me aaya
// }

// function add(a, b) {
//     return a + b;
// }

// console.log(operate(add, 5, 3));


// proxy in js
// let obj ={
//     nam1:"deepak",
//     age:21,
//     address:"moradabad",
//     formate:"bekar",
// }


// callback function 
// function outer(par1,par2){
//  console.log(typeof par1+par2); 

// }
// function inner(val1,val2,fun){
//     console.log(val1+val2);

//     return fun({},{});    
// }
// inner("deepak","kumar",outer);

// console.log(undefined+undefined);
// console.log(NaN+NaN);
// console.log(typeof NaN);

// let arr = [1, 2, 3, 4, 5, 6]; // 
// let map = arr.map((val) => val * 2);

// console.log(map);

// let filter = arr.filter((val) => {
//     if (val % 2 === 0) {
//         return val;
//     }
// });

// console.log(filter);


// let reduce = arr.reduce((acc, val) => acc + val, 0);
// console.log(reduce);

// console.log({}=={});
// console.log([]==[]);

// rest args in js 
// let datas = {
//     stats: 300,
//     data: {
//         name: "deepak",
//         age: 21,
//         address: {
//             city: "delhi",
//             streett: "werewrw erwer",
//         },
//     },
// };
// let {stats} = datas;
// console.log(stats);


// let response = {
//     status: 200,
//     header: {
//         type: "bikas",
//         bersion: 1.2,
//     },
//     body: {
//         name: "hello",
//         age: 33,
//         address: {
//             ster: "kuch bhi ho sakta h",
//             city: "delhi",
//         },
//         footer: {
//             type: "jeson",
//             bersion: 2.2,
//             city:"delhi sdfsdhf",
//         },

//     },
// }
// let {status} = response
// console.log(status);
// let {bersion} = response.header;
// // console.log(bersion);

// // let {footer} = response.body;
// let{body:{footer:{type,city}}}= response;
// console.log(type,city);

// function sum(...args){
//     let Sum = 0;
//     for (let element of args) {
//        Sum +=element; 
//     }
//     return Sum;
// }
// let res = sum(1,2,3,4,5,6,7,7,8,9);
// console.log(res);


// find the words in string 
// function str(s){
//     if(s=="") return "plz eneter the string any words:"
//     let obj = {};
//     let st = s.split("");
//     for (const key of st) {
//         obj[key]=(obj[key]||0)+1
//     }
//     return obj;

// }
// console.log(str("heoif sdfhsidf dflh"));

// how to check the tempreture and convert the temperacture

// find the number is armstrong or not
// function arm(num) {
//     let sum = 0;
//     let store = num;
//     while(num>0) {
//         let rem = num % 10;
//         sum += rem ** 3;
//         num = Math.floor(num / 10);
//     }
//     if (store ==sum)return "armstrong";
//     else  return "not armstrong"
//     }
    
// console.log(arm(13));


// number of pyramid
// char kitni baar print hua h 
// function char(str){
//     let obj = {};
//    let str1 = str.split("");
//     for(let key of str1){
//      obj[key]  = (obj[key]||0)+1;
//     }
//     return obj;
// }

// console.log(char("hlels dhf"));


// function perfect(num){
//     let numq=num;
//     let sum = 0;
//     let diviser = [];
//     for(let i=1;i<num;i++){
//         if(num%i==0){
//         diviser.push(i);
//         sum+=i;        
//         }
//     }
//     if(sum==numq) return "this is a perfect number"
//     else return "not perfect";
//     return diviser
// }
// console.log(perfect(7));

// how to find the index of string in array

// function findingindex(str){
//     let arr = [];
//     let str1 = str.split(" ");
//     for(let i=0;i<str1.length;i++){
//         // arr.push(str1.indexOf("hello"));
//         if(str1[i]==="hello"){

//         } 
//     }
//     return arr;
// }
// console.log(findingindex("hello i am deepak and hello going eith hello"));

