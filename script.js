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

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2000, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

// ES6 CLASSES

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return 2024 - this.birthYear;
  }

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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //super always needs to happen first
    super(fullName, birthYear);
    //without calling super first, 'this' wont work
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }.`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
martha.introduce();
martha.calcAge();

// OBJECT.CREATE

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

//make student inherit directly from person
const StudentProto = Object.create(PersonProto);
//add a method
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

//create new students
const jay = Object.create(StudentProto);
jay.init('Jay', 2004, 'Computer Science');
jay.introduce();
jay.calcAge()
*/

// MORE CLASS EXAMPLES

// 1. Public fields
// 2. Private fields
// 3. Public methods
// 4. Private methods
// THERE ARE ALSO STATIC VERSIONS OF ALL OF THESE (static keyword)

//public interface of our object
class Account {
  // 1. Public fields (instances... will not be added to prototype)
  // referencable by this keyword
  locale = navigator.language;
  
  // 2. Private fields (truly not accessible from the outside)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property = _
    //the _ is a convention, lets other devs no not to manipulate!
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // 3. Public methods aka public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this
  }

  withdraw(val) {
    //calls deposit!
    this.deposit(-val);
    return this
  }
  // protect the method from public API = _
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this
    }
  }
  // 4 Private methods (not yet available in browser)
//   #approveLoan(val) {
//     return true
//   }
}

const acc1 = new Account('Mitch', 'CAD', 8000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.#approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1._pin);

// PROTECTED PROPERTIES AND METHODS
// 1. to prevent code outside of a class from manipulating data inside a class
// 2. when a small API consists of only a few public methods, we can change all
// other internal methods with more confidence... bc external code wont rely on
// internal methods
// LOOK ABOVE AT _

//TRULY PRIVATE CLASS FIELDS AND METHODS
// console.log(acc1.#movements) // ERROR! IT IS PRIVATE
// console.log(acc1.#pin) // ERROR! PRIVATE
// console.log(acc1.#approveLoan(1000)) // not yet avail in browser


// CHAINING METHODS
// the 'deposit' method doesnt explicitly return something
// so the first .deposit(300) ends up being undefined, and the rest 
// of the chain does not work afterwards
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
// return 'this' on all the methods so that the chaining works
console.log(acc1.getMovements()) // worked correctly

// ES6 CLASSES SUMMARY
//refer to notes