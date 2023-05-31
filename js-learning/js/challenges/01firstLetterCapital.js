// 1. create a var that stores a name that user enteres via prompt.
let name =  prompt("What is your name?");

// 2. captilize the first letter of the name

// a. isolate the first letter
let nameFirstChar = name.slice(0,1);

// b. turn the first letter to uppercase
let nameUppercaseFirstChar = nameFirstChar.toUpperCase();

// c. isolate the rest letters
let nameRestLetter = name.slice(1,name.length);

// d. turn the rest letters to lowercase
nameRestLetter = nameRestLetter.toLowerCase();

// e. concactenate the first char with the rest of the char
let nameCapitalised = nameUppercaseFirstChar + nameRestLetter;

// 3. greet
alert("Hello, " + nameCapitalised); 