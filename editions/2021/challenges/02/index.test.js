import listGifts from './index.js';

describe('Reto #02 (2021): ¡Ayuda al elfo a listar los regalos!', () => {
  const letter = 'bici coche balón _playstation bici coche peluche';

  test('Test #01 - expected return type', () => {
    const gifts = listGifts(letter);
    expect(typeof gifts === 'object').toBe(true); // The function should return an array
  });

  test('Test #02 - expected valid gifts in the letter', () => {
    const gifts = listGifts(letter);
    expect(gifts).toEqual({ balón: 1, bici: 2, coche: 2, peluche: 1 });
  });

  test('Test #03 - expected removal of duplicate gifts', () => {
    const gifts = Object.keys(listGifts(letter));
    const uniqueGifts = [...new Set(gifts)];
    expect(uniqueGifts).toEqual(['bici', 'coche', 'balón', 'peluche']); // Duplicates should be removed
  });

  test('Test #04 - handling gifts with underscore', () => {
    const gifts = listGifts(letter);
    expect(gifts).not.toContain('_playstation'); // Gifts with underscores should not be included
  });

  test('Test #05 - behavior with empty input', () => {
    const gifts = Object.keys(listGifts(''));
    expect(gifts.length).toBe(0); // An empty letter should result in no gifts
  });

  test('Test #06 - behavior with only invalid gifts', () => {
    const invalidLetter = '_playstation _xbox';
    const gifts = Object.keys(listGifts(invalidLetter));
    expect(gifts.length).toBe(0); // No valid gifts should be returned
  });

  test('Test #07 - behavior with only valid gifts', () => {
    const validLetter = 'bici coche balón';
    const gifts = Object.keys(listGifts(validLetter));
    expect(gifts).toEqual(['bici', 'coche', 'balón']); // All gifts are valid
  });
});
