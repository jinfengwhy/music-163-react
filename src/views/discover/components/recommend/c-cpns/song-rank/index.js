import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSongRankAction } from '../../store/actionCreators'
import { 
  ID_TOP_SONG_RANK,
  ID_NEW_SONG_RANK,
  ID_ORIGINAL_SONG_RANK
} from '../../store/constants'

import ThemeHeader from '@/components/theme-header'
import RankList from '@/components/rank-list'
import { SongRankWrapper } from './style'

const index = memo(() => {
  // redux hooks
  const { topSongRank = [], newSongRank = [], originalSongRank = [] } = useSelector(state => ({
    topSongRank: state.getIn(['recommend', 'topSongRank']),
    newSongRank: state.getIn(['recommend', 'newSongRank']),
    originalSongRank: state.getIn(['recommend', 'originalSongRank']),
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getSongRankAction(ID_TOP_SONG_RANK))
    dispatch(getSongRankAction(ID_NEW_SONG_RANK))
    dispatch(getSongRankAction(ID_ORIGINAL_SONG_RANK))
  }, [dispatch])

  return (
    <SongRankWrapper>
      <ThemeHeader title="榜单" />
      <div className='content'>
        <RankList info={topSongRank} />
        <RankList info={newSongRank} />
        <RankList info={originalSongRank} />
      </div>
    </SongRankWrapper>
  )
})

export default index