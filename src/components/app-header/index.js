import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/common/local-data'

import { AppHeaderWrapper, AppHeaderLeft, AppHeaderRight } from './style'

const index = memo(() => {

  // 业务逻辑
  const showSelectItem = ({link, title}) => {
    if (link.startsWith('https://')) {
      return <a href={link}>{title}</a>
    } else {
      return (
        <NavLink to={link}>
          {title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    }
  }

  return (
    <AppHeaderWrapper className='app-header-wrapper'>
      <div className='wrap-v1 content'>
        <AppHeaderLeft>
          <a className='logo sprite_01' href="/#">网易云音乐</a>
          <ul className='select-list'>
            {
              headerLinks.map(item => (
                <li className='select-item' key={item.link}>
                  {showSelectItem(item)}
                </li>
              ))
            }
          </ul>
        </AppHeaderLeft>
        <AppHeaderRight>
        </AppHeaderRight>
      </div>
      <div className='divider'></div>
    </AppHeaderWrapper>
  )
})

export default index