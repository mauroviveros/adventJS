function wrapping(gifts) {
  return gifts.map(gift => {
    const _wrap = "*".repeat(2 + gift.length);
    return `${_wrap}\n*${gift}*\n${_wrap}`;
  })
}

module.exports = wrapping;