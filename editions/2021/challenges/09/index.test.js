import groupBy from './index.js';

describe('Reto #09 (2021): Agrupando cosas automáticamente', () => {
  test('Test #01 - group by the integer part of the number', () => {
    const numbers = [6.1, 4.2, 6.3];
    const result = groupBy(numbers, Math.floor);
    expect(result).toEqual({ 6: [6.1, 6.3], 4: [4.2] });
  });

  test('Test #02 - group by the length of the strings', () => {
    const strings = ['one', 'two', 'three'];
    const result = groupBy(strings, 'length');
    expect(result).toEqual({ 3: ['one', 'two'], 5: ['three'] });
  });

  test('Test #03 - group by the "age" property of objects', () => {
    const people = [{ age: 23 }, { age: 24 }];
    const result = groupBy(people, 'age');
    expect(result).toEqual({ 23: [{ age: 23 }], 24: [{ age: 24 }] });
  });

  test('Test #04 - group by the year from timestamps', () => {
    const timestamps = [1397639141184, 1363223700000];
    const result = groupBy(timestamps, (timestamp) =>
      new Date(timestamp).getFullYear()
    );
    expect(result).toEqual({ 2013: [1363223700000], 2014: [1397639141184] });
  });

  test('Test #05 - group by the "rating" property of books', () => {
    const books = [
      { title: 'JavaScript: The Good Parts', rating: 8 },
      { title: 'Aprendiendo Git', rating: 10 },
      { title: 'Clean Code', rating: 9 },
    ];
    const result = groupBy(books, 'rating');
    expect(result).toEqual({
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    });
  });
});
