import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from 'layout'
import Home, { Artists, Albums, Tracks } from './home'
import { PrivateRoute } from './auth'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => (
        <Layout>
          <Home {...props} />
        </Layout>
      )} />
      <Route path='/artists' render={props => (
        <PrivateRoute>
          <Artists {...props} />
        </PrivateRoute>
      )} />
      <Route path='/albums' render={props => (
        <PrivateRoute>
          <Albums {...props} />
        </PrivateRoute>
      )} />
      <Route path='/tracks' render={props => (
        <PrivateRoute>
          <Tracks {...props} />
        </PrivateRoute>
      )} />
    </Switch>
  </BrowserRouter>
)

export default App
