export default function sumPairs(numbers, result) {
  const pairs = numbers.map((num, i) => {
    const pair = numbers.find((num2, i2) => {
      return i != i2 && num + num2 == result;
    });
    if (pair) return [num, pair];
    return null;
  });

  return pairs.find((pair) => pair) || null;
}
