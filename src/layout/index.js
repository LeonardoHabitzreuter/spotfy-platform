import React, { Component } from 'react'
import classNames from 'classnames'
import { Layout as AntLayout, Breadcrumb } from 'antd'

import styles from './styles.styl'
import Menu from './menu'
import Icon from '../components/icon'

const Content = AntLayout.Content
const Footer = AntLayout.Footer
const Sider = AntLayout.Sider

const breadcrumbsByURL = [{
  url: '/',
  breadcrumb: 'Home'
}, {
  url: '/artists',
  breadcrumb: 'Artists'
}, {
  url: '/albums',
  breadcrumb: 'Albums'
}, {
  url: '/tracks',
  breadcrumb: 'Tracks'
}]

export default class Layout extends Component {
  state = {
    collapsed: false
  }

  onCollapse (collapsed) {
    this.setState({ collapsed })
  }

  render () {
    return (
      <AntLayout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={value => this.onCollapse(value)}
        >
          <div className='logo'>
            <a href='/'><Icon className={classNames('fab fa-spotify', 'text-success', 'm-2', styles.logo)} /></a>
          </div>
          <Menu />
        </Sider>
        <AntLayout>
          <Content className='mx-3'>
            <Breadcrumb className='my-3'>{
              <Breadcrumb.Item>
                <p className={styles.breadcrumbSize}>
                  {breadcrumbsByURL
                    .find(element => element.url === window.location.pathname)
                    .breadcrumb}
                </p>
              </Breadcrumb.Item>
            }</Breadcrumb>
            <div className='bg-white p-4' style={{ minHeight: '85vh' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer className='text-center'>
            Spotfy platform! ©2018 Creted by Leonardo Habitzreuter
          </Footer>
        </AntLayout>
      </AntLayout>
    )
  }
}
