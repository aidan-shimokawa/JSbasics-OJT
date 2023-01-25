2 == '2'
// true
'he' == 'she'
// false
2 === 2
// true
'true' == true
// true
true === true
// true
'true' != true
// true
'true' !== true
// true
// 3 different variables 
//var- has a global scope
//let- block scope
//const- block scope, permanet 

const pets = () => {
    let cat = 'cat'
const dog = 2 
console.log(  2 + dog)

}

// pets()

//map method
// const pets= [1, 2, 3];

// // add string after each final participant
// const announcements = pets.map(member => {
//     // map() - creates a new set of array
//   return member += 1;
// })

// console.log(announcements);

// call back functions
// let name = 'John'
// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }
  
//   function processUserInput(callback) {
//     const name = prompt("Please enter your name.");
//     callback(name);
//   }
// For loop 
// const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let text= "";
// for (let i = 0; i < someArray.length; i++) {
//   text += someArray[i] + " ";
// }
// console.log(text)
// concat
//const someArray = [1, 2, 3];
// const someArray2 = [ 4, 5];
// let  result = someArray.concat(someArray2);
// console.log(result) 
const color  = {};
color['somecolor'] = {color:'black'};
color['somename'] = {name:'John Doe'};

const  age = {};
 age['someage'] = {age : '22'};

const returnedTarget = Object.assign( color, 'somename', 'somecolor', age);

console.log(color.somecolor, color.somename, age.someage);
//object.keys
// const color = {
//     color: 'black',
    
//     age: '22'
// };
// color['adress'] = {adress:'123 TestAdress'};

// const desc= {
//      name: 'john doe',
// };

// const returnedTarget = Object.assign( color, desc, color.adress);



// console.log(Object.keys(color))

//for..in..loop
// const color = {
//     color: 'black',
    
//     age: '22'
// };
// color['adress'] = {adress:'123 TestAdress'};

// const desc= {
//      name: 'john doe',
// };

// const returnedTarget = Object.assign( color, desc, color.adress);


// for (const property in color) {
//   console.log(`${property}: ${color[property]}`);
// }
// for....of..loop
// const numbers = [
//     {
//     num: 1
//     },
//     {
//     num: 2
//     },
//     {
//     num: 3
//     }
//    ];
   
//    for (const property of numbers) {
//      console.log(property["num"]);
//    }
// for loop 
// let str = 0

// for (
//     let i = 0; // 10 - declare
//     i <= 9;  // 10 - condition // if true then increment if not then end
    
//     i++ // increment ----^ +1
// ) 
// {
//   str = str + i; // (36 = 36 + 9) = 45 
//   console.log(str);
// }
//sets
// const name = new Set(["john doe", "jane doe"]);


//  console.log(name.has("john doe"&&"steven"))
//  console.log(name.delete("john doe"))
//  console.log(name.has("john doe"))
// 
// map
const name = new Map()
name.set("name","john doe") 

const values = [...name.values()]
console.log(values)
console.log(name.delete("john doe"))
console.log(values.includes("john doe"))

//async programming is a technique which allows the program to carry out a large task while still being able to respond to other tasks.
// Call back hell is when multiple callbacks are stacked onto each other from up to down until the code becomes too complicated to read.
//A promise represents either an unkown or known variable, and can give us an idea of the success rate of an asynchronous system's success rate.
//pending: the operation with a promise hes neither been provened to be succedful or a failure.
//fulfilled: operation with a promise is succesful
//rejected: operation with a promise failed
//asynchronous function is a function that waits for data, and is able to carry out operations simultaneously.

