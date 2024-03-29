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

var maleCount = function (arr) {
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
    let males = _.filter(arr, function (customer) {
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

var femaleCount = function (arr) {

    // I want this to go thru Arr (reduce should be), find every Element with 'female' in gender, Increase the counter by 1 for every gender: "female" found
    let females = arr.reduce(function (acc = 0, current) {
        if (current.gender == "female") {
            acc += 1;
        }
        return acc;
    }, 0
    );
    return females;

};
// console.log(femaleCount(customers)) 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #3 - **Objective**: Find the oldest customer's name - **Input**: `Array` - **Output**: `String` - **Constraints**:

var oldestCustomer = function (arr) {

    let oldest = arr.reduce(function (acc, current) {
        // Push subarr into main acc arr
        acc.push([current.name, current.age]);
        return acc;
    }, [])
    // sort these by value  
    let sortAges = oldest.sort(function (a, b) { return b[1] - a[1] });
    // Get oldest Customer
    let oName = sortAges[0][0];

    return oName;

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #4 - **Objective**: Find the youngest customer's name - **Input**: `Array` - **Output**: `String` - **Constraints**:

var youngestCustomer = function (arr) {

    let youngest = arr.reduce(function (acc, current) {
        // Push subarr into main acc arr
        acc.push([current.name, current.age]);
        return acc;
    }, [])
    // sort these by value  
    let sortAges = youngest.sort(function (a, b) { return a[1] - b[1] });
    // Get oldest Customer
    let yName = sortAges[0][0];

    return yName;

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #5 - **Objective**: Find the average balance of all customers - **Input**: `Array` - **Output**: `Number` - **Constraints**:

var averageBalance = function (arr) {
// Loop thru Arr, collect value of 'balance' into an Arr or OBJ with $ & , removed, convert them to integers, Add them all together & divide by number of customers to find Avg 

let money = arr.reduce(function(acc, current) {
    acc += Number(current.balance.replace(/[$,]/g, ""));
    return acc;
    }, 0)

let average = money / arr.length;

return average;
};
// Save for last as it requires more complicated code

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #6 - **Objective**: Find how many customer's names begin with a given letter - **Input**: `Array`, `Letter` - **Output**: `Number` - **Constraints**:

// How to solve with Method - It wants a count, so Reduce?
var firstLetterCount = function (arr, letter) {

    // With Method    
    let stoArr = arr.reduce(function (count, current) {
        if (current.name[0].toLowerCase() === letter.toLowerCase()) {
            count += 1;
        } return count;
    }, 0)

    return stoArr;
};

// console.log(firstLetterCount(customers, 'J')); // No method: return arr of objs of customers whose names start with 'J'
console.log(firstLetterCount(customers, 'J'));  // WORKS NOW  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #7 - **Objective**: Find how many friends of a given customer have names that start with a given letter
//**Input**: `Array`, `Customer`, `Letter` - **Output**: `Number` - **Constraints**:

var friendFirstLetterCount = function (arr, customer, letter) {
    // Need: a count - so Reduce? Expand on firstLetterCount?

    let sArr = arr.reduce(function (acc, current) { // Remember current already includes the arr
        if (current.name === customer) {
            for (let x = 0; x < current.friends.length; x++) { // WILL needFor Loop for friends Arr
                if (current.friends[x].name[0].toLowerCase() === letter.toLowerCase()) {
                    // acc.push(current.friends[x].name); // Pushes all J names when my acc is an []
                    acc += 1;
                }
            }
        }
        return acc;
    }, 0);

    return sArr;
};
// console.log(friendFirstLetterCount((customers, 'Marco', 'J')));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #8 - **Objective**: Find the customers' names that have a given customer's name in their friends list - **Input**: `Array`, `Name` - **Output**: `Array` - **Constraints**:

var friendsCount = function (arr, name) {

    // if a Customer in Arr has Name included in their friends arr, push their name to an array
    let sArr = arr.reduce(function (acc, current) { // loops over top layer of Objects
        for (let x = 0; x < current.friends.length; x++) {
            // REMEMBER friends is an arr of OBJECTS. So loop thru friends AND check inside each object
            if (current.friends[x].name === name) { // How to change this? 
                acc.push(current.name);
            }
        }
        return acc;
    }, []);

    return sArr;

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #9 - **Objective**: Find the three most common tags among all customers' associated tags - **Input**: `Array` - **Output**: `Array` - **Constraints**:

var topThreeTags = function (arr) {

    // This is looking for matching whole arrs, I need it to look INSIDE the arrs
    let tagCount = arr.reduce(function (acc, current) {
        // For loop to look INSIDE the tag arrs
        for (let x = 0; x < current.tags.length; x++) {
            if (acc.hasOwnProperty(current.tags[x])) {
                acc[current.tags[x]] += 1; // If Key already exists, increment by 1
            } else {
                acc[current.tags[x]] = 0; // if Key doesnt exist, create it & assign starting value
                acc[current.tags[x]] += 1; // THEN increment by 1
            }
        }
        return acc;
    }, {}) // Problem wants an ARR but acc need to be an OBJ for other steps to work
    // console.log(tagCount); // This gives me a tally of how many times EVERY individual tag appears

    let arrThis = Object.entries(tagCount); // Turned the Obj into an Arr containing Arrs of Key:Value pairs
    let sortTags = arrThis.sort(function (a, b) { return b[1] - a[1] }); // Sort them in descending value order (Most to Least) 
    let fArr = sortTags.slice(0, 3); // Slices top 3 results into a new Arr
    let finalArr = [];
    finalArr.push(fArr[0][0], fArr[1][0], fArr[2][0]); // Theres gotta be a better way to do this

    return finalArr;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// #10 - **Objective**: Create a summary of genders, the output should be:```javascript{male: 3, female: 4, non-binary: 1}``` - **Input**: `Array` - **Output**: `Object` - **Constraints**: Use `reduce`

var genderCount = function (arr) {

    let Gender = arr.reduce(function (acc, current) {
        if (acc.hasOwnProperty(current.gender)) {
            acc[current.gender] += 1;
        } else {
            acc[current.gender] = 0;
            acc[current.gender] += 1;
        }
        return acc;
    }, {})
    return Gender;
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
