import md5 from 'crypto-js/md5'
export function encryptByMd5(password) {
    let ans = Array.from(`AYZ${password}YMX`).reverse().join('')
    return md5(Array.from(md5(ans).toString()).reverse().join('')).toString()
}