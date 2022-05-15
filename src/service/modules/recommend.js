import request from '../request'

export const getTopBanners = () => {
  return request.get('/banner')
}
