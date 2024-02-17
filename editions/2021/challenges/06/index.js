// export default function sumPairs(numbers, result) {
//   const pairs = numbers.map((num, i) => {
//     const pair = numbers.find((num2, i2) => {
//       return i != i2 && num + num2 == result;
//     });
//     if (pair) return [num, pair];
//     return null;
//   });

//   return pairs.find((pair) => pair) || null;
// }

export default function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result) {
        return [numbers[i], numbers[j]];
      }
    }
  }
  return null;
}
