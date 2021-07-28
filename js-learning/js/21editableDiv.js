// creating a element
let divElem = document.createElement('div');

// add text to the element
let text = document.createTextNode("this is my element, click to edit it");
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 214px; margin: 34px auto; padding:23px;');

// grabbing the main div element
let editableDiv = document.querySelector('.editableDiv');
// inserting the element in the main div
editableDiv.appendChild(divElem);

// change divelem into text area
divElem.addEventListener('click', function(){
    let noTextareas = document.querySelector('.textarea').length;
    if (noTextareas == 0){
        let html  = elem.innerHTML;
    }
});