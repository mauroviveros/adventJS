// export default function createXmasTree(height) {
//   const SYMBOL = {
//     LEAF: '*',
//     GAP: '_',
//     TRUNK: '#',
//   }
//   const tree = [];
//   let width = 1;
//   let emptyChars = height - 1;
//   let gap = SYMBOL.GAP.repeat(emptyChars);
//   const trunk = gap + SYMBOL.TRUNK + gap;

//   for (let i = 1; i <= height; i++) {
//     let leafs = SYMBOL.LEAF.repeat(width);
//     gap = SYMBOL.GAP.repeat(emptyChars);
//     tree.push(gap + leafs + gap);
//     width += 2;
//     emptyChars--;
//   }
//   tree.push(trunk);
//   tree.push(trunk);

//   return tree.join('\n');
// }

export default function createXmasTree(height) {
  const lines = [];
  if (height <= 0) return '';
  const createLine = (char, width) => {
    return `${'_'.repeat(height - width)}${char.repeat(
      width + width - 1
    )}${'_'.repeat(height - width)}`;
  };

  for (let i = 1; i <= height; i++) {
    lines.push(createLine('*', i));
  }
  lines.push(createLine('#', 1));
  lines.push(createLine('#', 1));
  return lines.join('\n');
}
