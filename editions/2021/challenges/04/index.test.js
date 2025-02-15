import createXmasTree from './index.js';

describe('Reto #04 (2021): ¡Es hora de poner la navidad en casa!', () => {
  test('Test #01 - expected tree shape for height 1', () => {
    const tree = createXmasTree(1);
    expect(tree).toBe('*\n#\n#'); // Tree with height 1
  });

  test('Test #02 - expected tree shape for height 3', () => {
    const tree = createXmasTree(3);
    expect(tree).toBe('__*__\n_***_\n*****\n__#__\n__#__'); // Tree with height 3
  });

  test('Test #03 - expected tree shape for height 5', () => {
    const tree = createXmasTree(5);
    expect(tree).toBe(
      '____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____'
    ); // Tree with height 5
  });

  test('Test #04 - expected tree shape for height 10', () => {
    const tree = createXmasTree(10);
    const expected =
      '_________*_________\n________***________\n_______*****_______\n______*******______\n_____*********_____\n____***********____\n___*************___\n__***************__\n_*****************_\n*******************\n_________#_________\n_________#_________';
    expect(tree).toBe(expected); // Tree with height 10
  });

  test('Test #05 - expected tree shape for height 2', () => {
    const tree = createXmasTree(2);
    expect(tree).toBe('_*_\n***\n_#_\n_#_'); // Tree with height 2
  });

  test('Test #06 - invalid height 0', () => {
    const tree = createXmasTree(0);
    expect(tree).toBe(''); // Invalid height should return an empty string
  });

  test('Test #07 - invalid height greater than 100', () => {
    const tree = createXmasTree(101);
    expect(tree).toBe(''); // Invalid height greater than 100 should return an empty string
  });

  test('Test #08 - valid tree with height 100', () => {
    const tree = createXmasTree(100);
    expect(tree.split('\n').length).toBe(102); // There should be 100 lines for the tree, 2 for the trunk, total 102 lines
  });
});
