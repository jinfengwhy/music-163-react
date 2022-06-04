import React, { memo } from 'react'

import { getSizeImg } from '@/utils/format-utils'

import { Slider } from 'antd';
import { 
  AppPlayBarWrapper,
  ControlWrapper,
  PlayInfoWrapper,
  OperatorWrapper
} from './style'

const index = memo(() => {
  const imgSrc = 'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg'
  const showImgSrc = getSizeImg(imgSrc, 34)
  const songName = '雅俗共赏', songAuthor = '许嵩', curTime = '01:17', totalTime = '04:01'

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