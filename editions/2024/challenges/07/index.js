// ⭐️⭐️⭐️
// 1807 ops/s (Más alto es mejor)
// Complejidad cognitiva: 5

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const regex = /\(([^\(\)]*)\)/g;
  let matches;

  do {
    (matches || []).forEach((match) => {
      const fixMatch = match
        .replace('(', '')
        .replace(')', '')
        .split('')
        .reverse()
        .join('');

      packages = packages.replaceAll(match, fixMatch);
    });
    matches = packages.match(regex);
  } while (!!matches && matches.length);

  return packages;
}

// ⭐️⭐️⭐️⭐️⭐️
// 1924 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3

/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const regex = /\(([^\(\)]*)\)/g;
  let matches;

  while ((matches = packages.match(regex)) !== null) {
    matches.forEach((match) => {
      const fixMatch = match
        .substring(1, match.length - 1)
        .split('')
        .reverse()
        .join('');
      packages = packages.replaceAll(match, fixMatch);
    });
  }

  return packages;
}
