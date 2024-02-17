export default function maxProfit(prices) {
  let nextIndex = 0;
  const allProfit = prices.reduce((result, price, index) => {
    if (index < nextIndex) return result;

    const foundLastIndex = prices.slice(index).findIndex((p) => p < price);
    nextIndex = foundLastIndex === -1 ? prices.length : foundLastIndex;

    const rest = prices.slice(index + 1, nextIndex);
    const max = rest.length > 0 ? Math.max(...rest) : price;
    const profit = max - price;
    return profit > 0 ? [...result, profit] : result;
  }, []);
  return allProfit.length > 0 ? Math.max(...allProfit) : -1;
}
