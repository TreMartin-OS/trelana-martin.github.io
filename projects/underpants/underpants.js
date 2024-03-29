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
if (stuff === false) {  // if val doesnt exist in array, return -1  
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
let answer = truFal.length > 0 ? true : false; 
return answer;
}


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
    // run each arr item thru _.indexof(), it returns index of 1st place val is found in the arr
    let checkThis = _.indexOf(arr, arr[a]);
        // I guess if indexOf returns true, push something to the storage arr?
        if (checkThis !== -1 && !newList.includes(arr[a])) {
        newList.push(arr[a]); 
        }
}   
return newList;
}



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


_.filter = function(arr, func) {

// storeage arr
let newArr = [];
// Loop thru arr
for (let a = 0; a < arr.length; a++) {
    // run every element thru func using: element, indenx, the entire arr & check if func returned true
    if (func(arr[a], a, arr) === true) { 
        // if returned true, push element to storage arr
        newArr.push(arr[a]);
    }
}
return newArr;
}



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

_.reject = function(arr, func) {

// storeage arr
let newArr = [];
// Loop thru arr
for (let a = 0; a < arr.length; a++) {
    // run every element thru func using: element, indenx, the entire arr & check if func returned true
    if (func(arr[a], a, arr) === false) { 
        // if returned true, push element to storage arr
        newArr.push(arr[a]);
    }
}
return newArr;
}


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

_.partition = function(arr, func) {

// will need 3 storage arrs
let arr01 = [];
let arr02 = [];
let arr03 = [];

// For-In(?) loop thru arr // & run everything thru func using: element, key, array
for (let keys in arr) {
    // if func returns true, push to arr01
    if (  func(arr[keys], keys, arr) === true) {
        arr01.push(arr[keys]);
    }
        // if func returns false, push to arr02
    else {
        arr02.push(arr[keys]);
    }
}
// push arr01 then arr02 to arr03
arr03.push(arr01, arr02)
// return arr03
return arr03;
}



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


