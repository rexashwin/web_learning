// ############## this will prompt alert
alert("this is alert");


// ################### concept of var let and const
var city = "delhi"
console.log(city);
{
    let city = 'Rampur';   
    city = 'Kolkata';
    console.log(city);
}
console.log(city);


// ################# constant value never changes;
const constTest = 3.14;
// constTest = 1;  //this will give error
console.log(constTest);
const arr1 = [12,23,12,53, 3];
arr1.push(45);
console.log(arr1)


// ###################### Most common programming case types:
// 1. camelCase  
// 2. kebab-case
// 3. snake_case 
// 4. PascalCase


// ################### camelCaseNotation -- example : firstLastName
// if we write fln the editor will automatically display the firstLastName