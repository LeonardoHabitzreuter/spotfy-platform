import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'components'

const Image = imageSrc => imageSrc
  ? <img src={imageSrc} alt={imageSrc} />
  : <Icon className='far fa-file-image fa-10x' />

const DataViewItem = ({ id, name, imageSrc, children }) => {
  return (
    <Fragment>
      <li key={id} className='list-group-item'>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  imageSrc: PropTypes.string
}

export default DataViewItem
