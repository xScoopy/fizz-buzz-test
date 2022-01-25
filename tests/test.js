const fb = require("../fizzbuzz");

test("Sanity check", () => {
  expect(true).toBe(true);
});

//Constant tests
test("Fizz constant check", () => {
  expect(fb.FIZZ).toBe("fizz");
});
test("Buzz constant check", () => {
  expect(fb.BUZZ).toBe("buzz");
});
test("Fizzbuzz constant check", () => {
  expect(fb.FIZZBUZZ).toBe("fizzbuzz");
});

//isFizzy function test
test("isFizzy test", () => {
  expect(fb.isFizzy(3)).toBe(true);
  expect(fb.isFizzy(-1)).toBe(false);
  expect(fb.isFizzy(6)).toBe(true);
  expect(fb.isFizzy(8)).toBe(false);
});

//isBuzzy function test
test("isBuzzy test", () => {
  expect(fb.isBuzzy(5)).toBe(true);
  expect(fb.isBuzzy(3)).toBe(false);
  expect(fb.isBuzzy(-1)).toBe(false);
  expect(fb.isBuzzy(25)).toBe(true);
});

//fizzyBuzzy function test
test("fizzyBuzzy test", () => {
  expect(fb.fizzyBuzzy(3)).toBe(fb.FIZZ);
  expect(fb.fizzyBuzzy(5)).toBe(fb.BUZZ);
  expect(fb.fizzyBuzzy(15)).toBe(fb.FIZZBUZZ);
  expect(fb.fizzyBuzzy(2)).toBe("");
});

//fizzBuzz(count) function test
test("fizzBuzz count test", () => {
  const result = fb.fizzBuzz(15);
  expect(result.count).toBe(15);
  expect(result.fizz).toBe(4);
  expect(result.buzz).toBe(2);
  expect(result.fizzBuzz).toBe(1);
});
