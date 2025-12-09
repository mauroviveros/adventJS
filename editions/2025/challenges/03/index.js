/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  const str = [];
  if (size < 2) return '';

  for (let i = 0; i < size; i++) {
    if (i === 0 || i === size - 1) {
      str.push(symbol.repeat(size));
    } else {
      let spaces = ' '.repeat(size - 2);
      str.push(`${symbol}${spaces}${symbol}`);
    }
  }

  return str.join('\n');
}
