export default function cleanSet(set, startString) {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const res = [];
  set.forEach((item) => {
    if (item !== undefined && item.startsWith(startString)) {
      const newItem = item.replace(startString, '');
      res.push(newItem);
    }
  });
  return res.join('-');
}
