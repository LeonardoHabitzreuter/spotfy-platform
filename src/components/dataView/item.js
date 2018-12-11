import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Icon } from 'components'

const Image = ({ imageSrc }) => imageSrc
  ? <img src={imageSrc} alt={imageSrc} />
  : <Icon className='far fa-file-image fa-10x' />

const DataViewItem = ({ name, imageSrc, children, className }) => {
  return (
    <Fragment>
      <li className={classNames('list-group-item', className)}>
        <div>
          <h3>
            {name}
          </h3>
          <Image imageSrc={imageSrc} />
        </div>
        {children}
      </li>
    </Fragment>
  )
}

DataViewItem.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string
}

export default DataViewItem
