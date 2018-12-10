import { SEARCH_ARTISTS } from 'actions'
import api, { urls } from 'api'

export const searchArtists = param => ({
  type: SEARCH_ARTISTS,
  payload: api.get(urls.ARTISTS)
})
