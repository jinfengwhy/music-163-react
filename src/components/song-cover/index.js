import React, { memo } from 'react'

import { getSizeImg, getCount } from '@/utils/format-utils'

import { SongCoverWrapper } from './style'

const index = memo(props => {
  const { item } = props
  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImg(item.picUrl, 140)} alt="" />
        <div className='info sprite_cover'>
          <i className='sprite_icon headset'></i>
          <span>{getCount(item.playCount)}</span>
          <a className='sprite_icon play' href='/#'>play</a>
        </div>
      </div>
      <div className="cover-bottom">{item.name}</div>
    </SongCoverWrapper>
  )
})

export default index