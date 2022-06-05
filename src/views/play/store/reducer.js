import { Map } from 'immutable'

import { 
  CHANGE_CUR_SONG_DETAIL,
  CHANGE_PLAYLIST
} from "./constants"

const defaultState = Map({
  curSongDetail: {},
  playlist: []
})

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_CUR_SONG_DETAIL: {
      return initState.set('curSongDetail', action.curSongDetail)
    }
    case CHANGE_PLAYLIST: {
      return initState.set('playlist', action.playlist)
    }
    default: {
      return initState
    }
  }
}

export default reducer