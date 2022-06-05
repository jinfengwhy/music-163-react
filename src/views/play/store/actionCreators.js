import * as actionType from './constants'
import {
  PLAYMODE_LOOP,
  PLAYMODE_SHUFFLE,
  PLAYMODE_ONE
} from '@/common/constants'

import { 
  getCurSongDetail
} from '@/service/modules/play'

export const changeCurSongDetail = curSongDetail => ({
  type: actionType.CHANGE_CUR_SONG_DETAIL,
  curSongDetail
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
        dispatch(changeCurSongDetail(curSongDetail))
        dispatch(changePlaylist([...playlist, curSongDetail]))
      })
    } else { // 播放列表找到了
      const curSongDetail = playlist[findIndex]
      dispatch(changeCurSongDetail(curSongDetail))
    }
  }
}

export const getNextPlaymode = () => {
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