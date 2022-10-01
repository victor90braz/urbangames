const fizzbuzz = (number) => {
  if (typeof number !== "number") throw new Error("Not a number");
  if (Number.isNaN(number)) throw new Error("Not a number, it returns null");

  /*
    if (number % 15 === 0) return "fizzbuzz";
    if (number % 3 === 0) return "fizz";
    if (number % 5 === 0) return "buzz";
  */

  const multiplies = { 3: "fizz", 5: "buzz" };
  let output = "";

  Object.entries(multiplies).forEach(([key, value]) => {
    if (number % key === 0) output += value;
  });

  return output || number;
};
export default fizzbuzz;
