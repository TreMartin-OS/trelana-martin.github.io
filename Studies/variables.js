/*********
 * VARIABLES:
 * 
 * 0: Variables are data containers that you assign names to.  Variables are created in 3 parts: 1) Using specific declaritive keywords, 2) Creating a custom name to describe the data it will hold, & 3) attaching it to the data you're creating with the assignment operator. Variable placeholders can also be created using 1 & 2 so that you can connect them to Data at a later time. Variables can be connected to any kind of Data, making it easier to reference or manipulate. While you can give a variable nearly any name you want, it is wise to use words that indcate what kind of data will be attached to it to avoid possible confusion.
 * 
 * 1: Declaration & Assignment: 
When creating a variable you have to first "declare" it using 1 of 3 keywords, this signals that the next word will be the variables name. After creating the variables name it is then assigned to data, this is called being initialized. 
 * 
 * 2: Var, Let, & Const:
These are your 3 declarative keywords. Any will let you declare a name for your variable, but they all work in slightly different ways. They're reach has has different levels of Scope reach, only Var & Let let you reassign the data connected to a variable name, they also have different Hoisting rules.

 * 
 * 3: Hoisting:
Code runs in order from top to bottom from left to right. Hoisting is the term for how a code interpreter will load certain variable & function information before executing the rest of the code. Variables declared with specific keywords will be hoisted in different ways, but a Functions name & data will be pulled up.
*********/


// 1 continued - Declaration & Assignment
// When a variable is declared, that is just picking a name for data that it will be attached to eventually. The code will recognize that the variable name exists, but trying to call it will show that it is "undefined" since its not attache dot anything.
var nameExample;
console.log(nameExample); // Prints "undefined" to the console.
// A variable is Assigned, or Initialized, when you attach it to data using the Assignment operator: '='
nameExample = {a: 'This', b: 'Is', c: 'Data'};
console.log(nameExample); // This now prints the data assigned to the variable to the console.


// 2 continued - Var, Let, & Const:
// Var was the original declarative keyword & has the most flexibility. It has a wider reach in Scope & can be freely reassigned. However, when using Var you can accidently use the same keyword for different Data without knowing since the interpreter doesn't warn you. You can declare a variable without a keyword, but If you don't use one your variable is treated as if you declared it with Var.
var varTime = [1, 2, 3]; 
console.log(varTime); // returns the array '[1, 2, 3]'
var varTime = true; 
console.log(varTime); // return the boolean 'true' with no mention of how the data was assigned to an array
// Let will also let you reassign Data like Var, but it will warn you.  Very handy to keep you from losing track of important data.
let letTime = {1: 'Object'}
console.log(letTime); // Returns the object
// let letTime = 1234
// console.log(letTime); // returns "SyntaxError: Identifier 'letTime' has already been declared"
// Const will not let you reassign a var name to a different data type, but you can change the contents of some data values 
const conTime = true;
console.log(conTime); // returns 'true'
// conTime = 'true';
// console.log(conTime); // returns 'TypeError: Assignment to constant variable', prevents reassignment from boolen to string
// conTime = false;
// console.log(conTime); // returns 'TypeError: Assignment to constant variable'. Even though this is also a boolean you can't change it from 'true'.
const conTime2 = [1, 2, 3, 4];
console.log(conTime2); // returns the above array
conTime2.push(5, 6); 
console.log(conTime2); // You can alter the contents of an Array
const conTime3 = {a: 1, b: 2, c: 3}
conTime3.b = 4;
conTime3.d = 5
console.log(conTime3); // You can also alter the contents of an object


// 3 continued - Hoisting: Var
// A variable declared with Var will be hoisted to the very top of either the Global or Funcion Scope its declared in. But only the name, not the data it's attached to, is hoisted. Trying to call/reference the variable will return undefined instead of a ReferenceError.

console.log(conHoist); // returns 'ReferenceError: conHoist is not defined' due to being inside the function 
console.log(conHoist2); // returns 'undefined' since variable is global but only the name was hoisted
function hoistCon() {
var conHoist = ['array', 'list', 'catalog', 'record', 'itemized']
}
var conHoist2 = 'Stuff'

// 3 continued - Hoisting: Let & Const
// Variables declared with Let or Const are in a "temporal dead zone" until execution reaches the line the variable is declared/initialized on inside the block. While "inside the TDZ" the variable is not connected to a value.  Attempt to call it will only log a ReferenceError. 

console.log(hoistLet); // returns "ReferenceError: Cannot access 'hoistLet' before initialization"
console.log(hoistConst); // Same as hoistLet

let hoistLet = 5005;
const hoistConst = 'BioMutant is on sale for $15. Should I buy it?'

console.log(hoistLet); // returns connected data since it has now been initialized before being called. Meaning its no longer in the TDZ
console.log(hoistConst); // Same as above