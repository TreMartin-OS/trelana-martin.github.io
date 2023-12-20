/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Declare Function named search that takes 2 parameters: an array & string
function search(arr, str) {


///////////////////// Solution 1
    // storage var
    let answer;
    
      // Loop thru the array
      for (var i = 0; i < arr.length; i++) {
          // Check if the name value of any objects matches the string input
          if (arr[i].name === str) {
              // If it does, return the entire Object
              answer = arr[i];
              //break if found or the loop will run to the end of the array
            break;
          } // If none do, return null
          else if (arr[i].name !== str) {
              answer = null;
          } // end if-else statements
      } // end loop
    return answer
  } // end func



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a replace function like this: replace(animals array, name string, replacement object)
function replace(arr, str, obj) {
    // Loop thru the array
    for (var i = 0; i < arr.length; i++)
        // Check If an animal with the string name exists within the `animals` Array,  
        if (arr[i].name === str) {
            // If so, replace it's entire Object with the replacement Object.
            arr.splice(arr[i], 1, obj);
        }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
