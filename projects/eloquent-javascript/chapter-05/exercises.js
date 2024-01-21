// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {

  let smoosh = arr.reduce(function(acc, current) {
      acc = acc.concat(current);
    return acc;
  }, [])
return smoosh;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testF, updateF, bodyF) {

  // let testing;

  if (!testF(value)) {
    return false;
  } else {
    bodyF(value);
  }
  return loop(updateF(value), testF, updateF, bodyF);
}


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, predFunc) {

  let check = [];
  for (let x = 0; x < array.length; x++) {
    if (predFunc(array[x]) === true) {
      check.push('pass');
    }
  }

  if (check.length === array.length) {
    return true
  } else {
    return false;
  }
  
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {

  // Create both a 'ltr' & 'rtl' var as empty arrays
  let ltr = [];
  let rtl = [];
  
  // Create For loop that iterates over every character in the string
  for (let x =0; x < str.length; x++) {
  // use charCodeAt() & characterScript() ((<= not a built in module - made in earlier chapters of EJ)) as a callback 
    let script = characterScript(str.charCodeAt(x)); // returns an object
    // script needs the character code of the individual letter/character, not the whole string
  
    // Determine If script returns something or nothing
    if (script !== null) { // If it doesnt = null
      if (script.direction === 'ltr') {
        ltr.push(script);
      } else {
        rtl.push(script);
      }
    }
  } // Neither the vid or chapter specified what to do if script is empty
  
  if (ltr.length > rtl.length) {  // which arr contains the most orientation matches
    return 'ltr'; 
  } else {
    return 'rtl';
  } // There is a chance they will be equal but we're not covering what to do in that situation today
  
  }




// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
