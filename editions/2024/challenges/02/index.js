// 2297 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3 (Más bajo es mejor)
function createFrame(names) {
  const maxLength = Math.max(...names.map((n) => n.length));
  names = names.map((n) => {
    const spaces = ' '.repeat(maxLength - n.length);
    return `* ${n}${spaces} *`;
  });
  names.unshift('*'.repeat(maxLength + 4));
  names.push('*'.repeat(maxLength + 4));

  return names.join('\n');
}

// 2130 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3 (Más bajo es mejor)
function createFrame(names) {
  const maxLength = Math.max(...names.map((n) => n.length));
  names = names.map((n) => {
    const spaces = ' '.repeat(maxLength - n.length);
    return `* ${n}${spaces} *`;
  });

  return ['*'.repeat(maxLength + 4), ...names, '*'.repeat(maxLength + 4)].join(
    '\n'
  );
}

// 2393 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3 (Más bajo es mejor)
function createFrame(names) {
  const length = Math.max(...names.map((n) => n.length));
  const formatName = (n) => `* ${n.padEnd(length)} *`;

  return [
    '*'.repeat(length + 4),
    ...names.map(formatName),
    '*'.repeat(length + 4),
  ].join('\n');
}
