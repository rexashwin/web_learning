async function getAllUser(){
    const response = await fetch('https://api.github.com/users/rexashwin');
    // console.log(response);
    const data = await response.json()
    console.log(data);
}
getAllUser();