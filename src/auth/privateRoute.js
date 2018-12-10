import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { authenticate } from './actionCreators'
import Layout from 'layout'
import { urls } from 'api'

const CLIENT_ID = '51168e77f213473e94af389e3e281f9e'

export class PrivateRoute extends PureComponent {
  componentWillMount () {
    if (!this.props.userIsAuthenticated) {
      if (!window.location.hash) {
        window.location = `${urls.AUTHORIZE}?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${window.location.href}`
      } else {
        this.props.authenticate(window.location.hash)
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

const mapStateToProps = state => ({ userIsAuthenticated: state.userIsAuthenticated })
const mapDispatchToProps = dispatch => bindActionCreators({ authenticate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
