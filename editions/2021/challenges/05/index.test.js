import daysToXmas from './index.js';

describe('Reto #05 (2021): Contando los días para los regalos', () => {
  test('Test #01 - expected days to Xmas from Dec 1, 2021', () => {
    const date = new Date('Dec 1, 2021');
    expect(daysToXmas(date)).toBe(24); // 24 days left to 25th December
  });

  test('Test #02 - expected days to Xmas from Dec 24, 2021, 00:00:01', () => {
    const date = new Date('Dec 24, 2021 00:00:01');
    expect(daysToXmas(date)).toBe(1); // 1 day left to 25th December
  });

  test('Test #03 - expected days to Xmas from Dec 24, 2021, 23:59:59', () => {
    const date = new Date('Dec 24, 2021 23:59:59');
    expect(daysToXmas(date)).toBe(1); // 1 day left to 25th December
  });

  test('Test #04 - expected days to Xmas from December 20, 2021', () => {
    const date = new Date('December 20, 2021 03:24:00');
    expect(daysToXmas(date)).toBe(5); // 5 days left to 25th December
  });

  test('Test #05 - expected days to Xmas on Dec 25, 2021', () => {
    const date = new Date('Dec 25, 2021');
    expect(daysToXmas(date)).toBe(0); // It is already Christmas Day
  });

  test('Test #06 - expected days to Xmas from Dec 26, 2021', () => {
    const date = new Date('Dec 26, 2021');
    expect(daysToXmas(date)).toBe(-1); // 1 day after Christmas
  });

  test('Test #07 - expected days to Xmas from Dec 31, 2021', () => {
    const date = new Date('Dec 31, 2021');
    expect(daysToXmas(date)).toBe(-6); // 6 days after Christmas
  });

  test('Test #08 - expected days to Xmas from Jan 1, 2022, 00:00:01', () => {
    const date = new Date('Jan 1, 2022 00:00:01');
    expect(daysToXmas(date)).toBe(-7); // 7 days after Christmas
  });

  test('Test #09 - expected days to Xmas from Jan 1, 2022, 23:59:59', () => {
    const date = new Date('Jan 1, 2022 23:59:59');
    expect(daysToXmas(date)).toBe(-7); // 7 days after Christmas
  });
});
