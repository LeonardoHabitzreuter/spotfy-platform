import { pipe } from 'ramda'

import { SEARCH_ARTISTS, TOGGLE_ARTISTS_LOADING } from 'actions'

const INITIAL_STATE = { data: [], loading: false }

const search = next => (state, action) => action.type === SEARCH_ARTISTS
  ? { ...state, data: action.payload.data.artists.items, loading: false }
  : next(state, action)

const toggleLoading = next => (state, action) => action.type === TOGGLE_ARTISTS_LOADING
  ? { ...state, loading: !state.loading }
  : next(state, action)

const artistsReducers = pipe(
  search,
  toggleLoading
)(state => state || INITIAL_STATE)

export default artistsReducers
