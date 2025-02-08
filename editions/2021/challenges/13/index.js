export default function wrapGifts(gifts) {
  const border = '*'.repeat(gifts[0].length);
  const wrap = [border, ...gifts, border];

  return wrap.map((gift) => `*${gift}*`);
}
