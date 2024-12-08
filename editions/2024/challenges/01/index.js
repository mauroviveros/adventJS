// ⭐️⭐️⭐️⭐️⭐️
// 2139 ops/s (Más alto es mejor)
// Complejidad cognitiva: 2
function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b);
}

// ⭐️⭐️⭐️⭐️⭐️
// 2221 ops/s (Más alto es mejor)
// Complejidad cognitiva:
function prepareGifts(gifts) {
  return Array.from(new Set(gifts)).sort((a, b) => a - b);
}
