// // ############### array
// let marks = [34, 23, 24, 93 ,73, 25];
// const fruits = ['Orange', 'Apple', 'Pineapple'];
// const mixed = ['str', 89, [3, 5]];

// const arr = new Array(23,123,21, 'Orange');
// // console.log(marks);
// // console.log(mixed);
// // console.log(fruits[1]);

// // console.log(arr.length);
// // console.log(Array.isArray('dfdf'));  // return array is true or false
// arr[0] = 'harry';
// let arrelement = arr[0];
// // console.log('element :', arrelement);
// // console.log(arr);

// let value = marks.indexOf(73);
// // console.log(value)

// // Mutating or Modifying arrays
// // marks.push(3564);
// // marks.unshift(1009);
// // marks.pop()
// // marks.shift()
// // marks.splice(2, 3);
// // marks.reverse()
// let marks2 = [1, 2,3, 7]
// marks = marks.concat(marks2);
// // console.log(marks);


// // ------------array
// let array = ['name1', 'name2'];  
// array[2] = 'name3';
// console.log('this is array ' + array);
// // an array in js is object
// // array in js can be dynamic
// array[3] = 34;
// console.log('this is array ' + array);
// console.log(array.length);

// array.push('another element added in the array'); //this will add and element at last 
// console.log(array);
// array.pop(); //this will remove the last element
// array.unshift('added on first'); //this will add element in first on array
// console.log(array);
// console.log(array.indexOf('name1'));

// const film = array.indexOf('name2');
// console.log(array[film]);
// console.log(film);

// console.log(array);

// //  ################################ finding elemnt in array
// arr.includes(element)


// // ############### objects 
// let myobj = {
//     'first name': 'harry', 
//     channel: 'CodeWithHarry',
//     isActive: true,
//     marks: [1,5,3,6]
// }

// console.log(myobj)
// console.log(myobj['channel'])
// console.log(myobj.channel)

// var housekeeper1 = {
//     years: 12,
//     name: "jane",
//     work: ["br", "k"]
// }
// console.log(housekeeper1);
// console.log(housekeeper1.name);



// ########## build in functions for iteration
let arr = [2,5,6,4,2,3];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});

let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}