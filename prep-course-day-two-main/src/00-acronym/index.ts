/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string): string {
  let w= input
  .split(/ |-|_/);
  let letters= w.map(wl => wl.charAt(0));
  return letters
  .join('')
  .toUpperCase();
}

export { parse };
