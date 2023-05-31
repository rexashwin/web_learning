let arr = [];
let count = 1;

function fizzBuzz() {
    if (count % 3 == 0 && count % 5 == 0)
        arr.push("fizzbuzz");
    else if (count % 5 == 0)
        arr.push("buzz");
    else if (count % 3 == 0)
        arr.push("fizz");
    else
        arr.push(count);

    count++;
    console.log(arr);
}

for (let index = 0; index < 20; index++) {
    fizzBuzz();
}