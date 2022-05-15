import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannersAction } from './store/actionCreators'

const index = memo(props => {
  const { getTopBanners, topBanners } = props

  useEffect(() => {
    getTopBanners()
  }, [getTopBanners])

  return (
    <div>
      <h2>Recommend: {topBanners.length}</h2>
    </div>
  )
})

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getTopBanners() {
    dispatch(getTopBannersAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(index)