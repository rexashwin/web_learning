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
    }, 2000)
}).then(function(){
    console.log("promise two consumed");
});


// promise three: passing parameter in resolve to .then function
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Artika", email: "artika@example.com"})
    }, 3000);
});

promiseThree.then(function(user){
    console.log(`\npromiseThree:`);
    console.log(user);
})


// promise Four: returning error using reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Advik", email: "advik@example.com"})
        }else{
            reject(`ERROR: Something went wrong`);
        }
    }, 4000);
})

promiseFour.then(function(user){
    console.log(`\npromiseFour:`)
    console.log(user);
    return user.username
}).then(function(username){
    console.log(`Extracted username: ${username}`);
    
})