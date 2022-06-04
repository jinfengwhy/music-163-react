import request from '../request'

export function getCurSongDetail(ids) {
  return request({
    url: "https://coderwhy-music.vercel.app/song/detail",
    params: {
      ids
    }
  })
}

export function getCurSongLyric(id) {
  return request({
    url: "https://coderwhy-music.vercel.app/lyric",
    params: {
      id
    }
  })
}