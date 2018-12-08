import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'

import Root from './root'

render(
  <Root />,
  document.querySelector('[data-js="app"]')
)
