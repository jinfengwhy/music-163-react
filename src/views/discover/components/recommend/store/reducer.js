import { Map } from 'immutable'

import { 
  CHANGE_HOT_RECOMMENDS, 
  CHANGE_NEW_ALBUMS, 
  CHANGE_TOP_BANNERS,
  CHANGE_TOP_SONG_RANK,
  CHANGE_NEW_SONG_RANK,
  CHANGE_ORIGINAL_SONG_RANK
} from "./constants"

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topSongRank: {},
  newSongRank: {},
  originalSongRank: {}
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
    case CHANGE_TOP_SONG_RANK: {
      return initState.set('topSongRank', action.topSongRank)
    }
    case CHANGE_NEW_SONG_RANK: {
      return initState.set('newSongRank', action.newSongRank)
    }
    case CHANGE_ORIGINAL_SONG_RANK: {
      return initState.set('originalSongRank', action.originalSongRank)
    }
    default: {
      return defaultState
    }
  }
}

export default reducer