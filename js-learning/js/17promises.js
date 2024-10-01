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
new PromiseTwo(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    })
}).then(function(){
    console.log("promise two consumed");
});