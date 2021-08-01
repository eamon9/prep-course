export {};

function s(w1, w2) {
  return w1.concat(' ').concat(w2);;
}

const result = s("hello", "world"); // concatenate two strings - 'hello', 'world', using the function above
console.log(result); // Expected output: "hello world"
