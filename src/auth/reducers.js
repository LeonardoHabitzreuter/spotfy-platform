import { AUTHENTICATE_USER } from 'actions'
import { store } from 'storage'

const TOKEN_KEY = 'AUTH_TOKEN'

const INITIAL_STATE = { userIsAuthenticated: false }

const authReducers = async (state = INITIAL_STATE, action) => {
  if (action.type === AUTHENTICATE_USER) {
    await store(TOKEN_KEY, action.payload)
    return { ...state, userIsAuthenticated: true }
  }

  return state
}

export default authReducers
