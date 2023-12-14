// #!/usr/bin/env node

'use strict';


// This has nothing from the lecture content, teach mention this at 1:37 of the lecture.   Requires reading up about the typeof Operator. Pay close attention to the GL reading.

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //



    if (Array.isArray(value) === true) {
        return true;
    } else {
      return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    


    //////// Version 1
  // //  verify that the input is NOT an array object
  // if (Array.isArray(value)) {
  //   return false; }
  // // verify that the input is NOT null object
  // if (value === null) {
  //   return false; }
  // // verify that input is NOT a date instance object
  // if (value instanceof Date) {
  //   return false; }
  // // verify input is still an object after dismissing the above 
  // if (typeof value === 'object') {
  // return true; } 
  // // Verify that input is NOT and object
  // if (typeof value !== 'object') {
  //     return false;
  // }    
 
  ////// Version  2: Much more concise
  if (typeof value === 'object' && Array.isArray(value) === false && value !== null && value instanceof Date === false) {
    return true; }
  else {
  return false; } 
 

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
   
     
  // verify that the input is NOT a null object
  if (value === null) {
    return false; }
  // verify that input is NOT a Date Instance object
  if (value instanceof Date) {
    return false; }
    // verify having a response that returns false for when that input is NOT an Array or other kind of object 
  if (typeof value !== 'object' && !Array.isArray(value)) {
      return false; } 
  // verify that the input IS an array OR IS an object after dismissing the above
  if (typeof value === 'object' || Array.isArray(value)) {
    return true; } 



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    

    // Create storage variable
  var type = '';
    
  // If type is Object, find out what kind of object it is using nested if statements
    if (typeof value === 'object') {
      // Response for if input is a null object
        if (value === null) {
          type = 'null'; }
      // Response for if input is a Date Instance object
        if (value instanceof Date) {
          type = 'date'; }
      // Response for if input is an Array object
        if (Array.isArray(value)) {
          type = 'array'; } 
      // Response for if input is an object but not of the above types
        if (typeof value === 'object' && Array.isArray(value) === false && value !== null && value instanceof Date === false) {
          type = 'object';    
        }
      }
        // Response for if input is anything else
       if (typeof value !== 'object') { 
         type = typeof value;
         type.toString();
      }
      
      return type;  
     
    
    
    // YOUR CODE ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
