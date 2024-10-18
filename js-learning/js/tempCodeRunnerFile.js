async function getAllUser(){
    try{
        const response = await fetch('https://api.github.com/users/rexashwin');
        console.log(response);
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        // console.log(`E: ${error}`);
        
    }
}

getAllUser()