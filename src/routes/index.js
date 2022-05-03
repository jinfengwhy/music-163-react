import * as React from "react";
import { useRoutes } from "react-router-dom";

import App from '@/App';
import Discover from 'views/discover'
import My from 'views/my'
import Friend from 'views/friend'

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'discover',
        element: <Discover />
      },
      {
        path: 'my',
        element: <My />
      },
      {
        path: 'friend',
        element: <Friend />
      }
    ]
  }
]

function Root() {
  return useRoutes(routes)
}

export default Root