import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Icon } from 'components'
import styles from './styles.styl'

class SearchBar extends PureComponent {
  state = {
    value: ''
  }

  keyHandler (key) {
    if (key === 'Enter') {
      this.props.onSearch(this.state.value)
    }
  }

  changeValue (value) {
    this.setState({ value })
  }

  render () {
    return (
      <div className={classNames('input-group', this.props.className)}>
        <div className='input-group-prepend'>
          <span className='input-group-text'>
            <Icon className='fas fa-search' />
          </span>
        </div>
        <input
          onKeyUp={e => this.keyHandler(e.key)}
          className={classNames('form-control', styles.searchInput)}
          type='text'
          value={this.props.value}
          placeholder={this.props.placeholder}
          onChange={e => this.changeValue(e.target.value)}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  action: PropTypes.string,
  className: PropTypes.string,
  onSearch: PropTypes.func
}

SearchBar.defaultProps = {
  onSearch: () => {}
}

export default SearchBar
