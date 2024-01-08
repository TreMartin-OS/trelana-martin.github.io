'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

// ^ OG file information. v My added information. //////////

/** Description requirements:
 * 1) Function description
 * 2) Input description
 * 3) Output description
 * !!@param's wont light up unless you do cmments like this.
 * !! { * } Means it accepts anything
 * !! Weird spacing is intentional. Ex: { Array or Object }
 */

////////////////////////////////////////////////////////////////////////////////////////////////////
// #1
/**
Identity: Function that accepts an input value & returns it unchaged.
@param { * } value: Accepts any input
@returns { * } value: Returns that same input
*/


function identity(value) {
    return value;
};
module.exports.identity = identity;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #2
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/


function typeOf(value) {

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
module.exports.typeOf = typeOf;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #3
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function first(arr, num) {

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
module.exports.first = first;



////////////////////////////////////////////////////////////////////////////////////////////////////
// #4
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function last(arr, num) {

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
module.exports.last = last;

////////////////////////////////////////////////////////////////////////////////////////////////////
// #5
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function indexOf(arr, val) {

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
module.exports.indexOf = indexOf;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #6
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function contains(arr, val) {

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
module.exports.contains = contains;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #7
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function each(col, func) {
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
module.exports.each = each;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #8
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function unique(arr) {
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
module.exports.unique = unique;



////////////////////////////////////////////////////////////////////////////////////////////////////
// #9
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function filter(arr, func) {
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
module.exports.filter = filter;



////////////////////////////////////////////////////////////////////////////////////////////////////
// #10
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function reject(arr, func) {
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
module.exports.reject = reject;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #11
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function partition(arr, func) {
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
module.exports.partition = partition;



////////////////////////////////////////////////////////////////////////////////////////////////////
// #12
/**
Map: Function that accepts a collection & a callback Function. The callback is run on every item inside thecollection & stores the results in an array for output.
@param { Array or Object } col: Accepts an Array or Object as a collection.
@param { Function } func: Accepts callback Function that is intended to be run on every item in the collection.
@returns { Array } mapStorage: Returns an array of new items that are the result of the items in the collection being run through the callback function.
*/

function map(col, func) {
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
module.exports.map = map;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #13
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function pluck(arr, prop) {
// Try 3: _.map() returns an array of objects that have been sorted into true arr & false arrs
// storage array
let storage = [];
// Is this what the instructions want?
_.map(arr, function(arr) { if (Object.keys(arr).includes(prop)) {storage.push(arr[prop]);}});
return storage;
}
module.exports.pluck = pluck;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #14
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function every(col, func) {
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
module.exports.every = every;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #15
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function some(col, func) {
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
module.exports.some = some;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #16
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function reduce(arr, func, seed) {
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
module.exports.reduce = reduce;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #17
/**
Name: Function that accepts 
@param {} : Accepts .
@param {} : Accepts .
@returns {} : Returns .
*/

function extend(obj1, ...obj2) { // rest param is used to accept an unknown # of params
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
module.exports.extend = extend;
