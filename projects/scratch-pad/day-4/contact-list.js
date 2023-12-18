// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

/////////// Teach hints:  Layout is diff from previous assignments, this is many diff functions.  Complete the 1st Func 1st because the 2nd wont work if the 1st is broken.
//  Make sure contacts are assigned to an empty array for the 2nd function.  Func to will be creating methods(?)
// Look at the contacts list in the data folder, this is what you're trying to create

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

    // Return in an Object
    return {
      id: id,
      nameFirst: nameFirst,
      nameLast: nameLast,
    }
    
  } 

//////////

function makeContactList(contact) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];

    return {
      // b1 // we implemented the length api for you //
      length: function() {
            return contacts.length;
        },

      // b2 // Add Contacts things
      addContact: function(contact) {
        // Takes new Contact object & pushes it to the Contacs array
        contacts.push(contact);
      },

          // b3
          findContact: function(fullName) {
        
            // storage string for temp full names
            var testThis = '';
            
            // Loop thru the contacts array
            for (var i = 0; i < contacts.length; i++) {

            // store temp full name to var   
            testThis = contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'];
                // Compares input fullName & checks if it matches the storage fullName
                if (fullName == testThis) {
                return contacts[i];
                } 
          }},



      // b4
      removeContact: function(contact) {
    
        for (var i = 0; i < contacts.length; i++) {
            if (contacts[i]['id'] == contact['id'] && contacts[i]['nameFirst'] == contact['nameFirst'] && contacts[i]['nameLast'] == contact['nameLast'] ) {
                contacts.splice([i], 1);
                }
        }
    },


      // b5
      printAllContactNames() {

        // storage array for created fullNames
        var nameTime = [];

        // Loop thru the contacts array
        for (var i = 0; i < contacts.length; i++) {
            // combine names & push them to storage array
            nameTime.push(contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']);
        }  

        // change array to string //toString does NOT take parameters
        var stringTime = nameTime.join('\n');
  
        // print list
        return stringTime;
    }
}
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
