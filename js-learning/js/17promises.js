// creating Promises
const promiseOne = new Promise(function(resolve, reject){
    // do any async task
    // DB calls, cyrptography, network calls
    setTimeout(function(){
        console.log("promiseOne - Async Task");
        resolve();  // without reslove() `then` function will not run
    }, 1000);
});

promiseOne.then(function(){
    console.log("promiseOne is consumed");
});

// create Promise without storing in variables
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("\nAsync task 2");
        resolve();
    }, 1500)
}).then(function(){
    console.log("promise two consumed");
});


// promise three: passing parameter in resolve to .then function
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Artika", email: "artika@example.com"})
    }, 2000);
});

promiseThree.then(function(user){
    console.log(`\npromiseThree:`);
    console.log(user);
})


// promise Four: returning error using reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Advik", email: "advik@example.com"})
        }else{
            reject(`ERROR: Something went wrong`);
        }
    }, 2500);
})

promiseFour.then(function(user){
    console.log(`\npromiseFour:`)
    console.log(user);      // if there is error then 'this' will not execute without 'catch'
    return user.username
}).then(function(username){
    console.log(`Extracted username: ${username}`);
}).catch(function(error){
    console.log(`\npromiseFour catch error ->`);
    console.log(error);    // Handle any potential errors from the promise
}).finally(()=>console.log("finally: The promise is either resolved or rejected"))  // run when a promise is settled (fulfilled or rejected)


// promise five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 3000);
})

// // using async to consume promise without tryCatch gives error, if promise error is true
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(`\npromiseFive:`);
//     console.log(response);
// }

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(`\npromiseFive: async await try`)
        console.log(response)
    } catch (error) {
        console.log(`\npromiseFive: async await catch`)
        console.log(error)
    }
}

consumePromiseFive()


async function getAllUser(){
    const response = await fetch('https://api.github.com/users/rexashwin');
    // console.log(response);
    const data = await response.json()
    console.log(data);
}
getAllUser();
