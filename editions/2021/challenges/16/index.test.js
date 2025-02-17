import decodeNumbers from './index.js';

describe('Reto #16 (2021): Descifrando los números...', () => {
  test('Test #01 - expected return type', () => {
    expect(typeof decodeNumbers('') === 'number').toBe(true);
  });

  test(`Test #02 - expected decodeNumbers('...')`, () => {
    expect(decodeNumbers('...')).toBe(3);
  });

  test(`Test #03 - expected decodeNumbers('.,')`, () => {
    expect(decodeNumbers('.,')).toBe(4); // 5 - 1
  });

  test(`Test #04 - expected decodeNumbers(',.')`, () => {
    expect(decodeNumbers(',.')).toBe(6); // 5 + 1
  });

  test(`Test #05 - expected decodeNumbers(',...')`, () => {
    expect(decodeNumbers(',...')).toBe(8); // 5 + 3
  });

  test(`Test #06 - expected decodeNumbers('.........!')`, () => {
    expect(decodeNumbers('.........!')).toBe(107); // (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
  });

  test(`Test #07 - expected decodeNumbers('.;')`, () => {
    expect(decodeNumbers('.;')).toBe(49); // 50 - 1
  });

  test(`Test #08 - expected decodeNumbers('..,')`, () => {
    expect(decodeNumbers('..,')).toBe(5); // (-1 + 1 + 5)
  });

  test(`Test #09 - expected decodeNumbers('..,!')`, () => {
    expect(decodeNumbers('..,!')).toBe(95); // (1 - 1 - 5 + 100)
  });

  test(`Test #10 - expected decodeNumbers('.;!')`, () => {
    expect(decodeNumbers('.;!')).toBe(49); // (-1 -50 + 100)
  });

  test(`Test #11 - expected decodeNumbers('!!!')`, () => {
    expect(decodeNumbers('!!!')).toBe(300);
  });

  test(`Test #12 - expected decodeNumbers(';!')`, () => {
    expect(decodeNumbers(';!')).toBe(50);
  });

  test(`Test #13 - expected decodeNumbers(';.W')`, () => {
    expect(decodeNumbers(';.W')).toBeNaN();
  });
});
