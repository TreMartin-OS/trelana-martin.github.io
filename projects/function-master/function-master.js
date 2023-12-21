var testObj = {a: 1, b: 2, c: 3, d: 4, e: "string01", f: "string02", g: "string03"}
var testArr = ['Black Diablos', 'Lagombi', 'Odogaron', 'Tetsucabra', 'Kecha-Wacha' ]

//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and return its values in an array
function objectValues(object) {
    // storage arrray
    var storage01 = [];
// loop thru object with a For In loop since you can't loop thru an obj with a for loop or use .length
for (var keys in object) {
    // Push the Key values to the storage array
storage01.push(object[keys]);
}
// Return the storage array OUTSIDE of the loop <- stop forgetting that
return storage01;
} 
 
console.log(objectValues(testObj));

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and return all its keys in a string each separated with a space
function keysToString(object) {

    // Create storage arrray
    var storage02 = [];
// loop thru object with a For In loop again
for (var keys in object) {
    // Push the Keys to the storage array
storage02.push(keys);
}
// Turn the array into a string with each item separated by a space

// Return the storage array OUTSIDE of the loop <- stop forgetting that
return storage02.join(' ');

}
// console.log(keysToString(testObj));


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {

// Gonna need typeof for this one
// Another storage arrray
var storage03 = [];
    // loop thru object with a For In loop again
    for (var keys in object) {
        // check If value of key is a string,  
        if (typeof object[keys] === "string") {
            // if so, push to storage array
            storage03.push(object[keys])
            }
        }
// return array converted to strings separated by a space
return storage03.join(' ');
}

// console.log(valuesToString(testObj));

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {

     // Create storage variable
  var storage04 = '';

// Remember that typeof thinks that Objects, Arrays, Nulls, & Dates are all Objects
// So you got to prove its none of the other Types to single them out
if (typeof collection === 'object' && Array.isArray(collection) === false && collection !== null && collection instanceof Date === false) {
    storage04 = 'object';    
} else if (typeof collection === 'object' && Array.isArray(collection) === true && collection !== null && collection instanceof Date === false) {
    storage04 = 'array';    
  }
    return storage04;
}

// console.log(arrayOrObject(testObj));

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    
// Storage!!
var storage05 = [];
// split string into individual letters & into an array
var splitString = string.split('');
// Push 1st letter into storage array
storage05.push(splitString[0]);
// Convert storage array to string
var storage05a = storage05.toString();
console.log(storage05a); // shows that first letter is no longer in array and is a lone string
// Capitilize it 
storage05a.toUpperCase(); // Why isn't this working?

// All other letters get .joined & .concat with Cap'd storage

return storage05a;

}

console.log(capitalizeWord('bacon'));

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}