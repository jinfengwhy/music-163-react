import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0 20px 0;

  .cover-top {
    position: relative;
    
    img {
      width: 140px;
      height: 140px;
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      height: 27px;
      align-items: center;
      padding: 0 10px;
      color: #ccc;

      background-position: 0 -537px;

      .headset {
        margin-right: 5px;
        width: 14px;
        height: 11px;

        background-position: 0 -24px;
      }

      .play {
        width: 16px;
        height: 17px;
        margin-left: auto;

        background-position: 0 0;
        text-indent: -9999px;

        &:hover {
          background-position: 0 -60px;
        }
      }
    }
  }

  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
`