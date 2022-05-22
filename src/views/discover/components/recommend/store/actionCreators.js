import * as actionType from './constants'
import { getTopBanners, getHotRecommends } from '@/service/modules/recommend'

export const changeTopBanners = res => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const changeHotRecommends = res => ({
  type: actionType.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result
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