import styled from 'styled-components'

export const ThemeHeaderWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  border-bottom: 2px solid #c10d0c;

  background-position: -225px -156px;
  display: flex;
  align-items: center;

  .title {
    font-size: 20px;
    margin-right: 20px;
  }

  .keyword {
    .divider {
      margin: 0 15px;
      color: #ccc;
    }
  }

  .more {
    margin-left: auto;
    display: flex;
    align-items: center;

    .icon {
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
  
`