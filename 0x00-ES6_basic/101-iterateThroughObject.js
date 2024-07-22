export default function iterateThroughObject(reportWithIterator) {
  let result = '';
  for (const emp of reportWithIterator) {
    if (result === '') {
      result = emp;
    } else {
      result += ` | ${emp}`;
    }
  }
  return result;
}
