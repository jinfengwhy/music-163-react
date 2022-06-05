import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImg, formatMinuteSecond, getSongPlayUrl } from '@/utils/format-utils'
import { PLAYMODE_SHUFFLE, PLAYMODE_ONE } from '@/common/constants'
import { getCurSongDetailAction, getNextPlaymode } from '../store/actionCreators'

import { Slider } from 'antd';
import { 
  AppPlayBarWrapper,
  ControlWrapper,
  PlayInfoWrapper,
  OperatorWrapper
} from './style'

const index = memo(() => {
  // props and state
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDraging, setIsDraging] = useState(false)
  const [curTime, setCurTime] = useState(0) // 毫秒
  const [progress, setProgress] = useState(0) // 0~100

  // redux hooks
  const { curSongDetail = {}, playlist = [], playmode } = useSelector(state => ({
    curSongDetail: state.getIn(['play', 'curSongDetail']),
    playlist: state.getIn(['play', 'playlist']),
    playmode: state.getIn(['play', 'playmode'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getCurSongDetailAction(29450091)) // 小宝贝
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getSongPlayUrl(curSongDetail.id)
    audioRef.current.play().then(() => {
      console.log(`---setIsPlaying: true`);
      setIsPlaying(true)
    }).catch(err => {
      console.log(`---setIsPlaying: false ${err}`);
      setIsPlaying(false)
    })
  }, [curSongDetail])

  // other handle
  const showImgSrc = getSizeImg(curSongDetail?.al?.picUrl, 34)
  const songName = curSongDetail?.name, 
    songAuthor = curSongDetail?.ar && curSongDetail?.ar[0].name,
    showCurTime  = formatMinuteSecond(curTime), 
    totalTime = curSongDetail?.dt, // 毫秒
    showTotalTime = totalTime  ? formatMinuteSecond(totalTime) : '',
    playmodeClass = playmode === PLAYMODE_SHUFFLE ? 'shuffle' : 
      playmode === PLAYMODE_ONE ? 'one' : 'loop' 

  // handle function
  const playSong = e => {
    e.preventDefault()
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }

  const onTimeUpdate = e => {
    const curTime = e.target.currentTime * 1000
    if (!isDraging) {
      setCurTime(curTime)
      setProgress(curTime / totalTime * 100)
    }
  }

  const onEnded = () => {
    setIsPlaying(false)
  }

  const onChangePlaymode = e => {
    e.preventDefault()
    dispatch(getNextPlaymode())
  }

  const onSliderChange = useCallback(value => {
    setIsDraging(true)
    setProgress(value)
    setCurTime(value / 100 * totalTime)
  }, [totalTime])

  const onSliderAfterChange = useCallback(value => {
    const curTime = value / 100 * totalTime
    audioRef.current.currentTime = curTime / 1000
    setIsDraging(false)
  }, [audioRef, totalTime])

  return (
    <AppPlayBarWrapper className='app-play-bar-wrapper sprite_player'>
      <div className='content wrap-v2'>
        <ControlWrapper className='control-wrapper'>
          <a href='/#' className='sprite_player prev'>prev</a>
          <a href='/#' className={['sprite_player', 'play-pause', isPlaying ? 'pause' : 'play'].join(' ')} onClick={playSong}>play / pause</a>
          <a href='/#' className='sprite_player next'>next</a>
        </ControlWrapper>
        <PlayInfoWrapper className='play-info-wrapper'>
          <a href="/#" className="image">
            <img src={showImgSrc} alt="" />
          </a>
          <div className="info">
            <div className="song">
              <a href='/#' className='name'>{songName}</a>
              <a href='/#' className='sprite_player mv'>mv</a>
              <a href='/#' className='author'>{songAuthor}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={0} value={progress} tipFormatter={null}
                onChange={onSliderChange} onAfterChange={onSliderAfterChange} />
              <div className="time">
                <span className="cur-time">{showCurTime}</span>
                <span className='divider'>|</span>
                <span className="total-time">{showTotalTime}</span>
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
            <a href="/#" className={`sprite_player item ${playmodeClass}`}
              onClick={onChangePlaymode}>loop</a>
            <a href="/#" className='sprite_player item playlist'>
              <span className='length'>{playlist.length}</span>
            </a>
          </div>
        </OperatorWrapper>
        <audio ref={audioRef} className="audio-play" 
          onTimeUpdate={e => onTimeUpdate(e)} 
          onEnded = {e => onEnded()}/>
      </div>
    </AppPlayBarWrapper>
  )
})

export default index