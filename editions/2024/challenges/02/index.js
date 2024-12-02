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
