import getCoins from './index.js';

describe('Reto #10 (2021): La máquina de cambio', () => {
  test('Test #01 - calculate minimum coins for 51 cents', () => {
    const result = getCoins(51);
    expect(result).toEqual([1, 0, 0, 0, 0, 1]);
  });

  test('Test #02 - calculate minimum coins for 3 cents', () => {
    const result = getCoins(3);
    expect(result).toEqual([1, 1, 0, 0, 0, 0]);
  });

  test('Test #03 - calculate minimum coins for 5 cents', () => {
    const result = getCoins(5);
    expect(result).toEqual([0, 0, 1, 0, 0, 0]);
  });

  test('Test #04 - calculate minimum coins for 16 cents', () => {
    const result = getCoins(16);
    expect(result).toEqual([1, 0, 1, 1, 0, 0]);
  });

  test('Test #05 - calculate minimum coins for 100 cents', () => {
    const result = getCoins(100);
    expect(result).toEqual([0, 0, 0, 0, 0, 2]);
  });
});
