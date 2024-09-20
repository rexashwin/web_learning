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
})