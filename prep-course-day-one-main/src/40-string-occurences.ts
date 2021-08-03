export {};

function count(str: string, word: string): number {
  return str.toLowerCase().split(word.toLowerCase()).length-1;
}

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "ox")); // Expected output: 1
