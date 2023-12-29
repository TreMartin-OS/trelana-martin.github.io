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
// I think we did this in Scratch already?  ReDo it & then go compare it to the way I did it last time.

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


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(x) {

  // Var for row 1
  var cheRow1 =[];
  // Var for row 2
  var cheRow2 =[];
  // Var for board that rows will be alternately add to x number of times
  var cheBoard = [];
  // Storage for finished added arrays to be flattened & turned into a string
  var cheFin; 
  
  // Loop to Create Row 1
  for (let a = 0; a < x; a++) {
    if (cheRow1.length < x && cheRow1[cheRow1.length - 1] !== ' ') {
      cheRow1.push(' ');
    } else if (cheRow1.length < x && cheRow1[cheRow1.length - 1] !== '#') {
      cheRow1.push('#');
    }
  }  
  
  // Loop to Create Row 2
  for (let a = 0; a < x; a++) {
    if (cheRow2.length < x && cheRow2[cheRow2.length - 1] !== '#') {
      cheRow2.push('#');
    } else if (cheRow2.length < x && cheRow2[cheRow2.length - 1] !== ' ') {
      cheRow2.push(' ');
    }
  }
  
  // Loop to push Rows alternately to cheBoard x number of times 
  for (let a = 0; a < x ; a++) {
    if (cheBoard.length < x + x && cheBoard.length % 2 !== 0) { // Checks for room for both pushed arrs + newlines, & if this is an odd or even turn 
      // & push to cheBoard with a \n at the end
      cheBoard.push(cheRow2.join('') + '\n');
    } else if (cheBoard.length < x + x && cheBoard.length % 2 === 0) { // ^ Same
      // & push to cheBoard with a \n at the end
      cheBoard.push(cheRow1.join('') + '\n');
    }
  }
  
  cheFin = cheBoard.join('');
  // Assignment specifically wants the console.log inside the function
  console.log(cheFin);
  }


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
