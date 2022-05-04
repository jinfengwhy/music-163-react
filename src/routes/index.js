import * as React from "react";
import { Navigate } from "react-router-dom";

import My from 'views/my'
import Friend from 'views/friend'
import Discover from 'views/discover'
import Recommend from 'views/discover/components/recommend'
import Toplist from 'views/discover/components/toplist'
import Playlist from 'views/discover/components/playlist'
import Artist from 'views/discover/components/artist'
import Djradio from 'views/discover/components/djradio'
import Album from 'views/discover/components/album'

// 根路由
const routes = [
  {
    path: '/',
    element: <Navigate to='/discover' replace />,
  },
  {
    path: '/discover/*',
    element: <Discover />,
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

// discover二级路由
const discoverChildren = [
  {
    path: '', 
    element: <Navigate to='recommend' replace />
  },
  {
    path: 'recommend',
    element: <Recommend />
  },
  {
    path: 'toplist',
    element: <Toplist />
  },
  {
    path: 'playlist',
    element: <Playlist />
  },
  {
    path: 'artist',
    element: <Artist />
  },
  {
    path: 'djradio',
    element: <Djradio />
  },
  {
    path: 'album',
    element: <Album />
  },
]

export {
  routes,
  discoverChildren
}