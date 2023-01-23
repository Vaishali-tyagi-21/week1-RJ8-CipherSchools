// THIS IS DETAILED EXPLANATION OF JAVASCRIPT WITH CODE SNIPPETS


// In javascript , we can declare a variable in 3 ways :
// 1) By using var 
// 1) By using let
// 1) By using const

// -------------------------------------------------------- //

// const myName = "john" ;
// console.log(myName)
// myName = "Alex"
//this will throw error because myName is pointing towards John, const doesnt allow to change its reference it is pointing to

// [John][Alex][][][][][]
//  myName

// -------------------------------------------------------- //

// const myName = [];
// console.log(myName)
// myName.push("john");
// console.log(myName);

// const myName = []; this line will give error as in const we cant redeclare variables 
 
// ['[John]'][][][][][][]
//   myName
// here we created an empty array & assigned memory location 
// and we are using that memory location only so it is pointing towards john only 

// -------------------------------------------------------- //

// let keyword

// let myName = "John";
// console.log(myName);
// myName = 5; 
// console.log(myName); 
// this is accepted in let, you can change or modify a variable in let 
// we can also change data types in javascript it is accepted

// let myName = "Alex"
//this redeclaration is not accepted in let

//Strictness Chart -> Char > let > var 

// -------------------------------------------------------- //

// var myName = "John";
// console.log(myName);
// myName = "5"
// console.log(myName);
// var myName = "Taylor" 
// console.log(myName);

// here we are declaring , updating and redeclaring myName variable and is accepted in Var

// -------------------------------------------------------- //

// 1) Var variables are globally scoped, i.e present in entire scope of js file
// 2) let and const variable are block scoped , i.e they work inside the block only like other languages
// 3) But, in journey of react we will not deal with var , we will deal with let and const only

// -------------------------------------------------------- //

// {
//     var num = 5;
// }
// console.log(num); 

//var is a global scope (also function scope)

// -------------------------STRING INTERPOLATION------------------------------- //

// let firstName = "Shantanu";
// let lastName = "Shubham";

// console.log(firstName + " " + lastName); 

// let fullName = firstName + " " + lastName
// console.log(fullName);
//The memory management for this statement below, it makes more memory
// ["shantanu"]["Shubham"][" "]["Shantanu "]["Shantanu Shubham"][][]
//   firstName  lastName                         fullName

// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);
// Memory management when we use backtick `` is directed now
// ["shantanu"]["Shubham"]["Shantanu Shubham"][][]
//   firstName  lastName       fullName

// -------------------------Default Params------------------------------- //

// Two type of functions in javascript 
// 1) Normal function
// 2) Arrow function


// 1)Normal funciton
// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// } 

// console.log(addTwoNumbers(1, 2));

// -------------------------------------------------------- //

// 2) Arrow function
// let addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// };
// console.log(addTwoNumbers(1, 2));

// we can write Arrow function in different way also : -
// let addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers(1, 2));

// -------------------------------------------------------- //


// Concept of default arguments (Default parameter passing)

// function addTwoNumbers(num1, num2){ //can add default value here as num2 = 5 , but if second value is passed default will not be evaluated then
//     console.log(num1);
//     console.log(num2); // It will take second number as undefined and undefined is a type of data type in java script
//     return num1 + num2; // It will return NaN(not a number)
// } ;
// console.log(addTwoNumbers(1)); // only one argument is being passed here

// ----------------------REST AND SPREAD OPERATOR---------------------------------- //

// Rest and spread operator are applicable in arrays and objects in javascript

// let array = [5, 10, 15, 20, 25];

//  Spread operator (spread meaning is to spoil something and to crumble in bigger space , spreading or expnading and to take more space)

// Spread -> ... (denoated by 3 dots)
// console.log(array);
// console.log(...array); 

// [[5, 10, 15, 20, 25]][][][][][][][][][]
//      array
// ...array , spread operator takes out elements from array ... breaks the array bracket and stores the values to new location and assign that to array

// let array = [5, 10, 15, 20, 25];

// Make a copy of array , make a copy of array using spread operator

// let newArray = [...array , 30,35,40] //copied array to new array and can adding few more elements, we can also add before [100,200, ...array]
// console.log(array);

// [[5, 10, 15, 20, 25]][[5, 10, 15, 20, 25, 30, 35, 40]][][][][][][][][]
//      array               newArray


// -------------------------------------------------------- //


// Rest -> ... (denoated by 3 dots)
//This is usually used in functions

// let testFunction = (...args) => {
//     console.log(args);
// }

// let maximumOfTwoElements = (num1, num2) => Math.max(num1, num2);
// let maximumOfThreeElements = (num1, num2, num3) => Math.max(num1, Math.max(num2, num3));

// This will print the array of all the arguments that is passed, you can take out elements using array index syntax and can find 
// let maxOfNumbers = (...numbers) =>{
//    console.log(numbers)
// } 
// maxOfNumbers(1,2,3,4,5,6,7,8,9,10); 


//SOME DSA FOR PRINTING MAXIMUM FROM ALL 
// let maxOfNumbers = (...numbers)=>{
//     let maximum = Number.MIN_VALUE;
//     for (let number of numbers) {
//         maximum = Math.max(maximum, number);
//     }
//     return maximum;
//  } ;
//  console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));

// -------------------------------------------------------- //

// Spread Operators In Terms Of javascript Objects 

// Spread operators For Object

// let object = {

//     name : "john",
//     age : 24,
//     city: "New York",
// }; 

// // let object2 = object ; // this is not a copy of obj, it is just a reference to obj, if we change obj2 it will also change obj
// let object2 = { ...object, country:"USA", favsong: "Yes" }; // all values of object is copied to object2
// we can also override name in object2 example : - let object2 = { ...object, name:"Name" };
// console.log(object2);

// -------------------------------------------------------- //

// object inside object
// let object = {

//     name : "john",
//     age : 24,
//     address:{
//         city: "New York",
//         state: "NY",
//         country: "USA",
//     }
// }; 

// let object2 = { ...object };
// // let object2 = JSON.parse(JSON.stringify(object)); // this is called deep cloning, it will copy all the values of object to object2
// object2.address.city = "Newark"; // changed object to Newark
// console.log(object2); 
// console.log(object); // will also give the same output this is called shallow cloning, address is not copied it is just a reference to object


//In case of arrays , every array is already deep cloned, so if we change any value in array it will not change the original array


// ----------------------------END OF SESSION--------------------------- //

