// THIS IS DETAILED EXPLANATION OF JAVASCRIPT WITH CODE SNIPPETS

// ARRAY FUNCTIONS .map(), .foreach(), .filter() , .find(), .sort():- 

//----------------------------- 1) .map() :- ------------------------- // 

//to find out the sqaure of all elements in the array 
let array = [1, 2, 3, 4, 5];
let newArray = [];

for(let i = 0 ; i < array.length ; i++){
    newArray[i] = array[i] * array[i];
}
console.log(newArray);

// .map function gives you the new array on the basis of old array and you have to write computational logic

// -------------------------------------------------------- //
// -> USING .map() : -

let array = [5, 10, 15, 20];

let functionForMap = (element) => element * element; // element is going to be every element of the array , element = array[i]
  
let newArray = array.map(functionForMap); 
// // we are passing function as a functional argument, we r passing variable, storing a function in a variable and passing a variable
// // as function is object in js , it will use pass by reference
// // In JS, a function is also a JS object 
// console.log(newArray);
// -------------------------------------------------------- //
// so we can also do this
let newArray = array.map((element) => element * element); // directly passed function as an argument , function inside function
console.log(newArray);

// -------------------------------------------------------- //
// For showing index too :-
let newArray = array.map((element, index) => {
    console.log(index)
    return element * element;
}) ;
console.log(newArray);



//----------------------------- 2) .foreach() :- ------------------------- // 

//For each is basically a for loop only
//There are 2 types of foreach 
// 1) for each with function
// 2) for each with function and index

//loop that runs from left side to right side and it is going to run for every element in array and index increase by 1
//performs action for every element in the array
// foreach does not returns anything it is a void function , will not return a new array like .map 
// Difference b/w .map and .foreach is :- .map() returns an array but .foreach() doesnt returns anything

let array = [1, 2, 3, 4, 5];
array.forEach((element , index)=> {
    // console.log(index);
    element *= element;
    console.log(element); 
});

// console.log("Array is :" ,array);

//----------------------------- 3) .filter() :- ------------------------- // 

// Keeping those element in the array which is greater than 30 in new array 
// .filter() always returns a boolean , .filter() also returns a new array 
//If boolean gives true element will be added to array 
// If boolean gives false element will not be added to array 

let array = [10, 20, 30, 40, 50];
let newArray = array.filter((element)=>element >= 30);
console.log(newArray);


// In Javascript you cant take user input from terminal unlike other languages

//----------------------------- 4) .find() :- ------------------------- // 


//Let you find certain element in the array
// .find() returns the first element which satisfies the condition
let array = [10, 20, 30, 40, 50];
let temp = array.find((value)=>{
    return value > 20;
});

console.log(temp);

//----------------------------- 5) .sort() :- ------------------------- //

// .sort() is used to sort the array in ascending order and descending order
// it returns a new array

let array = [50 , 40 , 30 , 20 , 10, 111];
let sortedArray = array.sort();  
console.log(sortedArray);
// but sometimes it gives wrong output
// the values are sorted as string lexicographical order
// we do not have type safety in javascript, we can store any type of data in array
// it sorts all value according to string value

// -------------------------------------------------------- //

//To sort in Integer Pattern : -
// comparator function is used to sort the array in ascending order and descending order

let array = [50 , 40 , 111, 30 , 20 , 10];
let temp = array.sort((a, b)=>{
    a = Number(a);
    b = Number(b);
    return a - b;
}   );  // a-b is ascending order and b-a is descending order
console.log(temp);

// -------------------------------------------------------- //

//----------------------------- OBJECT DESTRUCTURING ------------------------- //

// Like the name suggests object destructuring is used to destructure the object
// If you will not use objext destructuring then also your code will work but it will be difficult to read, we use this to make our code more readable

let Details = {    // object
    name: "Rohan",
    age: 20,
    address:{
        street: "abc",
        city: "Delhi",
        state : "Delhi",
        pincode: 110001
    },
    passportDetails:{
        passportNumber: 123456789,
    },
    hobbies: ["coding", "reading", "gaming"]
}

//To print passport number 
console.log(Details.passportDetails.passportNumber);

//Destructuring the object
let passportNumber = Details.passportDetails.passportNumber;
console.log(passportNumber);

// -------------------------------------------------------- //

// Now if you want to print the name and age of the person, destructure the object

//Simply we will do this
let myName = Details.name;
let age = Details.age;
console.log(myName, age);

Object destructuring

let {name : myName, age} = Details; // we are destructuring the object, copying the value of name and age from Details object to myName and age variable
console.log( myName, age);

// -------------------------------------------------------- //

//----------------------------- ARRAY MATCHING ------------------------- //

// If we have two array , if their length is not same then we can not match them
// If we have two array , if their length is same then we can match them
// If both array pointing to same reference then they are same

// To check reference
if array1 === array2{
    console.log("They are same");
}

//To check same length
if array1.length === array2.length{
    console.log("They are same");
}

//----------------------------- OBJECT MATCHING ------------------------- //


let obj1 = { name: "Rohan", age: 20 }; // set [name, age]
let obj2 = { name: "Rohan", age: 20 };

function areEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key of Object.keys(obj1)) {
    if (typeof obj2[key] ===  "undefined") {
      return false;
    }
   if(obj2[key] !== obj1[key]){
        return false;
    }
  }
  return true;
}

console.log(areEqual(obj1, obj2));

//----------------------------- MAP AND SET ------------------------- //

// Map is a collection of key value pairs
// Map is a data structure which stores key value pairs
// set is a collection of unique values
// set is a data structure which stores unique values


//MAP : -
//we dont use map in javascript 
let map = new Map();
map.set(1 ,"Rohan");
map.set(2 ,"Alex");
map.set(3 ,"John");
console.log(map);

// map.has(); -> to check if key is present in map or not
// map.entry(); -> give all the key value pairs
// map.keys(); -> to get all the keys
// map.values(); -> to get all the values

// -------------------------------------------------------- //

//SET : -
// we dont use set in javascript
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set);

// set.size(); -> to get number of elements in set
// set.has(); -> to check if element is present in set or not
// set.delete(); -> to delete element from set
// set.clear(); -> to clear all the elements from set
// set.add(); -> to add element in set

//----------------------------- CLASSES IN JS ------------------------- //


class Animal {
    noOfLegs;
    color;
    family;
    sound;

    //In javasctipt we cant have multiple constructor unlike other languages
    constructor(noOfLegs, color, family, sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }

    showAnimal() {
        console.log(`The Animal Belongs To ${this.family}`);
        console.log(this.noOfLegs, this.color, this.family, this.sound);
    }

}
//Adding variable : - 
let animal = new Animal(4, "black", "mammal", "bark");
console.log(animal);
animal.showAnimal(); // accessing showAnimal function
//In javacript we can not have public , private and protected members unlike other languages

// ----------------------------END OF SESSION--------------------------- //
