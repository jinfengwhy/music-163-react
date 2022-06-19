import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import { TopBannersWrapper, BannerLeft, BannerRight, BannerControl } from './style'

const index = memo(() => {
  // state
  const [curIndex, setCurIndex] = useState(0)

  // 组件和redux关联：获取数据和进行操作  
  const { topBanners = [] } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()
  
  // 其它hooks
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])
  const bannerRef = useRef()

  const beforeChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurIndex(to)
    })
  }, [])

  // 其它逻辑
  const bgImage = topBanners[curIndex] && (topBanners[curIndex]?.imageUrl + '?imageView&blur=40x20') 
  
  return (
    <TopBannersWrapper className='top-banners-wrapper' bgImage={bgImage}>
      <div className='wrap-v2 banner-content'>
        <BannerLeft className='banner-left'>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={beforeChange}>
            {
              topBanners.map(item => (
                <div className='banner-item' key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              ))
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a target="_blank" href="https://music.163.com/#/download" rel='noreferrer'>下载客户端</a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button className='btn btnl' onClick={e => bannerRef.current.prev()}></button>
          <button className='btn btnr' onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </TopBannersWrapper>
  )
})

export default index