import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'

const App = memo(() => {
  return (
    <div>
      <h2>App</h2>
      <Outlet />
    </div>
  )
})

export default App