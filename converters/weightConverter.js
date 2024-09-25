/**
 * A class that converts weight between the metric and imperial systems.
 */
export default class weightConverter {

  /**
   * Validate the input to ensure it is a number.
   * @param {number} input - The input to validate.
   * @throws {Error} - Throws an error if the input is not a number.
   */
  validateInput(input) {
    if (typeof input !== 'number' || isNaN(input)) {
      throw new Error('Input must be a number')
    }
  }
  /**
   * Converts a weight in kilograms to pounds.
   *
   * @param {number} kg - The weight in kilograms to convert.  
   * @returns {number} - The converted weight in pounds.
   * @throws {Error} - Throws an error if the input is not a number.
   */
  convertKgToLbs(kg) {
    this.validateInput(kg)
    return kg * 2.20462
  }

  /**
   * 
   * @param {number} lbs - The weight in pounds to convert.
   * @returns {number} - The converted weight in kilograms.
   * @throws {Error} - Throws an error if the input is not a number.
   */
  convertLbsToKg(lbs) {
    this.validateInput(lbs)
    return lbs / 2.20462
  }
}