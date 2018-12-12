import { SEARCH_ARTISTS, TOGGLE_ARTISTS_LOADING } from 'actions'
import api, { urls } from 'api'

export const searchArtists = param => dispatch => {
  dispatch({
    type: TOGGLE_ARTISTS_LOADING
  })

  dispatch({
    type: SEARCH_ARTISTS,
    payload: api.get(urls.SEARCH, { type: 'artist', q: param })
  })
}
