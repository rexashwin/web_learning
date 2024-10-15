// promise five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('promiseFive ERROR: JS went wrong')
        }
    }, 4500);
})

// // using async to consume promise without tryCatch gives error, if promise have error
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(`\npromiseFive:`);
//     console.log(response);
// }

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(`\npromiseFive:`)
        console.log(response)
    } catch (error) {
        console.log(`\npromiseFive:`)
        console.log(error)
    }
}

consumePromiseFive()