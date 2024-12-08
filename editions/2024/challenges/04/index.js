// ⭐️⭐️⭐️⭐️⭐️
// 2075 ops/s (Más alto es mejor)
// Complejidad cognitiva: 2
function createXmasTree(height, ornament) {
  const tree = [];

  for (let i = 1; i <= height; i++) {
    const leaves = ornament.repeat(i + (i - 1));
    const padStart = height + (i - 1);
    const padEnd = height * 2 - i + (i - 1);
    tree.push(leaves.padStart(padStart, '_').padEnd(padEnd, '_'));
  }

  tree.push('#'.padStart(height, '_').padEnd(height * 2 - 1, '_'));
  tree.push('#'.padStart(height, '_').padEnd(height * 2 - 1, '_'));

  return tree.join('\n');
}

// ⭐️⭐️⭐️⭐️
// 2090 ops/s (Más alto es mejor)
// Complejidad cognitiva: 4
function createXmasTree(height, ornament) {
  const tree = [];

  function centerTree(leaves, width) {
    return leaves.padStart((width + leaves.length) / 2, '_').padEnd(width, '_');
  }

  for (let i = 1; i <= height + 2; i++) {
    const leaves = i <= height ? ornament.repeat(i + (i - 1)) : '#';
    tree.push(centerTree(leaves, height * 2 - 1));
  }

  return tree.join('\n');
}

// ⭐️⭐️⭐️⭐️⭐️
// 2030 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3
function createXmasTree(height, ornament) {
  const tree = [];
  const width = height * 2 - 1;

  function center(leaves) {
    return leaves.padStart((width + leaves.length) / 2, '_').padEnd(width, '_');
  }

  for (let i = 1; i <= height; i++) {
    const leaves = ornament.repeat(i + (i - 1));
    tree.push(center(leaves));
  }

  tree.push(center('#'));
  tree.push(center('#'));

  return tree.join('\n');
}
