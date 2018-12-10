import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { pipe, split, slice, head } from 'ramda'

import Layout from 'layout'
import { urls } from 'api'
import { store, get } from 'storage'

const TOKEN_KEY = 'AUTH_TOKEN'
const CLIENT_ID = '51168e77f213473e94af389e3e281f9e'

export class PrivateRoute extends PureComponent {
  async componentWillMount () {
    const token = await get(TOKEN_KEY)

    if (!token) {
      if (!window.location.hash) {
        window.location = `${urls.AUTHORIZE}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${window.location.href}`
      } else {
        const token = pipe(
          split('='),
          slice(1, 2),
          head,
          split('&'),
          head
        )(window.location.hash)

        store(TOKEN_KEY, token)
      }
    }
  }

  render () {
    const { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )} />
    )
  }
}

export default PrivateRoute
