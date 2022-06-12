import styled from 'styled-components'

export const LyricShowWrapper = styled.div`
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);

  width: 300px;
  border-radius: 10px;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  font-size: 14px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .item {
    padding: 5px 0;
  }

  .active {
    color: #31c27c;
  }
`