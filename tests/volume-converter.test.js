import VolumeConverter from '../converters/volume-converter.js'

const volumeConverter = new VolumeConverter()

describe('VolumeConverter class', () => {
  test('validateInput method should throw an error if the input is not a number', () => {
    expect(() => volumeConverter.validateInput('a')).toThrow('Input must be a number')
  })
  test('convertLitreToGallon method should convert 1 litre to 0.26 gallon', () => {
    expect(volumeConverter.convertLitreToGallon(1)).toBe(0.26)
  })
  test('convertGallonToLitre method should convert 1 gallon to 3.79 litre', () => {
    expect(volumeConverter.convertGallonToLitre(1)).toBe(3.79)
  })
})