// // ########## string concatination
console.log('hello this is a string ' + 'concatination');

let name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);


console.log('in this way you can write it\'s in js');           //backticks are used to add ' and "
console.log("in this way you can write it's in js");


// ###########  different data types conbined = string
let string = "hello";
let number = 56;
const combined = string + number;
console.log(combined);
console.log(typeof combined);
console.log(typeof number);


// ########### properties and methods
let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";


html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(3));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes(' fg'));
console.log(html.substring(1,6));
console.log(html.slice(0, 4))
console.log(html.split('>'));
console.log(html.replace('this', 'it'));


// ########## template literals
let fruit1 = 'Orange\'';                
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;
console.log(myHtml)
// document.body.innerHTML = myHtml;


// ################# string slice - uppercase -  lowercase
string="this is a string";
console.log(string.slice(0,7));
console.log(string.slice(7,string.length));
console.log(string.toUpperCase());
console.log(string.toLowerCase());


// ################ string casing
string = "helloOOOO";
var firstString = string.slice(0, 1);
var upperFirstString = firstString.toUpperCase(); //use two var
var lowerEndString = string.slice(1, string.length);
var lowerEndString = lowerEndString.toLowerCase(); // or use same var
var finalString = upperFirstString + lowerEndString; // create new var
// or
string = upperFirstString + lowerEndString; // or replace old var value
console.log(finalString);
console.log(string);



// // #################  string length
// var a= prompt("what to post today??");
// alert(225-a.length + " / " + "225");