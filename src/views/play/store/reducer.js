import { Map } from 'immutable'

import { 
  CHANGE_CUR_SONG_DETAIL,
  CHANGE_PLAYLIST,
  CHANGE_PLAYMODE
} from "./constants"
import { PLAYMODE_LOOP } from '@/common/constants'

const defaultState = Map({
  curSongDetail: {},
  playlist: [],
  playmode: PLAYMODE_LOOP
})

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_CUR_SONG_DETAIL: {
      return initState.set('curSongDetail', action.curSongDetail)
    }
    case CHANGE_PLAYLIST: {
      return initState.set('playlist', action.playlist)
    }
    case CHANGE_PLAYMODE: {
      return initState.set('playmode', action.playmode)
    }
    default: {
      return initState
    }
  }
}

export default reducer