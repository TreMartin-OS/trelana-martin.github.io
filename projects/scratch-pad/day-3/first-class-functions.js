// #!/usr/bin/env node

'use strict';

// Teach notes: 1st 4 functions are examples of functions that return other functions. So go ahead & add return function(){} to them.
// The last 2 take in functions as arguments.  You will need to change some of the parameters.

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    


   // Determine if the base is a String or Number
  if (typeof base === typeof string) {
    // If String, convert base to a number
    base = Number(base);
  }
    // if not, continue with the math
    // Return a function that would compare the OG base-input to a newly given value 
      return function(newNum) {
      return base < newNum;
    }


    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
   
       // Determine if the base is a String or Number
  if (typeof base === typeof string) {
    // If String, convert base to a number
    base = Number(base);
  }
    // if not, continue with the math
    // Return a function that would compare the OG base-input to a newly given value 
      return function(newNum) {
      return base > newNum;
    }

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    


// return a function that recalls the saved letter & 
return function(anuthaOne) {
  // split & store the string input into a storage array
    var sndLet = anuthaOne.split('');
      // Compares the previously saved letter to the 1st letter of a new string    
        if (startsWith.toLowerCase() == sndLet[0].toLowerCase()) {
          return true;
        } else {
          return false;
        }}
    
    

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    

    
    // return a function that recalls the saved letter & 
    return function(aOne) {
      // split & store the string input into a storage array
        var lastLet = aOne.split('');
          // Compares the previously saved letter to the 1st letter of a new string    
            if (endsWith.toLowerCase() == lastLet[lastLet.length -1].toLowerCase()) {
              return true;
            } else {
              return false;
            }}

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    

  
// Create a storage array for the strings that will be modified
var arrBox = [];
  
// Loop over array of strings
  for (var i = 0; i < strings.length; i++) {
// Modify each one using the Function argument & Push the newly modifed strings to a storage array 
    arrBox.push(modify(strings[i]));
    }
  return arrBox;
  
        
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    

   // Make a storage array
   var truthBox = [];
   //  loop thru the array of strings
   for (var i = 0; i < strings.length; i++) {
     // run each string in the Array thru the function Arg, that should verify that the mod has been applied
       if (test(strings[i]) === true) {  
       // Push 1 if true, 2 if false
       truthBox.push(1);
       } }
   
   // Check If OG array is the EXACT same length as the storage array   
   if (truthBox.length === strings.length) {
     // If yes, return true
     return true;
   } else {
     // if not, return false
     return false;
   }
    
    
    
    // YOUR CODE ABOVE HERE //
}

console.log(test(strings[0]))


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
