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
