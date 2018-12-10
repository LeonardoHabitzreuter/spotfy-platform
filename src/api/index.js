import Axios from 'axios'
import qs from 'qs'

import { get as getFromLocalStorage } from 'storage'

const BASE_API_URL = 'https://api.spotify.com/v1'
const TOKEN = 'AUTH_TOKEN'

const createAxiosInstance = () => (
  Axios.create({
    baseURL: BASE_API_URL,
    timeout: 180000,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
)

const axiosBeforeRequest = instance => {
  instance.interceptors.request.use(async config => {
    config.headers = config.headers || {}

    const accessToken = await getFromLocalStorage(TOKEN)

    config.headers.common['Authorization'] = `Bearer ${accessToken}`

    return config
  }, (error) => {
    return Promise.reject(error)
  })
}

const api = () => {
  const axiosInstance = createAxiosInstance()

  axiosBeforeRequest(axiosInstance)

  return {
    get: (url, params) => {
      const query = qs.stringify(params)
      return axiosInstance.get(`/${url}?${query}`)
    },
    post: (url, data) => axiosInstance.post(`/${url}`, data),
    delete: url => axiosInstance.delete(`/${url}`),
    put: (url, data) => axiosInstance.put(`/${url}`, data),
    patch: (url, data) => axiosInstance.patch(`/${url}`, data)
  }
}

export urls from './urls'
export default api()
