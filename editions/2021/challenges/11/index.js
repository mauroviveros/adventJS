export default function shouldBuyFidelity(times) {
  const discount = Array(times)
    .fill(12)
    .reduce((total, cost, time) => {
      return total + cost * Math.pow(0.75, time + 1);
    }, 250);
  return 12 * times > discount;
}
