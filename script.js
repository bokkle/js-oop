'use strict';

// CONSTRUCTOR FUNCTIONS
// used to build an object using a function
// only difference b/t constructor func and regular func, is constructor is
// called with the 'new' operator

//constructor functions start with a capital letter: convention

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this below, bad practice
  // never create a method inside constructor function
  //   this.calcAge = function() {
  //         console.log(2023 - this.birthYear)
  //     }
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

const h1 = document.querySelector('h1');
console.dir((x) => x + 1);

// class expression
const personCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // these methods, written outside of the constructor, are on the prototype of
  //the objects, and not on the objects themselves
  // aka methods will be added to the .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return 2024 - this.birthYear;
  }
  //set a property that already exists, use a _ (as a convention)
  set fullName(nameValue) {
    console.log(nameValue);
    if (nameValue.includes(' ')) this._fullName = nameValue;
    else alert(`${nameValue} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there :):)');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype); // true

//can also do this instead of adding methods below constructor ^
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

// important notes:
// 1. Classes are NOT hoisted
// 2. Classes are first class citizens (can pass into/return from funcs)
// 3. Classes are executed in strict mode

// GETTERS AND SETTERS
// every obj in JS can have getter and setter properties
// these are funcs that get and set a value

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'Mitch',
  movements: [200, 150, 120, 2800],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

console.log(account.latest);

// STATIC METHODS

Person.hey = function () {
  console.log('Hey there :)');
  console.log(this);
};
Person.hey();

PersonCl.hey();

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //this.firstName/birthYear is already in Person, bad practice to repeat code
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  //instead, call Person and set properties using this syntax
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);
mike.introduce();
// :)