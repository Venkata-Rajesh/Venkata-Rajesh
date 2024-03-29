/**
 * This file contains functions to calculate the least common multiple (LCM) and greatest common divisor (GCD) of two numbers.
 */

/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The LCM of the two numbers.
 */
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The greatest common divisor of `a` and `b`.
 */
function gcd(a, b) {
  while (b) {
    a = a % b;
    [a, b] = [b, a];
  }
  return a;
}
