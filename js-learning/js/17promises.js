// ### Creating Promises ###

// promiseOne: Basic Promise example
const promiseOne = new Promise(function (resolve, reject) {
    // Simulating an async task like a DB call, cryptography, or network request
    setTimeout(function () {
        console.log("\npromiseOne - Async Task");
        resolve();  // Call resolve to fulfill the promise; without it, `.then` will not execute
    }, 1000);
});

// Consuming promiseOne with `.then`
promiseOne.then(function () {
    console.log("promiseOne is consumed");
});



// Creating and consuming a Promise directly without storing it in a variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("\nAsync task 2");
        resolve();
    }, 1500);
}).then(function () {
    console.log("promise two consumed");
});



// promiseThree: Passing data to the `.then` function using `resolve`
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // Resolving with an object
        resolve({ username: "Artika", email: "artika@example.com" });
    }, 2000);
});

// Consuming promiseThree and accessing the resolved data
promiseThree.then(function (user) {
    console.log(`\npromiseThree:`);
    console.log(user);  // Logs the user object: { username: "Artika", email: "artika@example.com" }
});



// promiseFour: Handling errors with `reject`
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            // Resolve if no error
            resolve({ username: "Advik", email: "advik@example.com" });
        } else {
            // Reject if there's an error
            reject(`ERROR: Something went wrong`);
        }
    }, 2500);
});

// Consuming promiseFour with `.then` and `.catch`
promiseFour
    .then(function (user) {
        console.log(`\npromiseFour:`);
        console.log(user);  // This will only run if resolved successfully
        return user.username;  // Passing username to the next `.then` function
    })
    .then(function (username) {
        console.log(`Extracted username: ${username}`);
    })
    .catch(function (error) {
        // Catches errors from the promise if rejected
        console.log(`\npromiseFour catch error ->`);
        console.log(error);
    })
    .finally(() => console.log("finally: The promise is either resolved or rejected"));  // Executes when the promise is settled (resolved or rejected)



// promiseFive: Using async/await with try...catch
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            // Resolving with user credentials
            resolve({ username: "javascript", password: "123" });
        } else {
            // Rejecting with an error message
            reject('ERROR: JS went wrong');
        }
    }, 3000);
});

// // using async to consume promise without tryCatch gives error, if promise error is true
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(`\npromiseFive:`);
//     console.log(response);
// }

// Consuming promiseFive using async/await with try...catch for error handling
async function consumePromiseFive() {
    try {
        // The 'await' keyword pauses the function execution until the Promise resolves or rejects.
        // If 'promiseFive' resolves successfully, 'response' will store its result.
        const response = await promiseFive
        console.log(`\npromiseFive: async await try`)
        console.log(response)
    } catch (error) {
        // If 'promiseFive' rejects (throws an error), execution jumps here.
        // This block logs any error encountered during the async operation.
        console.log(`\npromiseFive: async await catch`)
        console.log(error)
    }
}

consumePromiseFive()



// ### Fetch API with async/await ###

// Importing the 'fetch' library for making HTTP requests in Node.js 
import fetch from "node-fetch";

// fetch using async await without try...catch doen't works if any error
async function fetchWithoutTryCatch() {
    const response = await fetch('https://api.github.com/users/rexashwin');
    const data = await response.json()
    console.log(`\nfetchWithoutTryCatch: `);
    console.log(data);  // This will throw an error if the fetch fails (not handled here)
}
// fetchWithoutTryCatch();


// fetchWithTryCatch: Calling an API with async/await and error handling
async function fetchWithTryCatch() {
    try {
        const response = await fetch('https://api.github.com/users/rexashwin');
        const data = await response.json()
        console.log(`\nfetchWithTryCatch: LoginUser:-${data.login}`);  // Logs the API response if successful
    }
    catch (error) {
        // Logs any error encountered during the fetch or data parsing
        console.log(`E: ${error}`);
    }
}
// fetchWithTryCatch()

// fetch using .then and .catch
fetch("https://randomuser.me/api/")
.then((data)=>{
    console.log(`\nfetchWithThenCatch:`)
    console.log(data.results[0].gender)
})
.catch((error)=>console.log(error));