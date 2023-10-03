// singleton
// Object.create


const mySym = Symbol("key1")
// //object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",  // must use square brackets for symbol else it will be treated as a string  //
    age: 18,
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// //accessing object property
console.log(JsUser.email)
console.log(JsUser["email"])    // quotation should be used because property name is treated as a string  //
console.log(JsUser["full name"])    // this type of property name cannot be accessed using dot notation  //
console.log(JsUser[mySym])      // symbol should not be accessed using quotation or dot notation  //


// Object.freeze(JsUser)    // a frozen object cannot be changed(add, remove, update) further //
// JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser);


// //adding a function in an Object
// JsUser.greeting = function () {
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function () {
//     console.log(`Hello JS user, ${this.name}`);     // this keyword refers to an object/function/class/global  //
// }
// console.log("function 1 -> " + JsUser.greeting());     // cannot access a object funtion with parentheses  //
// console.log("function 2 -> " + JsUser.greetingTwo());


// //Object Nesting
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log("nested -> " + regularUser.fullname.userfullname.firstname);


// //Object Merge
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj4 = { obj1, obj2 }
// console.log("method 1 -> " + obj4);

// const obj5 = Object.assign({}, obj1, obj2, obj4)
// console.log("method 2 -> " + obj5);

const obj6 = { ...obj1, ...obj2 }
console.log("method 3 (shreding) -> " + obj6);


// //Array-Object Nesting
const users = [
    {
        id: 1,
        email: "a@mail.com"
    },
    {
        id: 2,
        email: "b@mail.com"
    },
]
console.log("nested array-object" + users[1].email);


console.log("only object keys -> " + Object.keys(JsUser));
console.log("only object values -> " + Object.values(JsUser));
console.log("arrays of keys and values -> " + Object.entries(JsUser));
console.log("is key named 'email' present in obj JsUser -> " + JsUser.hasOwnProperty('email'));


// //Destructure object
const course = {
    courseInstructor: "hitesh"
}
const { courseInstructor} = course
console.log(courseInstructor);
const { courseInstructor: instructor } = course
console.log(instructor);


// ## JSON example ##
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]