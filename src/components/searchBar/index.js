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

  onClick () {
    this.props.onSearch(this.state.value)
  }

  render () {
    return (
      <div className={classNames('input-group', this.props.className)}>
        <div className={classNames('input-group-prepend', styles.clickable)}>
          <span className='input-group-text'>
            <Icon id='icon' className='fas fa-search' onClick={() => this.onClick()} />
          </span>
        </div>
        <input
          autoFocus
          id='input'
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
  className: PropTypes.string,
  onSearch: PropTypes.func
}

SearchBar.defaultProps = {
  onSearch: () => {}
}

export default SearchBar
