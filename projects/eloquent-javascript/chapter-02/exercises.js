// Teacher notes, the instructions dont say add a parameter, but we gotta add a parameter

////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Try 1
function triangles(x) {
let triShape = '#'; // Wait I dont need an array

// for loop that runs number of times entered for x
for (var a = 1; a <= x; a++) {
  // Push a # a number of times on a row
console.log(triShape.repeat(a));
}}
// console.log(triangles(5));
//^ This works but is not what chapter 2 wanted?

// Try 2
// function triangles(x) {
    
//   // Book wanted something like this:
//   for (var a = '#'; a.length <= x; a += '#') {
//     // Push a # a number of times on a row
//   console.log(a); // This only pushes it once per line
//   }}
// I didn't know strings had a length or that you could use a string as a counter

/*
Expected output example:
triangles(3) should print:
#
##
###
*/ 

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// I think we did this in Scratch already?  Re Do it & then go compare it to the way I did it last time.

// // Try 1 - this works but spec file implies it wants 2 params
// function fizzBuzz(x) {
// // Write a program that uses console.log to print all the numbers from 1 to 100
// // Loop that goes thru all the numbers from 0 to x
// for (a = 0; a <= x; a++) {
//   // For numbers divisible by 3, print "Fizz" instead of the number
//   if (a % 3 === 0 && a % 5 !== 0) {
//     console.log("fizz");
//   } else if (a % 5 === 0 && a % 3 !== 0) {
//   // for numbers divisible by 5 (and not 3), print "Buzz" instead.
//     console.log("buzz");
//   } else if (a % 3 === 0 && a % 5 === 0) {
//   // print "FizzBuzz" for numbers that are divisible by both 3 and 5
//   console.log("fizzbuzz")
// } else {
//   console.log(a);
// }}

// Try 2 
function fizzBuzz(y, x) {
  // Write a program that uses console.log to print all the numbers from 1 to 100
  // Loop that goes thru all the numbers from 0 to x
  while (y <= x) {
    // For numbers divisible by 3, print "Fizz" instead of the number
    if (y % 3 === 0 && y % 5 !== 0) {
      console.log("fizz");
      y++
    } else if (y % 5 === 0 && y % 3 !== 0) {
    // for numbers divisible by 5 (and not 3), print "Buzz" instead.
      console.log("buzz");
      y++
    } else if (y % 3 === 0 && y % 5 === 0) {
    // print "FizzBuzz" for numbers that are divisible by both 3 and 5
    console.log("fizzbuzz")
    y++
  } else {
    console.log(y);
    y++
  }}

}
// console.log(fizzBuzz(25));
// console.log(fizzBuzz(1, 25));

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {

// Take in 'x', divide by 2, alternate pshing in that many spaces & #s that many times and multiplied by x many times
// add a newline ever 'x' times
// then join it all into a string

// shape vars
  let cheShape = '#', cheSpace = ' ';
// multiply x by x to see how many times to repeat the pattern
  // let cheRepeat *= x;
// divide x by 2 to know where to put newline symbols
  // let cheLine = x / 2;

// // This prints things to correct number of time but not with alternating rows 
// console.log(((cheSpace + cheShape).repeat(cheLine) + '\n').repeat(x));


// Maybe this?: No, I need to alternate spaces & hashtags every other line, not all in a row
// console.log(((cheSpace + cheShape).repeat(cheLine) + '\n').repeat(cheLine));
// console.log(((cheShape + cheSpace).repeat(cheLine) + '\n').repeat(cheLine));

// storage array that items can be pushed to:
  let cheBoard = [];
// Max length var
  let cheEnd = x * x;
// loop with specific if else statement
for (a = 0; cheBoard.length < cheEnd; a++) {
  // if the arr is empty OR the previous index contains #, add Space
  if (cheBoard.length === 0 || cheBoard.length - 1 === '#') {
    cheBoard.push(cheSpace);
      // if the arr length = x, add a newline break
      if (cheBoard.length === x) {
      cheBoard.push('\n');
      }
  } // if the previous index in the arr is a space, add #
  else if (cheBoard.length - 1 === ' ') {
    cheBoard.push(cheShape);
    // if the arr length = x, add a newline break
    if (cheBoard.length === x) {
      cheBoard.push('\n');
      }
  }
}



}

console.log(drawChessboard(8));

/*
Expected output example:
drawChessboard(3) should print:
 #
# #
 #
*/ 

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
