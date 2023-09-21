// #################### Numbers ###########################

const score = 400;
console.log(score);
console.log(score.toString().length);
console.log(score.toFixed(2));

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.45;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());     // US Standard
console.log(hundreds.toLocaleString('en-IN'));      // Indian Standard




// #################### Math ###########################

console.log(Math);
console.log(Math.abs(-4));      // -> 4
console.log(Math.round(4.6));   // -> 5
console.log(Math.ceil(4.2));    // -> 5
console.log(Math.floor(4.9));   // -> 5
console.log(Math.min(4, 3, 6, 8));    // -> 3
console.log(Math.max(4, 3, 6, 8));    // -> 8

// generating random number from 1 to 10
console.log(Math.random());
console.log((Math.random()*10));        // this also gives 0 and not 10
console.log((Math.random()*10) + 1);    // by adding 1 solves the problem
console.log(Math.floor(Math.random()*10) + 1);

// generating random num from 10 to 20
const min = 10;
const max = 20;
// //(max - min + 1)) = 11
// //Math.random() * (max - min + 1)) --> for 0.6 will give 6.6 but we want value > 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min);     // adding min to get value > 10




// #################### Dates ###########################

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date()
// let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))