import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ className, onClick }) => <i className={className} onClick={onClick} />

Icon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Icon
