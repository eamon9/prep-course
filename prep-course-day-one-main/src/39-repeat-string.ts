export {};

const repeatString = (text, multiplier) => {
  for (let i = 0; i < multiplier-1; i++) {
    text+= text[i];
  }
  return `'`+text+`'`;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
