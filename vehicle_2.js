const Vehicle = {
    start() {
      console.log("Vehicle started");
    },
    stop() {
      console.log("Vehicle stopped");
    }
  };
  
  const Car = {
    drive() {
      console.log("Car is driving");
    },
    park() {
      console.log("Car is parking");
    }
  };
  Object.setPrototypeOf(Car, Vehicle);
  
  const Bike = {
    ride() {
      console.log("Bike is riding");
    },
    brake() {
      console.log("Bike is braking");
    }
  };
  Object.setPrototypeOf(Bike, Vehicle);
  
  const Truck = {
    load() {
      console.log("Truck is loading cargo");
    }
  };
  Object.setPrototypeOf(Truck, Car);
  
  const Sedan = {
    parkInGarage() {
      console.log("Sedan is parking in the garage");
    }
  };
  Object.setPrototypeOf(Sedan, Car);
  
  const SportBike = {
    accelerate() {
      console.log("SportBike is accelerating");
    }
  };
  Object.setPrototypeOf(SportBike, Bike);
  
  const Scooter = {
    carryPassenger() {
      console.log("Scooter is carrying a passenger");
    }
  };
  Object.setPrototypeOf(Scooter, Bike);
  
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