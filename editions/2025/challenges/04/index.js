/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  const regex = /\[([^\]]+)\]/g;
  const codes = [...code.matchAll(regex)].map((arr) => arr[1]);
  if (codes.length < 4) return null;

  let last;

  return codes
    .map((str) => {
      let digit;
      for (const char of str) {
        const num = Number(char);

        if (!Number.isNaN(num)) {
          digit = num;
          continue;
        }

        switch (char) {
          case '+':
            digit++;
            break;
          case '-':
            digit--;
            break;
          case '<':
            digit = last;
            break;
        }
      }
      last = digit;
      return ((digit % 10) + 10) % 10;
    })
    .join('');
}
