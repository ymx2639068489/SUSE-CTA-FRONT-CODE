export const debounce = (fn, wait) => {
  let timer
  return (...args) => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => { fn(args) }, wait)
  }
}
export const isPC = () => {
  if (navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )) return false;
  return true;
}
