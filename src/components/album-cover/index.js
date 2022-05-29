import React, { memo } from 'react'

import { getSizeImg } from '@/utils/format-utils'

import { AlbumCoverWrapper } from './style'

const index = memo(props => {
  const { info, size, width, bgp = '-570px' } = props

  return (
    <AlbumCoverWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImg(info.picUrl, 100)} alt="" />
        <a href='/#' className='cover image_cover'>album-cover</a>
      </div>
      <div className='album-info'>
        <div className="name">{info.name}</div>
        <div className="artist">{info.artists[0]?.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})

export default index