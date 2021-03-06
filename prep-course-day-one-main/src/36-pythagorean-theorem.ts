export {};

/**
 * Note : The Pythagorean Theorem tells us that the relationship in every right triangle is : c2 = a2 + b2, where c is the hypotenuse and a, b are two legs of the triangle.
 *
 * https://en.wikipedia.org/wiki/Pythagorean_theorem
 */

const pythagoreanTheorem = (side1: number, side2: number): number => {
  return Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
};

console.log(pythagoreanTheorem(2, 4)); // Expected result: 4.47213595499958
console.log(pythagoreanTheorem(3, 4)); // Expected result: 5
