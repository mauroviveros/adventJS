export default function contains(store, product) {
  if (typeof store === 'string') return store === product;

  for (let bookshelf in store) {
    const bool = contains(store[bookshelf], product);
    if (bool) return true;
  }
  return false;
}
