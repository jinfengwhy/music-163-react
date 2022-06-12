import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import { LyricShowWrapper } from './style'

const index = memo(() => {
  // redux hooks
  const { songLyricList, songLyricIndex } = useSelector(state => ({
    songLyricList: state.getIn(['play', 'songLyricList']),
    songLyricIndex: state.getIn(['play', 'songLyricIndex']),
  }), shallowEqual)

  // other handle
  const showLyricText = i => songLyricList[i] ? songLyricList[i].content : ''

  return (
    <LyricShowWrapper>
      <div className='item'>{showLyricText(songLyricIndex - 1)}</div>
      <div className='item active'>{showLyricText(songLyricIndex)}</div>
      <div className='item'>{showLyricText(songLyricIndex + 1)}</div>
    </LyricShowWrapper>
  )
})

export default index