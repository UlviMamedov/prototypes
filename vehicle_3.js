function Vehicle() {}

Vehicle.prototype.start = function() {
  console.log("Vehicle started");
};

Vehicle.prototype.stop = function() {
  console.log("Vehicle stopped");
};

function Car() {}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function() {
  console.log("Car is driving");
};

Car.prototype.park = function() {
  console.log("Car is parking");
};

function Bike() {}
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.ride = function() {
  console.log("Bike is riding");
};

Bike.prototype.brake = function() {
  console.log("Bike is braking");
};

const carInstance = new Car();
const bikeInstance = new Bike();

Car.prototype.start = function() {
  console.log("Car started");
};

Car.prototype.stop = function() {
  console.log("Car stopped");
};

Bike.prototype.start = function() {
  console.log("Bike started");
};

Bike.prototype.stop = function() {
  console.log("Bike stopped");
};

carInstance.start();
carInstance.drive();
carInstance.stop();

bikeInstance.start();
bikeInstance.ride();
bikeInstance.stop();