const Calculator = require('./calculator.js');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('adds two positive numbers', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts a smaller positive number from a larger positive number', () => {
      const result = calculator.subtract(5, 2);
      expect(result).toBe(3);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      const result = calculator.multiply(2, 3);
      expect(result).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides a larger positive number by a smaller positive number', () => {
      const result = calculator.divide(6, 2);
      expect(result).toBe(3);
    });
  });
});