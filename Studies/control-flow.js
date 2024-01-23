/*********
* CONTROL FLOW:
*
* 0. Control Flow is about directing the order in which individual code statements are run & if they are run at all.  Code runs completely from top to bottom, left to right, unless a statement or result interrupts it. Such as hitting a loop that makes it repeat a section so many times, or hitting Conditional statemnets that result in specific sections being skipped. 
*
* 1. If: 
A statement that evaluates an expression between a set of parenthesis.  If the result is true, the code within the body, curly brackets, executes.  If the result is false, the code within the body is skipped.
*
* 2. Else-If: 
Similar & connected to If statements. They contain a new expression to be evaluated only if the previous, connected statement, returned False. They can be chained without limit.
*
* 3. Else:
This is a statement that can be added to an If-block or the very end of a chain of If-Else If blocks.  A final condition to be executed if every condition block above it fails. 
*
* 4. Switch:
They work similar to If-Else If blocks, but instead of checking the results of an expression against a single condition it is checked across possibly infinite options, or however many you wish to write.
Conditions are listed in batches of a 'case' to be evaluated, a line of code ot execute if the case is a match, & a 'break;' to signal the code to not run any more comparisons & exit the Switch.  Switch also has a 'default' command for the end that executes if there are no matches, like an 'Else' statement.
*********/

// 1 continued - If
// A (condition) to be tested is placed between parenthesis.  If the condition is true, the {code between the curly brackets} executes.  If not, it is skipped.
if (2 === 5) {
    // (Condition) is checked
    console.log("This is true"); // Since the (condition) wasn't true, this will be skipped
  }
  if (2 === 2) {
    // (Condition) is checked
    console.log("This is true"); // // Since the (condition) is true, this will {execute the body code}.
  }
  // These are separate If statements so both (conditions) will be checked
  
  // 2 continued - Else-If
  // 'If' statements linked at the keyword 'else'
  if (2 === 5) {
    // This is False
    console.log("This is true"); // So this will be skipped
  } else if (2 === 2) {
    // This is true
    console.log("This is true"); // So this {body code} will be executed & the string logged to the console
  } else if (2 === 19) {
    // Since the above (condition) was true & its {body code} executed, this (condition) will not be checked
    console.log("This is true"); // Since its (condition) wont be checked, this {body code} will be skipped
  }
  // These are linked so each line is run until a (condition) is true.  If none are true, all (conditions) will be checked but none of the {body code} will execute.
  
  // 3 continued - Else
  //
  if (2 === 5) {
    console.log("This is true");
  } else if (2 === "bear") {
    console.log("This is true");
  } else {
    // If none of the above (conditions) are true then this final Else {body code} will execute
    console.log("None of the above are correct");
  }
  
  // 4 continued - Switch
  //
  let animal = "rabbit";
  
  switch (
    animal // Looking at the value of 'animal'
  ) {
    case "dog": // Checking if the value of 'animal' is set to this case, its not
      console.log("BORK"); // This will be skipped since animal is not set to 'dog'
      break;
    case "cat": // Also skipped
      console.log("Nyah");
      break;
    case "Horse": // Also skipped
      console.log("NEEEEIGH");
      break;
    case "rabbit": // 'animal' is assigned to 'rabbit' so this (condition) is true
      console.log("Whats up Doc?"); // Since the case matched, the code here will be executed
      break; // This kicks you out of the switch block so no more comparisons are made
    case "hamster": // This will be skipped since a match was already found
      console.log("Squeak");
      break;
    default: // If there were no matches, default would execute its code at the very end
      console.log("Not one of our critters.");
  }
  