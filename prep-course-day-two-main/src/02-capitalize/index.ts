/**
 * Capitalize
 *
 * Write a function that accepts a string. The function should
 * capitalize the first letter of each word in the string then
 * return the capitalized string.
 *
 * Examples:
 * capitalize('a short sentence') === 'A Short Sentence'
 * capitalize('a lazy fox') === 'A Lazy Fox'
 * capitalize('look, it is working!') === 'Look, It Is Working!'
 */

function capitalize(str: string) {
  let words= str
  .split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i]= 
    words[i][0]
    .toUpperCase()
    + words[i]
    .substr(1);
  }
  return words.join(' ');
}

export { capitalize };
