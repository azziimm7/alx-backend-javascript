export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch ({ name, message }) {
    queue.push(`${name}: ${message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
