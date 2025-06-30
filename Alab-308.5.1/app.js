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


// 
// PART TWO

const obj = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

//  Sort the array by age.
let sorted = obj.sort((a, b) => a.age - b.age);
console.log("Sorted by age: ", sorted);

// Filter the array to remove entries with an age greater than 50.
const filertedPeople = obj.filter(p => p.age >= 50);
console.log("age greater than 50", filertedPeople);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
const transformedArray = obj.map(p => {
  const newObj = { ...p };
  newObj.job = newObj.occupation;
  delete newObj.occupation;
  newObj.age = parseInt(newObj.age) + 1;
  return newObj;
});

console.log("",transformedArray);

// Use the reduce method to calculate the sum of the ages.

 const sumOfAge = obj.reduce((acc, p) =>{
    return acc + parseInt(p.age);
 }, 0);

 console.log("Sum of ages : " , sumOfAge);
 
//  
// PART THREE

// Take an object and increment its age field.
const inc = obj.reduce((acc, a) =>{
    let x = parseInt(a.age) + 1;
console.log("incremented ages: ", x);
})

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
console.log(" ");

// Copy
const copiedObj = { ...obj };
console.log("Copied obj: ", copiedObj);



