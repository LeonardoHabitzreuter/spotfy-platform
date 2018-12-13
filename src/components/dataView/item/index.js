import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Icon } from 'components'
import styles from './styles.styl'

const Image = ({ imageSrc }) => imageSrc
  ? <img className={classNames('mb-3', styles.toggleVisibility)} src={imageSrc} alt={imageSrc} />
  : <Icon className={classNames('far fa-file-image fa-10x', styles.toggleVisibility)} />

const DataViewItem = ({ name, imageSrc, children, className }) => {
  return (
    <li className={classNames('list-group-item', className)}>
      <h3>
        {name}
      </h3>
      <div className='d-xs-flex text-sm-center text-xl-left'>
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
