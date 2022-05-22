import { Map } from 'immutable'

import { CHANGE_HOT_RECOMMENDS, CHANGE_TOP_BANNERS } from "./constants"

const defaultState = Map({
  topBanners: [],
  hotRecommends: []
})

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_TOP_BANNERS: {
      return initState.set('topBanners', action.topBanners)
    }
    case CHANGE_HOT_RECOMMENDS: {
      return initState.set('hotRecommends', action.hotRecommends)
    }
    default: {
      return defaultState
    }
  }
}

export default reducer