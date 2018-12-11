import React, { Fragment } from 'react'
import { head } from 'ramda'
import classNames from 'classnames'

const DataItem = ({ id, name, images, children }) => {
  const firstImage = head(images)

  return (
    <Fragment>
      <li key={id} className='list-group-item'>
        <div>
          <h3>
            {name}
          </h3>
          {
            firstImage && <img src={firstImage.url} alt={firstImage.url} />
          }
        </div>
        {children}
      </li>
      <hr />
    </Fragment>
  )
}

const DataView = ({ items, children, className }) => (
  <ul className={classNames('list-group', className)}>{
    items.map(item => <DataItem {...item} children={children} />)
  }</ul>
)

export default DataView
