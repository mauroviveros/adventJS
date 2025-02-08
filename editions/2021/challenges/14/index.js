export default function missingReindeer(ids) {
  ids.push(ids.length + 1);
  return ids
    .sort((a, b) => a - b)
    .map((id, index) => (id !== index ? index : null))
    .filter((id) => id !== null)[0];
}
