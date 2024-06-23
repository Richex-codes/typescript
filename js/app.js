"use strict";
class Car {
    constructor(model, make, year) {
        this.model = model;
        this.make = make;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
let newCar = new Car("Civic", "Honda", 2010);
console.log(newCar);
newCar.start();
