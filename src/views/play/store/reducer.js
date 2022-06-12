import { Map } from 'immutable'

import { 
  CHANGE_CUR_SONG_DETAIL,
  CHANGE_CUR_SONG_INDEX,
  CHANGE_PLAYLIST,
  CHANGE_PLAYMODE,
  CHANGE_SONG_LYRIC_LIST,
  CHANGE_SONG_LYRIC_INDEX
} from "./constants"
import { PLAYMODE_LOOP } from '@/common/constants'

const defaultState = Map({
  curSongDetail: {},
  curSongIndex: -1,
  playlist: [],
  playmode: PLAYMODE_LOOP,
  songLyricList: [],
  songLyricIndex: 0
})

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_CUR_SONG_DETAIL: {
      return initState.set('curSongDetail', action.curSongDetail)
    }
    case CHANGE_CUR_SONG_INDEX: {
      return initState.set('curSongIndex', action.curSongIndex)
    }
    case CHANGE_PLAYLIST: {
      return initState.set('playlist', action.playlist)
    }
    case CHANGE_PLAYMODE: {
      return initState.set('playmode', action.playmode)
    }
    case CHANGE_SONG_LYRIC_LIST: {
      return initState.set('songLyricList', action.songLyricList)
    }
    case CHANGE_SONG_LYRIC_INDEX: {
      return initState.set('songLyricIndex', action.songLyricIndex)
    }
    default: {
      return initState
    }
  }
}

export default reducer