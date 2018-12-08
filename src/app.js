import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home, { Artists, Albums, Tracks } from './home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => (
        <Home {...props} />
      )} />
      <Route path='/artists' render={props => (
        <Artists {...props} />
      )} />
      <Route path='/albums' render={props => (
        <Albums {...props} />
      )} />
      <Route path='/tracks' render={props => (
        <Tracks {...props} />
      )} />
    </Switch>
  </BrowserRouter>
)

export default App
