/*********
* DATA TYPES:
*
* 0. Data Types are values that can be assigned to variables in JavaScript. There are several types, the 10 that will be covered here and also: Bigint, Symbol, & Date which is a subtype of Object. The different types are also split into 2 categories: Primitive & Complex. The purpose of created code is to manipulate and-or store one or more types of Data. 
* 
*
* 1. Number: 
A whole integer or a decimal (floating point). Can be positive or negative.

*
* 2. String: 
A series of characters that represents textual data, such as a sentence.

*
* 3. Boolean:
Represents a choice of only 2 values: true or false

*
* 4. Array:
A collection of data between [square brackets] separated by commas. To access specific data, you need to know its position, its numerical index on a scale starting at 0, in the list. This can be difficult to track since the indexes position, number, will change when data is added or removed from the array.
An Array is also a subtype of Object.
*
* 5. Object:
A collection of data, like Arrays, but the data is stored between {curly braces} in 'key: value' pairs called properties, separated by commas.  Instead of accessing data by numerical index, you just need the 'key'.  Then no matter how much you add or remove from the collection, you can still easily find th values you're after.
*
* 6. Function:
A defined procedure that produces a Value.  Used to quickly perform a task by calling its name along with optional Input(s).  So when you need to perform the same procedure on multiple input values, you dont have to write the same chunk of code over & over. Functions can also be assigned to variables & stored in Objects.
*
* 7. Undefined:
A default type of data for variables that have yet to be assigned another value.
Can be a placeholder or result.
*
* 8. Null:
A primitive value that expresses a lack of identification, indicating that an Object value is expected where there is none. 
*
* 9. NaN:
Stands for "Not A Number", a special kind of Number value thats the result of an arithmetic operation that can't be expressed a a Number. 
*
* 10. Infinity & -Infinity:
These are also special number values that represent the concept of infinite numbers. 'Infinity' is a number that represents positive infinity while '-Infinity' represents negative infinity. A number reaches 'Infinity' or '-Infinity' when it exceeds the limit for a number: 1.797693134862315E+308 or -1.797693134862316E+308.
*
* 11. differences between Primitive & Complex data types:
Primitive data types are simple, immutable, values such as: numbers, strings, booleans, & undefined. A Primitive value can't be changed but the variable that holds it can be reassigned to a different value.
Complex data types are collections of primitive data, such as arrays & objects. Complex data is mutable, so its data can be cahnged, mutated, & deleted.
*
* 12. Explain & compare how Primitive values are passed to functions by Copy & complex values by Reference:
When a variable references another variable that is assigned to Primitive data, a unique copy of that value is created & connected to the referencing variable. Changes made to the value of the referencing variable are NOT made to the original variables value.
When a variable references another variable that is assigned to Complex data, no data or value copies are made.  Instead, that data simply has multiple variable names pointing to it. Changes made using either the original or the new variables affect the exact same data.
*********/

// 1 continued - Number
// With decimal 
let num01 = 19.87;
// Without decimals
let num02 = 37;

// 2 continued - String
// Can be made with double quotes
let string01 = "My first name is Trelana.";
// Or single quotes
let string02 = 'My last name is Martin.'

// 3 continued - Boolean
let a = 7;
let b = 3;
let c = 7;
// A False statement
(a === b)
// A True statement
(a === c)

// 4 continued - Array
// A list of simple data types contained inside an Array, accessed by index number
//      Index    0     1     2     3
let array01 = ['Zote', 57, false, null ];

// 5 continued - Object
// A Collection of Data stored in Key: Value pairs called Properties stored between curly brackets. Values are accessed by Key name instead of index number.
let collection = {
  name: 'Zote',
  precepts: '57',
  knight: false,
  victories: null  
}

// 6 continued - Function
// Procedure that receives Input(s) & generates an Output. 
function func01(input01, input02) {
  let output = input01 + input02;
  return output;
}
console.log(func01(num01, num02)); // returns 56.87

// 7 continued - Undefined
// When a variable is declared but not assigned to any value, undefined acts as a placeholder value
let defined01;
console.log(defined01); // returns 'undefined'

// 8 continued - Null
// Null indicating that this is an Object & there is an expected value but there is none
let notThis = null;
console.log(notThis); // returns null
console.log(typeof notThis); // returns 'object'


// 9 continued - NaN
// Since you can't multiply a number times an array, 'NaN' is returned
let NANresult = num01 * array01;
console.log(NANresult); // Returns 'NaN'


// 10 continued - Infinity & -Infinity
// Any number above or below a certain point is considered 'infinity' 7 '-infinity'
let infinitePlus = 1.797693134862315E+309;
let infiniteMinus = -1.797693134862316E+309;
console.log(infinitePlus); // returns infinity
console.log(infiniteMinus); // returns -infinity

// 11 continued - Difference between simple & complex Data types
// Primitive data
let simpleOld = "This is simple"
// Complex data
let complexOld = {
  a: 'This',
  b: 'Is',
  c: 'Complex',
}

// 12 continued - COPY vs REFERENCE
// Primitive Data - Copy by Value
let simpleNew = simpleOld; // This assigns a copy of simpleOld's value to simpleNew
console.log(simpleOld); 
console.log(simpleNew); // This & the one above log the same string
simpleNew += ' data.';
console.log(simpleOld);
console.log(simpleNew); // This string has been chnaged but the original remains the same

// Complex Data - Copy by Reference
let complexNew = complexOld;
console.log(complexNew); // logs same data as complexOld
complexNew.d = 'data';
console.log(complexNew); 
console.log(complexOld); // Both log the altered Object since these variables are linked to the same object