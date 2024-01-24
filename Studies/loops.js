/*********
* LOOPS:
*
* 0. Loops are blocks of code that execute repeatedly until some goal is met. They iterate over input data, searching for or manipulating values as they go. They're especially useful for working with collections of data.
* 
*
* 1. Explain While, For, & For-In Loops: 
While loops - 
This statement is created by starting with the keyword 'while, that is followed by a single condition between parenthesis, and while that condition is true, the loop repeats itself by executing the connected code block between curly braces. The code in the block needs to make some change to the condition lest the loop run forever.  Either by changing the condition value through incrementation or performing other kinds of data manipulation.

For loops - 
Like the While loop, For loops also continue while a condtion is true. It is a statement that creates a loop starting with the keyword 'for', followed by parenthesis containing 3 expressions separated by semicolons, that is then followed by a block enclosed in curly brackets that contains the code ot be executed each loop. The 3 expressions are: a variable that must be initilized for your starting point, followed by the condition that must be true for the loop to continue, then usually end with the amount your starting point variable will incremented by each loop.

For-In loops - 
These loop over all the properties contained in an Object by accessing the value connected to each key.  Its syntax is: the keyword 'for', followed by parenthesis containing a declared variable that will represent each key, followed by the keyword 'in', and ending with the object. Following the parenthesis is a block of code between curly braces that is to be executed on each value.
*
* 2. Be able to Loop any number of time, forward counting up to some limit, backward counting down to 0: 
*
* 3. Loop over an Array, forwards & backwards:
*
* 4. Loop over an Object:
**/

// 1 continued - Explain While, For, & For-In Loops
// Do I need some code for this when the next 3 points cover them?

// 2 continued - Be able to Loop any number of time, forward counting up to some limit, backward counting down to 0
// While - loop counting up to come limit.
// Declare a variable that will be manipulated
let upCount = 1;
// Create the loop using the 'while' keyword followed by your condition that must be true to continue the loop
while (upCount <= 9) {
  // Write code to be executed while the condition is false
    console.log('This is forwards loop number: ' + upCount);
  // Write code that will change the condition in some way so the loop wont repeat forever
  upCount += 1;
}
// While - Now loop backwards counting down to 0
let downCount = 15;
while (downCount >= 0) {
    console.log('This is backwards loop number: ' + downCount);
  downCount -= 1;
}

// 3 continued - Loop over an Array, forwards & backwards
let exArray = ['Eva,', 'can', 'I', 'see', 'bees', 'in', 'a', 'cave?'];
// For - loop forwards over an array
// Create loop using the 'for' keyword followed by parenthesis containing your 3 expressions
for (let x = 0; x < exArray.length; x++) { // Loop starts at index 0 & increments by 1 every loop
  // The loop will run until 'x's value is the same as the last existing index of this array
  console.log(exArray[x]); // This will log the value of the current index each loop
}
// For - loop backwards over an array
// Create loop the same way as above
for (let x = exArray.length - 1; x >= 0; x--) { // Loop starts at the LAST index of the array & decrements by 1 every loop
  // The loop will run until 'x's value is 0, the first index of the array
  console.log(exArray[x]); // This will log the value of the current index each loop
}

// 4 continued - Loop over an Object
var testObj = { name: 'Hornet', Species: 'Spider-Wyrm', occupation: 'Bug Knight' };
// For in loop - only forwards
// Declare loop with 'for', followed by parenthesis containing a key variable, followed by 'in', end with the object to be iterated through
for (let keys in testObj) {
  console.log(testObj[keys]); // This will log the value of each key
}


