// const { log } = require("document/lib/lang");

// const { log } = require("document/lib/lang");

// Multiplication Table using for loop
// function table(num){
//     for(let i=1;i<11;i++){
//         let res = num*i;
//         console.log(`${num} is multipli by ${i} =`,res);   
//     }
// }
// table(5);

// Factorial find krna using cunstructor
// function fac(num){
//     if(num==1){
// return 1;
//     }
//  return num*fac(num-1);
// }
// console.log(fac(5));

// Factorial find krna using for loop
// function Factorial(num) {
//     let sum = 1;
//     for (let i = num; i > 1; i--) {
//         sum *= i;
//     }
//     console.log(sum);

// }
// Factorial(6)

// Sum of Natural Numbers using loop
// function sum(n){
//             let sum=0;
//     for(let i=0;i<=n;i++){
//         sum+=i;

//     }
//     return sum;
// }
// console.log(sum(5));

// Reverse a Number using reverse method 
// function reverseNumber(num) {
//     let res = 0;
//     while (num > 0) {
//         let rev = num % 10;
//         num = Math.floor(num / 10);
//         res = res * 10 + rev;
//     }

//     return res;

// }
// console.log(reverseNumber(123))

// Print Even Numbers using for loop
// function evenNumber(num) {
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }
// evenNumber(50)

// Count Digits in a Number using loop
// function countDigit(num) {
//    if (num===0) return 1;
//    let count = 0;
//    while (num>0) {
//     num=Math.floor(num/10);
//     count++;
//    }
//    return count;
// }
// console.log(countDigit(123));


// Fibonacci Series for using for loop
// function Fibonacci(num) {
//     let a=0,b=1,temp;
//     if(num===0)return 0;
//     for(let i=2;i<num;i++){
//         temp=a+b;
//         a=b;
//         b=temp;
//     }
//     return b;
// }
// console.log(Fibonacci(6));

// Sum of Digits 
// function sumDigit(num) {
//     let sum = 0;
//     if (num == 0) return 0;
//        while (num>0) {
//          let rem = num % 10;
//         num = Math.floor(num / 10);
//         sum = rem + sum; 
//        }       

//     return sum;
// }
// console.log(sumDigit(1111));


// Check Prime Number
// function prime(num){
//     if(num==0) return 0;
//     for(let i=2;i<num;i++){
//         if(num%i==0) return "this is not prime";
//     }
//     return "this is prime"
// }
// console.log(prime(2));

// Pattern Printing (Pyramid)
// function Pattern(num) {
//     for (let i = 1; i < num; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "*";
//         }
//         console.log(row);
//     }
// }

// Pattern(6)

// fibona serice
function fibona(num){
    let a=0,b=1,temp;
    if(num == 0) return 0;
    for(let i=2;i<num;i++){
        temp = a+b;
        a=b;
        b=temp;
    }
    return b;
}
console.log(fibona(8));
