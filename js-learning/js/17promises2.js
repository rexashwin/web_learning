import fetch from "node-fetch";

const delayedGreeting = new Promise(function (name, timeout, resolve, reject) {
    if (timeout > 0) {
        setTimeout(() => {
            resolve(`Hello ${name}!`)
        }, timeout);
    } else {
        reject(`Invalid delay time`)
    }
})
delayedGreeting("Alia", 2000)
    .then((msg) => console.log(msg))
    .catch((msg) => console.log(msg))