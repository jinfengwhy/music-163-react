import * as actionType from './constants'
import {
  PLAYMODE_LOOP,
  PLAYMODE_SHUFFLE,
  PLAYMODE_ONE
} from '@/common/constants'

import { getRandomNum } from '@/utils/math-utils.js'
import { parseLyric } from '@/utils/parse-lyric.js'
import { getCurSongDetail, getSongLyricList } from '@/service/modules/play'

export const changeCurSongDetail = curSongDetail => ({
  type: actionType.CHANGE_CUR_SONG_DETAIL,
  curSongDetail
})

export const changeCurSongIndex = curSongIndex => ({
  type: actionType.CHANGE_CUR_SONG_INDEX,
  curSongIndex
}) 

export const changePlaylist = playlist => ({
  type: actionType.CHANGE_PLAYLIST,
  playlist
})

export const changePlaymode = playmode => ({
  type: actionType.CHANGE_PLAYMODE,
  playmode
})

export const changeSongLyricList = songLyricList => ({
  type: actionType.CHANGE_SONG_LYRIC_LIST,
  songLyricList
})

export const getCurSongDetailAction = ids => {
  return (dispatch, getState) => {
    const state = getState()
    const playlist = state.getIn(['play', 'playlist'])

    const findIndex = playlist.findIndex(song => song.id === ids)
    if (findIndex === -1) { // 播放列表没找到
      getCurSongDetail(ids).then(res => {
        const curSongDetail = res?.songs[0]
        if (!curSongDetail) return

        // 1.更新当前歌曲的详情
        dispatch(changeCurSongDetail(curSongDetail))
        // 2.将该歌曲添加到播放列表中 更新播放列表
        dispatch(changePlaylist([...playlist, curSongDetail]))
        // 3.更新当前歌曲在播放列表中占据的索引值
        dispatch(changeCurSongIndex(playlist.length))
        // 4.更新当前歌曲的歌词信息
        dispatch(getSongLyricListAction(curSongDetail.id))
      })
    } else { // 播放列表找到了
      const curSongDetail = playlist[findIndex]

      // 1.更新当前歌曲的详情
      dispatch(changeCurSongDetail(curSongDetail))
      // 2.更新当前歌曲在播放列表中占据的索引值
      dispatch(changeCurSongIndex(findIndex))
      // 3.更新当前歌曲的歌词信息
      dispatch(getSongLyricListAction(curSongDetail.id))
    }
  }
}

export const getNextPlaymodeAction = () => {
  return (dispatch, getState) => {
    const state = getState()
    const playmode = state.getIn(['play', 'playmode'])
    switch(playmode) {
      case PLAYMODE_LOOP:
        dispatch(changePlaymode(PLAYMODE_SHUFFLE))
        break
      case PLAYMODE_SHUFFLE:
        dispatch(changePlaymode(PLAYMODE_ONE))
        break
      case PLAYMODE_ONE:
        dispatch(changePlaymode(PLAYMODE_LOOP))
        break
      default:
    }
  }
}

export const switchSongAction = num => {
  return (dispatch, getState) => {
    const state = getState()
    const curSongIndex = state.getIn(['play', 'curSongIndex'])
    const playmode = state.getIn(['play', 'playmode'])
    const playlist = state.getIn(['play', 'playlist'])
    const length = playlist.length
    if (!length) return

    let newSongIndex 
    if (playmode !== PLAYMODE_SHUFFLE) { // 列表循环、单曲循环
      newSongIndex = curSongIndex + num
      if (newSongIndex >= length) newSongIndex = 0
      if (newSongIndex < 0) newSongIndex = length - 1
    } else { // 随机播放
      newSongIndex = curSongIndex
      while (newSongIndex === curSongIndex) {
        newSongIndex = getRandomNum(length)
      }
    }

    // 1.更新当前歌曲在播放列表中的index
    dispatch(changeCurSongIndex(newSongIndex))
    // 2.更新redux中当前歌曲的详情
    dispatch(changeCurSongDetail(playlist[newSongIndex]))
    // 3.更新redux中当前歌曲的歌词 dispatch也接收函数作为参数
    dispatch(getSongLyricListAction(playlist[newSongIndex].id))
  }
}

export const getSongLyricListAction = id => {
  return dispatch => {
    getSongLyricList(id).then(res => {
      const lyricList = parseLyric(res?.lrc?.lyric)
      dispatch(changeSongLyricList(lyricList))
    })
  }
}