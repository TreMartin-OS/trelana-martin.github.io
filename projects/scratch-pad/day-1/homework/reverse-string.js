// #!/usr/bin/env node
//// Teach instructions: IOCE is optional but Pseudocoding is NOT. Due for completion tomorrow before class. We're allowed to use Repl to test code.  

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    
    
  // Create storage array for later use of pushing letters in reverse to it 
  var reverseWord = [];
  // split the letters of the string up into a storage array variable
      var splitWord = input.split("")
  // Loop through the newly split array
      for (var i = 0; i < splitWord.length; i++) {
  // Unshift (add to front) the letters to a previously created storage array
      reverseWord.unshift(splitWord[i]);
           }
  // Join them together into a new string & return
return reverseWord.join("");

    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}