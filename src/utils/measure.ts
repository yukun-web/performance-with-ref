export function measure(fn: () => void): number {
  const start = performance.now();
  fn();
  const end = performance.now();
  return end - start;
}