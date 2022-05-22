import React, { memo } from 'react'

import { RecommendWrapper } from './style'
import TopBanners from './c-cpns/top-banners'

const index = memo(props => {
  return (
    <RecommendWrapper className='wrap-v1-min'>
      <TopBanners />
    </RecommendWrapper>
  )
})

export default index
