/**
 * A class that converts temperatures between celsius and fahrenheit.
 */
export default class temperatureConverter {
  /**
   * Validate the input to ensure it is a number.
   *
   * @param {number} input - The input to validate.
   * @throws {Error} - Throws an error if the input is not a number.
   */
  validateInput(input) {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new Error('Input must be a number')
    }
  }

  /**
   * Converts the temperature in celsius to fahrenheit.
   *
   * @param {number} celsius - The temperature in celsius to convert.
   * @returns {number} - The converted temperature in fahrenheit.
   * @throws {Error} - Throws an error if the input is not a number.
   */
  convertCelsiusToFahrenheit(celsius) {
    this.validateInput(celsius)
    return celsius * (9/5) + 32
  }

  /**
   * Converts the temperature in fahrenheit to celsius.
   *
   * @param {number} fahrenheit - The temperature in fahrenheit to convert.
   * @returns {number} - The converted temperature in celsius.
   * @throws {Error} - Throws an error if the input is not a number.
   */
  convertFahrenheitToCelsius(fahrenheit) {
    this.validateInput(fahrenheit)
    return (fahrenheit - 32) * (5/9)
  }

}
