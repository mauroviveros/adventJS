import pangram from './index.js'; // Asegúrate de importar la función correcta

describe('Reto #20 (2021): ¿Una carta de pangramas? ¡QUÉ!', () => {
  test('Test #01 - expected return type', () => {
    expect(typeof pangram('')).toBe('boolean');
  });

  test(`Test #02 - expected pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')`, () => {
    expect(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')).toBe(
      true
    );
  });

  test(`Test #03 - expected pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')`, () => {
    expect(
      pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')
    ).toBe(true);
  });

  test(`Test #04 - expected pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')`, () => {
    expect(
      pangram(
        'Esto es una frase larga pero no tiene todas las letras del abecedario'
      )
    ).toBe(false);
  });

  test(`Test #05 - expected pangram('De la a a la z, nos faltan letras')`, () => {
    expect(pangram('De la a a la z, nos faltan letras')).toBe(false);
  });
});
