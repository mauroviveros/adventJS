import contains from './index.js';

describe('Reto #07 (2021): Buscando en el almacén...', () => {
  const almacen = {
    shelf1: {
      drawer1: {
        product1: 'coca-cola',
        product2: 'fanta',
        product3: 'sprite',
      },
    },
    shelf2: {
      drawer1: 'empty',
      drawer2: {
        product1: 'pants',
        product2: 't-shirt', // <- It's here!
      },
    },
  };

  test('Test #01 - product "t-shirt" found in the warehouse', () => {
    const result = contains(almacen, 't-shirt');
    expect(result).toBe(true); // The product "t-shirt" is found
  });

  test('Test #02 - product "coca-cola" found in the warehouse', () => {
    const result = contains(almacen, 'coca-cola');
    expect(result).toBe(true); // The product "coca-cola" is found
  });

  test('Test #03 - product "gameboy" not found in the warehouse', () => {
    const result = contains(almacen, 'gameboy');
    expect(result).toBe(false); // The product "gameboy" is not found
  });

  const anotherWarehouse = {
    chest: {
      bottom: {
        item: 'cd-rom',
        'another-item': 'floppy-disk',
        'something-else': 'controller',
      },
    },
  };

  test('Test #04 - product "gameboy" not found in another warehouse', () => {
    const result = contains(anotherWarehouse, 'gameboy');
    expect(result).toBe(false); // The product "gameboy" is not found
  });

  test('Test #05 - product "controller" found in another warehouse', () => {
    const result = contains(anotherWarehouse, 'controller');
    expect(result).toBe(true); // The product "controller" is found
  });
});
