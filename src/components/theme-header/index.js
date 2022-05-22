import React, { memo } from 'react'

import { ThemeHeaderWrapper } from './style'

const index = memo(props => {
  const { title, keywords = [] } = props

  return (
    <ThemeHeaderWrapper className='sprite_02'>
      <h3 className='title'>{title}</h3>
      {
        keywords.map((item, index) => (
          <div className='keyword' key={item}>
            <a href='/#'>{item}</a>
            {index !== keywords.length - 1 && <span className='divider'>|</span>}
          </div>
        ))
      }
      <div className='more'>
        <a href='/#'>更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </ThemeHeaderWrapper>
  )
})

export default index