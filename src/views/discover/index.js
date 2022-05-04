import React, { memo, useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import { discoverMenu } from '@/common/local-data'

import { DiscoverWrapper } from './style'

const index = memo(props => {

  const navigate = useNavigate()
  useEffect(() => {
    navigate('/discover/recommend')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
      <Outlet />
    </DiscoverWrapper>
  )
})

export default index