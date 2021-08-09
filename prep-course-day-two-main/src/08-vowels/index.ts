/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
  let output= [];
  let vowels= ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let string= s.split("");
  for (let i = 0; i < string.length; i++) {
    for (let v = 0; v < vowels.length; v++) {
      if (string[i] === vowels[v]) {
        output.push(vowels[v])
      }
      
    }
    
  }
  return output.length
}

export { vowels };
