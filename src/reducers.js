import { combineReducers } from 'redux'

import { artistsReducers } from './home'
import authReducers from './auth'

const rootReducer = combineReducers({
  artists: artistsReducers,
  auth: authReducers
})

export default rootReducer
