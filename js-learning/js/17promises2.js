import fetch from "node-fetch";

// ## Passing arguments to a function and return a Promise
const delayedGreeting = function (name, timeout) {
    return new Promise(function (resolve, reject) {
        if (timeout > 0) {
            setTimeout(() => {
                resolve(`Hello ${name}!`)
            }, timeout);
        } else {
            reject(`Invalid delay time`)
        }
    })
}

delayedGreeting("Alia", 1000)
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg))