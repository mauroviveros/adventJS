import contarOvejas from './index.js';

describe('Reto #01 (2021): Contando ovejas para dormir', () => {
  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
  ];

  test('Test #01 - expected return type', () => {
    expect(Array.isArray(contarOvejas(ovejas))).toBe(true);
  });

  test('Test #02 - expected number of red sheep', () => {
    const ovejasFiltradas = contarOvejas(ovejas);
    expect(ovejasFiltradas.length).toBe(2); // There should be 5 red sheep
  });

  test('Test #03 - expected names of red sheep', () => {
    const ovejasFiltradas = contarOvejas(ovejas);
    const names = ovejasFiltradas.map((sheep) => sheep.name);
    expect(names).toEqual(['Navidad', 'Ki Na Ma']);
  });

  test('Test #04 - expected filtering of non-red sheep', () => {
    const ovejasFiltradas = contarOvejas(ovejas);
    const names = ovejasFiltradas.map((sheep) => sheep.name);
    expect(names).not.toContain('Noa');
  });

  test('Test #07 - expected behavior with empty input array', () => {
    const ovejasFiltradas = contarOvejas([]);
    expect(ovejasFiltradas.length).toBe(0); // No sheep should be filtered
  });

  test('Test #08 - expected handling of only non-red sheep', () => {
    const nonRedSheep = [
      { name: 'Noa', color: 'azul' },
      { name: 'Luna', color: 'verde' },
    ];
    const ovejasFiltradas = contarOvejas(nonRedSheep);
    expect(ovejasFiltradas.length).toBe(0); // No red sheep to filter
  });
});
