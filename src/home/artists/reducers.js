import { SEARCH_ARTISTS } from 'actions'

const INITIAL_STATE = { data: [] }

const artistsReducers = (state = INITIAL_STATE, action) => (
  action.type === SEARCH_ARTISTS
    ? { ...state, data: action.payload.data.artists.items }
    : state
)

export default artistsReducers
