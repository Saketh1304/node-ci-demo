const { add, subtract } = require('../src/math');

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(6);
});

test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});
