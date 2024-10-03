import WeightConverter from '../converters/weight-converter'

const weightConverter = new WeightConverter()

describe('WeightConverter class', () => {
  test('validateInput method should throw an error if the input is not a number', () => {
    expect(() => weightConverter.validateInput('b')).toThrow('Input must be a number')
  })
  test('convertKgToLbs method should convert 1 kg to 2.20 lbs', () => {
    expect(weightConverter.convertKgToLbs(1)).toBe(2.20)
  })
  test('convertLbsToKg method should convert 80 lbs to 36.29 kg', () => {
    expect(weightConverter.convertLbsToKg(80)).toBe(36.29)
  })
})