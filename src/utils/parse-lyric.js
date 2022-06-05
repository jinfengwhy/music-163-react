// [00:03.70]词曲：伟伟\n[00:06.55]制作人：夏先生（@夏天播放）\n
const reg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/

export function parseLyric(lyricStr = '') {
  if (!lyricStr) return
  const lyricList = []

  const strLines = lyricStr.split('\n')
  for(const line of strLines) {
    if (!line) continue

    const result = reg.exec(line)
    if (!result) continue

    const [, time1, time2, time3] = result
    const lyricTime = time1 * 60 * 1000 +
      time2 * 1000 + time3 * (time3.length === 2 ? 10 : 1)
    const lyricContent = line.replace(reg, '')
    
    const obj = { time: lyricTime, content: lyricContent }
    lyricList.push(obj)
  }
  
  return lyricList
}