// A-LAB 308.5.1
// Creating Reusable Functions

// // PART ONE 

// Take an array of numbers and return the sum.

const numbers = [5, 10, 20, 30 , 40];
const sum = numbers.reduce((acc , curr) => acc + curr, 0);
console.log("Numbers of Array: " + numbers);
console.log("sum: " + sum);

// Take an array of numbers and return the average.

function average(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let s = 0;
    for (let i = 0; i < arr.length; i ++) {
        s += arr[i];
    }
    return sum / arr.length;
}
const avg = average(numbers);
console.log("Averge : " + avg);


// Take an array of strings and return the longest string.

const names = ["Pablo", "Julio", "Marisol", "Roger"];
const longestNames = names.reduce((a, b) => {return a.length > b.length ? a : b;})
console.log(names);
console.log("Longest Name: "+longestNames);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function longerThanThegivenNumber(s, n) {
    return s.filter(str => str.length > n);
}
const num = 5;
const x = longerThanThegivenNumber(names, num);
console.log("String longer than the given numbers: " + x);


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function fac(n) {
    if (n > 0) {
         fac(n - 1);
         console.log(n);
         
    }
    return
}

fac(10);
