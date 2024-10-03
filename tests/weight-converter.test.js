import WeightConverter from '../converters/weight-converter'

const weightConverter = new WeightConverter()

describe('WeightConverter class', () => {
  test('validateInput method should throw an error if the input is not a number', () => {
    expect(() => weightConverter.validateInput('b')).toThrow('Input must be a number')
  })
  test('convertKgToLbs method should convert 1 kg to 2.20462 lbs', () => {
    expect(weightConverter.convertKgToLbs(1)).toBe(2.20462)
  })
  test('convertLbsToKg method should convert 2.20462 lbs to 1 kg', () => {
    expect(weightConverter.convertLbsToKg(2.20462)).toBe(1)
  })
})