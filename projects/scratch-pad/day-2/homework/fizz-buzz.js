// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    
  // Create a Loop that counts from 1 - 100
  for (var i = 1; i <= 100; i++) {
    // If the number is a multiple of 3 & 5 print "FizzBuzz" to the console
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    // If the number is just a multiple of of 3, print "Fizz" to the console
      } else if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz")
    // If the number is just a multiple of 5, print "Buzz" to the console
      } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz")
    // If the number doesn't mee the above conditions, just print the number to the console
} else {
        console.log(i)
}
}



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}