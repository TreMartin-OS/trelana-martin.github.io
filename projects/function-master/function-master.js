var testObj = {name: 'Trey', species: 'Human', noises: ['Burp', 'yawn', 'snore'], a: 1, b: 2, c: 3, d: 4, e: "string01", f: "string02", g: "string03"};
var testObj2 = {h: "stuff", i: "More stuff", j: "Man"};
var testArr = ['Black Diablos', 'Lagombi', 'Odogaron', 'Tetsucabra', 'Kecha-Wacha' ];

console.log(testObj);
console.log(testObj2);
console.log(testArr);

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
 
// console.log(objectValues(testObj));

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

// typeof thinks that Objects, Arrays, Nulls, & Dates are all Objects So check its none of the other Types to single them out
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
   
// Try 2
var check01 = string[0].toUpperCase();
var check02 = string.slice(1);
var check03 = check01.concat(check02);

return check03;

}

// console.log(capitalizeWord('bacon'));

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {

// storage arr for Cap'd letters
var capd = [];
// storage arr for spliced letters
var spliced = [];
// storage arr for combined words
var smoosh = [];

// split words into an array
var splitEm = string.split(' ');
// console.log(splitEm); // Words are correctly separated at teh spaces

// Loop thru the array
for (var i = 0; i < splitEm.length; i++) {
    // Add 1st letter of each word to Capd arr
    capd.push(splitEm[i][0].toUpperCase());
    // Add rest of letters to Spliced arr
    spliced.push(splitEm[i].slice(1));
}
// console.log(capd);
// console.log(spliced);

// Loop thru capd arr
for (var i = 0; i < capd.length; i++) {
// combine with splced arr
smoosh.push(capd[i].concat(spliced[i]));
}
// console.log('Latest: '+ smoosh);

// Return joined words
return smoosh.join(' ');
    
}
// console.log(capitalizeAllWords('boo boo boooooo howling')); // BAM done

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object with a name property and return 'Welcome <Name>!
function welcomeMessage(object) {

// var colection to make sure 1st letter is capd
var step1 = object.name[0].toUpperCase();
var step2 = object.name.slice(1);
var step3 = step1.concat(step2);
var fin = "Welcome " + step3 + "!";

return fin;
}

// console.log(welcomeMessage(testObj))


//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object with a name an a species and return '<Name> is a <Species>
function profileInfo(object) {

// another var colection to cap the 1st letters
var name1 = object.name[0].toUpperCase();
var name2 = object.name.slice(1);
var name3 = name1.concat(name2);

var species1 = object.species[0].toUpperCase();
var species2 = object.species.slice(1);
var species3 = species1.concat(species2);

var fin = name3 + " is a " + species3;
return fin;

}

// console.log(profileInfo(testObj))

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises
function maybeNoises(object) {
var fin;
// Check object for noises key
    if (Array.isArray(object.noises) === true && object.noises.length === 0 ) {
        fin = "there are no noises";
    } else if (Array.isArray(object.noises) === true && object.noises.length > 0) {
        fin = object.noises.join(" ");
    } else {
        fin = "there are no noises";
    }
    
    return fin;
} // func close

// console.log(maybeNoises(testObj));
// console.log(maybeNoises(testObj2));

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
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