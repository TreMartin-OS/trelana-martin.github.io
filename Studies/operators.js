/*********
* OPERATORS:
*
* 0. Summary
* Operators are symbols used to process input data into new data by assigning values, comparing them, performing math calculations, combining conditions, converting data to different types, and more. There are multiple kinds: Arithmetic, Assignment, Comparison, Logical, & (once again) more.  Operators can also be used in various combinations with other Operators and also themselves to provide a wider variety of results. 

* 1. Assignment Operators: 
Assignment Operators may be the most commonly used type. The ‘=’ assigns various kinds of data to its left operand based on the data of its right operand.  If there is code to the right of the ‘=’, it executes down to a result & gets assigned to whatever keyword is declared on the left of the ‘=’.

*
* 2. Arithmetic Operators: 
  These are your Math Operators.  The symbols are the same as you’d see on most calculators.  ‘+’ for addition, ‘-’ for subtraction, ‘*’ & ‘/’ for multiplication & division, and so on.  When interacting with numbers, they do as youd expect: taking numerical values, literals or variables, as their operands & returning numerical values.
  They can be combined with themselves or other symbols to perform unique.

*
* 3. Comparison Operators:
Compares operands & determines whether the result of the comparison is true or false.  They are mainly used to determine equality or differences in variables or values. 
If the operands being compared arent the same type, there is an operator combination that can attempt to convert them to "close enough" types. There are also combinations that are Strict & the types must be exact. 

*
* 4. Logical Operators:
Logical operators perform logical operations using "AND" (&&), "OR" (||) and "NOT" (!==) to determine the logic between variables or values.  Logical operators are usually used to determine Boolean values, but && and || will return the value of one of the specified operands. Meaning that when these are used with non-Boolean values, they may return a non-Boolean value. 

*
* 5. Unary Operators:
An operation with only one operand, a single input.  They perform various operations, like incrementing/decrementing, evaluating data type, negation of a value, etc.
Types: Plus ( + ), Minus ( – ), Increment ( ++ ), Decrement ( — ), Logical NOT ( ! ), Bitwise NOT ( ~ ), typeof, delete, void.  Plus, Minus, Increment, & Decrement change number values by 1 or a specified amount. The Logical NOT is checking for a Boolean result. The Bitwise NOT inverts the bits of its operand.
Typeof returns the type of the evaluated operand, Delete removes a property from an object, & Void specifies an expression to be evaluated without returning a value, instead it returns 'undefined'.

*
* 6. Ternary Operators:
This uses three operands & the operator can have one of two values based on a condition.  The syntax is: a condition followed by a question mark (?), an expression to execute if the condition is true followed by a colon (:), and then an expression to execute if the condition is false. This is an alternative to If-Else statements.  You can use the conditional operator anywhere you would use a standard operator.
**/

///////////////////// For 1 - 4 he wants an example of EVERY operator of that type.  Only 1 tpe of the last 2.
// 1 continued - Assignment
// Assigning data to a variable and changing the data then reassigning the new value to that same variable.
let A = 1 // Assigns data to variable
A += 1; // Adds data & reassigns total
A -= 1; // Subtracts data & reassigns total
A *= 1; // Multiplies data & reassigns total
A /= 1; // Divides data & reassigns total
A %= 1; // Divides data to return Remainder & reassigns total
A **= 1; // Exponentiates data & reassigns total

// 2 continued - Arithmetic
// Performing Math calculations.
2 + 2; // Adds data
2 - 2; // Subtracts data
2 * 2; // Multiplies data
2 ** 2; // Exponentiates data
2 / 2; // Divides data
2 % 2; // Divides data
2++ // Increments data by 1
2-- // Decrements data by 1

// 3 continued - Comparison
// Comparing data.
3 == 3; // Are these Kind of the same thing
3 === 3; // Are these Strictly the same thing
3 != 3; // Does this Kind of not equal that
3 !== 3; // Does this Strictly not equal that
3 > 3; // Is this Greater than that
3 < 3; // Is this Less than that
3 >= 3; // Is this Greater than OR Equal to that
3 <= 3; // Is this Less than OR Equal to that


// 4 continued - Logical
// Comparing data but iwth conditions.
4 == 4 && 4 == '4' // Only returns true if Conditions on both sides are true
4 === 4 || 4 === '4' // Returns true if one Conditions on each side is true
4 !== '4' // Returns true if comparison is NOT true



// 5 continued - Unary 
// One type of Unary that returns the type of data.
let typeTest = 'Numbers';
typeof typeTest // Returns 'String'



// 6 continued - Ternary
// Compact If-Else statements.
let greaterLess = (1 < 2) ? "Yes" : "No"; // Returns Yes

