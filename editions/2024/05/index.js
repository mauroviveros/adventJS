// ⭐️
// 1405 ops/s (Más alto es mejor)
// Complejidad cognitiva: 7
/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  return Object.values(
    shoes.reduce((shoes, { size, type }) => {
      if (!shoes[size]) shoes[size] = { size, left: 0, right: 0 };

      if (type === 'I') shoes[size].left++;
      if (type === 'R') shoes[size].right++;

      return shoes;
    }, {})
  ).reduce((sizes, shoe) => {
    const pairs = Math.min(shoe.left, shoe.right);
    for (let i = 0; i < pairs; i++) {
      sizes.push(shoe.size);
    }
    return sizes;
  }, []);
}

// ⭐️⭐️
// 1668 ops/s (Más alto es mejor)
// Complejidad cognitiva: 7
/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  const sizes = [];

  shoes.reduce((shoes, { size, type }) => {
    if (!shoes[size]) shoes[size] = { size, left: 0, right: 0 };

    if (type === 'I') shoes[size].left++;
    if (type === 'R') shoes[size].right++;
    if (shoes[size].left && shoes[size].right) {
      sizes.push(size);
      shoes[size].left--;
      shoes[size].right--;
    }

    return shoes;
  }, {});

  return sizes;
}
