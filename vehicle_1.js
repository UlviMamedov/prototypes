const Vehicle = {
    start() {
      console.log("Vehicle started");
    },
    stop() {
      console.log("Vehicle stopped");
    }
  };
  
  const Car = Object.create(Vehicle);
  Car.drive = function() {
    console.log("Car is driving");
  };
  Car.park = function() {
    console.log("Car is parking");
  };
  
  const Bike = Object.create(Vehicle);
  Bike.ride = function() {
    console.log("Bike is riding");
  };
  Bike.brake = function() {
    console.log("Bike is braking");
  };
  
  const Truck = Object.create(Car);
  Truck.load = function() {
    console.log("Truck is loading cargo");
  };
  
  const Sedan = Object.create(Car);
  Sedan.parkInGarage = function() {
    console.log("Sedan is parking in the garage");
  };
  
  const SportBike = Object.create(Bike);
  SportBike.accelerate = function() {
    console.log("SportBike is accelerating");
  };
  
  const Scooter = Object.create(Bike);
  Scooter.carryPassenger = function() {
    console.log("Scooter is carrying a passenger");
  };
  
  Car.start();
  Car.drive();
  Car.stop();
  
  Bike.start(); 
  Bike.ride();
  Bike.stop();
  
  Truck.start();
  Truck.drive();
  Truck.load();
  
  SportBike.start();
  SportBike.ride();
  SportBike.accelerate();