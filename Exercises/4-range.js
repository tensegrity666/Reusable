'use strict';

const range = (start, end) => {
  const length = (end - start);
  if (length < 0) return [];
  const array = new Array(length);
  let i = 0;
  for (let n = start; n <= end; n++) {
    array[i++] = n;
  }
  return array;
};

module.exports = { range };
