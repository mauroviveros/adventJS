export default function daysToXmas(date) {
  const XMAS_DATE = new Date('Dec 25, 2021');
  const MS_IN_A_DAY = 1000 * 3600 * 24;
  return Math.ceil((XMAS_DATE - date) / MS_IN_A_DAY);
}
