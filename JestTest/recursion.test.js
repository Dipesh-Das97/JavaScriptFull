const fact = require('./recursion');

test('finds factorial of a 5 which is 120', () => {
  expect(fact(5)).toBe(120);
});