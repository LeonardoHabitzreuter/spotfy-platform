import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Icon } from 'components'
import styles from './styles.styl'

const Image = ({ imageSrc }) => imageSrc
  ? <img className={classNames('mr-xl-3 mb-3', styles.toggleVisibility)} src={imageSrc} alt={imageSrc} />
  : <Icon className='far fa-file-image fa-10x' />

const DataViewItem = ({ name, imageSrc, children, className }) => {
  return (
    <li className={classNames('list-group-item', className)}>
      <h3 className='text-center'>
        {name}
      </h3>
      <div className='d-xs-flex text-center'>
        <Image imageSrc={imageSrc} />
        {children}
      </div>
    </li>
  )
}

DataViewItem.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string
}

export default DataViewItem
