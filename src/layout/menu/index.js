import React from 'react'
import { Menu } from 'antd'

import styles from './styles.styl'
import Icon from '../../components/icon'

const reloadPage = ({ key }) => {
  window.location.href = key
}

export default props => (
  <Menu theme='dark' defaultSelectedKeys={[window.location.pathname]} mode='inline' onClick={reloadPage}>
    <Menu.Item className={styles.noWhiteSpace} key='/artists'>
      <Icon className='fas fa-users' />
      <span className='ml-2'>Artists</span>
    </Menu.Item>
    <Menu.Item className={styles.noWhiteSpace} key='/albums'>
      <Icon className='fas fa-images' />
      <span className='ml-2'>Albums</span>
    </Menu.Item>
    <Menu.Item className={styles.noWhiteSpace} key='/tracks'>
      <Icon className='fas fa-music' />
      <span className='ml-2'>Tracks</span>
    </Menu.Item>
  </Menu>
)
