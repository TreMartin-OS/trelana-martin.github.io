// #!/usr/bin/env node
//// Teach instructions: IOCE is optional but Pseudocoding is NOT. Stringy.js is due for completion tomorrow before class.  
//// We're allowed to use Repl to test code.  There is also a file under homework called reverse-string.js that is due.
'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //

// Use .length to count & return the length of a string     
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

//Use the .toLowerCase method to change every letter in a string to its lowercase version
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

//Use the .toUpperCase method to change every letter in a string to its uppercase version
    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

// Change string to all lower case & put in storage variable
var smallTime = string.toLowerCase();
// look for spaces, replace any spaces with dashes & put in new storage container
var dashTime = smallTime.replaceAll(" ", "-");
// return completed lowercase + dashed string
return dashTime;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
 
    
  // Compare the 1st character of the string to the Char argument
if (string[0].toLowerCase() == char.toLowerCase()) {
    // If 1st letter matches 'char' arg, return True
    return true;
  }
  else if (string[0].toLowerCase() != char.toLowerCase()) {  
    // If 1st letter doesn't match 'char' arg, return False
    return false;
  }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

      // Compare the last character of the string to the Char argument
if (string[string.length - 1].toLowerCase() == char.toLowerCase()) {
    // If last letter matches 'char' arg, return True
    return true;
  }
  else if (string[string.length - 1].toLowerCase() != char.toLowerCase()) {  
    // If last letter doesn't match 'char' arg, return False
    return false;
  }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// The above example does not actually match what the wanted outcome of this problem is

// var args = Array.from(arguments); // OG code they want us to use/alter? 
// This apparently takes in all arguments without your needing to manually type them
var args = Array.from(arguments);
// Join the args that the previous method shoved into an array for you into a new string
var newArgs = args.join("");
  // return the new string
return newArgs;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

  //check if stringOne is longer than stringTwo
  if (stringOne.length > stringTwo.length) {
    // If stringOne is longer, return it
    return stringOne;
  }
  else { //if stringOne is NOT longer, return stringTwo
    return stringTwo;
  }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    // create storage array
    var theStrings = [];
    // Put the string args into the storage array
    theStrings.push(stringOne, stringTwo);
      // Use sort to put them in alphabetical order
     theStrings.sort(); 
      // Compare the order of the strings
      // return 1 if the stringOne is before the stringTwo
    if (theStrings[0] === stringOne && stringOne !== stringTwo) {
    return 1;
      // return -1 if stringTwo is before the stringOne
    } else if (theStrings[0] === stringTwo && stringTwo !== stringOne) {
      return -1;
      // return 0 if they're equal
    } else {
      return 0;
    }
  

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //


//     // create storage array
//     var theStrings = [];
//   // Put the string args into the storage array
//   theStrings.push(stringOne, stringTwo);
//     // Use sort to put them in alphabetical order
//    theStrings.sort(); 
//     // Compare the order of the strings
//     // return 1 if the stringOne is after stringTwo
//   if (theStrings[0] === stringTwo && stringOne !== stringTwo) {
//   return 1;
//     // return -1 if stringTwo is after stringOne
//   } else if (theStrings[0] === stringOne && stringTwo !== stringOne) {
//     return -1;
//     // return 0 if they're equal
//   } else {
//     return 0;
//   }
// ^ This works but feels not quite right.

   // create storage array
        var theStrings = [];
   // Put the string args into the storage array
        theStrings.push(stringOne, stringTwo);
   // Use sort to put them in alphabetical order
        theStrings.sort(); 
   // Compare the order of the strings
   // If stringOne is listed after stringTwo, return 1
        if (stringTwo.localeCompare(stringOne) < 0 && stringOne !== stringTwo) {
        return 1;
   // if stringTwo is listed after stringOne, return -1 
        } else if (stringOne.localeCompare(stringTwo > 0 ) && stringTwo !== stringOne) {
        return -1;
   // return 0 if they're equal(?) in order
        } else if (stringTwo === stringOne) {
        return 0;
   }
// ^ This solution feels better since it could compare more than 2 strings.  This can be modified to work for the previous solutio too, but I like having multiple versions.

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
