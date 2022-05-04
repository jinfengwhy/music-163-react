import styled from 'styled-components'

const AppHeaderWrapper = styled.div`
  font-size: 14px;
  background: #242424;

  .content {
    display: flex;
    justify-content: space-between;
    height: 70px;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

const AppHeaderLeft = styled.div`
  display: flex;

  a.logo {
    display: block;
    width: 157px;
    height: 69px;
    padding-right: 20px;
    text-indent: -9999px;
    box-sizing: content-box;
    background-position: 0 0;
  }

  .select-list {
    display: flex;

    line-height: 70px;

    .select-item {
      a {
        position: relative;

        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      &:last-child a::after {
        position: absolute;
        top: 20px;
        right: -15px;
        content: "";
        width: 28px;
        height: 19px;
        background: url(${require("@/assets/img/sprite_01.png")}) no-repeat -190px 0;
      }

      a.active .icon {
        position: absolute;
        left: 50%;
        bottom: -1px;
        transform: translate(-50%, 0);

        display: inline-block;
        width: 12px;
        height: 7px;

        background-position: -226px 0;
      }
    }
  }
`

const AppHeaderRight = styled.div`
  display: flex;
  padding-top: 19px;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input::placeholder {
      font-size: 12px;
    }
  }

  .ceator-center {
    width: 90px;
    height: 32px;
    margin-left: 16px;
    box-sizing: border-box;
    border: 1px solid #4F4F4F;
    line-height: 32px;
    color: #ccc;
    border-radius: 20px;
    text-align: center;

    &:hover {
      color: #fff;
      text-decoration: none;
      border: 1px solid #ccc;
    }
  }

  .login {
    width: 28px;
    margin-top: 7px;
    color: #787878;
    margin-left: 19px;
    margin-right: 42px;

    &:hover {
      color: #999
    }
  }
`

export {
  AppHeaderWrapper,
  AppHeaderLeft,
  AppHeaderRight
}