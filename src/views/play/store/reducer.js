import { Map } from 'immutable'

import { 
  CHANGE_CUR_SONG_DETAIL
} from "./constants"

const defaultState = Map({
  curSongDetail: {}
})

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_CUR_SONG_DETAIL: {
      return initState.set('curSongDetail', action.curSongDetail)
    }
    default: {
      return initState
    }
  }
}

export default reducer