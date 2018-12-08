import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export const Widget = ({ title, text, children, className, onClick }) => (
  <article className={classNames('jumbotron', 'jumbotron-fluid', 'px-2', className)}>
    {children}
    <h1 className='display-4'>{title}</h1>
    <p className='lead'>{text}</p>
  </article>
)

Widget.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}

export default Widget
