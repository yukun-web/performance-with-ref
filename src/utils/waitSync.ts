export const waitSync = (timeout: number) => {
  const startTime = performance.now()
  while (performance.now() - startTime < timeout) {
    // do nothing
  }
}