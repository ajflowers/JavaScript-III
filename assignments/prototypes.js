/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}


/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(attributes) {
  GameObject.call(this, attributes);
  this.healthPoints = attributes.healthPoints;
}




/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(attributes) {
  CharacterStats.call(this, attributes);
  this.team = attributes.team;
  this.weapons = attributes.weapons;
  this.language = attributes.language;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`;
};

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage`;
};

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};


 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


// const mage = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 1,
//     height: 1,
//   },
//   healthPoints: 5,
//   name: 'Bruce',
//   team: 'Mage Guild',
//   weapons: [
//     'Staff of Shamalama',
//   ],
//   language: 'Common Tongue',
// });

// const swordsman = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 2,
//     width: 2,
//     height: 2,
//   },
//   healthPoints: 15,
//   name: 'Sir Mustachio',
//   team: 'The Round Table',
//   weapons: [
//     'Giant Sword',
//     'Shield',
//   ],
//   language: 'Common Tongue',
// });

// const archer = new Humanoid({
//   createdAt: new Date(),
//   dimensions: {
//     length: 1,
//     width: 2,
//     height: 4,
//   },
//   healthPoints: 10,
//   name: 'Lilith',
//   team: 'Forest Kingdom',
//   weapons: [
//     'Bow',
//     'Dagger',
//   ],
//   language: 'Elvish',
// });

// console.log(Object.create(archer));

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.




// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!


//-------die roller functions to add randomness to attacks
function makeDice(num) {
  return function diceRoller() {
    return Math.floor(Math.random() * num + 1);
  }
}
const d4 = makeDice(4);
const d6 = makeDice(6);
const d8 = makeDice(8);
const d10 = makeDice(10);
const d12 = makeDice(12);
const d20 = makeDice(20);

console.log(makeDice)

//define villain and give inheritance
function Villain(attributes){
  Humanoid.call(this, attribtes);
  this.armorClass = attributes.armorClass;
  this.attackBonus = attributes.attackBonus;
  this.magic = attributes.magic;
};

Villain.prototype = Object.create(Humanoid.prototype);

//define hero and give inheritance
function Hero(attributes){
  Humanoid.call(this, attribtes);
  this.armorClass = attributes.armorClass;
  this.attackBonus = attributes.attackBonus;
};

Hero.prototype = Object.create(Humanoid.prototype);

Villain.prototype.firebolt = function (target) {
  let roll = d20();
  let dmg = 0;
  
  if (roll === 20 || roll + this.attackBonus > target.armorClass) {
    dmg = d10() ;
  
    if (roll === 20) {
      dmg += d10();
      var msg = `Critical hit! ${this.name}'s blinding firebolt inflicts ${dmg} damage`;
    } else {
      var msg = `${this.name}'s firebolt hits `;
    }
  } 

  if (roll + this.attackBonus <= target.armorClass) {
    return '${this.name} casts firebolt at {target.name} but misses.'
  }

}



function Hero(attributes){
  Humanoid.call(this, attribtes);
  this.armorClass = attributes.armorClass;
  this.attackBonus = attributes.attackBonus;
};





// //-------playing around with some things

// //-------die roller functions to add randomness to attacks



// //    testing accuracy of dice
// //    CHROME HATES THIS ONE WEIRD TRICK
//   const roll = [];
//   for(i = 0; i < 20000; i++ ) {
//     roll.push(d20());
//   };

//   function howMany (num) {
//     let blankArray = [];
//     for(i = 0; i < num; i++) {
//       blankArray.push(0);
//     }
//     return blankArray;
//   }

// const outOfTwenty = howMany(20);
  
//   roll.forEach(function(result) {
//     outOfTwenty[result-1]++;
//   });

//   console.log(outOfTwenty);