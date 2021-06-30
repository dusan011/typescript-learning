let firstName: string = "muriel!";

console.log(firstName.toUpperCase());

console.log(firstName.length);

const a: number = 5;
const b: number = 5;

/**
 *
 * This function multiplies two number
 * @param a first number
 * @param b second number
 * @returns
 */
const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(a, b));
