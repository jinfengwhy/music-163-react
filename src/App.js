import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from '@/components/app-header'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <Outlet />
    </div>
  )
})

export default App