// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// test data
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
mercedes.accelerate();
bmw.brake();
mercedes.brake();

// instructor solutuion
const CarTwo = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

CarTwo.prototype.accelerateTwo = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

CarTwo.prototype.brakeTwo = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed}km/h`);
};

const bmwTwo = new CarTwo('BMW', 120);
const mercedesTwo = new CarTwo('Mercedes', 95);

bmwTwo.accelerateTwo();
bmwTwo.accelerateTwo();
bmwTwo.accelerateTwo();

// CODING CHALLENGE #2
/* Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `The ${this.make} is travelling at ${this.speed}kmh or ${Math.ceil(
        this.speedUS
      )}mph`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(
      `The ${this.make} is travelling at ${this.speed}kmh or ${Math.ceil(
        this.speedUS
      )}mph`
    );
  }

  get speedUS() {
    // console.log(this.speed);
    return this.speed / 1.6;
  }

  set speedUS(mph) {
    // console.log(mph);
    return (this.speedUS = mph);
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

// INSTRUCTOR SOLUTION

class CarClInstructor {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const fordInstructor = new CarClInstructor('Ford', 120);
console.log(fordInstructor.speedUS);
fordInstructor.accelerate();
fordInstructor.accelerate();
fordInstructor.brake();
fordInstructor.speedUS = 50;
console.log(fordInstructor);
