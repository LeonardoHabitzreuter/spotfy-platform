import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './layout'
import Home, { Artists, Albums, Tracks } from './home'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => (
        <Layout>
          <Home {...props} />
        </Layout>
      )} />
      <Route path='/artists' render={props => (
        <Layout>
          <Artists {...props} />
        </Layout>
      )} />
      <Route path='/albums' render={props => (
        <Layout>
          <Albums {...props} />
        </Layout>
      )} />
      <Route path='/tracks' render={props => (
        <Layout>
          <Tracks {...props} />
        </Layout>
      )} />
    </Switch>
  </BrowserRouter>
)

export default App
