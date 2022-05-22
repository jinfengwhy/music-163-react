import React, { memo } from 'react'

import { RecommendWrapper } from './style'
import TopBanners from './c-cpns/top-banners'

const index = memo(props => {
  return (
    <RecommendWrapper>
      <TopBanners />
    </RecommendWrapper>
  )
})

export default index
