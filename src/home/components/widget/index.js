import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const reloadPage = key => {
  window.location.href = key
}

export const Widget = ({ id, title, text, children, className }) => (
  <article className={classNames('jumbotron', 'jumbotron-fluid', className)} onClick={() => reloadPage(id)}>
    {children}
    <h1 id='title' className='display-4'>{title}</h1>
    <p id='text' className='lead'>{text}</p>
  </article>
)

Widget.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}

export default Widget
