// ############################## functions
function simple() {
    console.log("this is a simple function");
}
simple();

function withParameter(age) {
    let days = age * 365;
    console.log("you have lived " + days + " days,,");
}
let age = prompt("age");
withParameter(age);

function withReturn(age) {
    return age * 52;
}
console.log("And " + withReturn(age) + " weeks!");



function greet(name) {
    console.log('hello ' + name);
}
greet('aman');
greet('atul');
greet('ashwin');


function greetThank(name, thankNote = ', Thank you!') {
    console.log('hello ' + name + thankNote);
}
greetThank('aman');
greetThank('ashwin', ', get out!');




// // 3################ factories functions
// function createCircle(radius){
//     return {
//         // radius: radius,
//         radius,
//         draw: function(){
//             console.log('draw function');
//         }
//     }
// }
// const circle = createCircle(1);
// console.log(circle)



// // ############### constructor function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }
// const anotherConstructor = new Circle(1);