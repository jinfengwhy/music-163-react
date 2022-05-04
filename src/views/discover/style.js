import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  
  .top {
    height: 30px;
    box-sizing: border-box;
    background-color: #C20C0C;

    .nav {
      display: flex;
      line-height: 29px;
      padding-left: 180px;
      box-sizing: border-box;

      .item a {
        position: relative;
        display: block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 2px 17px 0;
        color: #fff;
        border-radius: 20px;

        &:hover, &.active {
          background: #9B0909;
          color: #fff;
          text-decoration: none;
        }

        .icon {
          position: absolute;
          top: 2px;

          width: 8px;
          height: 8px;
          background-image: url(${require("@/assets/img/white-r-icon@3x.png")});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 0 0;
        }
      }
    }
  }
`