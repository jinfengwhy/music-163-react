import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongRankAction } from '../../store/actionCreators'
import { 
  ID_TOP_SONG_RANK,
  ID_NEW_SONG_RANK,
  ID_ORIGINAL_SONG_RANK
} from '../../store/constants'

const index = memo(() => {
  // redux hooks
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getSongRankAction(ID_TOP_SONG_RANK))
    dispatch(getSongRankAction(ID_NEW_SONG_RANK))
    dispatch(getSongRankAction(ID_ORIGINAL_SONG_RANK))
  }, [dispatch])

  return (
    <div>index</div>
  )
})

export default index