import React, { memo } from 'react'

import Routes from '@/routes'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <Routes />
      <AppFooter />
    </div>
  )
})

export default App