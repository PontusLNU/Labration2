import temperatureConverter from "./temperatureConverter.js"

const tc = new temperatureConverter()

describe('temperatureConverter class', () => {
    test('validateInput method should throw an error if the input is not a number', () => {
        expect(() => tc.validateInput('a')).toThrow('Input must be a number')
    })
    test('convertCelsiusToFahrenheit method should convert 0 degrees celsius to 32 degrees fahrenheit', () => {
        expect(tc.convertCelsiusToFahrenheit(0)).toBe(32)
    })
    test('convertFahrenheitToCelsius method should convert 32 degrees fahrenheit to 0 degrees celsius', () => {
        expect(tc.convertFahrenheitToCelsius(32)).toBe(0)
    })
})