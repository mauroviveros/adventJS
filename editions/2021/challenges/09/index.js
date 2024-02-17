export default function groupBy(collection, it) {
  return collection.reduce((result, item) => {
    let property = typeof it === 'function' ? it(item) : item[it];

    if (!result[property]) result[property] = [];
    result[property].push(item);
    return result;
  }, {});
}
