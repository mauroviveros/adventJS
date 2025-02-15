import isValid from './index.js';

describe('Reto #03 (2021): El Grinch quiere fastidiar la Navidad', () => {
  test('Test #01 - valid letter with properly closed parentheses', () => {
    const letter = 'bici coche (balón) bici coche peluche';
    expect(isValid(letter)).toBe(true); // Properly closed parentheses
  });

  test('Test #02 - valid letter with correctly closed parentheses', () => {
    const letter = '(muñeca) consola bici';
    expect(isValid(letter)).toBe(true); // Properly closed parentheses
  });

  test('Test #03 - invalid letter with unclosed parentheses', () => {
    const letter = 'bici coche (balón bici coche';
    expect(isValid(letter)).toBe(false); // Parentheses not properly closed
  });

  test('Test #04 - invalid letter with nested invalid brackets', () => {
    const letter = 'peluche (bici [coche) bici coche balón';
    expect(isValid(letter)).toBe(false); // Invalid brackets inside parentheses
  });

  test('Test #05 - invalid letter with parentheses containing curly braces', () => {
    const letter = '(peluche {) bici';
    expect(isValid(letter)).toBe(false); // Invalid curly brace inside parentheses
  });

  test('Test #06 - invalid letter with empty parentheses', () => {
    const letter = '() bici';
    expect(isValid(letter)).toBe(false); // Empty parentheses are not valid
  });

  test('Test #07 - valid letter with no parentheses at all', () => {
    const letter = 'bici coche peluche';
    expect(isValid(letter)).toBe(true); // No parentheses, so it's valid
  });

  test('Test #08 - invalid letter with extra parentheses in the middle', () => {
    const letter = 'bici (coche peluche) (muñeca';
    expect(isValid(letter)).toBe(false); // Parentheses not properly closed
  });
});
