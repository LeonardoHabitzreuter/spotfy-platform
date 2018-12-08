import React from 'react'
import { hot } from 'react-hot-loader'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './app'
import reducers from './reducers'

const store = applyMiddleware(thunk, promise)(createStore)(reducers)
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default hot(module)(Root)
