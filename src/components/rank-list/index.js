import React, { memo } from 'react'
import { useDispatch } from 'react-redux';

import { getSizeImg } from '@/utils/format-utils'
import { getCurSongDetailAction } from '@/views/play/store'

import { RankListWrapper } from './style'

const index = memo(props => {
  // props and state
  const { info = {} } = props;
  const { tracks = [] } = info;

  // redux hook
  const dispatch = useDispatch()

  // handle function
  const playSong = songId => {
    dispatch(getCurSongDetailAction(songId))
  }

  return (
    <RankListWrapper className='rank-list-wrapper'>
      <div className="header">
        <div className="image">
          <img src={getSizeImg(info.coverImgUrl)} alt="" />
          <a href="/#" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/#">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e => playSong(item?.id)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/#">查看全部 &gt;</a>
      </div>
    </RankListWrapper>
  )
})

export default index