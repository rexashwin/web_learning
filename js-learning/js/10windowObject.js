console.log(window);

// #### WINDOW OBJECT PROPERTIES
// document object for the window
console.log(window.document);

// provides information about the current URL
console.log(window.location);
// gives url in string
console.log(location.toString());

// provides access to the browser's session history
console.log(window.history);

// provides information about the browser and the user's environment
console.log(window.navigator);

// provides information about the user's screen
console.log(window.screen);

// the inner height of the window (viewport)
console.log(window.innerHeight);

// the inner width of the window (viewport)
console.log(innerWidth);

// y scroll location
console.log(scrollY);

// Access to the web storage local object
console.log(window.localStorage);

// Access to the web storage session object
console.log(window.sessionStorage);


// #### WINDOW OBJECT METHODS
// displays an alert box with a message
window.alert("Hello, world!");

// displays a dialog box with a message and "OK" and "Cancel" buttons
console.log(window.confirm("Are you sure?"));

// displays a dialog box that prompts the user for input
console.log(window.prompt("Enter your name:", "Default name"));

// opens a new browser window or tab
window.open("https://www.example.com", "_blank");

// closes the current window
window.close();


// calls a function after a specified number of milliseconds
let timeoutID = window.setTimeout(() => console.log("Timeout!"), 1000);

// calls a function repeatedly with a fixed time delay between each call
let intervalID = window.setInterval(() => console.log("Interval!"), 1000);

// clears a timeout previously set with setTimeout()
window.clearTimeout(timeoutID);

// clears an interval previously set with setInterval()
window.clearInterval(intervalID);