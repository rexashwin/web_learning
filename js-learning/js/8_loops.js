// Loops can executes a block of code as long as a specified condition is true

// ######## for loop

// for loop syntax:
// for(initialization; condition; increment) {
//     // Code to be executed
// }

for (let i = 0; i < 5; i++) {
  // console.log(i);
}



// ######## while loop

// while loop syntax:
// initialization
// while (expression) {
//   // code
//   increment
// }

let i = 0;
while (i < 5) {
  // console.log(i);
  i++;
}



// ######## do...while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.

// initialization
// do {
//     // code
//     increment
// } while(condition)

let j = 0;
do {
  // console.log(j);
  j++;
} while (j < 5);



// ####### for...of loop iterates over iterable objects (like arrays, strings, maps, sets).

// for...of loop syntax:
// for (variable in iterable) {
//   // Code to be executed
// }

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    // console.log(element);    // for..of will give values of array (not just index)
}

// ## MAPS iteration using for...of loop
const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('IN', "India")    // map's key can be created one time only next time it will just update the value
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// ## OBJECTS cannot be iterated using for...of loop
const obj = {
  game1: "NFS",
  game1: "GTA",
}
// for (const objVar of obj){      // Error: obj is not iterable
//   // console.log(objVar);
// }



// ###### for...in loop iterates over the enumerable properties of an object

// for...in loop syntax:
// for (variable in object) {
//   // code block to be executed
// }

const object = {a: 1, b: 2, c: 3};
for (const key in object) {
    console.log(`${key}: ${object[key]}`);
}

// ##ARRAY iteration using for..in will give the index as var (not its value)
const programming = ["js", "rb", "py"]
for (const key in programming) {
    console.log(key);
    console.log(programming[key]);
}







// break: When encountered, it exits the loop immediately, skipping any remaining iterations.
// continue: Skips the current iteration and continues with the next iteration. It does not terminate the loop.