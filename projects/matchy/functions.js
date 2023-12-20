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
function search(animals, str) {


///////////////////// Solution 1
    // storage var
    let answer;
    
      // Loop thru the array
      for (var i = 0; i < animals.length; i++) {
          // Check if the name value of any objects matches the string input
          if (animals[i].name === str) {
              // If it does, return the entire Object
              answer = animals[i];
              //break if found or the loop will run to the end of the array
                break;
          } // If none do, return null
          else if (animals[i].name !== str) {
              answer = null;
          } // end if-else statements
      } // end loop
    return answer
  } // end func



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare a replace function like this: replace(animals array, name string, replacement object)
function replace(animals, name, replacement) {
    // Loop thru the array
    for (var i = 0; i < animals.length; i++)
        // Check If an animal with the string name exists within the `animals` Array,  
        if (animals[i].name === name) {
            // If so, replace it's entire Object with the replacement Object.
            animals.splice(animals[i], 1, replacement);
        }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// Declare a function that matches: remove(animals array, name string)
function remove(animals, name) {
    // Loop Thru array
    for (var i = 0; i < animals.length; i++) {
        // Check If an animal with that name exists within the Array 
        if (animals[i].name === name) { // SpecRuner says it cant read name here, but also says it does elsewhere?
            console.log(animals[i]);
            //  If so, remove it.
            animals.splice([i], 1);
        }
    }
    
}



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Declare a function with `add(animals array, animal obj)
function add(animals, animal) {

// storage array
var storage = [];

// Loop thru array
for (var i = 0; i < animals.length; i++) {
    // check if other animals have the same name
    if (animals[i].name === animal.name) {
        // If they do, push to storage array
        storage.push(animals[i]);
    }
}
// If storage array doesn't have a length
if (storage.length === 0) {
    // then Check if the >Object< has a `name` property with a length > 0 & a `species` property with a length > 0
    if (animal.name.length > 0 && animal.species.length > 0) {
// If so, add the new Object to the `animals` Array
animals.push(animal);
    }
}
}


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
