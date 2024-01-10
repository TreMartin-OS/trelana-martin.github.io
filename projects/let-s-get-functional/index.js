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
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional 
 *          npm start --prefix ./trelana-martin.github.io/projects/let-s-get-functional // <= Line you must paste into terminal to check if your codes are passing
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

/** 
 * README file has instructions for each problem.
 * All these Functions will interact with data in the customers.json file.
 * ^ Line 19-21 shows how to test if my code is passing.
 * filter(), map(), reduce(), & each() "You will have the most success with these" unsure what he means by that right now.
 * We have to use our methods to solve these, so we need to understand what they do.  EX:
 *      filter = Iterates thru collection & only returns items that pass a test.
 *      map = Iterates thru collection & returns new collection of changed items.
 * 
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #1
var maleCount = function(arr) {
//     // Lecture Example for solution without methods *************
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
   // Lecture Example for solution with methods: Wants us to use filter() *************
    // Counter var
    let males = _.filter(arr, function(customer) {
        return customer.gender === 'male';
    });
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #2
var femaleCount = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #3
var oldestCustomer = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #4
var youngestCustomer = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #5
var averageBalance = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #6
var firstLetterCount = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #7
var friendFirstLetterCount = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #8
var friendsCount = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #9
var topThreeTags = function() {

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #10
var genderCount = function() {

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
