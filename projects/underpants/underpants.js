// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};

////////////////////////////////////////////////////////////////////////////////////////////////////
// #1
/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/


_.identity = function(value) {
    return value;
};


////////////////////////////////////////////////////////////////////////////////////////////////////
// #2
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function(value) {

    //placeholder var
let stringVal;
// If-Else statements for diff object types
if (Array.isArray(value)) {
stringVal = 'array'
} else if (value === null ) {
stringVal = 'null'
} else {
    stringVal = typeof value;
}
    return stringVal
};



////////////////////////////////////////////////////////////////////////////////////////////////////
// #3
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(arr, num) {

if (!Array.isArray(arr) || num < 0) {
return []; 
} 
else if (num === null || typeof num !== 'number') {
return arr[0];
} 
else if (num > arr.length) {
return arr;
} 
else {
return arr.slice(0, num);
}

};




////////////////////////////////////////////////////////////////////////////////////////////////////
// #4
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num) {

if (!Array.isArray(arr) || num < 0) {
    return []; 
    } 
    else if (num === null || typeof num !== 'number') {
    return arr[arr.length - 1];
    } 
    else if (num > arr.length) {
    return arr;
    } 
    else {
    return arr.slice(arr.length - [num], arr.length);
    }

}


////////////////////////////////////////////////////////////////////////////////////////////////////
// #5
/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!   // No problem, im pretty sure ive never heard of this
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(arr, val) {

// storage arr
let stuff = false;    
// Loop through arr until you find val & return it
for (let x = 0; x < arr.length; x++) {
    if (arr[x] === val) {
        stuff = true;
        return x;
    } 
}
    // if val doesnt exist in array, return -1     
if (stuff === false) {
        return -1;
    }

}


////////////////////////////////////////////////////////////////////////////////////////////////////
// #6
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, val) {


// storage var
let truFal = [];
// loop thru array checking for val
for (let x = 0; x < arr.length; x++) {
   // val is found, push something to storage
   if (arr[x] === val)
   truFal.push(x);
   }
    // if val is found, return true & if val is not found, return false (Use ternary operator)
let answer = truFal.length === 0 ? false : true; // I dont understand why this only works backwards, true should be listed 1st but it wont return correctly

return answer;
}

// console.log(_.contains(['a', 'b', 'c', 'd'], 'c')); // Returns true but only when I reverse my ternary operators order ****************************************



////////////////////////////////////////////////////////////////////////////////////////////////////
// #7
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element (Is this asking if col is an arr full of objs?)
*      with the arguments:
*         the element, it's index, <collection> ()
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


_.each = function(col, func) {

// check if col is an array
if (Array.isArray(col)) {
    // loop thru array of objects (I think thats what the instructions are implying?)
    for (let a = 0; a < col.length; a++) {
        // apply the func using 3 things as args: element, index, entire collection
        func(col[a], a, col);
    }
} // if col is an Object but not an array or the other object types
else if (typeof col === 'object' && !Array.isArray(col) && col !== null && col instanceof Date === false) {
    // For-In Loop thru array 
    for (let keys in col) {
        // run these thru func: prop value, key, entire collection
        func(col[keys], keys, col);
    }
}
}   


////////////////////////////////////////////////////////////////////////////////////////////////////
// #8
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(arr) {

// storage arr
let newList = [];
// Loop thru arr
for (let a = 0; a < arr.length; a++) {
    // run each arr item thru _.indexof()
    let checkThis = _.indexOf(arr[a]);
        // I guess if indexOf returns true, push something to the storage arr? Its not very clear whats expected.
        if (checkThis === true) {
        newList.push(arr[a]);

        }
}   

}

console.log(_.unique([1, 2, 3, 1, 4, 5, 6, 1])); //


////////////////////////////////////////////////////////////////////////////////////////////////////
// #9
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/







////////////////////////////////////////////////////////////////////////////////////////////////////
// #10
/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/







////////////////////////////////////////////////////////////////////////////////////////////////////
// #11
/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/







////////////////////////////////////////////////////////////////////////////////////////////////////
// #12
/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


// _.map = function(collection, func) {
//     // create storage array
//     let mapStorage = [];
    
//     // is this an array or object
//     if (Array.isArray(collection)) { // // if array
//         // For Loop for Arrays
//         for (let x = 0; x < collection.length; i++) {
//             // Use the callback function to pass in the wanted info (element, index, collection)
//             let arrCallFunc = func(collection[i], i, collection);
//             mapStorage.push(arrCallFunc);
//         }
//     } else { // // if object
//         // For In loop for Objects
//         for (let key in collection) {
//             // Use te Callback function to pass in the wanted info (value, key, collection)
//             let objCallFunc = func(collection[key], key, collection);
//             mapStorage.push(objCallFunc);
//         }
//     }
//     return mapStorage;
//     }




////////////////////////////////////////////////////////////////////////////////////////////////////
// #13
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/







////////////////////////////////////////////////////////////////////////////////////////////////////
// #14
/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


// // He breaks this down about 2:15
// _.every = function(collection, func) {

//     // Need some storage to track T or F
//     // let truFalse = [];
    
//     // Check if func is provided
//     if (func === undefined) { // If func is NOT provided
//             // nested if-elses to check if this an array or object
//         if (Array.isArray(collection)) { // // if array
//                 // For Loop for Arrays
//             for (let x = 0; x < collection.length; i++) {
//                     // // Do the thing
//                 if (!collection[i]) {
//                         return false
//                 } // close if
//             }  // close for-loop
//         } // close if
//         else { // // if object
//                 // For In loop for Objects
//             for (let key in collection) {
//                 // // Do the thing
//                 if (!collection[key]) {
//                     return false;
//                 } // close if
//             } // close for-in loop
//         } // close else
//     } // close if-undefined
    
//     else { // If the func IS provided
//         // check if this an array or object
//         if (Array.isArray(collection)) { // // if array
//             // For Loop for Arrays
//             for (let x = 0; x < collection.length; i++) {
//                 // Use the callback function to pass in the wanted info (element, index, collection)
//                 if (!func(collection[i], i, collection)) {
//                     return false;
//                 } // close pink-if
//             } // close for-loop
//         } // Close blue if
    
//         else { // // if object
//             // For In loop for Objects
//             for (let key in collection) {
//                 // Use te Callback function to pass in the wanted info (value, key, collection)
//                 if (!func(collection[key], key, collection)) {
//                 // Do the thing
//                 return false;
//                 }
//             } // close for in loop
//         } // close blue else
//     } // close main pink else   
    
//     return true; // return true if nothing is false
    
//     } // close _.every func
    
    
    





////////////////////////////////////////////////////////////////////////////////////////////////////
// #15
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/







////////////////////////////////////////////////////////////////////////////////////////////////////
// #16
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/







////////////////////////////////////////////////////////////////////////////////////////////////////
// #17
/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/







//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
