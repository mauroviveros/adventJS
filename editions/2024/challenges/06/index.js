// ⭐️⭐️⭐️⭐️⭐️
// 2398 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const line = box[i].substring(1, box[i].length - 1);
    const iGift = line.indexOf('*');
    if (iGift != -1) return true;
  }

  return false;
}
