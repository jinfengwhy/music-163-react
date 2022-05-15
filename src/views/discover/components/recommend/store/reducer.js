import { CHANGE_TOP_BANNERS } from "./constants"

const defaultState = {
  topBanners: []
}

function reducer(initState = defaultState, action) {
  switch(action.type) {
    case CHANGE_TOP_BANNERS: {
      return {...initState, topBanners: action.topBanners}
    }
    default: {
      return defaultState
    }
  }
}

export default reducer