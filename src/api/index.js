import Axios from 'axios'
import qs from 'qs'

import { store as saveOnLocalStorage, get as getFromLocalStorage } from 'storage'

const BASE_API_URL = 'https://api.spotify.com/v1'
const TOKEN = 'TOKEN'
const AUTH_URL = 'https://accounts.spotify.com/api/token'
const CLIENT_ID = '51168e77f213473e94af389e3e281f9e'
const CLIENT_SECRET = '2006365f7bc44754a77b6df0bf16bd62'

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

    const accessToken = await getFromLocalStorage(TOKEN) || await authenticate()

    config.headers.common['Authorization'] = `Bearer ${accessToken}`

    return config
  }, (error) => {
    return Promise.reject(error)
  })
}

const authenticate = () => (
  Axios
    .post(
      AUTH_URL,
      undefined,
      {
        params: { grant_type: 'client_credentials' },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${getClientData()}`
        }
      }
    )
    .then(response => {
      saveOnLocalStorage(TOKEN, response.data.access_token)
      return response
    })
)

const getClientData = () => Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

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

export default api()
