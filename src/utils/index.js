export const debounce = (fn, wait) => {
  let timer
  return (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => { fn(args) }, wait)
  }
}