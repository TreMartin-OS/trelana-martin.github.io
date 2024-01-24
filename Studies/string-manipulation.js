/*********
* STRING MANIPULATION:
*
* 0. String Manipulation is about working with the primitive dta that is strings. And though strings are immutable, there are many ways to use the data to create new values using Operators & Methods.  
*
*
* 1. With Operators: 
The Addition Operator can be used to combine not only numbers but also strings, along with the Addition Asignment Operator.
Equality Operators can be used to compare strings to see if they're exact matche or not.
And the Greater than & Less than Operators can be used to check if a string is higher than the other.
*
* 2. With String Methods: 
There are many more methods that affect Strings than Operators, several that are unique to strings and others that also work on Arrays.
The method .charAt() works like [index] & returns a new string of the character at that index, but can't be used on Arrays like [index].

**/


// 1 continued - With Operators
// Addition Operator used to combine strings
let firstWord = 'Combine these ' + 'strings into ' + 'a sentence';
console.log(firstWord); // <= Logs the full combined sentence
// You can also use the Addition assignment Operator to combine strings
let secondWord = 'Here is another ';
secondWord += 'example of combination.';
console.log(secondWord); // Logs the now combined sentence
// Equality Operators can be used to compare strings to see if they are the same
console.log('AbC' === 'AbC') // Returns 'true'
console.log('AbC' === 'aBc') // Returns 'false'
// Greater & Less than operators checking order of strings
// The further down the alphabet, the higher the index
let thirdWord = 'apple';
let fourthWord = 'orange'; // orange starts with an 'o' so is considered Higher than apple 
console.log(thirdWord > fourthWord); // Returns 'false'
console.log(thirdWord < fourthWord); // Returns 'true'


// 2 continued - With String Methods
// Unique String methods
// .charAt() works like [index] & returns a new string of the character at that index, but can't be used on Arrays like [index].
console.log(secondWord.charAt(3)); // Returns 'e'
// .split() takes a string & splits it up into a list of substrings and puts them into a returned Array
let spliceWord01 = firstWord.split(' '); 
console.log(spliceWord01); // Returns an array with each word in the string, told to separate at the spaces
let spliceWord02 = firstWord.split(''); 
console.log(spliceWord02); // Returns an array with each LETTER in the string, no value was entered to tell it where to split
// .toUpperCase changes any lower case letters to Uppercase that are specified.  Can be applied to the entire string or specific indexes.
let capThis = secondWord.toUpperCase();
console.log(capThis); // Returns the entire sentence Capitalized
// .replace() replaces a specific value or pattern with a new value
let replaceThis = secondWord.replace('combination', 'replacement');
console.log(replaceThis) // Returns a new sentence where 'combination' is gone & 'replacement' is in its former location

// String Methods that also work on Arrays
// .length() tells you the number of indexes in a String & an Array
let longWord = 'Checkered Giant';
console.log(longWord.length); // Returns 15
// .concat() can merge multiple Strings or Arrays
let catOne = 'Con';
let catTwo = 'Cat';
console.log(catOne.concat(catTwo)); // Returns a new string that reads 'ConCat'
// .slice() lets you extract & return a piece of a String or Array
let sliceWord = longWord.slice(10);
console.log(sliceWord); // Returns 'Giant'
// [index number] can be used to return the value at the entered index for both Strings & Arrays
console.log(longWord[10]); // Returns 'G'


