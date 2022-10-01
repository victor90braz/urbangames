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
});
