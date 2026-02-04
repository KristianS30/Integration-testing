const hexToRgb = require("../utils/hexToRgb");

test("converts white correctly", () => {
  expect(hexToRgb("#FFFFFF")).toEqual({ r: 255, g: 255, b: 255 });
});

test("converts black correctly", () => {
  expect(hexToRgb("000000")).toEqual({ r: 0, g: 0, b: 0 });
});

test("throws error for invalid hex code", () => {
  expect(() => hexToRgb("ZZZZZZ")).toThrow("Invalid hex code");
});
