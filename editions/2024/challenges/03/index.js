// ⭐️⭐️⭐️
// 1396 ops/s (Más alto es mejor)
// Complejidad cognitiva: 4
function organizeInventory(inventory) {
  return inventory.reduce((result, { category, name, quantity }) => {
    if (!result[category]) result[category] = {};
    if (!result[category][name]) result[category][name] = 0;

    result[category][name] += quantity;
    return result;
  }, {});
}

// ⭐️⭐️⭐️⭐️⭐️
// 1517 ops/s (Más alto es mejor)
// Complejidad cognitiva: 3
function organizeInventory(inventory) {
  const result = {};

  for (const { category, name, quantity } of inventory) {
    if (!result[category]) result[category] = {};
    result[category][name] = (result[category][name] || 0) + quantity;
  }

  return result;
}
