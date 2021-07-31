export {};

const min = array => {
  var min= Math.min.apply(null, array);
  return min;
};

const max = array => {
  var max= Math.max.apply(null, array);
  return max;
};

console.log(min([1, 2, 3, 4, 5])); // Expected output: 1
console.log(min([9, -3, 6])); // Expected output: -3
console.log(max([1, 2, 3, 4, 5])); // Expected output: 5
console.log(max([9, -3, 6])); // Expected output: 9
