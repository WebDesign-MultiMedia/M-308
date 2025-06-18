// Use for loops to iterate a specific number of times.
// Use for of loops to iterate through iterable data-like strings.
// Use while loops to iterate based on a condition.
// Use the break and continue statements to control loop flow.

// PART 1 FIZZ BUZZ

    // Loop through all numbers 1 to 100
for (let i = 1; i < 101; i++) {
        
    // If  a number is divisible by 3, log "Fizz"
    if (i % 3 === 0) {
        let msg = " Fizz [1]"
        // console.log(i + msg);
    }
    
    // If a number is divisble by 5 log "Buzz"
    if (i % 5 === 0) {
        let buzz = " Buzz [2]"
        // console.log(i + buzz);   
    }

    // If a number is divisble by both 3 and 5, log "Fizz Buzz"
    if (i % 3 === 0 && i % 5 === 0) {
        let FizzBuzz = " Fizz Buzz "
        // console.log(i + FizzBuzz);   
    }

    // If a number is not divisble by either 3 or 5, log the Number
    if (i % 3 === 0 || i % 5 === 0) {
        // console.log(i + " NUMBERS ");
        
    }
    
}

    // Declare an arbitrary number, n.
    //Create a loop that searches for the next prime number, starting at n and incrementing from there.
    //As soon as you find the prime number, log that number and exit the loop.

    let n = 20; 

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Loop to find the next prime number
while (true) {
    if (isPrime(n)) {
        console.log(`The next prime number is: ${n}`);
        break; // Exit the loop
    }
    n++; // Increment and keep checking
}