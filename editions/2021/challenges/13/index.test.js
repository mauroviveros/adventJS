import wrapGifts from './index.js';

describe('Reto #13 (2021): Envuelve regalos con asteriscos', () => {
  test('Test #01 - wrap gifts with emojis ["📷", "⚽️"]', () => {
    const result = wrapGifts(['📷', '⚽️']);
    expect(result).toEqual(['****', '*📷*', '*⚽️*', '****']);
  });

  test('Test #02 - wrap gifts with emojis ["🏈🎸", "🎮🧸"]', () => {
    const result = wrapGifts(['🏈🎸', '🎮🧸']);
    expect(result).toEqual(['******', '*🏈🎸*', '*🎮🧸*', '******']);
  });

  test('Test #03 - wrap a single gift ["📷"]', () => {
    const result = wrapGifts(['📷']);
    expect(result).toEqual(['****', '*📷*', '****']);
  });

  test('Test #04 - wrap an empty array of gifts', () => {
    const result = wrapGifts([]);
    expect(result).toEqual([]);
  });
});
