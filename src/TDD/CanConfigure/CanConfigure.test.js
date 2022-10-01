import { describe, it, expect } from "vitest";

// eslint-disable-next-line consistent-return
const CanConfigure = (from, to) => {
  if (from === undefined) throw new Error("from is required");
  if (typeof from !== "string")
    throw new Error("first parameter is not a string");
  if (typeof to !== "string")
    throw new Error("second parameter is not a string");

  if (from.length !== to.length) throw new Error("lengths are not equal");
};

describe("CanConfigure", () => {
  it("should be a function", () => {
    expect(CanConfigure).toBeTypeOf("function");
  });

  it("should throw a message 'from is required' if first parameter is missing", () => {
    expect(() => CanConfigure()).toThrow("from is required");
  });

  it("should throw if first parameter is not a string ", () => {
    expect(() => CanConfigure(2)).toThrow("first parameter is not a string");
  });

  it("should throw if second parameter is not a string ", () => {
    const callFunction = () => CanConfigure("a", 2);
    const expectedError = new Error("second parameter is not a string");
    expect(callFunction).toThrow(expectedError);
  });

  it("should return false if strings provided have differents length", () => {
    const callFunction = () => CanConfigure("abc", "de");
    const expectedError = new Error("lengths are not equal");
    expect(callFunction).toThrow(expectedError);
  });
});
