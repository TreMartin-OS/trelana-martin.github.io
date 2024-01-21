////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let rArr = [];

  if (step < 0) {
    if (start < end) {
      for (let x = start; x <= end; x += step) {
        break;
      }
    } else if (start > end) {
      for (let x = start; x >= end; x += step) {
        rArr.push(x);
      }
    }
  } else if (step > 0) {
    if (start < end) {
      for (let x = start; x <= end; x += step) {
        rArr.push(x);
      }
    } else if (start > end) {
      for (let x = start; x >= end; x -= step) {
        rArr.push(x);
      }
    }
  }

  return rArr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let tArr = array.reduce(function (acc, current) {
    acc += current;
    return acc;
  }, 0);
  return tArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // Make a new array & add the old arrs contents to it backwards
let newArr =[];
  for (let x = 0; x < array.length; x++) {
newArr.unshift(array[x]);
  }
  return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // Make a new array & add the old arrs contents to it backwards
  let newArr = [];
  for (let x = 0; x < array.length; x++) {
    newArr.unshift(array[x]);
  }
  // Add reversed new array to the end of the old one & remove the old elements
  for (let y = 0; y < newArr.length; y++) {
    array.push(newArr[y]);
    array.shift(y);
  }

  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(alArr) {
  // start from the core & build outward in layers
    let rest = null;
    // create loop that iterates backwards
    for (let x = alArr.length - 1; x >= 0; x--) {
      // 
      rest = {value: alArr[x], rest: rest}
    }
    return rest;  
  }

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(listObj, loArr=[]) { // Dont forget to make default parameter 
  // Base
  if (listObj.rest === null) {
    loArr.push(listObj.value) // last value push needs to be done here since once rest = null the Recursion stops
    return loArr
  }
  // Recursion
  loArr.push(listObj.value)
    return listToArray(listObj.rest, loArr); // .slice only works on Arrays
  }

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {value: element, rest: list}
  }

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {

  if (list === undefined) {
// Easy
    return undefined;
// Peasy
  } else if (number === 0) {
    return list.value
// Change into an arr & return that index
  } else {
    let maybe = listToArray(list);
    return maybe[number];
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  // Determine if both arguments are NOT Objects
    if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
      return obj1 === obj2; // This covers simple data
    }
  // Determine if 1 of them is not an Object
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false; // If 1 is complex & the other simple then they're not gonna be the exact same
    }
  // Now you know both are Objects/Arrays so Create an Arr of each Objs keys
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) { // This is optional but can be a Quick Catch
      return false; // Even before comparing contents, if you find theyre not the same length you know they dont match
    }
    // Iterate to compare contents of both Arrs
  for (let x = 0; x < keys1.length; x++) {
    if (!keys2.includes(keys1[x]) || !deepEqual(obj1[keys1[x]], obj2[keys1[x]])) { 
      // 1st part is Checking if current key1-index is NOT inside keys2
      // 2nd part is using Recursion to check the values at the matching indexes to see if theyre the same
      return false;
    }
  }  
    // If none of these "false" results are triggered then the result must be true
    return true;
  }
  

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
