import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Icon } from 'components'

const Image = ({ imageSrc }) => imageSrc
  ? <img src={imageSrc} alt={imageSrc} />
  : <Icon className='far fa-file-image fa-10x' />

const DataViewItem = ({ name, imageSrc, children, className }) => {
  return (
    <li className={classNames('list-group-item', className)}>
      <h3 className='text-center'>
        {name}
      </h3>
      <div className='d-sm-flex'>
        <div className='col-12 col-sm-6'>
          <Image imageSrc={imageSrc} />
        </div>
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
