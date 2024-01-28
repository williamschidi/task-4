'use strict';
// Answer to Question 1
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

//  How to use a static property and static method
console.log(Car.make);
Car.description();

// Answer to Question 2.
class DescriptiveState {
  constructor(arr) {
    this.arr = arr;
  }
  mean() {
    const getMean = this.arr.reduce((ar, acc) => ar + acc, 0) / this.arr.length;
    return getMean.toFixed(2);
  }

  median() {
    const copyArr = this.arr.slice().sort((a, b) => a - b);
    if (copyArr.length % 2 == 1) {
      const getMidValue = (copyArr.length - 1) / 2;
      return `The median value is ${copyArr[getMidValue]}`;
    } else {
      const getMidValue = copyArr.length / 2;

      return `The median value is ${
        (copyArr[getMidValue] + copyArr[getMidValue - 1]) / 2
      }`;
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
    return modes;
  }

  range() {
    const copyArr = this.arr.slice().sort((a, b) => a - b);
    const highestValue = copyArr.reduce(
      (ar, acc) => (ar > acc ? ar : acc),
      copyArr[0]
    );

    const leastValue = copyArr.reduce(
      (ar, acc) => (ar < acc ? ar : acc),
      copyArr[0]
    );

    return highestValue - leastValue;
  }

  variance() {
    const mean = this.mean();
    const squaredDifferences = this.arr.map((value) =>
      Math.pow(value - +mean, 2)
    );
    const sumSquaredDifferences = squaredDifferences.reduce(
      (acc, value) => acc + value,
      0
    );

    const getVariance = sumSquaredDifferences / this.arr.length;
    return getVariance.toFixed(2);
  }

  standardDeviation() {
    const squareRoot = Math.sqrt(this.variance());
    return squareRoot.toFixed(2);
  }

  meanAbsoluteDeviation() {
    const mean = this.mean();
    const absoluteDeviations = this.arr.map((value) => Math.abs(value - +mean));
    const mad =
      absoluteDeviations.reduce((acc, value) => acc + value, 0) /
      this.arr.length;
    return mad;
  }
}

const description = new DescriptiveState([2, 2, 3, 4, 5, 6, 6, 6]);

console.log(`The mean value is ${description.mean()}`);
console.log(`The median is ${description.median()}`);
console.log(`The mode is ${description.mode()}`);
console.log(`The range is ${description.range()}`);
console.log(`The variance is ${description.variance()}`);
console.log(`The standard deviation is ${description.standardDeviation()}`);
console.log(
  `The mean absolute deviation is ${description.meanAbsoluteDeviation()}`
);
