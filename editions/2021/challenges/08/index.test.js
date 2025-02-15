import maxProfit from './index.js';

describe('Reto #08 (2021): La locura de las criptomonedas', () => {
  test('Test #01 - maximum profit from buying at 18 and selling at 34', () => {
    const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
    const result = maxProfit(pricesBtc);
    expect(result).toBe(16); // Buy at 18, sell at 34
  });

  test('Test #02 - maximum profit from buying at 10 and selling at 70', () => {
    const pricesEth = [10, 20, 30, 40, 50, 60, 70];
    const result = maxProfit(pricesEth);
    expect(result).toBe(60); // Buy at 10, sell at 70
  });

  test('Test #03 - no profit possible (prices are decreasing)', () => {
    const pricesDoge = [18, 15, 12, 11, 9, 7];
    const result = maxProfit(pricesDoge);
    expect(result).toBe(-1); // No profit possible
  });

  test('Test #04 - no profit possible (all prices are the same)', () => {
    const pricesAda = [3, 3, 3, 3, 3];
    const result = maxProfit(pricesAda);
    expect(result).toBe(-1); // No profit possible
  });

  test('Test #05 - maximum profit from buying at 1 and selling at 100', () => {
    const prices = [1, 2, 3, 4, 5, 100];
    const result = maxProfit(prices);
    expect(result).toBe(99); // Buy at 1, sell at 100
  });

  test('Test #06 - no profit possible (prices are constant)', () => {
    const prices = [5, 5, 5, 5];
    const result = maxProfit(prices);
    expect(result).toBe(-1); // No profit possible
  });
});
