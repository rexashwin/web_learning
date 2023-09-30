const arr = ['Ban', 'Man', 'Onn', 'App', 'Aap', 'a', 'A', 'b', 'c', 'C']
console.log(`original array arr -> ${arr}`);

// //The sort() method sorts an array alphabetically (A-Z-a-z)
arr.sort();
console.log(`array arr after sort -> ${arr}`);

// //Combining sort() and reverse() you can sort an array in descending order
arr.sort();
arr.reverse();
console.log(`array arr after sort and reverse -> ${arr}`);

// //Number sorting
const arr2 = [40, 100, 1, 5, 25, 10, 'tick', 'app', 'aap'];
console.log(`original array arr2 -> ${arr2}`);

// //using this method can sort numbers -- but not alphabets
const arrFun1 = arr2.sort(function (a, b) { return a - b });
console.log(`after sorting arr2 using method1 -> ${arrFun1}`);

// //using second method to number sort arrays -- which will also sort alphabets 
// //#source - HiteshChoudhary -- https://www.youtube.com/watch?v=u7NFUX62-cM
function mySort(a, b) {
    if (a > b) {
        return 1
    } else if (b > a) {
        return -1
    } else {
        return 0
    }
}

const arrFun2 = arr2.sort(mySort);
console.log(`after sorting arr2 using method2 -> ${arrFun1}`);