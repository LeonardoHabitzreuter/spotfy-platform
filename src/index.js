import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'

import App from './app'

const RenderApp = hot(module)(() => <App />)

render(
  <RenderApp />,
  document.querySelector('[data-js="app"]')
)
