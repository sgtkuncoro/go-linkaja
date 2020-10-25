"use strict";

const groupWord = (array) => {
  const array2 = [];
  const indexOfDistinctWord = [];
  for (let index = 0; index < array.length; index++) {
    const newGroup = [];
    const sortedWord = array[index].split("").sort().join("");

    for (let j = 0; j < array.length; j++) {
      const sortedWord2 = array[j].split("").sort().join("");

      if (sortedWord === sortedWord2) {
        newGroup.push(array[j]);
      }
    }

    if (!indexOfDistinctWord.includes(sortedWord)) {
      array2.push(newGroup);
      indexOfDistinctWord.push(sortedWord);
    }
  }

  return array2;
};

console.log(
  groupWord(["katak", "takak", "kasur", "rusak", "surak", "foo", "bar"])
);
