/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  const gifts = [];
  for (const { toy, quantity } of giftsToProduce) {
    for (let i = 0; i < quantity; i++) {
      gifts.push(toy);
    }
  }
  return gifts;
}
