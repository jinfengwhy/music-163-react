import React, { memo } from 'react'
import { useRoutes } from "react-router-dom";

import { routes } from '@/routes'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayBar from 'views/play/app-play-bar';

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      {useRoutes(routes)}
      <AppFooter />
      <AppPlayBar />
    </div>
  )
})

export default App