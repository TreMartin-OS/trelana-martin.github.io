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
@param { * } value: Accepts any Data type as input.
@returns { * } value: Returns that same input unaltered.
*/


function identity(value) {
    return value;
};
module.exports.identity = identity;


////////////////////////////////////////////////////////////////////////////////////////////////////
// #2
/**
TypeOf: Function that accepts any Value & returns its Data Type as a String.
@param { * } value: Accepts any Data Type as input.
@returns { String } stringVal: Returns the Data type of value in String form.
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
First: Function that accepts an Array & a Number then returns the 1st of number of items in the array. 
If value entered for Array is not an Array it returns an empty Array. If no Number is entered, the 1st element in the Array is returned. 
!! May need to add case for if number is negative or if Number input is greater than the Arrays length.
@param { Array } arr: Accepts an array of items.
@param { Number } num: Accepts a number.
@returns { Array } arr.slice: Returns array of items starting at 0 index until the index that matches the Number input.
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
Last: Function that accepts an Array & a Number, then returns Number of items from the Array starting at the end & working back towards the 0 index. 
@param { Array } arr: Accepts an Array of items.
@param { Number } num: Accepts a Number.
@returns { Array } arr.slice: Returns a slice of the Input Array starting at the last index & counting back Number input times. 
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
indexOf: Function that accepts an Array & a Value input, then returns the index of a matching Value from the Array if it exists.
@param { Array } arr: Accepts an Array of values.
@param { * } val: Accepts any Data type that can be added to an array.
@returns { * } x or -1: Returns the index of the element in the Array that matches the Value input, or a -1 if one is not present.
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
Contains: Function that accepts an Array & a Value, then returns True if the Array contains the Value, False if it doesn't.
@param { Array } arr: Accepts an Array of Elements.
@param { * } val: Accepts any Value that can be added to an Array.
@returns { Boolean } answer: Returns True if Array contains the Value input, False if not.
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
Each: Function that accepts a Collection (Array or Object) & a Function.
Each Element is run through the Function with the arguments: Element/Property value, Index/Key, & the Collection. 
Doesn't appear to Return anything.
@param { Array or Object } col: Accepts a Collection, which will be an Array or Object.
@param { Function } func: Accepts a Function.
@returns { ? } : Returns nothing? It doesnt ave the info anywhere, it doesn't say what the func does, no instructions to log to the Console.
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
NewList: Function that accepts an Array, runs each Element through the indexOf Function, pushes each Element to a new Array unless its a duplicate, Returns that new Array.
@param { Array } arr: Accepts an array of Elements.
@returns { Array } newList: Returns a new array of all Elements from the Array input with duplicates removed.
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
Filter: Function that accepts an Array & a Function, runs every Element of the Array through the Function to check for True or False.
If result is True, Element is pushed to a new storage Array that gets Returned at the end. 
@param { Array } arr: Accepts an Array of Elements.
@param { Function } func: Accepts a Function tht will be run on every Element in the Array.
@returns { Array } newArr: Returns a new array of elements that returned True after running through the Function.
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
Reject: Function that accepts an Array & a Function. Every Element of the Array is run through the Function using: Element, the Elements Index, & the entire Arr.
If the result of the Function is True, the Element is pushed into a new storge Array.
@param { Array } arr: Accepts an Array of Elements.
@param { Function } func: Accepts a Function to be run on every element along with its Index & the entire Array.
@returns { Array } newArr: Returns a new Array of items from the previous Array that returned True after running through the Function.
*/

function reject(arr, func) {
// storeage arr
let newArr = [];
// Loop thru arr
for (let a = 0; a < arr.length; a++) {
    // run every element thru func using: element, index, the entire arr & check if func returned true
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
Parition: Function that accepts an Array & a Function. Every Element is run through the Array to determine if True or False.
True Elements are pushed to 1 storage Array, False elements to another. Both Arrays are then pushed to a 3rd storage Array.
@param { Array } arr: Accepts an Array of Elements.
@param { Function } func: Accepts a Function that is run on every Element in the Array.
@returns { Array } arr03: Returns an Array that contains another Array full of True Elements then another Array full of False Elements.
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
Pluck: Function that accepts an Array of Objects & a Property (Key).
The Map Function is used to find the Objects in the Array that contain the Property (Key) then pushes its Value to a new storage Array.
@param { Array } arr: Accepts an Array of Objects.
@param { Property } prop: Accepts a Property (Key).
@returns { Array } storage: Returns a new storage Array of Values that were in the Objects connected to the Property (Key) input.
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
Every: Function that accepts a Collection & Function. The Function is run through every Element in the Collection.
If EVERY Element in the Collection returns True after being run through the input Function, the Every Function returns True. Otherwise, it Returns False.
If no Function is provided, code checks if Element is Truthy (Exists?) & applies the same rules as above.
@param { Array or Object} col: Accepts an Array or Object as a Collection.
@param { Function } func: Accepts a Function that is run on every Element of the Collection.
@returns { Boolean } answer: Returns True If the return value of calling the input Function for every Element is True. If even 1 Element Returns False, Return False.
If there is no Function, Return True if every Element is Truthy, otherwise Return False
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
Some: Function that accepts an Array or Object as a Collection & a callback Function. The Function is run through every Element in the Collection.
If EVEN ONE(1) Element in the Collection returns True after being run through the input/callback Function, the Some Function returns True.
If no Function is provided, code checks if Element is Truthy (Exists?) & applies the same rules as above.
@param { Array or Object} col: Accepts an Array or Object as a Collection.
@param { Function } func: Accepts a Function that will be run on every Element in the Collection.
@returns { Boolean } answer: Returns True if the result of calling the callback Function is True for at least one element. Otherwise, it Returns False.
If a Function is not provided, Return True if at least one element is Truthy, otherwise return False.
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
Reduce: Function that accepts an Array, a Function, and a Seed. The Function is run on every Element in the Array using: Previous Result (Seed), Element, & Index.
Function Returns the the last Element from the input Array after it has been run through the Function.
If no Seed is provided, the 0index item of the Arrayis treated as the Seed.
@param { Array } arr: Accepts an Array as a Collection.
@param { Function } func: Accepts a Function to be run on every Element in the Array.
@returns { *? } output: Returns the last Element from the input Array after it has been run through the Function.
!! Output may be an Object if the Array is a Collection of Objects. Not enough information provided.
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
Extend: Function that accepts a starter Object, then an unknown number of other Objects. Every Object is compared to the 1st Object.
If Object1 is missing Data present in Object?, the data is copied into Object 1.
If both Objects have a matching Property/Key, the Value of Object1 is replaced with the Value if Object?. 
@param { Object } obj1: Accepts an Object that will be updated.
@param { Object(s) } ...obj2: Accepts several Objects whose Data will be added to Object1.
@returns { Object } obj1: Returns Object1 after being updated by all the other Object?s.
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
