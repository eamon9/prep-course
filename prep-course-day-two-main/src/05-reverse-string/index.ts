/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
  let string= str
  .split('');
  let reverseS= string.reverse()
  let joinS= reverseS.join('')
  return joinS;
}

export { reverse };
