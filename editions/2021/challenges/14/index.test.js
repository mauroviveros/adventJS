import missingReindeer from './index.js';

describe('Reto #14 (2021): En busca del reno perdido', () => {
  test('Test #01 - Find missing reindeer from [0, 2, 3]', () => {
    const result = missingReindeer([0, 2, 3]);
    expect(result).toBe(1);
  });

  test('Test #02 - Find missing reindeer from [5, 6, 1, 2, 3, 7, 0]', () => {
    const result = missingReindeer([5, 6, 1, 2, 3, 7, 0]);
    expect(result).toBe(4);
  });

  test('Test #03 - Find missing reindeer from [0, 1]', () => {
    const result = missingReindeer([0, 1]);
    expect(result).toBe(2);
  });

  test('Test #04 - Find missing reindeer from [3, 0, 1]', () => {
    const result = missingReindeer([3, 0, 1]);
    expect(result).toBe(2);
  });

  test('Test #05 - Find missing reindeer from [9, 2, 3, 5, 6, 4, 7, 0, 1]', () => {
    const result = missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]);
    expect(result).toBe(8);
  });

  test('Test #06 - Find missing reindeer from [0]', () => {
    const result = missingReindeer([0]);
    expect(result).toBe(1);
  });
});
