// to view and navigate the DOM tree
console.log(document);

// to inspect the properties and methods of `document` object
console.dir(document);

// gives the all element HTMLALLCOLLECTION
console.log(document.all);

// displays the dom of body
console.log(document.body);

// gives html collection of all forms in the webpage
console.log(document.forms);

// navigate to the first form in the webpage
console.log(document.forms[0]);

// iterate every form in the webpage
Array.from(a).forEach(function (element) {
    console.log(element);
})

// returns html tag with links
console.log(document.links);
// first tag with link
console.log(document.links[0]);
// getting link 
console.log(document.links[0].href);
// get all img tags 
console.log(document.images);
// get all script tags
console.log(document.scripts);


// ### fetching links and checking for the particular link
Array.from(document.links).forEach(function (element) {
    if (element.href == 'http://instagram.com/rexashwin') {
        console.log(element);
        // continue;
    }
    else console.log("not found");
})


// #### Methods for Selecting Elements
// Get an element by its ID
console.log(document.getElementById("title"));

// Get elements by their class name
// if more than one element of same classname then returns HTMLCollection
console.log(document.getElementsByClassName("myClass"));

// Get elements by their tag name
// returns HTMLCollection
console.log(document.getElementsByTagName("div"));

// Selects the first element that matches the CSS selector
console.log(document.querySelector(".myClass"));

// returns nodeList of all elements that match the CSS selector
console.log(document.querySelectorAll(".myClass"));


// ## Get attributes of elements
document.getElementById('title').id;
// output: id name

document.getElementById('title').className;    //only class doesn't works
// output: class names

document.getElementById('title').getAttribute('class');
// output: class names


// #### Manipulating DOM Elements
// set attribute of elements
// this will override any previous given value of that attribute
document.getElementById('title').setAttribute('class', 'test');

// that's why add all, if any previous value of that attribute  
document.getElementById('title').setAttribute('class', 'test', 'heading');

// remove an attribute
document.getElementById('title').removeAttribute("class");


// ## Adding and Removing Classes
// Add a class
document.getElementById("title").classList.add("title");

// Remove a class
document.getElementById("title").classList.remove("title");

// Toggle - adding and removing class from an element
document.getElementById("title").classList.toggle("title");


// ## Changing Element Style
// Change the style directly
document.getElementById("title").style.color = "blue";
v.style.fontSize = "20px";

// Adding multiple styles using CSS text
document.getElementById("title").style.cssText = "color: blue; font-size: 20px;";


// ## Changing Inner HTML and Text
// inner HTML - shows the html including element tags and text
document.getElementById("title").innerHTML;
// changing inner HTML
document.getElementById("title").innerHTML = "<p>This is a new paragraph.</p>";

// inner text - shows text of the element
document.getElementById("title").innerText;
// changing inner text
document.getElementById("title").innerText = "This is a new text.";

// text Content - shows all text including hidden elements
document.getElementById("title").textContent;
// changing text content
document.getElementById("title").textContent = "New text content.";


// #### Adding new element
// Create a new element
let newDiv = document.createElement("div");
newDiv.className = "newDiv";
newDiv.id = "newDivId";
newDiv.setAttribute("title", "this a newly created div using js");
newDiv.style.backgroundColor = "red";
newDiv.style.color = "yellow";
// console.log(newDiv);

// adding text node to the element
newDiv.innerText = "this div is created using js";
// another way to create textNode
const addText = document.createTextNode(" another textnode");
newDiv.appendChild(addText);

// to add this element in document body
document.body.appendChild(newDiv);

// Create a new text node
let newText = document.createTextNode("Hello, world!");
console.log(newText);

// Append a child to an element
document.body.appendChild(newDiv);

// Remove a child from an element
document.body.removeChild(newDiv);
// Another way to remove: Select the element to be removed
let elementToRemove = document.getElementById("newDiv");
// Remove the element
elementToRemove.parentNode.removeChild(elementToRemove);