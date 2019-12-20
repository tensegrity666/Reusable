'use strict';

const average = (x, y) => (x + y) / 2;

const cube = (x) => x ** 3;

const square = (x) => x * x;

const calculate = () => {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const x = average(cube(i), square(i));
    array.push(x);
  }
  return array;
};

module.exports = { square, cube, average, calculate };
