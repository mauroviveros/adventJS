import getMinJump from './index.js';

describe('Reto #12 (2021): La ruta perfecta para dejar los regalos', () => {
  test('Test #01 - check minimum jump for obstacles [5, 3, 6, 7, 9]', () => {
    const result = getMinJump([5, 3, 6, 7, 9]);
    expect(result).toBe(4);
  });

  test('Test #02 - check minimum jump for obstacles [2, 4, 6, 8, 10]', () => {
    const result = getMinJump([2, 4, 6, 8, 10]);
    expect(result).toBe(7);
  });

  test('Test #03 - check minimum jump for obstacles [1, 2, 3, 5]', () => {
    const result = getMinJump([1, 2, 3, 5]);
    expect(result).toBe(4);
  });

  test('Test #04 - check minimum jump for obstacles [3, 7, 5]', () => {
    const result = getMinJump([3, 7, 5]);
    expect(result).toBe(2);
  });

  test('Test #05 - check minimum jump for obstacles [9, 5, 1]', () => {
    const result = getMinJump([9, 5, 1]);
    expect(result).toBe(2);
  });
});
