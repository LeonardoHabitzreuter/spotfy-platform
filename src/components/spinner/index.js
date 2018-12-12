import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.styl'

const Spinner = ({ loading }) => (
  <div className={classNames(styles.wrapper, { 'd-none': !loading })}>
    <div className={styles.overlay} />
    <div className={styles.spinner} />
  </div>
)

Spinner.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default Spinner
