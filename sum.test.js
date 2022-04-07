import sum from "./sum"; //for import statements we have configured babel with jest
//const sum = require("./sum");
test("adds 1 + 2 to equal 3", () => {
 expect(sum(1, 2)).toBe(3);
});
