let a = document;
console.log(a);


a = document.all;
console.log(a);


a = document.body;
console.log(a);


a = document.forms[0];
console.log(a);

Array.from(a).forEach(function(element){
    console.log(element);
})


a = document.links;
// a = document.links[0];
// a = document.links[0].href;
// use document.images and document.scripts and print the list of images and scripts on an html page
console.log(a);


// ########## fetching links and checking for the particular link
Array.from(document.links).forEach(function(element){
    if (element.href == 'http://instagram.com/rexashwin'){
        console.log(element);
        // continue;
    }
    else console.log("not found");
})