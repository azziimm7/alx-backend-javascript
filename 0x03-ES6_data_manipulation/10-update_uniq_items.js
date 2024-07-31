export default function updateUniqueItems(groceriesList) {
  if (!(groceriesList instanceof Map)) {
    throw new Error('Cannot process');
  }
  groceriesList.forEach((value, key) => {
    if (value === 1) {
      groceriesList.set(key, 100);
    }
  });
}
