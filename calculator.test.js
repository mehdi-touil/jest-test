import { calculator } from "./calculator";

test("calculator object", () => {
 expect(calculator.add(1, 2)).toBe(3);
 expect(calculator.substract(1, 2)).toBe(-1);
 expect(calculator.multiply(3, 2)).toBe(6);
 expect(calculator.divide(4, 2)).toBe(2);
});
