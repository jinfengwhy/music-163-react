import React, { memo } from 'react'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotRecommendsAction } from '../../store/actionCreators'

import ThemeHeader from '@/components/theme-header'
import { HotRecommendsWrapper } from './style'

const index = memo(() => {
  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])

  return (
    <HotRecommendsWrapper>
      <ThemeHeader title="热门推荐" 
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      {hotRecommends.length}
    </HotRecommendsWrapper>
  )
})

export default index