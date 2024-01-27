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
    console.log(`The mean value is (${getMean.toFixed(2)})`);
  }

  median() {
    const copyArr = this.arr.slice().sort((a, b) => a - b);
    if (copyArr.length % 2 == 1) {
      const getMidValue = (copyArr.length - 1) / 2;
      console.log(`The median value is ${copyArr[getMidValue]}`);
    } else {
      const getMidValue = copyArr.length / 2;
      console.log(
        `The median value is ${
          (copyArr[getMidValue] + copyArr[getMidValue - 1]) / 2
        }`
      );
    }
  }

  mode() {
    const myMap = new Map();

    this.arr.forEach((ar) => {
      myMap.set(ar, (myMap.get(ar) || 0) + 1);
    });
    let frqNum = 0;
    let modes = [];
    myMap.forEach((frq, num) => {
      if (frq > frqNum) {
        frqNum = frq;
        modes = [num];
      } else if (frq === frqNum) {
        modes.push(num);
      }
    });
    console.log(`The mode is ${modes}`);
  }
}

const description = new DescriptiveState([2, 2, 3, 4, 5, 6, 6, 6]);
description.mean();
description.median();
description.mode();
