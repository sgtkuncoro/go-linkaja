"use strict";

const isSquare = (n) => {
  return n > 0 && Math.sqrt(n) % 1 === 0;
};

const isFibo = (num) => {
  if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
    return true;
  } else {
    return false;
  }
};

console.log(isFibo(1));
