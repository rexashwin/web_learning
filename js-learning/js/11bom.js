// Browser Object Model

// #### Location Object (window.location)
// Returns the entire URL of the current page
console.log(location.href);

// Returns the web protocol used (http: or https:)
console.log(location.protocol);

// Returns the hostname and port number
console.log(location.host);

// Returns the path and filename of the current page
console.log(location.pathname);

// Returns the query string part of a URL
console.log(location.search);

// Returns the anchor part (#) of a URL
console.log(location.hash);

// Loads a new document
location.assign("https://www.example.com");

// Reloads the current document
location.reload();


// #### History Object (window.history)
// Loads the previous URL in the history list
history.back();

// Loads the next URL in the history list
history.forward();

// Loads a specific page from the session history
history.go(2);

// to go back or forward in pages
history.go(-1);        



// #### Navigator Object (window.navigator)
// Returns the user-agent string for the browser
console.log(navigator.userAgent);

// Returns the platform on which the browser is running
console.log(navigator.platform);

// Returns the preferred language of the user
console.log(navigator.language);

// Returns a boolean indicating if the browser is online
console.log(navigator.onLine);


// #### Screen Object (window.screen)
// Returns the width of the user's screen
console.log(screen.width);

// Returns the height of the user's screen
console.log(screen.height);

// Returns the width of the user's screen, minus interface features
console.log(screen.availWidth);

// Returns the height of the user's screen, minus interface features
console.log(screen.availHeight);

// Returns the color depth of the user's screen
console.log(screen.colorDepth);