import TemperatureConverter from '../converters/temperature-converter'

const temperatureConverter = new TemperatureConverter()

describe('TemperatureConverter class', () => {
  test('validateInput method should throw an error if the input is not a number', () => {
    expect(() => temperatureConverter.validateInput('a')).toThrow('Input must be a number')
  })
  test('convertCelsiusToFahrenheit method should convert 0 degrees celsius to 32 degrees fahrenheit', () => {
    expect(temperatureConverter.convertCelsiusToFahrenheit(0)).toBe(32)
  })
  test('convertFahrenheitToCelsius method should convert 133 degrees fahrenheit to 56.11 degrees celsius', () => {
    expect(temperatureConverter.convertFahrenheitToCelsius(133)).toBe(56.11)
  })
})