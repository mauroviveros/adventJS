import checkSledJump from './index.js';

describe('Reto #15 (2021): El salto perfecto', () => {
  test('Test #01 - Check jump [1, 2, 3, 2, 1]', () => {
    const result = checkSledJump([1, 2, 3, 2, 1]);
    expect(result).toBe(true);
  });

  test('Test #02 - Check jump [0, 1, 0]', () => {
    const result = checkSledJump([0, 1, 0]);
    expect(result).toBe(true);
  });

  test('Test #03 - Check jump [0, 3, 2, 1]', () => {
    const result = checkSledJump([0, 3, 2, 1]);
    expect(result).toBe(true);
  });

  test('Test #04 - Check jump [0, 1000, 1]', () => {
    const result = checkSledJump([0, 1000, 1]);
    expect(result).toBe(true);
  });

  test('Test #05 - Check jump [2, 4, 4, 6, 2]', () => {
    const result = checkSledJump([2, 4, 4, 6, 2]);
    expect(result).toBe(false);
  });

  test('Test #06 - Check jump [1, 2, 3]', () => {
    const result = checkSledJump([1, 2, 3]);
    expect(result).toBe(false);
  });

  test('Test #07 - Check jump [1, 2, 3, 2, 1, 2, 3]', () => {
    const result = checkSledJump([1, 2, 3, 2, 1, 2, 3]);
    expect(result).toBe(false);
  });
});
