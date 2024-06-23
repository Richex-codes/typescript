interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(model: string, make: string, year: number) {
    this.model = model;
    this.make = make;
    this.year = year;
  }
  start(): void {
    console.log("Car engine started");
  }
}
let newCar = new Car("Civic", "Honda", 2010);

newCar.start()