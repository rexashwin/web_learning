// document.querySelector("elementname"); 
// document is used to access html and queryselector to store it in var

let btn = document.querySelector("input");
btn.addEventListener("click", function () {
    document.querySelector("h1").style.color = "red";
})
document.querySelector("input").addEventListener("click", function () {
    document.querySelector("h1").style.color = "green";
    document.querySelector("input").style.backgroundColor = "red";
})

// ################### 
// this will fetch all the given elements and store it in a Array
// document.getElementsByTagName("elementname");
// document.getElementsByTagName("elename").style.color="red";

// ################### ways of getting elements
// document.getElementsByTagName("elementname");
// document.getElementById
// document.getElementsByClassName

// ################### to change element HTML
// document.querySelector("ele").innerHTML = "good bye";
// ################### to change element CONTENT
// document.querySelector("ele").textContent = "good bye";

// ################### add classes to element
// document.querySelector("elementname").classList.add("classname");
// document.querySelector("elementname").classList.remove("classname");
// document.querySelector("elementname").classList.toggle("classname");

// ################## attributes
// document.querySelector("ele").attributes; //this will show all the attributes given to it
// document.querySelector("ele").getAttribute("href"); //this will bring the particular value of that href
// document.querySelector("ele").setAttribute("href", "https://something.io"); //this will bring the particular value of that href


// ########################ALERT AND PROMPT---------
// var myName="Hi, I'm angela.";
// alert(myName);
// myName=prompt("what's your name??");
// alert("hello "+myName);


// #################### higher order function
// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }
// console.log(calculator(4, 3, add));
// console.log(calculator(4, 3, subtract));
// console.log(calculator(4, 3, multiply));
// console.log(calculator(4, 3, divide));

// #################### object and method
// var houseKeeper1 = {
//     yearofexperience: 3,
//     name: "jimmy",
//     workdone: ["toilet", "bathroom"],
//     clean: function () {       //###########this is method creation
//         console.log("cleaning");
//     }};
// var houseKeeper2 = {
//         yearofexperience : 5,
//         name : "gutka",
//         workdone : ["kitchen", "bathroom"]
//     };
// console.log(houseKeeper1);
// console.log(houseKeeper1.name);
// houseKeeper1.clean();    //#############this is method call
// console.log(HouseKeeper2);

// #################### constructor function -- factory function
// function HouseKeeper(yearofexperience, name, workdone) {
//     this.yearofexperience = yearofexperience;
//     this.name = name;
//     this.workdone = workdone;
// }
// var houseKeeper1 = new HouseKeeper(9, "tom", ["bedroom", "toilet"]);
// var houseKeeper2 = new HouseKeeper(12, "jane", ["kitchen", "bathroom"]);
// console.log(houseKeeper1); 
// console.log(houseKeeper2);

// #################### use of method with constructor function
// function HouseKeeper(yearofexperience, name, workdone) {

//     // properties
//     this.yearofexperience = yearofexperience;
//     this.name = name;
//     this.workdone = workdone;

//     // method
//     this.clean = function (){
//         console.log(this.name + " is cleaning!");
//     }
// }
// var houseKeeper1 = new HouseKeeper(9, "tom", ["bedroom", "toilet"]);
// var houseKeeper2 = new HouseKeeper(12, "jane", ["kitchen", "bathroom"]);
// console.log(houseKeeper1);
// console.log(houseKeeper2);
// // calling method
// houseKeeper1.clean();


// ################### event -- used to get the event details
// document.querySelector("input").addEventListener("click" ,  function (event){
//     console.log(event);
// });

// document.querySelector("input").addEventListener("click" ,  function (evt){
//     console.log(evt);
// });

// document.querySelector("input").addEventListener("click" ,  function (e){
//     console.log(e);
// });


// ################### callbacks
// function add(type, callback){
//     var pressed = {
//         eventType: "keypress",
//         keypressed: "p",
//         duration: 2
//     }

//     if(pressed.eventType === type){
//         callback(pressed);
//     }
// }

// add("keypress", function(event){
//     console.log(event);
// })

