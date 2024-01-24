/*********
* FUNCTIONS:
*
* 0. Functions are a type of Logic Data. They're defined procedures that receive Input(s) & generate Output(s). When you create a Function you are encapsulating a block of code & Assigning it to a variable.  Then you can use that variable to quickly execute that block of code whenever you need. 
* 
*
* 1. The two phases to using functions: First we must ___ ? Next we can execute (or two other words for executing a function?) a function by?
First a Function must be Defined, then it can be Invoked.
You Define, or Declare, a Function by assigning it a variable after using the keyword 'function' followed by a pair of parenthesis around optional inputs, then that is followed by a pair of curly brackets where the code to be executed is written.  However, there are Anonymous Functions, which are functions that get passed as a parameter into other functions. But you can create an Anonymous function outside of another function by assigning it to a variable.
To invoke the Function, you type its variable name followed by a pair of parenthesis around any inputs you may need, called arguments. This runs the code inside the Function block & executes your wanted effect.
*
* 2. What's the difference between a function's parameters & arguments PASSED to a Function?: 
Parameters are keywords placed inside the parenthesis when the Function is being Defined.  They act as placeholders for the inputs the Function needs.
Arguments are the data passed between the parenthesis when a Function is invoked.  This is the data, or variable name that links to the data, that will replace the Parameters & that will be manipulated by the executed code inside the curly brackets.
*
* 3. What's the syntax for a NAMED Function?:
Creating a Named function starts with writing the function keyword, then a variable name, then parentheses, then curly brackets. The parentheses can optionally have a parameter, or several.  If there are more than one, they must be separated by commas. Then code the Function was created to execute is written between the curly brackets.
*
* 4. How do we assign a Function to a Variable?:
By declaring a variable name & assigning it to an Invocation of the Function.
*
* 5. Functions can OPTIONALLY take inputs, & OPTIONALLY return a single value.  How do we specify inputs, & how do we specify outputs?:
You specify inputs are needed by adding parameters between the parenthesis of your Function when you're defining it, which will be replaced by arguments, your actual inputs, when you're invoking the Function.
Then to indicate you want an output, you must write the keyword 'return' before the finished value you want to access outside of the Function or it will return 'undefined' by default.
*
* 6. Scope: Functions can see & modify Variables in parent or global scopes.  The inverse is NOT true.:
Variables created inside a Function are only accessible inside that FUNCTION.
*
* 7. Closures: Functions form closures around the data the house.  If an Object is returned from the Function & is held in memory somewhere (referenced), that closure stays ALIVE, & data can continue to exist in these closures!:
Closure is when a function inside of another function retains access to that outer functions variables after the outer function has been returned.

**/

// 1 continued - 
// Define your function with the 'function' keyword & a descriptive name
function definingKeyword(optionalParam1, optionalParam2) { // <= Add your optional Parameters here
    let output = optionalParam1 + optionalParam2; // <= Code ot be executed
    return output; // <= returning your desired results so they will be accesible outside ofthe function
  }
  // Invoke your Function
  definingKeyword(argument01, argument01); // <= Add your arguments that will be affected in place of your parameters
  
  // Declaring/saving an anonymous function by assigning it to a variable
  let mysteryFunc = function() {
    console.log('This function has no parameters because it requires no inputs');
  }
  // Invoked the same way as the other function
  mysteryFunc(); // Invoking this will return nothing but the string inside console.log() will print to the console
  
  
  // 2 continued - 
  // Parameters are placeholders for the data that will actually be input
  function paramsToArgs(param01) {
    return 'Now to insert the ' + param01;
  }
  paramsToArgs('Argument!'); // <= This is an Argument & replaces the Parameter above
  
  
  // 3 continued - 
  // writing the Function keyword lets the code know youre about to create a function
  function functionName(param1, param2, param500) { // Give the function a descriptive name & any parameters you need
    let passTheRams = param1 + param2 * param500;// Code you want to be excuted
    return passTheRams; // Return the value tht is the result of the executed code
  }
  
  
  // 4 continued - 
  // Declare a variable name         Then assign it to an anonymous function
  let indieGames = function(faveGame1, faveGame2, faveGame3) {
    let faveOrderArr = [];
    faveOrderArr.push(faveGame2, faveGame3, faveGame1);
    return faveOrderArr;
  }
  
  
  // 5 continued - 
  // If you want your Function to accept inputs, add Parameters
  function iWantInputs(inputParam1, inputParam2) {
    console.log('This has an ' + inputParam2 + ' but not a ' + inputParam1 + '.');
  }
  iWantInputs('Output', 'Input'); // This will not return any Output but the arguments here will be used in the code
  
  // If you want an Output
  function iWantOutputs() { // No inputs are required in your function definition
    return 'Time for an Output'; // 'return' keyword MUST be entered before the value you want as Output
  }
  iWantOutputs(); // This can be called without arguments & has an Output but no Input(s).
  console.log(iWantOutputs()); // <= Logs the return value to the console
  
  
  // 6 continued - 
  // Scope: Functions can see & modify Variables in parent or global scopes.  The inverse is NOT true.:
  // Variables created inside a Function are only accessible inside that FUNCTION.
  let canYouSeeMe = 'Yes.' // <= Globally declared variable
  function scopeThisOut() {
    const word1 = 'How';
    let word2 = 'About';
    var word3 = 'These?';
  return canYouSeeMe;
  }
  console.log(scopeThisOut()); // Logs the string 'Yes' from the returned canYouSeeMe variable
  // Global is unable to access variables declared inside the Function
  console.log(word1 + word2 + word3) // Error saying all of these are undefined
  
  function scopingTime() {
    let word2 = 'No';
    return word2;
  }
  console.log(scopingTime()) // This lets you see the value of the variable but not access & alter it
  console.log(word2); // Even when returned they can't be accessed
  
  
  // 7 continued - 
  // The outside functions info is saved & ready to execute the inside function later
  // Here is a Function within a function
  function sum(x) { 
    return function(y) {
      return x + y;
    }
  }
  var sumClosure = sum('wait'); // This returns the INTERNAL function to this variable, along with knowing x = 'wait'
  console.log(sumClosure(' which')); // These 3 now execute knowing 'wait' is x & using their arguments to replace y
  console.log(sumClosure(' replaces'));
  console.log(sumClosure(' witch'));