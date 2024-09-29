/**
 * A class to convert volume from different units.
 */
export default class volumeConverter {

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
   * Converts a volume in gallons to litres.
   *
   * @param {number} gallon - The volume in gallons to convert.
   * @returns {number} - The converted volume in litres.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertGallonToLitre(gallon) {
    this.validateInput(gallon)
    return gallon * 3.78541
  }

  /**
   * Converts a volume in litres to gallons.
   *
   * @param {number} litre - The volume in litres to convert.
   * @returns {number} - The converted volume in gallons.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertLitreToGallon(litre) {
    this.validateInput(litre)
    return litre / 3.78541
  }
}