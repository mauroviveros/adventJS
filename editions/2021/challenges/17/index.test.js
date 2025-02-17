import countPackages from './index.js';

describe('Reto #17 (2021): La locura de enviar paquetes en esta época', () => {
  test('Test #01 - expected return type', () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []],
    ];
    expect(typeof countPackages(carriers, 'dapelu')).toBe('number');
  });

  test(`Test #02 - expected countPackages(carriers, 'dapelu')`, () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []],
    ];
    expect(countPackages(carriers, 'dapelu')).toBe(9);
  });

  test(`Test #03 - expected countPackages(carriers2, 'camila')`, () => {
    const carriers2 = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []],
    ];
    expect(countPackages(carriers2, 'camila')).toBe(15);
  });

  test(`Test #04 - expected countPackages(carriers2, 'lolivier')`, () => {
    const carriers2 = [
      ['lolivier', 8, ['camila', 'jesuspoleo']],
      ['camila', 5, ['sergiomartinez', 'conchaasensio']],
      ['jesuspoleo', 4, []],
      ['sergiomartinez', 4, []],
      ['conchaasensio', 3, ['facundocapua', 'faviola']],
      ['facundocapua', 2, []],
      ['faviola', 1, []],
    ];
    expect(countPackages(carriers2, 'lolivier')).toBe(27);
  });

  test(`Test #05 - expected countPackages with unknown carrier`, () => {
    const carriers = [
      ['dapelu', 5, ['midu', 'jelowing']],
      ['midu', 2, []],
      ['jelowing', 2, []],
    ];
    expect(countPackages(carriers, 'unknown')).toBe(0);
  });
});
