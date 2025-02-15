import sumPairs from './index.js';

describe('Reto #06 (2021): Rematando los exámenes finales', () => {
  test('Test #01 - expected pair for sum 10 from [3, 5, 7, 2]', () => {
    const result = sumPairs([3, 5, 7, 2], 10);
    expect(result).toEqual([3, 7]); // 3 + 7 = 10
  });

  test('Test #02 - expected no pair found for sum 10 from [-3, -2, 7, -5]', () => {
    const result = sumPairs([-3, -2, 7, -5], 10);
    expect(result).toBeNull(); // No pair sums up to 10
  });

  test('Test #03 - expected pair for sum 4 from [2, 2, 3, 1]', () => {
    const result = sumPairs([2, 2, 3, 1], 4);
    expect(result).toEqual([2, 2]); // 2 + 2 = 4
  });

  test('Test #04 - expected pair for sum 8 from [6, 7, 1, 2]', () => {
    const result = sumPairs([6, 7, 1, 2], 8);
    expect(result).toEqual([6, 2]); // 6 + 2 = 8
  });

  test('Test #05 - expected pair for sum 6 from [0, 2, 2, 3, -1, 1, 5]', () => {
    const result = sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
    expect(result).toEqual([1, 5]); // 1 + 5 = 6
  });

  test('Test #06 - expected no pair found for sum 7 from [1, -2, -3, 4, 5]', () => {
    const result = sumPairs([1, -2, -3, 4, 5], 7);
    expect(result).toBeNull(); // No pair sums up to 7
  });

  test('Test #07 - expected pair for sum 0 from [1, -1, 2, -2]', () => {
    const result = sumPairs([1, -1, 2, -2], 0);
    expect(result).toEqual([1, -1]); // 1 + (-1) = 0
  });
});
