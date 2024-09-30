import WeightConverter from "../converters/weight-converter"

const wc = new WeightConverter()

describe("weightConverter class", () => {
  test("validateInput method should throw an error if the input is not a number", () => {
    expect(() => wc.validateInput("b")).toThrow("Input must be a number")
  })
  test("convertKgToLbs method should convert 1 kg to 2.20462 lbs", () => {
    expect(wc.convertKgToLbs(1)).toBe(2.20462)
  })
  test("convertLbsToKg method should convert 2.20462 lbs to 1 kg", () => {
    expect(wc.convertLbsToKg(2.20462)).toBe(1)
  })
})