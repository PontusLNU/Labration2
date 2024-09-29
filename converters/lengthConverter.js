/**
 * A class to convert length from different units.
 */
export default class lengthConverter {
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
   * Converts a length in inches to feet.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToFoot(inch) {
    this.validateInput(inch)
    return inch / 12
  }

  /**
   * Converts a length in inches to yards.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  covertInchToYard(inch) {
    this.validateInput(inch)
    return inch / 36
  }

  /**
   * Converts a length in inches to miles.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToMile(inch) {
    this.validateInput(inch)
    return inch / 63360
  }

  /**
   * Converts a length in feet to inches.
   *
   * @param {number} foot - The length in foot to convert.
   * @returns {number} - The converted length in inch.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToInch(foot) {
    this.validateInput(foot)
    return foot * 12
  }

  /**
   * Converts a length in feet to yards.
   *
   * @param {number} foot - The length in foot to convert.
   * @returns {number} - The converted length in yard.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToYard(foot) {
    this.validateInput(foot)
    return foot / 3
  }

  /**
   * Converts a length in feet to miles.
   *
   * @param {number} foot - The length in foot to convert.
   * @returns {number} - The converted length in mile.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToMile(foot){
    this.validateInput(foot)
    return foot / 5280
  }

  /**
   * Converts a length in yards to inches.
   *
   * @param {number} yard - The length in yard to convert.
   * @returns {number} - The converted length in inch.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToInch(yard) {
    this.validateInput(yard)
    return yard * 36
  }

  /**
   * Converts a length in yards to feet.
   *
   * @param {number} yard - The length in yard to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToFoot(yard) {
    this.validateInput(yard)
    return yard * 3
  }

  /**
   * Converts a length in yards to miles.
   *
   * @param {number} yard - The length in yard to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToMile(yard) {
    this.validateInput(yard)
    return yard / 1760
  }

  /**
   * Converts a length in miles to inches.
   *
   * @param {number} mile - The length in mile to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToInch(mile) {
    this.validateInput(mile)
    return mile * 63360
  }

  /**
    * Converts a length in miles to feet.
    *
    * @param {number} mile - The length in mile to convert.
    * @returns {number} - The converted length in feet.
    * @throws {Error} - Throws an error if the input is not a number
    */
  convertMileToFoot(mile) {
    this.validateInput(mile)
    return mile * 5280
  }

