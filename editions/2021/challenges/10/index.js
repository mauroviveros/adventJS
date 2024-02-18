export default function getCoins(change) {
  return [1, 2, 5, 10, 20, 50]
    .reverse()
    .map((coin) => {
      const result = Math.floor(change / coin);
      change = change % coin;
      return result;
    })
    .reverse();
}
