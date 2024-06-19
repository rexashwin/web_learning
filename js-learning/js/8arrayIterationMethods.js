// ###### forEach Array Method to Loop
// syntax:
// array.forEach(function(currentElement, index, array) { 
//     /* code */ 
// }, thisValue)

const array = ["js", "ruby", "java", "python", "cpp"]

// forEach using normal function
array.forEach(function (val) {
    // console.log(val);
})

// forEach using ArrowFunction
array.forEach((item) => {
    // console.log(item);
})

// forEach invoking already defined function
function printMe(item) {
    // console.log(item);
}
array.forEach(printMe);     //only function reference

// forEach using all parameters
array.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


// accessing object property in forEach
const arrObject = [
    {
        Name: "javascript",
        FileName: "js"
    },
    {
        Name: "java",
        FileName: "java"
    },
    {
        Name: "python",
        FileName: "py"
    }
]
arrObject.forEach((item) => {
    // console.log(item.FileName);
})


// ###### array FILTER() iterations
const arrNums = [1, 2, 3, 4, 5];
let filteredArray = arrNums.filter(num => num > 2);
// console.log(filteredArray);

// ## use return if using explicite parenthesis scope
filteredArray = arrNums.filter(num => {
    return num > 2
});
// console.log(filteredArray);

// ## method to get newArray values using forEach
const newNums = []
arrNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
// console.log(newNums);



// ###### array MAP() iterations
const arrNumbers = [1, 2, 3, 4, 5]
let newNumbers = arrNumbers.map((num) => num + 10)
// console.log(newNumbers);

// explicite return in MAP()
newNumbers = arrNumbers.map((num) => { return num + 10 })
// console.log(newNumbers);

// chaining in Array iteration methods
newNumbers = arrNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
console.log(`\nchained array method:`);
console.log(newNumbers);



// ###### array.REDUCE() 
const arr = [1, 2, 3, 4, 5];
const initialValue = 0;
// const newReduced = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// console.log(newReduced);


// without initalValue the acc value will be array[0] and the iteration starts from array[1]
// so thus reduces the number of iteration by one
const newReduced = arr.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    return accumulator + currentValue
}, initialValue);
// console.log(newReduced);

// reduce() example :-
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);