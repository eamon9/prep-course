export {};

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 * 
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

const fahrenheitToCelsius = temperature => {
  let FTC= ((temperature-32)*(5/9)).toFixed(1);
  return FTC;
}
const celsiusToFahrenheit = temperature => {
  let CTF= ((temperature*1.8)+32).toFixed(1);
  return CTF;
}

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32
