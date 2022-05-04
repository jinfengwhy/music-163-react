import React, { memo } from 'react'
import { NavLink, useRoutes } from 'react-router-dom'

import { discoverChildren } from '@/routes'
import { discoverMenu } from '@/common/local-data'

import { DiscoverWrapper } from './style'

const index = memo(props => {
  return (
    <DiscoverWrapper className='discover-wrapper'>
      <div className='top'>
        <ul className='nav wrap-v1'>
          {
            discoverMenu.map((item, index) => (
              <li className='item' key={item.link}>
                <NavLink to={item.link}>
                  {item.title}
                  {index === 2 && <i className='icon'></i>}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      {useRoutes(discoverChildren)}
    </DiscoverWrapper>
  )
})

export default index