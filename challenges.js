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
