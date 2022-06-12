import * as React from "react";
import { Navigate } from "react-router-dom";

const My = React.lazy(_ => import('views/my'))
const Friend = React.lazy(_ => import('views/friend'))
const Discover = React.lazy(_ => import('views/discover'))
const Recommend = React.lazy(_ => import('views/discover/components/recommend'))
const Toplist = React.lazy(_ => import('views/discover/components/toplist'))
const Playlist = React.lazy(_ => import('views/discover/components/playlist'))
const Artist = React.lazy(_ => import('views/discover/components/artist'))
const Djradio = React.lazy(_ => import('views/discover/components/djradio'))
const Album = React.lazy(_ => import('views/discover/components/album'))

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