  /**
   * Converts a length in miles to yards.
   *
   * @param {number} mile - The length in mile to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToYard(mile) {
    this.validateInput(mile)
    return mile * 1760
  }

  /**
   * 
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToCm(mm) {
    this.validateInput(mm)
    return mm / 10
  }

  /**
   * Converts a length in mm to m.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToM(mm) {
    this.validateInput(mm)
    return mm / 1000
  }

  /**
   * Converts a length in mm to km.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToKm(mm) {
    this.validateInput(mm)
    return mm / 1000000
  }

  /**
   * Converts a length in cm to mm.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToMm(cm) {
    this.validateInput(cm)
    return cm * 10
  }

  /**
   * Converts a length in cm to m.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToM(cm) {
    this.validateInput(cm)
    return cm / 100
  }

  /**
   * Converts a length in cm to km.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToKm(cm) {
    this.validateInput(cm)
    return cm / 100000
  }

  /**
   * Converts a length in m to mm.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToMm(m) {
    this.validateInput(m)
    return m * 1000
  }

  /**
   * Converts a length in m to cm.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToCm(m) {
    this.validateInput(m)
    return m * 100
  }

  /**
   * Converts a length in m to km.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToKm(m) {
    this.validateInput(m)
    return m / 1000
  }

  /**
   * Converts a length in km to mm.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToMm(km) {
    this.validateInput(km)
    return km * 1000000
  }

  /**
   * Converts a length in km to cm.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToCm(km) {
    this.validateInput(km)
    return km * 100000
  }

  /**
   * Converts a length in km to m.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToM(km) {
    this.validateInput(km)
    return km * 1000
  }

  /**
   * Converts a length in inches to mm.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToMm(inch) {
    this.validateInput(inch)
    return inch * 25.4
  }

  /**
   * Converts a length in feet to mm.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToMm(foot) {
    this.validateInput(foot)
    return foot * 304.8
  }

  /**
   * Converts a length in yards to mm.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToMm(yard) {
    this.validateInput(yard)
    return yard * 914.4
  }

  /**
   * Converts a length in miles to mm.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in mm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToMm(mile) {
    this.validateInput(mile)
    return mile * 1609344
  }

  /**
   * Converts a length in mm to inches.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToInch(mm) {
    this.validateInput(mm)
    return mm / 25.4
  }

  /**
   * Converts a length in mm to feet.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToFoot(mm) {
    this.validateInput(mm)
    return mm / 304.8
  }

  /**
   * Converts a length in mm to yards.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToYard(mm) {
    this.validateInput(mm)
    return mm / 914.4
  }

  /**
   * Converts a length in mm to miles.
   *
   * @param {number} mm - The length in mm to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMmToMile(mm) {
    this.validateInput(mm)
    return mm / 1609344
  }

  /**
   * Converts a length in inches to cm.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToCm(inch) {
    this.validateInput(inch)
    return inch * 2.54
  }

  /**
   * Converts a length in feet to cm.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToCm(foot) {
    this.validateInput(foot)
    return foot * 30.48
  }

  /**
   * Converts a length in yards to cm.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToCm(yard) {
    this.validateInput(yard)
    return yard * 91.44
  }

  /**
   * Converts a length in miles to cm.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in cm.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToCm(mile) {
    this.validateInput(mile)
    return mile * 160934.4
  }

  /**
   * Converts a length in cm to inches.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToInch(cm) {
    this.validateInput(cm)
    return cm / 2.54
  }

  /**
   * Converts a length in cm to feet.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToFoot(cm) {
    this.validateInput(cm)
    return cm / 30.48
  }

  /**
   * Converts a length in cm to yards.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToYard(cm) {
    this.validateInput(cm)
    return cm / 91.44
  }

  /**
   * Converts a length in cm to miles.
   *
   * @param {number} cm - The length in cm to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertCmToMile(cm) {
    this.validateInput(cm)
    return cm / 160934.4
  }

  /**
   * Converts a length in inches to m.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToM(inch) {
    this.validateInput(inch)
    return inch * 0.0254
  }

  /**
   * Converts a length in feet to m.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToM(foot) {
    this.validateInput(foot)
    return foot * 0.3048
  }

  /**
   * Converts a length in yards to m.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToM(yard) {
    this.validateInput(yard)
    return yard * 0.9144
  }

  /**
   * Converts a length in miles to m.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in m.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToM(mile) {
    this.validateInput(mile)
    return mile * 1609.344
  }

  /**
   * Converts a length in m to inches.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToInch(m) {
    this.validateInput(m)
    return m / 0.0254
  }

  /**
   * Converts a length in m to feet.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToFoot(m) {
    this.validateInput(m)
    return m / 0.3048
  }

  /**
   * Converts a length in m to yards.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToYard(m) {
    this.validateInput(m)
    return m / 0.9144
  }

  /**
   * Converts a length in m to miles.
   *
   * @param {number} m - The length in m to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMToMile(m) {
    this.validateInput(m)
    return m / 1609.344
  }

  /**
   * Converts a length in inches to km.
   *
   * @param {number} inch - The length in inches to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertInchToKm(inch) {
    this.validateInput(inch)
    return inch * 0.0000254
  }

  /**
   * Converts a length in feet to km.
   *
   * @param {number} foot - The length in feet to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertFootToKm(foot) {
    this.validateInput(foot)
    return foot * 0.0003048
  }

  /**
   * Converts a length in yards to km.
   *
   * @param {number} yard - The length in yards to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertYardToKm(yard) {
    this.validateInput(yard)
    return yard * 0.0009144
  }

  /**
   * Converts a length in miles to km.
   *
   * @param {number} mile - The length in miles to convert.
   * @returns {number} - The converted length in km.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertMileToKm(mile) {
    this.validateInput(mile)
    return mile * 1.609344
  }

  /**
   * Converts a length in km to inches.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in inches.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToInch(km) {
    this.validateInput(km)
    return km / 0.0000254
  }

  /**
   * Converts a length in km to feet.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in feet.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToFoot(km) {
    this.validateInput(km)
    return km / 0.0003048
  }

  /**
   * Converts a length in km to yards.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in yards.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToYard(km) {
    this.validateInput(km)
    return km / 0.0009144
  }

  /**
   * Converts a length in km to miles.
   *
   * @param {number} km - The length in km to convert.
   * @returns {number} - The converted length in miles.
   * @throws {Error} - Throws an error if the input is not a number
   */
  convertKmToMile(km) {
    this.validateInput(km)
    return km / 1.609344
  }
}