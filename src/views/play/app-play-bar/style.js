import styled from 'styled-components'

export const AppPlayBarWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;

    z-index: 99;

    .content {
      height: 47px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
`

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;

  .prev, .next, .play {
    text-indent: -9999px;
  }

  .prev, .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }
  
  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 -204px;

    &:hover {
      background-position: -40px -204px;
    }
  }
`

export const PlayInfoWrapper = styled.div`
  width: 642px;
  
  display: flex;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    height: 45px;
    color: #a1a1a1;
    margin-left: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .song {
      .name {
        max-width: 300px;
        color: #e8e8e8;
      }
      .author {
        max-width: 220px;
        margin-left: 15px;
        color: #9b9b9b;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin: 0 10px 0 0;

        .ant-slider-rail {
          height: 8px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 8px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-step {
          height: 8px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px !important;

          &:focus {
            box-shadow: none;
          }
        }
      }

      .time {
        .cur-time {
          color: #a1a1a1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const OperatorWrapper = styled.div`
    display: flex;

    .item {
      width: 25px;
      height: 25px;
      text-indent: -9999px;
    }

    .left, .right {
      display: flex;
    }

    .right {
      width: 126px;
      padding-left: 13px; 

      background-position: -147px -248px;
    }

    .favor {
      background-position: -88px -163px;

      &:hover {
        background-position: -88px -189px;
      }
    }

    .share {
      background-position: -114px -163px;

      &:hover {
        background-position: -114px -189px;
      }
    }

    .volume {
      background-position: -2px -248px;

      &:hover {
        background-position: -31px -248px;
      }
    }

    .loop {
      background-position: -3px -344px;

      &:hover {
        background-position: -33px -344px;
      }
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;

      &:hover {
        background-position: -42px -98px;
      }
    }
`