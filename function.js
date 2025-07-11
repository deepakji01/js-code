// a();
// b();  not working due to laxical envoriorment


//funtion statement
// function a() {
//     console.log("a called");
// }
// a();

// //fucntion expression 
//  var b = function(){
//     console.log("b called");
//  }
//  b();

 //anonymous function  not allowed

// function (){

//  }

//named function expression

//first class function --> first class citizen of javascript

//what is callback function in javascript

// setTimeout(function(){
//     console.log("timer")
// }, 5000);
// function x(y){
//     console.log("x");
//     y();
// }
// x(function(y){
//       console.log("y");
// })

// function attachEventListener() {
//     let count = 0;
//     document.getElementById("clickme").addEventListener("click", function () {
//         count++;
//         console.log("Button clicked " + count);
//     });
// }

// attachEventListener();

// console.log("start");

// setTimeout(function cbT() {
//     console.log("CB SetTimeout");
// },5000);
// fetch("https://www.linkedin.com/in/deepak-gupta-695a01255/")
// .then(function cbF(){
//     console.log("CB Netflix");
// });

// console.log("END");


//dry code
const radius = [3,1,2,4];

// const area = function(radius){
//     return Math.PI *radius *radius;
// }
// const circumferenceof = function(radius){
//     return Math.PI * radius;
// }
// const calculate = function(radius,logic){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumferenceof));

//non dry code

// const calculateArea = function(radius){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// };
// console.log(calculateArea(radius));

// const circumference = function(radius){
//     const output = [];
//     for(let i = 0;i<radius.length;i++){
//         output.push(2* Math.PI * radius[i]);
//     }
//     return output;

// };
// console.log(circumference(radius));

const arr = [5,1,3,2,6];

//double 

//triple

//Binary

// function double(x){
//     return x * 2;
// }
// function triple(x){
//     return x * 3
// }

// const output1 = arr.map(double)
// const output2 = arr.map(triple)
// const output3 = arr.map(function binary(x){
//     return x.toString(2);
// })
// console.log(output1);
// console.log(output2);
// console.log(output3);

//filter function

function isOdd(x){
    return x%2;
}
const output = arr.filter(isOdd);
console.log(output);

const arr1 = [5,1,3,5,6]
const output4 = arr1.reduce(function(acc, curr){
    acc = acc+curr;
    return acc;
},0);
console.log(output4);