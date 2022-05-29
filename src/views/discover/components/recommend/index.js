import React, { memo } from 'react'

import { RecommendContent, RecommendLeft, RecommendRight, RecommendWrapper } from './style'
import TopBanners from './c-cpns/top-banners'
import HotRecommends from './c-cpns/hot-recommends'
import NewAlbum from './c-cpns/new-album'

const index = memo(props => {
  return (
    <RecommendWrapper className='wrap-v1-min'>
      <TopBanners />
      <RecommendContent className='wrap-v2'>
        <RecommendLeft className='recommend-left'>
          <HotRecommends />
          <NewAlbum />
        </RecommendLeft>
        <RecommendRight className='recommend-right'>
        </RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  )
})

export default index
