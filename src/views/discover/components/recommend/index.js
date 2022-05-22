import React, { memo } from 'react'

import { RecommendContent, RecommendLeft, RecommendRight, RecommendWrapper } from './style'
import TopBanners from './c-cpns/top-banners'
import HotRecommends from './c-cpns/hot-recommends'

const index = memo(props => {
  return (
    <RecommendWrapper className='wrap-v1-min'>
      <TopBanners />
      <RecommendContent className='wrap-v2'>
        <RecommendLeft>
          <HotRecommends />
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  )
})

export default index
