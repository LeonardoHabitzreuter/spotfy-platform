const INITIAL_STATE = { test: 'test' }

export const homeReducer = (state = INITIAL_STATE, action) => (
  action.type === 'BILLING_SUMMARY_FETCHED'
    ? { ...state, actionData: action.payload.data }
    : state
)

export default homeReducer
