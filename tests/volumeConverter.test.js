import volumeConverter from "../converters/volumeConverter.js"

const vc = new volumeConverter()

describe("volumeConverter class", () => {
  test('validateInput method should throw an error if the input is not a number', () => {
    expect(() => vc.validateInput('a')).toThrow('Input must be a number')
  })
  test('convertLitreToGallon method should convert 3.78541 litre to 1 gallon', () => {
    expect(vc.convertLitreToGallon(3.78541)).toBe(1)
  })
  test('convertGallonToLitre method should convert 1 gallon to 3.78541 litre', () => {
    expect(vc.convertGallonToLitre(1)).toBe(3.78541)
  })
})