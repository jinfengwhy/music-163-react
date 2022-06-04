import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImg, formatMinuteSecond } from '@/utils/format-utils'
import { getCurSongDetailAction } from '../store/actionCreators'

import { Slider } from 'antd';
import { 
  AppPlayBarWrapper,
  ControlWrapper,
  PlayInfoWrapper,
  OperatorWrapper
} from './style'

const index = memo(() => {
  // props and state

  // redux hooks
  const { curSongDetail = {} } = useSelector(state => ({
    curSongDetail: state.getIn(['play', 'curSongDetail'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getCurSongDetailAction(29450091))
  }, [dispatch])

  // other handle
  const showImgSrc = getSizeImg(curSongDetail?.al?.picUrl, 34)
  const songName = curSongDetail?.name, songAuthor = curSongDetail?.ar[0].name,
    curTime = '00:00', totalTime = formatMinuteSecond(curSongDetail.dt)

  return (
    <AppPlayBarWrapper className='app-play-bar-wrapper sprite_player'>
      <div className='content wrap-v2'>
        <ControlWrapper className='control-wrapper'>
          <a href='/#' className='sprite_player prev'>prev</a>
          <a href='/#' className='sprite_player play'>play</a>
          <a href='/#' className='sprite_player next'>next</a>
        </ControlWrapper>
        <PlayInfoWrapper className='play-info-wrapper'>
          <a href="/#" className="image">
            <img src={showImgSrc} alt="" />
          </a>
          <div className="info">
            <div className="song">
              <a href='/#' className='name'>{songName}</a>
              <a href='/#' className='author'>{songAuthor}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={0} tipFormatter={null} />
              <div className="time">
                <span className="cur-time">{curTime}</span>
                <span className='divider'>|</span>
                <span className="total-time">{totalTime}</span>
              </div>
            </div>
          </div>
        </PlayInfoWrapper>
        <OperatorWrapper className='operator-wrapper'>
          <div className="left">
            <a href="/#" className='sprite_player item favor'>favor</a>
            <a href="/#" className='sprite_player item share'>share</a>
          </div>
          <div className="right sprite_player">
            <a href="/#" className='sprite_player item volume'>volume</a>
            <a href="/#" className='sprite_player item loop'>loop</a>
            <a href="/#" className='sprite_player item playlist'>playlist</a>
          </div>
        </OperatorWrapper>
      </div>
    </AppPlayBarWrapper>
  )
})

export default index