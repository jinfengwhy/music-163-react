import * as actionType from './constants'
import { 
  getCurSongDetail
} from '@/service/modules/play'

export const changeCurSongDetail = res => ({
  type: actionType.CHANGE_CUR_SONG_DETAIL,
  curSongDetail: res?.songs[0]
})

export const getCurSongDetailAction = ids => {
  return dispatch => {
    getCurSongDetail(ids).then(res => {
      dispatch(changeCurSongDetail(res))
    })
  }
}
