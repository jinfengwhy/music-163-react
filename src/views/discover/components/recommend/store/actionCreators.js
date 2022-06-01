import * as actionType from './constants'
import { 
  getTopBanners, 
  getHotRecommends, 
  getNewAlbums,
  getSongRank 
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

const songRank = (res, num) => res.playlist.tracks.slice(0, num)

export const changeTopSongRank = res => ({
  type: actionType.CHANGE_TOP_SONG_RANK,
  topSongRank: songRank(res, 10)
})

export const changeNewSongRank = res => ({
  type: actionType.CHANGE_NEW_SONG_RANK,
  newSongRank: songRank(res, 10)
})

export const changeOriginalSongRank = res => ({
  type: actionType.CHANGE_ORIGINAL_SONG_RANK,
  originalSongRank: songRank(res, 10)
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

export const getSongRankAction = id => {
  return dispatch => {
    getSongRank(id).then(res => {
      switch(id) {
        case actionType.ID_TOP_SONG_RANK:
          dispatch(changeTopSongRank(res));
          break;
        case actionType.ID_NEW_SONG_RANK:
          dispatch(changeNewSongRank(res));
          break;
        case actionType.ID_ORIGINAL_SONG_RANK:
          dispatch(changeOriginalSongRank(res));
          break;
        default:
      }
    })
  }
}