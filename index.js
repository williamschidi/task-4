'use strict';

class Car {
  static make = 'Toyota Hilux';
  constructor(speed) {
    this.speed = speed;
  }
  static description() {
    console.log(`This car ${Car.make} is one of the most utility car in town`);
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  deceleration() {
    this.speed -= 5;
    console.log(this.speed);
  }
}

const myCar = new Car(150);
myCar.accelerate();
myCar.deceleration();

// How to use a static property and static method
console.log(Car.make);
Car.description();

class DescriptiveState {
  constructor(arr) {
    this.arr = arr;
  }
  mean() {
    const getMean = this.arr.reduce((ar, acc) => ar + acc, 0) / this.arr.length;
    console.log(`The mean value is (${getMean})`);
  }

  media() {
    const copyArr = this.arr.slice().sort((a, b) => a - b);
    const getMidValue = (copyArr.length + 1) / 2;
    console.log(copyArr[getMidValue]);
  }

  mode() {}
}

const description = new DescriptiveState([2, 4, 6, 8, 5]);
description.mean();
description.media();
