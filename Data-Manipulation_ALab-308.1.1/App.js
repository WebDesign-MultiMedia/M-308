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
console.log("========================");

console.log("'PART TWO !!!'");
console.log("'Cross-Country Road Trip!'");

// DISTANCE TRIP
let totalTripDistance = 1500;
console.log("Distance for Road Trip : " + totalTripDistance + " miles");

// 55 Miles Per Hours = 30 Miles Per Gallon
let speed = 55; // 55 Miles per hours
let mpgAt55mph = 30; // 30 Miles per gallon

// 60 Miles Per Hours = 28 Miles Per Gallon
let speedTwo = 60; // 50 Miles Per Hours
let mpgAt60mph = 28; // 28 Miles Per Gallon

// 75 Miles Per Hours = 23 Miles Per Gallon
let speedThree = 75; // 75 Miles Per Hours
let mpgAt75 = 23; // 23 Miles Per Gallon

// BUDGET
let fuelBudget = 175; //$175 budget

// $3 Per Gallon
let avrgCostOfFuelPerGallon = 3; //$3 per gallon 
console.log(" ");


// How many gallons of fuel will you need for the entire trip?
console.log("1) How many gallons of fuel will you need for the entire trip?");
console.log("");

    let gallonNeededAt55 =  totalTripDistance / mpgAt55mph;
    console.log("Entire Trip : " + totalTripDistance + " Miles " +" @ 55 Miles Per Hour = " + mpgAt55mph + " Miles Per Gallon");
    console.log(gallonNeededAt55 + " Gallons");
    console.log(" ");
    
    let gallonNeedAt60 = totalTripDistance / mpgAt60mph;
        console.log("Entire Trip : " + totalTripDistance + " Miles @ " + speedTwo +" Miles Per Hour = " + mpgAt60mph + " Miles Per Gallon");
    console.log(gallonNeedAt60 + " Gallons");
    console.log(" ");

    let gallonNeedAt75 = totalTripDistance / mpgAt75;
        console.log("Entire Trip : " + totalTripDistance + " Miles @ " + speedThree + " Miles Per Hpur = " + mpgAt75 + " Miles Per Gallon");
    console.log(gallonNeedAt75 + " Gallons");
console.log("=======================");
console.log("");

    
// Will your budget be enough to cover the fuel expense?

    console.log("2) Will your budget be enough to cover the fuel expense?");
    console.log("");
    
    let fuelCost =  gallonNeededAt55 * avrgCostOfFuelPerGallon;
    let CoverFuelExpense = fuelCost < fuelBudget;
    console.log("My Fuel Budget is : " + fuelBudget);
    console.log("");
    console.log("Fuel Cost : " + fuelCost);
    console.log( CoverFuelExpense + ": , Budget is enough.");
    console.log("");
    
    let fuelCostTwo = gallonNeedAt60 * avrgCostOfFuelPerGallon;
    let CoverFuelExpenseTwo =  fuelCostTwo < fuelBudget;
    console.log("Fuel Cost : " + fuelCostTwo);
    console.log(CoverFuelExpenseTwo + " : , Budgte is enough. ");
    console.log("");
    
    let fuelCostThree = gallonNeedAt75 * avrgCostOfFuelPerGallon;
    let CoverFuelExpenseThree = fuelCostThree < fuelBudget;
    console.log("Fuel Cost : " + fuelCostThree);
    console.log(CoverFuelExpenseThree+ " : , Budgte is not enough. ");
    console.log("");

// How long will the trip take, in hours?

    console.log("How long will the trip take, in hours?");
    function time(totlaDistance, averageSpeed) {
        let hour = totlaDistance / averageSpeed;
        return hour ;
        ;
    }
    console.log(time(totalTripDistance, speed) + " hours @ " + speed + " mph" );
    console.log(time(totalTripDistance, speedTwo) + " hours @ " + speedTwo + " mph");
    console.log(time(totalTripDistance, speedThree) + " hours @ " + speedThree + " mph");

    


 

