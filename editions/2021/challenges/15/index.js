export default function checkSledJump(heights) {
  let up = true;
  return heights.reduce((check, height, i) => {
    if (i === 0) return check;

    if (heights[i - 1] < height) {
      if (!up) return false;
    } else if (heights[i - 1] > height) {
      up = false;
    } else {
      return false;
    }

    if (i === heights.length - 1 && up) return false;
    return check;
  }, true);
}
