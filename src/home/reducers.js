import { TEST } from 'actions'

export const homeReducer = (state = {}, action) => {
  if (action.type === TEST) {
    console.log(action.payload.data)
  }

  return state
}

export default homeReducer
