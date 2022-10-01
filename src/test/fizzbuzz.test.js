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
};

describe("fizzbuzz", () => {
  it("should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("should throw if not number is provided as parameter", () => {
    expect(() => fizzbuzz()).toThrow();
  });
});
