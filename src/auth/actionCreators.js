import { AUTHENTICATE_USER } from 'actions'

export const authenticate = token => ({
  type: AUTHENTICATE_USER,
  payload: token
})