_.map = function(col, func) {
    
// create storage array
let mapStorage = [];
// is this an array or object
if (Array.isArray(col)) { // // if array
    // For Loop for Arrays
    for (let x = 0; x < col.length; x++) {
        // Use the callback function to pass in the wanted info (element, index, collection)
        let arrCallFunc = func(col[x], x, col);
        mapStorage.push(arrCallFunc);
    }
} else { // // if object
    // For In loop for Objects
    for (let key in col) {
            // Use te Callback function to pass in the wanted info (value, key, collection)
            let objCallFunc = func(col[key], key, col);
            mapStorage.push(objCallFunc);
    }
}
// console.log(mapStorage); // For testing vague data 
return mapStorage;
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// #13
/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.  // I dont understand the need for map
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function(arr, prop) {

// Try 3: _.map() returns an array of objects that have been sorted into true arr & false arrs

// storage array
let storage = [];
// Is this what the instructions want?
_.map(arr, function(arr) { if (Object.keys(arr).includes(prop)) {storage.push(arr[prop]);}});
return storage;
}


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


_.every = function(col, func) {
 
// Every single element must be true to return true.  So if something in an arr is true, push something to a new arr, if false, dont. then compare arr lengths.
let truFal = [];
let answer;

// Check if func is provided
if (func === undefined) { // If func is NOT provided /////
    // nested if-elses to check if this an array or object
    if (Array.isArray(col) === true) { // // if array
        // For Loop for Arrays
        for (let x = 0; x < col.length; x++) {
            // If true, push to storage arr
            if (col[x]) { 
                truFal.push(col[x]);
            } 
        }  
        if (col.length === truFal.length) {
            answer = true;
        } else {
            answer = false;
        }
    } 
    else { // // if object
        // Obj key array to compare lengths later because objs dont have lengths
        let keyCount = Object.keys(col);
        // For In loop for Objects
        for (let key in col) {
            // If true, push to storage arr
            if (col[key]) {
                truFal.push(col[key]);
            } 
        }
        if (keyCount.length === truFal.length) { 
            answer = true;
        } else {
            answer = false;
        }
    }
} if (func !== undefined) { // If the func IS provided
    // check if this an array or object
    if (Array.isArray(col)) { // // if array
        // For Loop for Arrays
        for (let x = 0; x < col.length; x++) {
            // Use the callback function to pass in the wanted info (element, index, collection)
            if (func(col[x], x, col)) { 
                truFal.push(col[x]);;
            } 
        }
        if (col.length === truFal.length) {
            answer = true;
        } else {
            answer = false;
        }
    } else { // // if object
        // Obj key array to compare lengths later
        let keyCount = Object.keys(col);
        // For In loop for Objects
        for (let key in col) {
            // Use te Callback function to pass in the wanted info (value, key, collection)
            if (func(col[key], key, col)) {
                // Do the thing
                truFal.push(col[key]);;
            } 
        }
        if (keyCount.length === truFal.length) {
            answer = true;
        } else {
            answer = false;
        }
    }
}
return answer;
}


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

_.some = function(col, func) {

// Same as _.every() EXCEPT only return true if at least 1 thing is true
// If something in an arr is true, push it to storage arr, if false, dont. 
// Then check if storage arr length is more than 0.
let truFal = [];
let answer;

// Check if func is provided
if (func === undefined) { // If no func
    // nested if-elses to check if this an array or object
    if (Array.isArray(col) === true) { // if yes array
        // For Loop for Arrays
        for (let x = 0; x < col.length; x++) {
            // If true, push to storage arr
            if (col[x]) { 
                truFal.push(col[x]);
            } 
        }  
        if (truFal.length > 0) { // Does storage arr contain anything?
            answer = true;
        } else {
            answer = false;
        }
    } 
    else { // // if object
        // For In loop for Objects
        for (let key in col) {
            // If true, push to storage arr
            if (col[key]) {
                truFal.push(col[key]);
            } 
        }
        if (truFal.length > 0) { // Does storage arr contain anything?
            answer = true;
        } else {
            answer = false;
        }
    }
}
if (func !== undefined) { // If yes func
    // is this an array or object
    if (Array.isArray(col)) { // if Yes array
        // For Loop for Arrays
        for (let x = 0; x < col.length; x++) {
            // Use the callback function to pass in the wanted info (element, index, collection)
            if (func(col[x], x, col)) { 
                truFal.push(col[x]);;
            } 
        }
        if (truFal.length > 0) { // Does storage arr contain anything?
            answer = true;
        } else {
            answer = false;
        }
    }
    else { // if Yes object
        // For In loop for Objects
        for (let key in col) {
            // Use te Callback function to pass in the wanted info (value, key, collection)
            if (func(col[key], key, col)) {
                truFal.push(col[key]);;
            } 
        }
        if (truFal.length > 0) { // Does storage arr contain anything?
            answer = true;
        } else {
            answer = false;
        }
    }
}  
return answer; 
}

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


_.reduce = function(arr, func, seed) {

// initialize an output variable that we will accumulate & return at the end 
let output;
// #4 - need separate instructions for when there is NO seed
if (seed === undefined) {
    // Take 1st item in arr & make it our seed
    output = arr[0];
    // For loop to iterate thru array/collection
    for (let x = 1; x < arr.length; x++) { // Starting at 1 instead of 0 because 0 is the seed/starting point
        // reassign output to result of involking callback function
        output = func(output, arr[x], x); // From objective #1
    }
} else { // Else is for when there IS a seed value
    // output will now be the seed that was entered
    output = seed;
    // Loop again & run info thru func
    for (let x = 0; x < arr.length; x++) { // This can start at 0 since we dont need to use the 1st index of the arr/col
        output = func(output, arr[x], x);
    }
}
// return output for whichever version (seed or no seed) was run
return output;
}

///////////////////////
// use the _.reduce method to return a string of only the string values in the array

var values = ["a", 1, "l", 2, "e", 3, "x"];

var string = _.reduce(values, function(accumulator, current, index){
        if (typeof current === 'number') {
            accumulator += current;
        } 
    return accumulator;
}, 0)

console.log(string); // Printing 'alex' once to the console, as intended

// storage var: output = undefined
// if '' === undefined => False
// Going to Else:
    // now assigning output to ''
    // x = 0
        // output = func('', 'a', '0')

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

_.extend = function(obj1, ...obj2) { // rest param is used to accept an unknown # of params

// If statement for when its an Array
if (Array.isArray(obj2)) {
    // For loop thru arrays
    for (let x = 0; x < obj2.length; x++) {
        // Look inside the objects inside the arrays
        for (let keys in obj2[x]) {
            // Add data from obj2[x]s to obj1
            obj1[keys] = obj2[x][keys];
        }
    }
} else { // Else statement for when its an Object
    // loop thru Obj2 & beyond: For-In loop
    for (let keys in obj2) {
        // Compare contents to obj1
        if (obj2[keys] !== obj1[keys]) {
            // If obj2+ have any info that obj1 doesnt, copy it to obj1
            obj1[obj2][keys];
            // console.log(obj1); // checking changed contents
        }
    }
}
// after all obj2+s have been checked & info copied to obj1, return obj1
return obj1;
}



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
