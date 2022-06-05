import * as actionType from './constants'
import {
  PLAYMODE_LOOP,
  PLAYMODE_SHUFFLE,
  PLAYMODE_ONE
} from '@/common/constants'

import { getRandomNum } from '@/utils/math-utils.js'
import { getCurSongDetail } from '@/service/modules/play'

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

export const getCurSongDetailAction = ids => {
  return (dispatch, getState) => {
    const state = getState()
    const playlist = state.getIn(['play', 'playlist'])

    const findIndex = playlist.findIndex(song => song.id === ids)
    if (findIndex === -1) { // 播放列表没找到
      getCurSongDetail(ids).then(res => {
        const curSongDetail = res?.songs[0]
        if (!curSongDetail) return
        dispatch(changeCurSongDetail(curSongDetail))
        dispatch(changePlaylist([...playlist, curSongDetail]))
        dispatch(changeCurSongIndex(playlist.length))
      })
    } else { // 播放列表找到了
      const curSongDetail = playlist[findIndex]
      dispatch(changeCurSongDetail(curSongDetail))
      dispatch(changeCurSongIndex(findIndex))
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
    dispatch(changeCurSongIndex(newSongIndex))
    dispatch(changeCurSongDetail(playlist[newSongIndex]))
  }
}