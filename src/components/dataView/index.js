import React from 'react'
import classNames from 'classnames'

import DataViewItem from './item'

const DataView = ({ className, children }) => (
  <ul className={classNames('list-group', className)}>
    {children}
  </ul>
)

DataView.Item = DataViewItem
export { DataView }
export default DataView
