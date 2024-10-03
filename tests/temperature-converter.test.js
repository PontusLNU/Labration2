import TemperatureConverter from '../src/converters/temperature-converter'

const temperatureConverter = new TemperatureConverter()

describe('TemperatureConverter class', () => {
  test('validateInput method should throw an error if the input is not a number', () => {
    expect(() => temperatureConverter.validateInput('a')).toThrow('Input must be a number')
  })
  test('convertCelsiusToFahrenheit method should convert 0 degrees celsius to 32 degrees fahrenheit', () => {
    expect(temperatureConverter.convertCelsiusToFahrenheit(0)).toBe(32)
  })
  test('convertFahrenheitToCelsius method should convert 32 degrees fahrenheit to 0 degrees celsius', () => {
    expect(temperatureConverter.convertFahrenheitToCelsius(32)).toBe(0)
  })
})