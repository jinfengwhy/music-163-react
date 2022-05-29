import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import ThemeHeader from '@/components/theme-header'
import AlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'

const index = memo(() => {
  // redux hooks
  const { newAlbums = [] } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  return (
    <NewAlbumWrapper className='new-album-wrapper'>
      <ThemeHeader title="新碟上架" />
      <div className="content">
        <button class="arrow arrow-left sprite_02" onClick={e => pageRef.current.prev()}></button>
        <div className="list">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(idx => (
                <div className='page' key={idx}>
                  {
                    newAlbums.slice(idx * 5, (idx + 1) * 5).map(item => (
                      <AlbumCover 
                        key={item.id}
                        info={item}
                        size={100}
                        width={118}
                      />
                    ))
                  }
                </div>
              ))
            }
          </Carousel>
        </div>
        <button class="arrow arrow-right sprite_02" onClick={e => pageRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})

export default index