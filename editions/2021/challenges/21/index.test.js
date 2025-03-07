import canCarry from './index.js';

describe('Reto #21 (2021): La ruta con los regalos', () => {
  test('Test #01 - expected return type', () => {
    expect(
      typeof canCarry(4, [
        [2, 5, 8],
        [3, 6, 10],
      ])
    ).toBe('boolean');
  });

  test(`Test #02 - expected canCarry(4, [[2, 5, 8], [3, 6, 10]])`, () => {
    expect(
      canCarry(4, [
        [2, 5, 8],
        [3, 6, 10],
      ])
    ).toBe(false);
  });

  test(`Test #03 - expected canCarry(3, [[1, 1, 5], [2, 2, 10]])`, () => {
    expect(
      canCarry(3, [
        [1, 1, 5],
        [2, 2, 10],
      ])
    ).toBe(true);
  });

  test(`Test #04 - expected canCarry(3, [[2, 1, 5],[3, 5, 7]])`, () => {
    expect(
      canCarry(3, [
        [2, 1, 5],
        [3, 5, 7],
      ])
    ).toBe(true);
  });

  test(`Test #05 - expected canCarry(4, [[2, 3, 8],[2, 5, 7]])`, () => {
    expect(
      canCarry(4, [
        [2, 3, 8],
        [2, 5, 7],
      ])
    ).toBe(true);
  });

  test(`Test #06 - expected canCarry(1, [[2, 3, 8]])`, () => {
    expect(canCarry(1, [[2, 3, 8]])).toBe(false);
  });

  test(`Test #07 - expected canCarry(2, [[1, 2, 4], [2, 3, 8]])`, () => {
    expect(
      canCarry(2, [
        [1, 2, 4],
        [2, 3, 8],
      ])
    ).toBe(false);
  });
});
