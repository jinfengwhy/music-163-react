import React, { memo, useEffect } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { getNewAlbumsAction } from '../../store/actionCreators'

import ThemeHeader from '@/components/theme-header'
import { NewAlbumWrapper } from './style'

const index = memo(() => {
  // redux hooks
  const { newAlbums = [] } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  return (
    <NewAlbumWrapper className='new-album-wrapper'>
      <ThemeHeader title="新碟上架" />
    </NewAlbumWrapper>
  )
})

export default index