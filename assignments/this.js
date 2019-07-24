/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global: When "this" appears in the global scope, it points to the window object
* 2. Implicit: Whenever "this" is called via preceding dot notation, "this" points to the object (user) it is contained in
* 3. New: If "this" is used within a constructor function, and if the `new` keyword was used to create a new object from the constructor function, "this" points to the specific instance of the object that was created.
* 4. Explicit: 
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



function carInfo(thisCar) {
    this.whatCar = thisCar;
    this.capacity = 'tired memes'
    this.salesPitch = function() {
        console.log(`*slaps roof of ${this.whatCar}* this bad boy can hold so many ${this.capacity} in it`);
        console.log(this); // "this" points to the specific object that the constructor created.
    }
}

const accord = new carInfo("1998 honda accord");
const slack = new carInfo("slack channel");

accord.salesPitch();
slack.salesPitch();


// Principle 4

// code example for Explicit Binding

accord.salesPitch.call(slack);
