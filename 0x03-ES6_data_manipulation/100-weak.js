export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const counter = weakMap.get(endpoint);
  if (counter === undefined) {
    weakMap.set(endpoint, 1);
  } else if (counter < 4) {
    weakMap.set(endpoint, counter + 1);
  } else {
    throw new Error('Endpoint load is high');
  }
}
