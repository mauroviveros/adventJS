export default function pangram(letter) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
  return [...alphabet].every((char) => new Set(letter.toLowerCase()).has(char));
}
