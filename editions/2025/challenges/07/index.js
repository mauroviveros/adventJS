/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let output = [];
  let pos = 1; // contador global de posiciones

  for (let i = 1; i <= height; i++) {
    const starsCount = 2 * i - 1;
    let line = '';

    for (let j = 0; j < starsCount; j++) {
      // cada frequency posiciones, ponemos el adorno
      if (pos % frequency === 0) {
        line += ornament;
      } else {
        line += '*';
      }
      pos++;
    }

    // agregar la línea centrada
    const spaces = ' '.repeat(height - i);
    output.push(spaces + line);
  }

  // tronco
  output.push(' '.repeat(height - 1) + '#');

  return output.join('\n');
}
