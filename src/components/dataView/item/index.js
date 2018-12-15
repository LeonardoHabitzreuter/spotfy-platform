import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const DataViewItem = ({ name, children, className }) => {
  return (
    <li className={classNames('list-group-item', className)}>
      <h3>
        {name}
      </h3>
      <div className='d-xs-flex text-sm-center text-xl-left'>
        {children}
      </div>
    </li>
  )
}

DataViewItem.propTypes = {
  name: PropTypes.string
}

export default DataViewItem
