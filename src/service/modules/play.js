import request from '../request'

import { defaultCurSongDetail, defaultCurSongLyric } from '@/common/interface-data'

export async function getCurSongDetail(ids) {
  let result = await request({
    url: "https://coderwhy-music.vercel.app/song/detail",
    params: { ids }
  })
  if (!result || result.code !== 200) {
    result = defaultCurSongDetail
  }
  return new Promise(resolve => resolve(result))
}

export async function getSongLyricList(id) {
  let result = await request({
    url: "https://coderwhy-music.vercel.app/lyric",
    params: { id }
  })
  if (!result || result.code !== 200) {
    result = defaultCurSongLyric
  }
  return new Promise(resolve => resolve(result))
}