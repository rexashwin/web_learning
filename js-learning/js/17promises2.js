import fetch from "node-fetch";

// ## Passing arguments to a function and return a Promise
const delayedGreeting = function (name, timeout) {
    return new Promise(function (resolve, reject) {
        // checking if the timeout is a positive number
        if (timeout > 0) {
            // if 'timeout' is valid, set a setTimeout function.
            setTimeout(() => {
                resolve(`Hello ${name}!`) // success: sends back a greeting message
            }, timeout);
        } else {
            // if 'timeout' is not positive, reject the Promise with an error message.
            reject(`Invalid delay time`) // error: timeout should be a positive number
        }
    })
}

delayedGreeting("Alia", 1000)
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg))