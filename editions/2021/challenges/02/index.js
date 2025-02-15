export default function listGifts(letter) {
  return letter
    .trim()
    .split(' ')
    .filter((gift) => !gift.startsWith('_'))
    .reduce((result, gift) => {
      if (gift === '') return result;
      if (!result[gift]) result[gift] = 0;
      result[gift]++;
      return result;
    }, {});
}
