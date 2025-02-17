import fixFiles from './index.js';

describe('Reto #18 (2021): El sistema operativo de Santa Claus', () => {
  test('Test #01 - expected return type', () => {
    expect(Array.isArray(fixFiles([]))).toBe(true);
  });

  test(`Test #02 - expected fixFiles(['photo', 'postcard', 'photo', 'photo', 'video'])`, () => {
    expect(fixFiles(['photo', 'postcard', 'photo', 'photo', 'video'])).toEqual([
      'photo',
      'postcard',
      'photo(1)',
      'photo(2)',
      'video',
    ]);
  });

  test(`Test #03 - expected fixFiles(['file', 'file', 'file', 'game', 'game'])`, () => {
    expect(fixFiles(['file', 'file', 'file', 'game', 'game'])).toEqual([
      'file',
      'file(1)',
      'file(2)',
      'game',
      'game(1)',
    ]);
  });

  test(`Test #04 - expected fixFiles(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'])`, () => {
    expect(fixFiles(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'])).toEqual(
      ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
    );
  });

  test(`Test #05 - expected fixFiles(['a', 'b', 'a', 'c', 'b', 'a'])`, () => {
    expect(fixFiles(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual([
      'a',
      'b',
      'a(1)',
      'c',
      'b(1)',
      'a(2)',
    ]);
  });

  test(`Test #06 - expected fixFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])`, () => {
    expect(fixFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])).toEqual([
      'doc',
      'doc(1)',
      'image',
      'doc(1)',
      'doc(2)',
    ]);
  });

  test(`Test #07 - expected fixFiles([])`, () => {
    expect(fixFiles([])).toEqual([]);
  });
});
