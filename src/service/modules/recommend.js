import request from '../request'

export const getTopBanners = () => {
  return request.get('/banner')
}

export const getHotRecommends = limit => {
  return request.get('/personalized', {
    params: {
      limit
    }
  })
}

export const getNewAlbums = limit => {
  return request.get('/top/album', {
    params: {
      limit
    }
  })
}

export const getSongRank = id => {
  return request.get(`https://coderwhy-music.vercel.app/playlist/detail?id=${id}`)
}
