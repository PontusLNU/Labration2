import LengthConverter from '../converters/length-converter.js'

const lc = new LengthConverter()

describe('LengthConverter class', () => {
  test('validateInput method should throw an error if the input is not a number', () => {
    expect(() => lc.validateInput('a')).toThrow('Input must be a number')
  })
  test('convertInchToFoot method should convert 12 inches to 1 foot', () => {
    expect(lc.convertInchToFoot(12)).toBe(1)
  })
  test('convertInchToYard method should convert 36 inches to 1 yard', () => {
    expect(lc.convertInchToYard(36)).toBe(1)
  })
  test('convertInchToMile method should convert 63360 inches to 1 mile', () => {
    expect(lc.convertInchToMile(63360)).toBe(1)
  })
  test('convertFootToInch method should convert 1 foot to 12 inches', () => {
    expect(lc.convertFootToInch(1)).toBe(12)
  })
  test('convertFootToYard method should convert 3 feet to 1 yard', () => {
    expect(lc.convertFootToYard(3)).toBe(1)
  })
  test('convertFootToMile method should convert 5280 feet to 1 mile', () => {
    expect(lc.convertFootToMile(5280)).toBe(1)
  })
  test('convertYardToInch method should convert 1 yard to 36 inches', () => {
    expect(lc.convertYardToInch(1)).toBe(36)
  })
  test('convertYardToFoot method should convert 1 yard to 3 feet', () => {
    expect(lc.convertYardToFoot(1)).toBe(3)
  })
  test('convertYardToMile method should convert 1760 yards to 1 mile', () => {
    expect(lc.convertYardToMile(1760)).toBe(1)
  })
  test('convertMileToInch method should convert 1 mile to 63360 inches', () => {
    expect(lc.convertMileToInch(1)).toBe(63360)
  })
  test('convertMileToFoot method should convert 1 mile to 5280 feet', () => {
    expect(lc.convertMileToFoot(1)).toBe(5280)
  })
  test('convertMileToYard method should convert 1 mile to 1760 yards', () => {
    expect(lc.convertMileToYard(1)).toBe(1760)
  })
  test('convertMmToCm method should convert 10 mm to 1 cm', () => {
    expect(lc.convertMmToCm(10)).toBe(1)
  })
  test('convertMmToM method should convert 1000 mm to 1 meter', () => {
    expect(lc.convertMmToM(1000)).toBe(1)
  })
  test('convertMmToKm method should convert 1000000 mm to 1 km', () => {
    expect(lc.convertMmToKm(1000000)).toBe(1)
  })
  test('convertCmToMm method should convert 1 cm to 10 mm', () => {
    expect(lc.convertCmToMm(1)).toBe(10)
  })
  test('convertCmToM method should convert 100 cm to 1 meter', () => {
    expect(lc.convertCmToM(100)).toBe(1)
  })
  test('convertCmToKm method should convert 100000 cm to 1 km', () => {
    expect(lc.convertCmToKm(100000)).toBe(1)
  })
  test('convertMToMm method should convert 1 meter to 1000 mm', () => {
    expect(lc.convertMToMm(1)).toBe(1000)
  })
  test('convertMToCm method should convert 1 meter to 100 cm', () => {
    expect(lc.convertMToCm(1)).toBe(100)
  })
  test('convertMToKm method should convert 1000 meters to 1 km', () => {
    expect(lc.convertMToKm(1000)).toBe(1)
  })
  test('convertKmToMm method should convert 1 km to 1000000 mm', () => {
    expect(lc.convertKmToMm(1)).toBe(1000000)
  })
  test('convertKmToCm method should convert 1 km to 100000 cm', () => {
    expect(lc.convertKmToCm(1)).toBe(100000)
  })
  test('convertKmToM method should convert 1 km to 1000 meters', () => {
    expect(lc.convertKmToM(1)).toBe(1000)
  })
  test('convertInchToMm method should convert 1 inch to 25.4 mm', () => {
    expect(lc.convertInchToMm(1)).toBe(25.4)
  })
  test('convertFootToMm method should convert 1 foot to 304.8 mm', () => {
    expect(lc.convertFootToMm(1)).toBe(304.8)
  })
  test('convertYardToMm method should convert 1 yard to 914.4 mm', () => {
    expect(lc.convertYardToMm(1)).toBe(914.4)
  })
  test('convertMileToMm method should convert 1 mile to 1609344 mm', () => {
    expect(lc.convertMileToMm(1)).toBe(1609344)
  })
  test('convertMmToInch method should convert 25.4 mm to 1 inch', () => {
    expect(lc.convertMmToInch(25.4)).toBe(1)
  })
  test('convertMmToFoot method should convert 304.8 mm to 1 foot', () => {
    expect(lc.convertMmToFoot(304.8)).toBe(1)
  })
  test('convertMmToYard method should convert 914.4 mm to 1 yard', () => {
    expect(lc.convertMmToYard(914.4)).toBe(1)
  })
  test('convertMmToMile method should convert 1609344 mm to 1 mile', () => {
    expect(lc.convertMmToMile(1609344)).toBe(1)
  })
  test('convertInchToCm method should convert 1 inch to 2.54 cm', () => {
    expect(lc.convertInchToCm(1)).toBe(2.54)
  })
  test('convertFootToCm method should convert 1 foot to 30.48 cm', () => {
    expect(lc.convertFootToCm(1)).toBe(30.48)
  })
  test('convertYardToCm method should convert 1 yard to 91.44 cm', () => {
    expect(lc.convertYardToCm(1)).toBe(91.44)
  })
  test('convertMileToCm method should convert 1 mile to 160934.4 cm', () => {
    expect(lc.convertMileToCm(1)).toBe(160934.4)
  })
  test('convertCmToInch method should convert 2.54 cm to 1 inch', () => {
    expect(lc.convertCmToInch(2.54)).toBe(1)
  })
  test('convertCmToFoot method should convert 30.48 cm to 1 foot', () => {
    expect(lc.convertCmToFoot(30.48)).toBe(1)
  })
  test('convertCmToYard method should convert 91.44 cm to 1 yard', () => {
    expect(lc.convertCmToYard(91.44)).toBe(1)
  })
  test('convertCmToMile method should convert 160934.4 cm to 1 mile', () => {
    expect(lc.convertCmToMile(160934.4)).toBe(1)
  })
  test('convertInchToM method should convert 39.3701 inches to 1 meter', () => {
    expect(lc.convertInchToM(39.3701)).toBeCloseTo(1)
  })
  test('convertFootToM method should convert 3.28084 feet to 1 meter', () => {
    expect(lc.convertFootToM(3.28084)).toBeCloseTo(1)
  })
  test('convertYardToM method should convert 1.09361 yards to 1 meter', () => {
    expect(lc.convertYardToM(1.09361)).toBeCloseTo(1)
  })
  test('convertMileToM method should convert 0.000621371 miles to 1 meter', () => {
    expect(lc.convertMileToM(0.000621371)).toBeCloseTo(1)
  })
  test('convertMToInch method should convert 1 meter to 39.3701 inches', () => {
    expect(lc.convertMToInch(1)).toBeCloseTo(39.3701)
  })
  test('convertMToFoot method should convert 1 meter to 3.28084 feet', () => {
    expect(lc.convertMToFoot(1)).toBeCloseTo(3.28084)
  })
  test('convertMToYard method should convert 1 meter to 1.09361 yards', () => {
    expect(lc.convertMToYard(1)).toBeCloseTo(1.09361)
  })
  test('convertMToMile method should convert 1609.34 meters to 1 mile', () => {
    expect(lc.convertMToMile(1609.34)).toBeCloseTo(1)
  })
  test('convertInchToKm method should convert 39370.1 inches to 1 km', () => {
    expect(lc.convertInchToKm(39370.1)).toBeCloseTo(1)
  })
  test('convertFootToKm method should convert 3280.84 feet to 1 km', () => {
    expect(lc.convertFootToKm(3280.84)).toBeCloseTo(1)
  })
  test('convertYardToKm method should convert 1093.6133 yards to 1 km', () => {
    expect(lc.convertYardToKm(1093.6133)).toBeCloseTo(1)
  })
  test('convertMileToKm method should convert 1 mile to 1.60934 km', () => {
    expect(lc.convertMileToKm(1)).toBeCloseTo(1.60934)
  })
  test('convertKmToInch method should convert 1 km to 39370.078 inches', () => {
    expect(lc.convertKmToInch(1)).toBeCloseTo(39370.078)
  })
  test('convertKmToFoot method should convert 1 km to 3280.84 feet', () => {
    expect(lc.convertKmToFoot(1)).toBeCloseTo(3280.84)
  })
  test('convertKmToYard method should convert 1 km to 1093.61 yards', () => {
    expect(lc.convertKmToYard(1)).toBeCloseTo(1093.61)
  })
  test('convertKmToMile method should convert 1 km to 0.621371 miles', () => {
    expect(lc.convertKmToMile(1)).toBeCloseTo(0.621371)
  })
})
