// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  // Loop through array
for (var i = 0; i < array.length; i++) {
  // log values to console
  console.log(array[i])
}  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  // Loop over array, backwards
  for (var i = array.length - 1; i >= 0; i--) {
    // log values ot console
    console.log(array[i])
  } 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
 
  // create storage array 
  var newArr = [];
  // loop over object
  for (var key in object) {
    // push keys to storage array
    newArr.push(key);
  }
  // return filled array
return newArr;  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  
  // loop over object
  for (var key in object) {
    // log keys to cosole
    console.log(key);
  }


  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  

  // create storage array 
  var arrTwo = [];
  // loop over object
  for (var key in object) {
    // push values to storage array
    arrTwo.push(object[key]);
  }
  // return the now filled array
return arrTwo; 

  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  // loop over object
    for (var key in object) {
      // log values to console
      console.log(object[key]);
    }
 
  

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
        ////////////////// Solution #1
  // // since .length only works on arrays, push the object info into a new array
  // // create a storage array
  // var objArr = [];
  // // loop over object
  //   for (var key in object) {
  //   // push keys to storage array (I dont think its necesarry to have btoh for this)
  //     objArr.push(key);
  //   }
  // // return the length of the storage arr
  //   return objArr.length;
  
      ////////////////// Solution #2

// Use Object.keys to put Keys into a storage array
  var thisToo = Object.keys(object)
  // return the length of the storage arr
    return thisToo.length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  // Create a storge array
  var revVal = [];
// Use For In Loop to get all values
    for (var key in object) {
      // Push all the values into the storage array
        revVal.push(object[key]);
    }
  
  // Use For Loop to go over storage array in reverse
    for (var i = revVal.length - 1; i >= 0; i--) {
  // Print values to console
      console.log(revVal[i])
    }  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
