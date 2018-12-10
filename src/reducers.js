import { combineReducers } from 'redux'

import { artistsReducers } from './home'

const rootReducer = combineReducers({
  artists: artistsReducers
})

export default rootReducer
