export default function wrapGifts(gifts) {
  if (!gifts.length) return [];
  const border = '*'.repeat(gifts[0].length);
  const wrap = [border, ...gifts, border];

  return wrap.map((gift) => `*${gift}*`);
}
