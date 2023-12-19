/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

animal.species = 'rabbit';
animal['name'] = 'Pippington';
animal.noises = [];

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'Munch';
noises.push('Crunch');
noises.unshift('Honk')
noises[noises.length] = 'Growl';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
animal.noises.push('Thwump');

console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Dot or Bracket notation using the Keys. But you can't used indexed numbers.
 * 2. What are the different ways of accessing elements on arrays?
 * Dot notation, Bracket notation using indexed numbers, & Bracket Notation using the .length() module as an indexed number.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * I got a bottle of water & a snack. Tostitos scoops with sour cream & onion dip. Yummy!
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var bunny = { species: 'bunny', name: 'Fluffsworth', noises: ['honk', 'huff', 'snort'] };
var kobold = { species: 'kobold', name: 'Pebbles', noises: ['YIP!', 'yip...?', 'Dragons r cool',] };
animals.push(bunny, kobold);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I chose Array since I feel it'd be easier to add & remove friends from one
var friends = [];

function getRandom(arr){

var i =  Math.floor(Math.random() * arr.length);
return friends.push(arr[i].name);

};

getRandom(animals);
console.log(friends);

animals[2]['friends'] = friends;
console.log(animals)

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}