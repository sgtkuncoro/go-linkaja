"use strict";

const isMultipleOf37 = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 3 == 0) {
      if (array[index] % 7 == 0) {
        console.log("Link Aja Bro");
      }
      console.log("Link");
    }
    if (array[index] % 7 == 0) {
      if (array[index] % 3 == 0) {
        console.log("Link Aja Bro");
      }

      console.log("Aja");
    }

    console.log(array[index]);
  }
};

isMultipleOf37([23, 2, 45, 98, 27, 4, 28, 8, 30, 70, 16, 15, 21, 14, 42]);
