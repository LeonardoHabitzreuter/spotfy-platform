import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from 'layout'
import Home, { Artists, Albums, Tracks } from './home'
import { PrivateRoute } from './auth'
import './styles.styl'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => (
        <Layout>
          <Home {...props} />
        </Layout>
      )} />
      <PrivateRoute path='/artists' component={Artists} />
      <PrivateRoute path='/albums' component={Albums} />
      <PrivateRoute path='/tracks' component={Tracks} />
    </Switch>
  </BrowserRouter>
)

export default App
