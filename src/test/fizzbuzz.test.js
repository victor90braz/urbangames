import { describe, expect, it } from "vitest";

/*
Escribir una funcion que al pasarle un numero:
- Muestra "fizz" si es multiplo de 3
- Muestra "buzz" si es multiplo de 5
- Muestra "fizzbuzz" si es multiplo de 3 y 5
- Muestra el numero si no es multiplo de 3 ni de 5
*/

const fizzbuzz = (number) => {
  if (typeof number !== "number") throw new Error("Not a number");
  if (Number.isNaN(number)) throw new Error("Not a number, it returns null");
  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";

  return number;
};

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });
  it("should throw a specific message 'Not a number' if not number is provided as parameter", () => {
    const callFunction = () => fizzbuzz();
    const expectedError = "Not a number";

    expect(callFunction).toThrow(expectedError);
  });

  it("should throw a specific message 'Not a number, it returns null' if not number is provided", () => {
    const callFunction = () => fizzbuzz(NaN);
    const expectedError = "Not a number, it returns null";

    expect(callFunction).toThrow(expectedError);
  });

  it("should return 1 if number provided is 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  it("should return 2 if number provided is 2", () => {
    expect(fizzbuzz(2)).toBe(2);
  });

  it("should return 'fizz' if number provided is 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });

  it("should return 'fizz' if number provided is multiple of 3", () => {
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });

  it("should return 'buzz' if number provided is multiple of 5", () => {
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });

  it("should return 'fizzbuzz' if number provided is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});
