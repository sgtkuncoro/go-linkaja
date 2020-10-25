"use strict";

const getMultipleArray = (array = []) => {
  const array2 = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      array2.push(array[index] * 2);
    } else if (Math.abs(array[index] % 2) == 1) {
      array2.push(array[index] * 3);
    }
  }

  return array2;
};

console.log(getMultipleArray([1, 2, 3, 4, 5]));
