import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannersAction } from './store/actionCreators'

const index = memo(props => {
  // shallowEqual 浅层比较
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  return (
    <div>
      <h2>Recommend: {topBanners.length}</h2>
    </div>
  )
})

export default index
