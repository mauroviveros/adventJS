/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  const count = new Map();

  for (const char of toy) {
    const lower = char.toLowerCase();
    count.set(lower, (count.get(lower) || 0) + 1);
  }

  for (const char of toy) {
    if (count.get(char.toLowerCase()) === 1) return char;
  }

  return '';
}
