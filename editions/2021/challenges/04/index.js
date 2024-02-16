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
