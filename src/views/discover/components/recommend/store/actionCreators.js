import * as actionType from './constants'
import { 
  getTopBanners, 
  getHotRecommends, 
  getNewAlbums 
} from '@/service/modules/recommend'

export const changeTopBanners = res => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const changeHotRecommends = res => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
})

export const changeNewAlbums = res => ({
  type: actionType.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}

export const getHotRecommendsAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommends(res))
    })
  }
}

export const getNewAlbumsAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      dispatch(changeNewAlbums(res))
    })
  }
}