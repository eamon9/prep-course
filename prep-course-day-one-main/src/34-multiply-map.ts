export {};

/**
 * Implement map function which works similarly as https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const map= (arr) => {
  let result = arr.map(nr => nr * 2);
  return result;
};

const numbers = [1, 2, 3];
const doubled = map(numbers);
console.log(doubled); // Expected result: [2, 4, 6]