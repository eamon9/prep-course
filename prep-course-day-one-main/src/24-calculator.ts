export {};

function add(num1, num2) {
  return num1+ num2;
}

function subtract(num1, num2) {
  return num1- num2;
}

function sum([num1, num2, num3]) {
  return num1+ num2+ num3;
}

function multiply([num1, num2, num3]) {
  return num1* num2* num3;
}

function power(num1, num2) {
  let power= Math.pow(num1, num2);
  return power
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
