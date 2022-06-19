import styled from 'styled-components'

export const TopBannersWrapper = styled.div`
  background: url(${props => props.bgImage}) no-repeat center/6000px;

  .banner-content {
    position: relative;
    height: 285px;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  img {
    width: 730px;
    height: 285px;
  }

  .ant-carousel .slick-dots li {
    width: 20px;
    height: 20px;
    background: url(${require("@/assets/img/banner_sprite.png")}) no-repeat 3px -343px;
    
    transition: none;
    cursor: pointer;

    &:hover, &.slick-active {
      background-position: -16px -343px;
    }

    button {
      height: 100%;
      background: transparent;
    }
  }
`

export const BannerRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 250px;
  height: 285px;
  background: url(${require("@/assets/img/download.png")});
  
  a {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    text-indent: -9999px;
    
    &:hover {
      background: url(${require("@/assets/img/download.png")}) no-repeat 0 -290px;
    }
  }

  p {
    margin: 10px 0;
    width: 250px;
    text-align: center;
    color: #8d8d8d;

    position: absolute;
    left: 0;
    bottom: 0;
  }
`

export const BannerControl = styled.div`
  .btn {
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    width: 37px;
    height: 63px;

    background: url(${require("@/assets/img/banner_sprite.png")}) no-repeat 0px 9999px;
    text-indent: -9999px;
    cursor: pointer;

  }
  
  .btnl {
    left: -68px;
    background-position: 0 -360px;
    
    &:hover {
      background-position: 0 -430px;
    }
  }

  .btnr {
    right: -68px;
    background-position: 0 -508px;

    &:hover {
      background-position: 0 -578px;
    }
  }
`