import { Map } from 'immutable'

import { CHANGE_HOT_RECOMMENDS, CHANGE_NEW_ALBUMS, CHANGE_TOP_BANNERS } from "./constants"

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: []
})

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_TOP_BANNERS: {
      return initState.set('topBanners', action.topBanners)
    }
    case CHANGE_HOT_RECOMMENDS: {
      return initState.set('hotRecommends', action.hotRecommends)
    }
    case CHANGE_NEW_ALBUMS: {
      return initState.set('newAlbums', action.newAlbums)
    }
    default: {
      return defaultState
    }
  }
}

export default reducer