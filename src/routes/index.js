import * as React from "react";
import { Navigate } from "react-router-dom";

import Discover from 'views/discover'
import My from 'views/my'
import Friend from 'views/friend'

const routes = [
  {
    path: '/',
    element: <Navigate to='/discover' replace />,
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/friend',
    element: <Friend />
  }
]

export default routes