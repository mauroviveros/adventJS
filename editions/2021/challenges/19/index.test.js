import learn from './index.js';

describe('Reto #19 (2021): ¿Qué deberíamos aprender en Platzi?', () => {
  test('Test #01 - expected return type', () => {
    expect(Array.isArray(learn(10, [2, 3, 8, 1, 4]))).toBe(true);
  });

  test(`Test #02 - expected learn(10, [2, 3, 8, 1, 4])`, () => {
    expect(learn(10, [2, 3, 8, 1, 4])).toEqual([0, 2]);
  });

  test(`Test #03 - expected learn(15, [2, 10, 4, 1])`, () => {
    expect(learn(15, [2, 10, 4, 1])).toEqual([1, 2]);
  });

  test(`Test #04 - expected learn(25, [10, 15, 20, 5])`, () => {
    expect(learn(25, [10, 15, 20, 5])).toEqual([0, 1]);
  });

  test(`Test #05 - expected learn(8, [8, 2, 1])`, () => {
    expect(learn(8, [8, 2, 1])).toEqual([1, 2]);
  });

  test(`Test #06 - expected learn(8, [8, 2, 1, 4, 3])`, () => {
    expect(learn(8, [8, 2, 1, 4, 3])).toEqual([3, 4]);
  });

  test(`Test #07 - expected learn(4, [10, 14, 20])`, () => {
    expect(learn(4, [10, 14, 20])).toBeNull();
  });

  test(`Test #08 - expected learn(5, [5, 5, 5])`, () => {
    expect(learn(5, [5, 5, 5])).toBeNull();
  });

  test(`Test #09 - expected learn(10, [])`, () => {
    expect(learn(10, [])).toBeNull();
  });

  test(`Test #10 - expected learn(3, [2, 2, 2])`, () => {
    expect(learn(3, [2, 2, 2])).toBeNull();
  });

  test(`Test #11 - expected learn(10, [5, 5, 5, 5])`, () => {
    expect(learn(10, [5, 5, 5, 5])).toEqual([0, 1]);
  });
});
