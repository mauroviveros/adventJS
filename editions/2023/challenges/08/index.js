// 250 Points
function organizeGifts(gifts) {
  const regexp = [/\d+[a-zA-Z]/g, /(\d+)([a-zA-Z])/];

  gifts = gifts.match(regexp[0]).map(gift => {
    const match = gift.match(regexp[1]);
    return { count: parseInt(match[1]), name: match[2] };
  })

  return gifts.reduce((pack, gift) => {
    const box = gift.count / 10;
    gift.count = gift.count % 10;

    pack += `[${gift.name}]`.repeat(box / 5);
    pack += `{${gift.name}}`.repeat(box % 5);
    if(gift.count) pack += `(${gift.name.repeat(gift.count)})`;
    return pack;
  }, "");
}

console.log(organizeGifts('66a11b'));