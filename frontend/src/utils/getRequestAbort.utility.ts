export const getRequestAbort = () => {
  const controller = new AbortController()
  return { signal: controller.signal, abort: controller.abort }
}
