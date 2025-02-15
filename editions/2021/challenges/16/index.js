export default function decodeNumber(symbols) {
  let lastValue = 0;
  const symbolsMap = [
    { symbol: '.', value: 1 },
    { symbol: ',', value: 5 },
    { symbol: ':', value: 10 },
    { symbol: ';', value: 50 },
    { symbol: '!', value: 100 },
  ];

  return symbols.split('').reduce((total, char) => {
    const symbol = symbolsMap.find(({ symbol }) => symbol === char);
    if (!symbol) return NaN;

    total += symbol.value;
    total -= lastValue < symbol.value ? lastValue * 2 : 0;

    lastValue = symbol.value;
    return total;
  }, 0);
}
