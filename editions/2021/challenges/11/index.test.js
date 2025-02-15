import shouldBuyFidelity from './index.js';

describe('Reto #11 (2021): ¿Vale la pena la tarjeta fidelidad del cine?', () => {
  test('Test #01 - check if loyalty card is worth it for 1 movie', () => {
    const result = shouldBuyFidelity(1);
    expect(result).toBe(false);
  });

  test('Test #02 - check if loyalty card is worth it for 100 movies', () => {
    const result = shouldBuyFidelity(100);
    expect(result).toBe(true);
  });

  test('Test #03 - check if loyalty card is worth it for 3 movies', () => {
    const result = shouldBuyFidelity(3);
    expect(result).toBe(false);
  });

  test('Test #04 - check if loyalty card is worth it for 10 movies', () => {
    const result = shouldBuyFidelity(10);
    expect(result).toBe(false);
  });

  test('Test #05 - check if loyalty card is worth it for 50 movies', () => {
    const result = shouldBuyFidelity(50);
    expect(result).toBe(true);
  });
});
