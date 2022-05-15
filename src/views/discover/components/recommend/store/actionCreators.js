import * as actionType from './constants'
import { getTopBanners } from '@/service/modules/recommend'

export const changeTopBanners = res => ({
  type: actionType.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannersAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBanners(res))
    })
  }
}