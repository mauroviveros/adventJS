/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  return Object.entries(
    gloves.reduce((match, { hand, color }) => {
      match[color] ||= {};
      match[color][hand] ||= 0;
      match[color][hand]++;
      return match;
    }, {})
  )
    .filter(([_, hand]) => {
      return hand.L && hand.R;
    })
    .flatMap(([color, hand]) => {
      return Array(Math.min(hand.L, hand.R)).fill(color);
    });
}
