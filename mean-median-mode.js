//const age = [59, 21, 25, 22, 24, 42, 41];

//const district = [1, 2, 3, 4, 5, 6, 1, 1, 2, 2, 3, 4, 5, 6];
import compareFn from "./lib/sort-number.js";

export const mean = (array) => {
  /* This function can receive array of numbers and can return the average of all numbers listed in that array. */
  const total = array.reduce((acc, num) => acc + num, 0);
  return Math.round(total / array.length);
};

export const median = (array) => {
  /* This function can receive an array of numbers and can return the median of all numbers listed in that array. */
  const sortedArr = array.sort(compareFn);
  const roundedIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const md1 = sortedArr[sortedArr.length / 2 - 1];
    const md2 = sortedArr[sortedArr.length / 2];

    const nums = md1 + md2;

    return ((nums / 2) * 100) / 100;
  }

  return sortedArr[roundedIndex];
};

export const mode = (array) => {
  /* This function can receive an array of numbers and will return an array of numbers with the most frequency. */
  array.sort(compareFn);
  let count = {};

  array.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  const arrOfObjectValuesSorted = Object.values(count).sort();

  const result = Object.keys(count).filter(
    (n) => count[n] === arrOfObjectValuesSorted[arrOfObjectValuesSorted.length - 1] && count[n] > 1
  );

  return result;
};
