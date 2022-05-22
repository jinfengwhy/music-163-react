import React, { memo } from 'react'

import { RecommendContent, RecommendLeft, RecommendRight, RecommendWrapper } from './style'
import TopBanners from './c-cpns/top-banners'
import ThemeHeader from '@/components/theme-header'

const index = memo(props => {
  return (
    <RecommendWrapper className='wrap-v1-min'>
      <TopBanners />
      <RecommendContent className='wrap-v2'>
        <RecommendLeft>
          <ThemeHeader title="热门推荐" 
            keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
          />
        </RecommendLeft>
        <RecommendRight>
        </RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  )
})

export default index
