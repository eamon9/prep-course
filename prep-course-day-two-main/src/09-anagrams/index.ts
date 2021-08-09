/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

 function anagrams(stringA: string, stringB: string) {
  let A= stringA.split(/[/' '/,/!]/).sort().join('').toLowerCase()
  let B= stringB.split(/[/' '/,/!]/).sort().join('').toLowerCase()

  let a= A.split('').sort().join('').toLowerCase()
  let b= B.split('').sort().join('').toLowerCase()

  if (a === b) {
    return true;
  } else {
    return false;
  }
}

export { anagrams };
