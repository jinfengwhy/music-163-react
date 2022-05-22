export function getSizeImg(url, size) {
  // 获取特定尺寸的图片以更快加载
  return `${url}?param=${size}x${size}`
}

export function getCount(number) {
  if (number < 0) {
    return
  } else if (number < 10000) {
    return number
  } else if (number < 100000000) {
    // 这样写的原因是为了保留一位小数
    return Math.floor(number / 1000) / 10 + '万'
  }
}