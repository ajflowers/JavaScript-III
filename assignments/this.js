/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When "this" appears in the global scope, it points to the window object
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function squared(num) {
//    console.log(this); // "this" points to the window object
    return num*num;
}

console.log(squared(11));

// Principle 2

// code example for Implicit Binding

const user = {
    name: "Dave",
    email: "dbowman@nasa.gov",
    sorry: function() {
        console.log(`I'm sorry, ${this.name}. I'm afraid I can't do that.`);
        console.log(this); //"this" points to the object (user) it is contained in
        //console.log(this.name); // so this.name === user.name
    }
}
user.sorry();

// Principle 3

// code example for New Binding



// Principle 4

// code example for Explicit Binding

