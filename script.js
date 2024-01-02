'use strict';

// CONSTRUCTOR FUNCTIONS
// used to build an object using a function
// only difference b/t constructor func and regular func, is constructor is
// called with the 'new' operator

//constructor functions start with a capital letter: convention
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this below, bad practice
  // never create a method inside constructor function
  /*this.calcAge = function() {
        console.log(2023 - this.birthYear)
    }*/
};

const mitch = new Person('Mitch', 1996);
console.log(mitch);

// behind the scenes:
// 1. new {} created
// 2. func is called, this = {}
// 3. {} linked to prototype
// 4. function auto returns {}

const daryl = new Person('Daryl', 1999);
const matt = new Person('Matt', 1998);
console.log(daryl, matt);

console.log(mitch instanceof Person); // true

// PROTOTYPES
console.log(Person.prototype);

//this is how you add a method to a constructor function (add it to prototype)
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

mitch.calcAge();
daryl.calcAge();

Person.prototype.species = 'Homo Sapien';
console.log(mitch.species, daryl.species);

console.log(mitch.__proto__);
//object.prototype (this is the top of the proto chain)
console.log(mitch.__proto__.__proto__);
//this is null, above the top of the chain
console.log(mitch.__proto__.__proto__.__proto__);

// rtns the function itself
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 6, 9, 9, 3]; // new Array === [] (same)
console.log(arr.__proto__);
//true
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1')
console.dir(x => x + 1)