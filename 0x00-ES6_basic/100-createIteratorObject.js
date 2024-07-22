export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const allEmps = Object.values(report.allEmployees).flat();
      let counter = -1;
      return {
        next() {
          if (counter < allEmps.length - 1) {
            counter += 1;
            return { done: false, value: allEmps[counter] };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
