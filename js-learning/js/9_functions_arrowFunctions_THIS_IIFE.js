function simpleFuntion() {
    console.log("this is a simple function");
}
simpleFuntion();



// ##FUNCTION WITH PARAMETER    //num1 and num2 are called parameters
// function addTwoNumbers(number1, number2){       
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("addTwoNumbers: ", result);



// ##ANOTHER WAY TO CREATE AND USE FUNCTION
// console.log(sum(2,3)) //ERROR: cannot access function before initialization if declared like this
// const sum = function (a, b) {
//     return a + b
// }
// ##arrow function
const sum = (a, b) => {
    return a + b
}
console.log(sum(2, 3))



// ##PASSING EMPTY PARAMETER
function loginUserMessage(username) {
    // if (username === undefined) {
    if (!username) {
        console.log("PLease enter a username");
        // return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage()) // empty parameter will give undefined  //



// ##USING REST OPERATOR IN FUNTION FOR TAKING INFINITE PARAMETER
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 700, 2000)) // val1=200  val2=400  num=[500, 700, 2000]  //



// ##PASSING OBJECT IN A FUNCTION
// const user = {
//     username: "hitesh",
//     price: 199
// }
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// --PASSING OBJECT DIRECT AS ARGUMENT
handleObject({
    username: "Sam",
    price: 249
})



// ##PASSING ARRAY IN A FUNCTION
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    // return getArray
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


// ## THIS -----
// ## USE OF THIS IN FUNCTION USING OBJECT
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "sam" //changing context for user function
user.welcomeMessage()



// ## THIS doesn't WORKS WITH FUNCTIONS ALONE
// function chai(){
//     let username = "hitesh"
//     console.log(this)            //global object
//     console.log(this.username)   //undefined
// }
// chai()

// const chaiVarFunc = function () {
//     let username = "hitesh"
//     console.log(this);  //undefined
//     console.log(this.username);  //undefined
// }
// chaiVarFunc()


// ## this in ARROW FUNCTION
// Arrow functions do not have their own "this" value
const chaiArrowFunc = () => {
    let username = "hitesh"
    console.log(this);  //{} empty object
    console.log(this.username);  //undefined
}
chaiArrowFunc()



// ## ARROW FUNCTION
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// ## IMPLICIT RETURN ARROW FUNCTION
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// RETURNING OBJECT IN IMPLICIT RETURN USING PARENTHESIS()
const addTwo = (num1, num2) => ({ username: "hitesh" })

console.log(addTwo(3, 4))



// using ARROW func in FOREACH loop
const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() => {console.log()})
myArray.forEach(num => console.log(num));



// ## IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// named IIFE
(function chai() {
    console.log('DB CONNECTED');
})();   // semicolon is mandatory for defining another IIFE immediatly

// Arrow IIFE
(() => {
    console.log('DB CONNECTED TWO');
})()

// passing parameter in IIFE
((name) => {
    console.log('DB CONNECTED TWO ${name}');
})('hitesh')