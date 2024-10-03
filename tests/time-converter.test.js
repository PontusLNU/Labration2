import TimeConverter from '../src/converters/time-converter.js'

const timeConverter = new TimeConverter()

describe('TimeConverter class', () => {
  test('handle24HourInput method should throw an error if the input is not in 24-hour format', () => {
    expect(() => timeConverter.handle24HourInput(2500)).toThrow('Invalid time format, please provide a time in 24-hour format')
  })
  test('handle24HourInput method should throw an error if the input is not in 24-hour format', () => {
    expect(() => timeConverter.handle24HourInput(23600)).toThrow('Invalid time format, please provide a time in 24-hour format')
  })
  test('handle24HourInput method should throw an error if the input is not in 24-hour format', () => {
    expect(() => timeConverter.handle24HourInput("2436")).toThrow('Invalid time format, please provide a time in 24-hour format')
  })
  test('convert24HourTo12Hour method should convert 09:24 to 9:24AM', () => {
    expect(timeConverter.convert24HourTo12Hour(924)).toBe('9:24AM')
  })
  test('convert24HourTo12Hour method should convert 13:37 to 1:37PM', () => {
    expect(timeConverter.convert24HourTo12Hour(1337)).toBe('1:37PM')
  })
  test('convert24HourTo12Hour method should convert 13:37 to 1:37PM', () => {
    expect(timeConverter.convert24HourTo12Hour("13:37")).toBe('1:37PM')
  })
  test('convert24HourTo12Hour method should convert 23:37 to 11:37PM', () => {
    expect(timeConverter.convert24HourTo12Hour("23:37")).toBe('11:37PM')
  })
  test('convert24HourTo12Hour method should convert 11:37 to 11:37AM', () => {
    expect(timeConverter.convert24HourTo12Hour("11:37")).toBe('11:37AM')
  })
  test('convert24HourTo12Hour method should convert 11:37 to 11:37AM', () => {
    expect(timeConverter.convert24HourTo12Hour(1137)).toBe('11:37AM')
  })
  test('convert24HourTo12Hour method should convert 11:37 to 11:37AM', () => {
    expect(timeConverter.convert24HourTo12Hour("1137")).toBe('11:37AM')
  })
  test('handle12HourInput method should throw an error if the input is not in 12-hour format', () => {
    expect(() => timeConverter.handle12HourInput(2300)).toThrow('Invalid time format, please provide a time in 12-hour format')
  })
  test('handle12HourInput method should throw an error if the input is not in 12-hour format', () => {
    expect(() => timeConverter.handle12HourInput('2300')).toThrow('Invalid time format, please provide a time in 12-hour format')
  })
  test('handle12HourInput method should throw an error if the input is not in 12-hour format', () => {
    expect(() => timeConverter.handle12HourInput('23:00')).toThrow('Invalid time format, please provide a time in 12-hour format')
  })
  test('handle12HourInput method should throw an error if the input is not in 12-hour format', () => {
    expect(() => timeConverter.handle12HourInput('11:00')).toThrow('Invalid time format, please provide a time in 12-hour format')
  })
  test('handle12HourInput method should throw an error if the input is not in 12-hour format', () => {
    expect(() => timeConverter.handle12HourInput('11:00km')).toThrow('Invalid time format, please provide a time in 12-hour format')
  })
  test('handle12HourInput method should throw an error if the input is not in 12-hour format', () => {
    expect(() => timeConverter.handle12HourInput('11:00ppm')).toThrow('Invalid time format, please provide a time in 12-hour format')
  })
  test('convert12HourTo24Hour should convert 1:37PM to 13:37', ()=> {
    expect(timeConverter.convert12HourTo24Hour('1:37PM')).toBe('13:37')
  })
  test('convert12HourTo24Hour should convert 1:37AM to 01:37', ()=> {
    expect(timeConverter.convert12HourTo24Hour('1:37AM')).toBe('01:37')
  })
  test('convert12HourTo24Hour should convert 9:33AM to 09:33', ()=> {
    expect(timeConverter.convert12HourTo24Hour('9:33am')).toBe('09:33')
  })
  test('convert12HourTo24Hour should convert 9:33pm to 21:33', ()=> {
    expect(timeConverter.convert12HourTo24Hour('9:33pm')).toBe('21:33')
  })
  test('convert12HourTo24Hour should convert 933pm to 21:33', ()=> {
    expect(timeConverter.convert12HourTo24Hour('933pm')).toBe('21:33')
  })
  test('convert12HourTo24Hour should convert 12:00AM to 00:00', ()=> {
    expect(timeConverter.convert12HourTo24Hour('12:00AM')).toBe('00:00')
  })
  test('convert12HourTo24Hour should convert 12:00PM to 12:00', ()=> {
    expect(timeConverter.convert12HourTo24Hour('12:00PM')).toBe('12:00')
  })
})