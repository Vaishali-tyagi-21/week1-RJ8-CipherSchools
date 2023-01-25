// THIS IS DETAILED EXPLANATION OF JAVASCRIPT WITH CODE SNIPPETS

// Promise is used to resolve or get rejected
// Promise is a class in JavaScript
// constaructor (function) , it accepts a function as an argument

// let myPromise = new Promise((fullFilled , notFullFilled)=>{ // fullFilled and notFullFilled are functional variables and functions itself
//     let num1 = 10;
//     let num2 = 20;
//     let sum = num1 + num2;
//     if (sum > 30) { // if sum is greater than 30 then promise is fullfilled
//         fullFilled();
//     } else {
//         notFullFilled();
//     }
// }); 

// // myPromise.then().catch().finally();

// // myPromise.then(); // this will only happen when your promise is fullfilled
// // myPromise.catch(); // this will only happen when your promise is not fullfilled
// // myPromise.finally(); // this will happen in both cases
// myPromise.then(()=>{
//     console.log("Promise is fullfilled");
// }).catch(()=>{
//     console.log("Promise is not fullfilled");
// });


//--------------------------------------------------------------//

//WEIRD BEHAVIOUR OF JAVASCRIPT
// function addTwoNumbers(num1 , num2) { // 2, 3
//     //setTimeout is afunction that takes two arguments the function and the waiting time
//     let sum = 0;
//     setTimeout(() => {
//     console.log(num1 + num2); 
//     sum = num1 + num2;
//     }, 5000);
//     console.log("Inside addTwoNumbers function");
//     return sum; 
// }
// // it will give 0 as answer, then wait for 5sec and give answer 5 , value of sum is becoming 5 after it is returning
// console.log(addTwoNumbers(2,3)); 
// // expected behaviour that sum is going to initialize as 0 , it will wait for 5sec and then give Inside addtwonumbers and return sum
// // Javascript does not likes waiting and it will not wait at all -> Weird behaviour

//--------------------------------------------------------------//

// Now executing same thing with the help of Promises:-

function addTwoNumbers(num1, num2){
    return new Promise((fullFilled , notFullFilled)=>{ 
        setTimeout(() => {
            console.log("Inside set Timeout"); 
            fullFilled(num1 + num2);
            }, 5000);
            // notFullFilled(new Error("An error occurred")) // we remove this because we want promise to be fulfilled in ever scenario (after 5 sec)
    }); 
}

addTwoNumbers(10,5)
    .then(()=>{
    console.log("Promise is fullfilled");
    }).catch(()=>{
    console.log("Promise is not fullfilled");
    });

// in this case , the promise is first not fulfilled and then it is getting fulfiled
// so what we wanted that num1+num2 after 5sec 
// we solved the problem by writing better logic is that we made the promise fulfilled after 5sec
