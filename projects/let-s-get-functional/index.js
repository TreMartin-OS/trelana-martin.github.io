// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar"); // Importing underbar library

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *  a. cd .. <= 'cd-space-2periods' - type & submit that 1 at a time until the terminal reads: gitpod /workspace $ 
 *  b. npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional 
 *          npm start --prefix ./trelana-martin.github.io/projects/let-s-get-functional // <= Line you must paste into terminal to check if your codes are passing
 *          ^ IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 *
 * 5. To save your progress to GitHub the Terminal MUST be in your normal directory. You can either:
 *  a. Close the Terminal & reopen it to reset back to your base directory.
 *  b. Type & submit: cd & your full directory name => cd trelana-martin.github.io
 */

/** 
 * README file has instructions for each problem.
 * All these Functions will interact with data in the customers.json file.
 * ^ Line 19-21 shows how to test if my code is passing.
 * filter(), map(), reduce(), & each() - implied they will be needed the most
 * We have to use our methods to solve these, so we need to understand what they do.  
 * EX:
 *      filter = Iterates thru collection & only returns items that pass a test.
 *      map = Iterates thru collection & returns new collection of changed items.
 *      reduce = adding some numbers together?
 *      each - ??? Even with the completed LoDown docmentation, the modules purposes seem super vague
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #1 - **Objective**: Find the number of male customers - **Input**: `Array` - **Output**: `Number` - **Constraints**: use `filter`

var maleCount = function(arr) {
//////////////////// // Lecture Example for solution without methods *************
//     // Counter var
//     let males = 0;
//     // For loop to go thru Array
//     for (let x = 0; x < arr.length; x++) {
//         // Check gender of each Element
//         if (arr[x].gender === 'male') {
//             // Add to counter if True
//             males += 1;
//         }
//     }
// return males;
// };

//////////////////// // Lecture Example for solution with methods: Wants us to use filter() *************
    // Counter var
    let males = _.filter(arr, function(customer) {
        return customer.gender === 'male';
    });
    return males.length;

//////////////////// // Lecture Example thats more efficient *************
//     // Counter var
//     let males = _.filter(arr, (customer) => customer.gender === 'male');
//     return males.length;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #2 - **Objective**: Find the number of female customers - **Input**: `Array` - **Output**: `Number` - **Constraints**: use `reduce`

var femaleCount = function(arr) {

// I want this to go thru Arr (reduce should be), find every Element with 'female' in gender, Increase the counter by 1 for every gender: "female" found
var string = _.reduce(arr, function(accumulator, current, index){ 
    if (gender === 'female') {
        accumulator += current;
    } 
return string;
}, 0) 

// // Create counter var
// let counter = 0;
// // Run Reduce on           Array                  to find female customers       & add them to a running total 
// /**let count = */ _.reduce(arr, function(customer) { if (customer.gender === 'female') {return counter + 1;} } );
// // return final count
// return counter;    

// // ////// Solved w/out Reduce ///////////
// let counter = 0;
// for (let x = 0; x < arr.length; x++) {
//     if (arr[x]['gender'] === 'female') {
//         counter += 1;
//     }
// }
// console.log(counter); // correctly returning 4 /////////

};

console.log(femaleCount(customers));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #3 - **Objective**: Find the oldest customer's name - **Input**: `Array` - **Output**: `String` - **Constraints**:

var oldestCustomer = function(arr) {
// Needs: Loop thru array, check value of 'age', compare ages to find highest, return 'name' value of person with highest age, use at least 1 method
// Possible useful methods: .pluck()


// // ////// Solved w/out Methods ///////////
// storage for name & age
let objStore = {};
// loop thru arr
for (let x = 0; x < arr.length; x++) {
// if next customer age is higher than previous, replace obj with hig

}


};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #4 - **Objective**: Find the youngest customer's name - **Input**: `Array` - **Output**: `String` - **Constraints**:

var youngestCustomer = function(arr) {
// Needs: Loop thru array, check value of 'age', compare ages to find lowest, return 'name' value of person with lowest age, use at least 1 method


};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #5 - **Objective**: Find the average balance of all customers - **Input**: `Array` - **Output**: `Number` - **Constraints**:

var averageBalance = function(arr) {
// Needs: Loop thru array, check value of 'balance', save them in a storage arr, convert them to integers, use math to find avg (divide total by number of people), use at least 1 method
// Methods?: 

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #6 - **Objective**: Find how many customer's names begin with a given letter - **Input**: `Array`, `Letter` - **Output**: `Number` - **Constraints**:

var firstLetterCount = function(arr, l) {
// Need: loop thru Array, Can maybe use _.first() for this

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #7 - **Objective**: Find how many friends of a given customer have names that start with a given letter - **Input**: `Array`, `Customer`, `Letter` - **Output**: `Number` - **Constraints**:

var friendFirstLetterCount = function(arr, cus, l) {
// Need: 

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #8 - **Objective**: Find the customers' names that have a given customer's name in their friends list - **Input**: `Array`, `Name` - **Output**: `Array` - **Constraints**:

var friendsCount = function(arr, n) {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #9 - **Objective**: Find the three most common tags among all customers' associated tags - **Input**: `Array` - **Output**: `Array` - **Constraints**:

var topThreeTags = function(arr) {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #10 - **Objective**: Create a summary of genders, the output should be:```javascript{male: 3, female: 4, non-binary: 1}``` - **Input**: `Array` - **Output**: `Object` - **Constraints**: Use `reduce`

var genderCount = function(arr) {
// Reduce() is required

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// End ^

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
