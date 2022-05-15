import { Map } from 'immutable'

import { CHANGE_TOP_BANNERS } from "./constants"

const defaultState = Map({
  topBanners: []
})

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_TOP_BANNERS: {
      return initState.set('topBanners', action.topBanners)
    }
    default: {
      return defaultState
    }
  }
}

export default reducer