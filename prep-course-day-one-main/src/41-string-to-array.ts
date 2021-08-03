export {};

function stringToArray(arr) {
  let words= arr[0].split(" ");
  return words
};

console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
