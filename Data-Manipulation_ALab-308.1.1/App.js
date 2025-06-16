// PART 1 - MATH PROBLEMS

/**
* Check if all numbers are divisible by 5. Cache the result in a variable.
*/
const n1 = 10;
const n2 = 12;
const n3 = 20;
const n4 = 5;

function divisibleByFive(n) {
    return n % 5 === 0;
}
console.log("'Part One !!!'");
console.log(" ");

console.log("Is " + n1 + " divisible by 5 ? " + divisibleByFive(n1));
console.log("Is " + n2 + " divisible by 5 ? " + divisibleByFive(n2));
console.log("Is " + n3 + " divisible by 5 ? " +  divisibleByFive(n3));
console.log("Is " + n4 + " divisible by 5 ? " + divisibleByFive(n4));
console.log(" ");

/**
 * Check if the first number is larger than the last. Cache the result in a variable.
 */

const num = [n1, n2, n3, n4]; // Array 
console.log("Original Numbers : " + num);

const SortedNum = num.sort(function(a,b) {
    return a - b});
console.log("Sorted Numbers : " + SortedNum);

const firstNum = SortedNum[0];
const lastNum = SortedNum[SortedNum.length - 1];

const isFirstNumLargerThanLastNum = firstNum > lastNum;

console.log("First Number "+ firstNum);
console.log("Last Number " + lastNum);

console.log("Is the First Num Larger than Last Num ? " + isFirstNumLargerThanLastNum);
console.log(" ");

/**
 * Accomplish the following arithmetic chain:
 * Subtract the first number from the second number.
 * Multiply the result by the third number.
 * Find the remainder of dividing the result by the fourth number.
 */

console.log(SortedNum);

    // SUBTRACTION
let secondNumber = SortedNum[2]
let subtraction = firstNum - secondNumber

console.log("First Number : " + firstNum);
console.log("Second Number : " + secondNumber);
console.log("5 - 12 " +" = "+ subtraction);

    // MULTIPY
let thirdNum = SortedNum[2]
console.log("Third Number : " + thirdNum);
 let Multiplication = subtraction * thirdNum;
 console.log("-7 * 12 = " + Multiplication);

//  FIND REMINDER
let fourthNum = SortedNum[3];
let remainder = Multiplication % fourthNum; 
console.log("Fourth Number : " + fourthNum);
console.log("-84 % 20 = " + remainder);
console.log(" ");


// PART TWO
console.log("'PART TWO !!!'");
console.log("'Cross-Country Road Trip!'");
let totalTripDistance = 1500;
console.log("Distance for Road Trip : " + totalTripDistance + " miles");
let fuelBudget = 175; //$175 budget
let avrgCostOfFuelPerGallon = 3; //$3 per gallon 

/** */



 

