import { SEARCH_ARTISTS } from 'actions'

const INITIAL_STATE = { artists: [] }

const artistsReducers = (state = INITIAL_STATE, action) => (
  action.type === SEARCH_ARTISTS
    ? { ...state, artists: action.payload }
    : state
)

export default artistsReducers
